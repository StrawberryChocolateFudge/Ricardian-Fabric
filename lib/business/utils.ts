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
  Options,
  PopupState,
  State,
  Status,
} from "../types";

import { getById, getTermsAccepted } from "../view/utils";
import {
  getAcceptablePageFromVDOM,
  getFulfilledPagefromVDOM,
} from "../view/vDom";
import { GeoRecord } from "../geocoding/types";
import {
  dispatch_setPopupState,
  dispatch_setPosition,
} from "../dispatch/stateChange";


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

export function getLocation(props: State,acceptButton : HTMLElement) {
  dispatch_disableButton(props);
  dispatch_renderLoadingIndicator("transaction-display");
  dispatch_hideElement(acceptButton, true);
  // Ask for permission and access the Geolocation API.
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        dispatch_removeLoadingIndicator("transaction-display");
        dispatch_hideElement(acceptButton, false);

        dispatch_setPosition(position);
      },
      function (err) {
        dispatch_enableButton(props);
        dispatch_renderError(err.message);
        dispatch_removeLoadingIndicator("transaction-display");
        dispatch_hideElement(acceptButton, false);

      }
    );
  } else {
    dispatch_renderError("Can't get geolocation.");
    dispatch_enableButton(props);
    dispatch_removeLoadingIndicator("transaction-display");
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
