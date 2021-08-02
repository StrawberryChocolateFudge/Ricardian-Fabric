import { render } from "lit-html";
import { AcceptablePageProps, FulfilledPageProps } from "../types";
import { acceptablePageLayout } from "./templates/acceptablePage";
import { fulfilledPageLayout } from "./templates/fulfilledPage";
import { initialStringDom } from "./templates/initialDom";
import { parseDOMfromString, serialize } from "./utils";

export async function getAcceptablePage(
  pageProps: AcceptablePageProps
): Promise<string> {
  const doc = parseDOMfromString(pageProps.domParser, initialStringDom);
  render(acceptablePageLayout(pageProps), doc.body);
  doc.getElementById("contract-display").innerHTML = pageProps.legalContract;
  return serialize(doc);
}

export async function getFulfilledPage(pageProps: FulfilledPageProps) {
  const doc = parseDOMfromString(pageProps.domParser, initialStringDom);
  render(fulfilledPageLayout(pageProps), doc.body);
  return serialize(doc);
}
