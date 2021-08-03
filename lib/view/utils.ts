import { ContractTypes } from "../types";

export function getById(id: string): HTMLElement {
  const el = document.getElementById(id);

  if (el === null) {
    return document.createElement("div");
  } else {
    return el;
  }
}

export function getCurrentPageDataProp() {
  const page = getById("page");
  const contractType = page.dataset.contracttype;

  return contractType as ContractTypes;
}

export function getRedirectDataProp(): string {
  const page = getById("page");
  return page.dataset.redirect;
}

//TODO: change where the dependencies come from
export function getBundleSrcUrl(): string {
  const mainScript = getById("main-script") as HTMLScriptElement;
  return mainScript.src;
}

export function getArweaveDependencyUrl(): string {
  const arweaveScript = getById("arweave-script") as HTMLScriptElement;
  return arweaveScript.src;
}

export function getCommunityJsDependencyUrl(): string {
  const communityScript = getById("community-js-script") as HTMLScriptElement;
  return communityScript.src;
}

export function readFile(files: FileList, getKey: CallableFunction) {
  const reader = new FileReader();

  reader.onload = function (e: ProgressEvent) {
    const key = getKeyFromFile(e);
    getKey(key);
  };

  reader.onerror = function (e) {
    console.log(e);
  };

  reader.readAsText(files[0], "UFT-8");
}

export function getKeyFromFile(fileEvent: ProgressEvent) {
  try {
    const fileReader: FileReader = fileEvent.target as FileReader;
    const key = JSON.parse(fileReader.result as string);
    return key;
  } catch (e) {
    // TODO: validation error
  }
}

export function parseDOMfromString(
  parser: DOMParser,
  initialDom: string
): Document {
  const doc = parser.parseFromString(initialDom, "text/html");
  return doc;
}

export function serialize(doc: Document): string {
  const XMLS = new XMLSerializer();
  return XMLS.serializeToString(doc);
}

export function renderError(message: string) {
  getById("error-display").textContent = message;
}

export function removeError() {
  getById("error-display").innerHTML = "";
}

export function enableCreateButton() {
  const saveButton = getById("save-contract") as HTMLButtonElement;
  saveButton.disabled = false;
}

export function disableCreateButton() {
  const saveButton = getById("save-contract") as HTMLButtonElement;
  saveButton.disabled = true;
}

export function getPrice() {
  const price = getById("price-input") as HTMLInputElement;
  if (price.value === "") {
    return "NONE";
  } else {
    price.value;
  }
}

export function getRedirect() {
  const redirect = getById("redirect-input") as HTMLInputElement;
  if (redirect.value === "") {
    return "NONE";
  } else {
    return redirect.value;
  }
}
