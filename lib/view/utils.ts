import { BlockCountry } from "../types";

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
  return window.location.href;
}

export function getPrice() {
  const price = getById("price-input") as HTMLInputElement;
  if (price.value === "" || price.value === "0") {
    return "NONE";
  } else {
    return price.value;
  }
}
export function getRedirectTo() {
  const redirectto = getById("redirectto-input") as HTMLInputElement;
  if (redirectto.value === "") {
    return "NONE";
  } else {
    return handleHTTPS(redirectto.value);
  }
}

export function getSmartContract() {
  const smartContract = getById("smartcontract-input") as HTMLInputElement;
  if (smartContract.value === "") {
    return "NONE";
  } else {
    return smartContract.value;
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

export function getBlockedCountries() {
  const blockedCountries = [];

  const ofec = getById("ofec_checkbox") as HTMLInputElement;
  const eu = getById("eu-checkbox") as HTMLInputElement;
  const un = getById("un-checkbox") as HTMLInputElement;
  const usa = getById("usa-checkbox") as HTMLInputElement;
  const ny = getById("newyork-checkbox") as HTMLInputElement;

  if (ofec.checked) {
    blockedCountries.push(BlockCountry.OFEC);
  }
  if (eu.checked) {
    blockedCountries.push(BlockCountry.EU);
  }
  if (un.checked) {
    blockedCountries.push(BlockCountry.UN);
  }
  if (usa.checked) {
    blockedCountries.push(BlockCountry.BLOCKUSA);
  }
  if (ny.checked) {
    blockedCountries.push(BlockCountry.BLOCKNY);
  }

  return blockedCountries;
}

function handleHTTPS(url: string) {
  if (url === "") {
    return url;
  }
  // get the first 4 characters to see if it's http protocol
  const slice = url.substring(0, 4);
  if (slice === "http") {
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
  const el = document.createElement("textarea");
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

export function setBannerDisplayBlock() {
  getById("overlay").style.display = "block";
}

export function setBannerDisplayNone() {
  getById("overlay").style.display = "none";
}

export function setTermsAccepted(termsAccepted: boolean) {
  localStorage.setItem("termsAccepted", `${termsAccepted}`);
}

export function getTermsAccepted(): boolean {
  const data = localStorage.getItem("termsAccepted");
  if (data === null) {
    return false;
  } else {
    return data === "true";
  }
}

export function getPromptEl(): HTMLElement {
  return getById("drop-prompt");
}

export function getPromptElDOCX(): HTMLElement {
  return getById("drop-prompt-docx");
}

export function getTermsCheckbox(): HTMLInputElement {
  return getById("terms-checkbox") as HTMLInputElement;
}

export function changeContainerSlotStyle(to: boolean) {
  const container = getById("action-container");

  if (to) {
    container.classList.remove("center");
  } else {
    container.classList.add("center");
  }
}

export function readFile(files: FileList, getContent: CallableFunction) {
  const reader = new FileReader();
  reader.readAsDataURL(files[0]);

  reader.onloadend = function (event) {
    getContent(event.target.result);
  };
}

export function readWalletFile(files: FileList, getContent: CallableFunction) {
  const reader = new FileReader();
  reader.onload = async function (e: ProgressEvent) {
    const data = getKeyFromFile(e);
    await getContent(data);
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
