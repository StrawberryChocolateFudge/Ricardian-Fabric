import { html, render } from "lit-html";
import { AcceptablePageProps, FulfilledPageProps } from "../types";
import { acceptablePageLayout } from "./templates/acceptable/acceptablePage";
import { fulfilledPageLayout } from "./templates/fulfilled/fulfilledPage";
import { initialStringDom } from "./templates/components/initialDom";

export async function getAcceptablePageFromVDOM(
  pageProps: AcceptablePageProps
): Promise<string> {
  const doc = parseDOMfromString(pageProps.domParser, initialStringDom);
  render(acceptablePageLayout(pageProps), doc.body);
  // The legal contract HTML is sanitized by the editor
  doc.getElementById("contract-display").innerHTML = pageProps.legalContract;
  //TODO: I need to inline the script dependency here!!
  //with document.createTextNode?

  return serialize(doc);
}

export async function getFulfilledPagefromVDOM(pageProps: FulfilledPageProps) {
  const doc = parseDOMfromString(pageProps.domParser, initialStringDom);
  render(fulfilledPageLayout(pageProps), doc.body);
  doc.getElementById("contract-display").innerHTML = pageProps.legalContract;
  return serialize(doc);
}

function parseDOMfromString(parser: DOMParser, initialDom: string): Document {
  const doc = parser.parseFromString(initialDom, "text/html");
  return doc;
}

function serialize(doc: Document): string {
  const XMLS = new XMLSerializer();
  return XMLS.serializeToString(doc);
}
