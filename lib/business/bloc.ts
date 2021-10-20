import { createRevGeocoder } from "../geocoding/index";
import {
  dispatch_redirectCounter,
  dispatch_removeLoadingIndicator,
  dispatch_renderLoadingIndicator,
  dispatch_renderTerms,
} from "../dispatch/render";
import { fetchGeoCodingCSV } from "../fetch";
import {
  AcceptablePageProps,
  BlockCountry,
  FulfilledPageProps,
  Options,
  State,
  Status,
} from "../types";

import { getTermsAccepted, redirect } from "../view/utils";
import {
  getAcceptablePageFromVDOM,
  getFulfilledPagefromVDOM,
} from "../view/vDom";
import { GeoRecord } from "../geocoding/types";

const REDIRECT_TIMEOUT = 1000;

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

export async function isBlocked(props: State, address: string) {
  const locationOptions = getLocation();
  if (locationOptions.status === Status.Failure) {
    return true;
  }
  const geoCodingOptions = await fetchGeoCodingCSV();
  if (geoCodingOptions.status === Status.Failure) {
    return true;
  }
  const record = await getCountryCode(
    locationOptions.data,
    geoCodingOptions.data
  );

  return isCountryBlocked(record, props.blockedCountries).data;
}

function isCountryBlocked(
  record: GeoRecord,
  blockedCountries: BlockCountry[]
): Options {
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
  const result = revGeocoder.lookup({
    latitude: locationData.coords.latitude,
    longitude: locationData.coords.longitude,
  });

  return result.record;
}

export function getLocation(): Options {
  // Ask for permission to access the Geolocation API. If not given, blocked will return true
  const result: Options = { status: Status.Success, error: "", data: {} };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      result.data = position;
    });
  } else {
    result.status = Status.Success;
  }
  return result;
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
  // I show a countback and redirect
  let counter = 1;
  dispatch_redirectCounter(counter);
  const interval = setInterval(function () {
    counter++;
    dispatch_redirectCounter(counter);
    if (counter === 5) {
      clearInterval(interval);
      redirect(getURLWithId(url, id));
    }
  }, REDIRECT_TIMEOUT);
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
    dispatch_renderTerms();
  }
}
