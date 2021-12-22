import { createRevGeocoder } from "../geocoding/index";
import {
  dispatch_disableButton,
  dispatch_enableButton,
  dispatch_hideElement,
  dispatch_redirect,
  dispatch_removeLoadingIndicator,
  dispatch_renderError,
  dispatch_renderLoadingIndicator,
} from "../dispatch/render";
import { fetchGeoCodingCSV } from "../fetch";
import {
  AcceptablePageProps,
  BlockCountry,
  FulfilledPageProps,
  MyProposals,
  Options,
  PaginatedProposal,
  PaginatedProposals,
  PopupState,
  State,
  Status,
} from "../types";
import { Contract } from "web3-eth-contract";
import { getTermsAccepted } from "../view/utils";
import {
  getAcceptablePageFromVDOM,
  getFulfilledPagefromVDOM,
} from "../view/vDom";
import { GeoRecord } from "../geocoding/types";
import {
  dispatch_setPopupState,
  dispatch_setPosition,
} from "../dispatch/stateChange";

import Decimal from "decimal.js";

export async function getProposals<Type>(
  catalogDAO: Contract,
  myAddress: string,
  toFetch: string[],
  getPaginated: CallableFunction
): Promise<Type> {
  const proposals = await OptionsBuilder(() =>
    getPaginated(
      catalogDAO,
      myAddress,
      toFetch[0],
      toFetch[1],
      toFetch[2],
      toFetch[3],
      toFetch[4]
    )
  );
  if (proposals.status === Status.Failure) {
    dispatch_renderError(proposals.error);
    return;
  }

  return proposals.data;
}

export async function getPaginatedByIndexSTART<Type>(
  catalogDAO: Contract,
  myAddress: string,
  getLastIndex: CallableFunction,
  getPaginated: CallableFunction
): Promise<[Type, string[], PaginatedProposal]> {
  const indexOptions = await OptionsBuilder(() =>
    getLastIndex(catalogDAO, myAddress)
  );

  if (indexOptions.status === Status.Failure) {
    dispatch_renderError(indexOptions.error);
    return;
  }

  const pagination: PaginatedProposal = {
    proposals: generateProposalIndexes(indexOptions.data),
    currentPage: 1,
    totalPages: getTotalPages(indexOptions.data),
    totalContent: parseInt(indexOptions.data),
  };

  const startPage = startPaginatingAProposal(pagination.proposals);
  console.log(startPage);
  const toFetch = proposalsToFetch(startPage);
  console.log("tofetch");
  console.log(toFetch);
  const proposals = await getProposals<Type>(
    catalogDAO,
    myAddress,
    toFetch,
    getPaginated
  );

  return [proposals, toFetch, pagination];
}

function generateProposalIndexes(lastIndex: string) {
  const intIndex = parseInt(lastIndex);
  const indexes = [];
  for (let i = intIndex; i > 0; i--) {
    indexes.push(i.toString());
  }
  return indexes;
}

export async function OptionsBuilder(
  method: CallableFunction
): Promise<Options<any>> {
  const options: Options<any> = {
    status: Status.Success,
    error: "",
    data: null,
  };
  try {
    options.data = await method();
  } catch (err) {
    options.error = err.message;
    options.status = Status.Failure;
  }
  return options;
}

export const getTotalPages = (length) => {
  if (length === 0) {
    return 1;
  }
  const divided = new Decimal(length).dividedBy(5);
  const split = divided.toString().split(".");

  if (split[0] === 0) {
    return 1;
  }

  if (split[1] === undefined) {
    return parseInt(split[0]);
  }

  return parseInt(split[0]) + 1;
};

// I need to get a proposal at random index and tell what page it's on.

export const proposalsToFetch = (data: PaginatedProposal) => {
  let proposals = [];
  for (let i = 0; i < data.totalContent; i++) {
    if (getTotalPages(i) === data.currentPage) {
      proposals.push(data.proposals[i].toString());
    }
  }
  if (proposals.length < 5) {
    //If I have less then 5 things on a page, I pad it with zeroes
    for (let i = proposals.length; i < 5; i++) {
      proposals.push("0");
    }
  }

  return proposals;
};

export function startPaginatingMyProposals(
  myProposals: MyProposals
): PaginatedProposals {
  return {
    rank: {
      proposals: myProposals.rank,
      currentPage: 1,
      totalPages: getTotalPages(myProposals.rank.length),
      totalContent: myProposals.rank.length,
    },
    smartContract: {
      proposals: myProposals.smartContract,
      currentPage: 1,
      totalPages: getTotalPages(myProposals.smartContract.length),
      totalContent: myProposals.smartContract.length,
    },
    accepted: {
      proposals: myProposals.acceptedSCProposals,
      currentPage: 1,
      totalPages: getTotalPages(myProposals.acceptedSCProposals.length),
      totalContent: myProposals.acceptedSCProposals.length,
    },
    removal: {
      proposals: myProposals.removal,
      currentPage: 1,
      totalPages: getTotalPages(myProposals.removal.length),
      totalContent: myProposals.removal.length,
    },
    removedFromMe: {
      proposals: myProposals.removedFromMe,
      currentPage: 1,
      totalPages: getTotalPages(myProposals.removedFromMe.length),
      totalContent: myProposals.removedFromMe.length,
    },
  };
}

