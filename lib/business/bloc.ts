import {
  dispatch_redirectCounter,
  dispatch_removeLoadingIndicator,
  dispatch_renderLoadingIndicator,
  dispatch_renderTerms,
} from "../dispatch/render";
import { AcceptablePageProps, FulfilledPageProps, State } from "../types";

import {
  getAcceptableContract,
  getFromUrl,
  getTermsAccepted,
  redirect,
} from "../view/utils";
import {
  getAcceptablePageFromVDOM,
  getFulfilledPagefromVDOM,
} from "../view/vDom";

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

export async function isOnlySigner(
  props: State,
  address: string
): Promise<boolean> {
  const onlySigner = props.onlySigner;
  if (onlySigner === "NONE") {
    return true;
  }
  return onlySigner === address;
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
