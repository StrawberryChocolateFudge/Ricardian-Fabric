import { ContractTypes, State } from "../types";

export function getById(id: string): HTMLElement {
  const el = document.getElementById(id);

  if (el === null) {
    return document.createElement("div");
  } else {
    return el;
  }
}

export function getAcceptableContract() {
  const contractEl = getById("contract-display");
  return contractEl.innerHTML;
}

export function getFromUrl() {
  return window.location.pathname;
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

export function getPrice() {
  const price = getById("price-input") as HTMLInputElement;
  if (price.value === "") {
    return "NONE";
  } else {
    return price.value;
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

//Util functions to call when redirecting
// export function formatUrl() {}

// export function redirect() {
//   const url = getRedirectDataProp();

//   const formatted = formatUrl();

//   window.location.href = url;
// }