export function startPaginatingAProposal(
  proposals: Array<string>
): PaginatedProposal {
  console.log("proposals");
  console.log(proposals);

  return {
    proposals,
    currentPage: 1,
    totalPages: getTotalPages(proposals.length),
    totalContent: proposals.length,
  };
}

export async function getAcceptablePage(args: {
  props: State;
  data: AcceptablePageProps;
}) {
  dispatch_renderLoadingIndicator("transaction-display");
  const src = args.props.bundleSrcUrl;
  const page = await getAcceptablePageFromVDOM({
    ...args.data,
    mainDep: {
      src,
    },
  });
  dispatch_removeLoadingIndicator("transaction-display");
  return page;
}

// Returns true if blocked
export async function isBlocked(props: State, acceptButton: HTMLElement) {
  dispatch_renderLoadingIndicator("transaction-display");
  dispatch_disableButton(props);
  dispatch_hideElement(acceptButton, true);
  const geoCodingOptions = await fetchGeoCodingCSV();
  const record = await getCountryCode(props.position, geoCodingOptions.data);

  if (geoCodingOptions.status === Status.Failure) {
    return true;
  }

  if (record) {
    dispatch_removeLoadingIndicator("transaction-display");
    dispatch_hideElement(acceptButton, false);
    return isCountryBlocked(record, props.blockedCountries).data;
  }
}

function isCountryBlocked(
  record: GeoRecord,
  blockedCountries: BlockCountry[]
): Options<boolean> {
  let result = false;
  //TODO: OFEC ONLY blocks Crimera Region of Ukraine.
  //TODO: NEED TO CHECK EU FOR UKRAINE
  //TODO: MOVE THE LISTS TO OTHER FILE
  const blocked = {
    [BlockCountry.OFEC]: [
      "AF",
      "BY",
      "BA",
      "BI",
      "CF",
      "CN",
      "KM",
      "CU",
      "CY",
      "CD",
      "GN",
      "GW",
      "HT",
      "IR",
      "IQ",
      "KG",
      "LA",
      "LB",
      "LY",
      "ML",
      "MR",
      "MD",
      "ME",
      "MM",
      "NI",
      "KP",
      "PS",
      "RU",
      "RW",
      "RS",
      "SO",
      "SS",
      "SD",
      "SY",
      "TN",
      "UA",
      "VE",
      "YE",
      "ZW",
    ],
    [BlockCountry.UN]: [
      "AF",
      "CF",
      "CD",
      "GW",
      "IR",
      "IQ",
      "LB",
      "LY",
      "ML",
      "ME",
      "KP",
      "RS",
      "SO",
      "SS",
      "SD",
      "SY",
      "YE",
    ],
    [BlockCountry.EU]: [
      "BY",
      "BA",
      "BI",
      "CF",
      "CN",
      "CD",
      "GN",
      "GW",
      "HT",
      "IR",
      "LB",
      "LY",
      "MD",
      "ME",
      "MM",
      "NI",
      "KP",
      "RU",
      "RS",
      "SS",
      "SD",
      "SY",
      "TN",
      "UA",
      "VE",
      "ZW",
    ],
    [BlockCountry.BLOCKUSA]: ["US"],
    //TODO: GET THE LIST OF NEW YORK STATE CITIES, JUST LIKE CRIMERA
    [BlockCountry.BLOCKNY]: [],
  };

  blockedCountries.forEach((sanctions) => {
    if (blocked[sanctions].includes(record.countryCode)) {
      //If it exists in a list, it's blocked for sure
      result = true;
    }
  });
  return { status: Status.Success, error: "", data: result };
}

export async function getCountryCode(
  locationData: GeolocationPosition,
  geoCodingData: string
): Promise<GeoRecord> {
  const revGeocoder = await createRevGeocoder({ dataset: geoCodingData });
  const result = await revGeocoder.lookup({
    latitude: locationData?.coords.latitude,
    longitude: locationData?.coords.longitude,
  });

  return result.record;
}

export function getLocation(props: State, acceptButton: HTMLElement) {
  dispatch_disableButton(props);
  dispatch_hideElement(acceptButton, true);
  // Ask for permission and access the Geolocation API.
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        dispatch_hideElement(acceptButton, false);

        dispatch_setPosition(position);
      },
      function (err) {
        dispatch_enableButton(props);
        dispatch_renderError(err.message);
        dispatch_hideElement(acceptButton, false);
      }
    );
  } else {
    dispatch_renderError("Can't get geolocation.");
    dispatch_enableButton(props);
    dispatch_hideElement(acceptButton, false);
  }
}

export async function handlePost(props: State, id: string) {
  const url = props.redirectto;
  if (url === "NONE") {
    return;
  }
  const getURLWithId = (url: string, id: string) => {
    // If the url ends with /
    if (url.slice(-1) === "/") {
      return url + id;
    } else {
      return url + "/" + id;
    }
  };

  dispatch_redirect(getURLWithId(url, id));
}

export async function getFulfilledPage(props: FulfilledPageProps) {
  dispatch_renderLoadingIndicator("transaction-display");
  const page = await getFulfilledPagefromVDOM(props);
  dispatch_removeLoadingIndicator("transaction-display");

  return page;
}

export function showBanner() {
  const termsAccepted = getTermsAccepted();
  if (termsAccepted !== true) {
    dispatch_setPopupState(PopupState.Terms);
  }
}
