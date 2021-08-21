import { FileType } from "../types";

const storageKEY = "RicardianFabric";

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

export function readFile(
  files: FileList,
  getContent: CallableFunction,
  fileType: FileType
) {
  const reader = new FileReader();

  if (fileType === FileType.key) {
    reader.onload = function (e: ProgressEvent) {
      const data = getKeyFromFile(e);
      getContent(data);
    };

    reader.onerror = function (e) {
      console.log(e);
    };

    reader.readAsText(files[0], "UFT-8");
  } else if (fileType === FileType.pdf) {
    reader.readAsDataURL(files[0]);

    reader.onloadend = function (event) {
      getContent(event.target.result);
    };
  }
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

export function getPDF(): FileList {
  const pdf = getById("pdf-input") as HTMLInputElement;
  if (pdf.files.length === 1 && pdf.files[0].type === "application/pdf") {
    return pdf.files;
  } else {
    return null;
  }
}

export function getWallet(): FileList {
  const wallet = getById("wallet-input") as HTMLInputElement;

  if (
    wallet.files.length === 1 &&
    wallet.files[0].type === "application/json"
  ) {
    return wallet.files;
  } else {
    return null;
  }
}

export function getSecret(): string {
  const secret = getById("secret-input") as HTMLInputElement;
  return secret.value;
}

export function getProfitSharingContractId(): string {
  return getPSTContractEl().value;
}

export function isPSTUser(): boolean {
  return getPSTCheckboxEl().checked;
}

export function getIsInstrument(): boolean {
  return isInstrumentEl().checked;
}

export function getInstrumentName(): string {
  return instrumentNameEl().value;
}

export function getInstrumentTicker(): string {
  return instrumentTickerEl().value;
}

export function getInstrumentSupply(): string {
  return instrumentSupplyEl().value;
}

export function getInstrumentCanDerive(): string {
  return instrumentDeriveEl().value;
}

export function getPSTCheckboxEl(): HTMLInputElement {
  return getById("is-profitsharing") as HTMLInputElement;
}

export function getPSTContractEl(): HTMLInputElement {
  return getById("pstContractId") as HTMLInputElement;
}

export function isInstrumentEl(): HTMLInputElement {
  return getById("is-crypto-instrument") as HTMLInputElement;
}

export function instrumentNameEl(): HTMLInputElement {
  return getById("instrument-name-input") as HTMLInputElement;
}

export function instrumentTickerEl(): HTMLInputElement {
  return getById("instrument-ticker-input") as HTMLInputElement;
}

export function instrumentSupplyEl(): HTMLInputElement {
  return getById("instrument-supply-input") as HTMLInputElement;
}

export function instrumentDeriveEl(): HTMLInputElement {
  return getById("instrument-derive-input") as HTMLInputElement;
}

export function getPDFDisplay(): HTMLObjectElement {
  return getById("pdfDisplay") as HTMLObjectElement;
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

export function setTermsAccepted(termsAccepted: boolean) {
  localStorage.setItem(storageKEY, JSON.stringify({ termsAccepted }));
}

export function getTermsAccepted(): boolean {
  const data = localStorage.getItem(storageKEY);
  const parsed = JSON.parse(data);
  if (parsed === null) {
    return parsed;
  } else {
    return parsed.termsAccepted;
  }
}

export function updatePromptSuccess(file) {
  const prompt = getById("drop-prompt");
  prompt.style.color = "black";
  prompt.textContent = file.name;
}

export function updatePromptError(message: string) {
  const prompt = getById("drop-prompt");
  prompt.textContent = message;
  prompt.style.color = "red";
}
