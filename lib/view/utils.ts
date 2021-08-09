import { ContractTypes, State } from "../types";

export function getById(id: string): HTMLElement {
  const el = document.getElementById(id);

  if (el === null) {
    return document.createElement("div");
  } else {
    return el;
  }
}

export function getPage(): HTMLElement {
  return getById("page");
}

export function getCurrentUrl(): string {
  return window.location.href;
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
  if (price.value === "" || price.value === "0") {
    return "NONE";
  } else {
    return price.value;
  }
}
export function getPostTo() {
  const postto = getById("postto-input") as HTMLInputElement;
  if (postto.value === "") {
    return "NONE";
  } else {
    return handleHTTPS(postto.value);
  }
}

export function getOnlySigner() {
  const onlySigner = getById("onlysigner-input") as HTMLInputElement;
  if (onlySigner.value === "") {
    return "NONE";
  } else {
    return onlySigner.value;
  }
}

function handleHTTPS(url: string) {
  if (url === "") {
    return url;
  }
  if (url.includes("http")) {
    return url;
  } else {
    return "https://" + url;
  }
}

export function didExpire(expires: string): boolean {
  if (expires === "NEVER") {
    return false;
  } else {
    const now = new Date().getTime();
    const expiryDate = new Date(expires).getTime();
    return now > expiryDate;
  }
}

export function getWebhookCheckbox(): boolean {
  const webhook = getById("webhook-checkbox") as HTMLInputElement;
  return webhook.checked;
}

export function getRedirectCheckbox(): boolean {
  const redirect = getById("redirect-checkbox") as HTMLInputElement;
  return redirect.checked;
}
export function getExpires(): string {
  const acceptableTill = getById("expires-input") as HTMLInputElement;
  if (acceptableTill.value === "") {
    return "NEVER";
  }
  return new Date(acceptableTill.value).toISOString();
}

export function getSecret(): string {
  const secret = getById("secret-input") as HTMLInputElement;
  return secret.value;
}

export function redirect(url: string) {
  window.location.replace(url);
}

export function copyStringToClipboard(str: string) {
  // Create new element
  var el = document.createElement("textarea");
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("readonly", "");
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand("copy");
  // Remove temporary element
  document.body.removeChild(el);
}
