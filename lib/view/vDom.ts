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
  // I need to inline the script dependency here!zzs
  // TODO: UNTESTED!
  const script = document.createElement("script");
  script.type = "text/javascript";
  const code = pageProps.mainDep.code;
  try {
    script.appendChild(document.createTextNode(code));
    doc.body.appendChild(script);
  } catch (e) {
    script.text = code;
    doc.body.appendChild(script);
  }

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
