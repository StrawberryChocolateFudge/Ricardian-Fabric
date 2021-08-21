import { html, render } from "lit-html";
import { ContractTypes, NetworkingPage, State } from "../types";
import { acceptButton } from "./templates/acceptButton";
import { addressTemplate, balanceTemplate } from "./templates/balance";
import { CreatePage } from "./templates/createPage";
import { helperTooltips } from "./templates/helperTooltips";
import { instrumentSettings } from "./templates/instrumentSettings";
import { loadingIndicator } from "./templates/loadingIndicator";
import { redirectCounter } from "./templates/redirectCounter";
import { termsLayout } from "./templates/terms";
import { transactionUrl } from "./templates/transaction";
import {
  copyStringToClipboard,
  getById,
  getPDFDisplay,
  getPSTCheckboxEl,
  getPSTContractEl,
  instrumentDeriveEl,
  instrumentNameEl,
  instrumentSupplyEl,
  instrumentTickerEl,
  isInstrumentEl,
} from "./utils";

export async function renderPage(props: State) {
  render(CreatePage(props), getById("page"));
}

export async function renderbalance(balance: number, address: string) {
  const balanceEl = getById("balance");
  const addressEl = getById("address");
  render(balanceTemplate(balance), balanceEl);
  render(addressTemplate(address), addressEl);
}

export function renderAcceptButton(props: State) {
  const actionContainer = getById("action-container");
  actionContainer.innerHTML = "";
  render(acceptButton(props), actionContainer);
}

export async function renderLoadingIndicator(to: string) {
  render(loadingIndicator, getById(to));
}

export async function removeLoadingIndicator(from: string) {
  render(html`<div></div>`, getById(from));
}

export async function renderTransaction(url: string) {
  render(transactionUrl(url), getById("transaction-display"));
  copyStringToClipboard(url);
}

export function renderError(message: string) {
  getById("error-display").textContent = message;
}

export function removeError() {
  getById("error-display").innerHTML = "";
}

export function renderVersion(version: string) {
  getById("version").textContent = version;
}

export function renderCounter(count: number) {
  const counterEl = getById("redirect-display");
  render(redirectCounter(count), counterEl);
}

export function enableButton(props: State) {
  const currentPage = props.contracttype;
  if (currentPage === ContractTypes.create) {
    const saveButton = getById("save-contract") as HTMLButtonElement;
    saveButton.disabled = false;
    saveButton.style.backgroundColor = "black";
    saveButton.style.color = "white";
  } else if (currentPage === ContractTypes.acceptable) {
    const saveButton = getById("accept-button") as HTMLButtonElement;
    saveButton.disabled = false;
    saveButton.style.backgroundColor = "black";
    saveButton.style.color = "white";
  }
}

export function disableButton(props: State) {
  const currentPage = props.contracttype;
  if (currentPage === ContractTypes.create) {
    const saveButton = getById("save-contract") as HTMLButtonElement;
    saveButton.disabled = true;
    saveButton.style.backgroundColor = "";
    saveButton.style.color = "";
  } else if (currentPage === ContractTypes.acceptable) {
    const saveButton = getById("accept-button") as HTMLButtonElement;
    saveButton.disabled = true;
    saveButton.style.backgroundColor = "";
    saveButton.style.color = "";
  }
}

export function renderTerms() {
  setBannerDisplayBlock();
  const layout = getById("overlay-layout");
  render(termsLayout(), layout);
}

export function renderToolTipHelptextsForCreate() {
  const pricetooltip = getById("price-tooltip");
  const psttooltip = getById("pst-tooltip");
  const instrumentooltip = getById("instrument-tooltip");
  const onlysignerTooltip = getById("onlysigner-tooltip");
  const expiresTooltip = getById("expires-tooltip");
  const posttoTooltip = getById("postTo-tooltip");
  const webhookTooltip = getById("webhook-tooltip");
  render(
    helperTooltips(
      `Price in Ar. It must be under the legal limit allowed by your local regulation. The 0.5% fee is not included.`
    ),
    pricetooltip
  );
  render(
    helperTooltips(
      "Profit sharing contract id.\nAn extra 0.2% fee will be added and will be transferred to a random token holder.\n"
    ),
    psttooltip
  );
  render(
    helperTooltips(
      "Create a smart contract representation of the legal document."
    ),
    instrumentooltip
  );
  render(
    helperTooltips("The only arweave address that can sign this contract"),
    onlysignerTooltip
  );
  render(
    helperTooltips("Required field. The contract expires always at midnight"),
    expiresTooltip
  );
  render(
    helperTooltips(
      "Posts to the url with path /{id}. Choose bellow the preferred method."
    ),
    posttoTooltip
  );
  render(
    helperTooltips(
      'The webhook option offers an extra field on the contract for a pre-shared secret. It will be posted as {"secret" : secret}'
    ),
    webhookTooltip
  );
}

export function renderInstrumentSettings() {
  setBannerDisplayBlock();
  const layout = getById("overlay-layout");
  render(instrumentSettings(), layout);
}

export function renderInstrumentSettingsTooltips() {
  const name = getById("instrument-name-tooltip");
  const ticker = getById("instrument-ticker-tooltip");
  const supply = getById("instrument-supply-tooltip");
  const derive = getById("instrument-derive-tooltip");

  render(helperTooltips("The name of the instrument"), name);
  render(helperTooltips("Specify a ticker for the derivatives"), ticker);
  render(
    helperTooltips("Max amount of instruments available for sale"),
    supply
  );
  render(helperTooltips("Amount of PSTs derived per instrument"), derive);
}

export function setSmartContractInputFields(
  pstCheckboxState: boolean,
  instrumentCheckboxState: boolean
) {
  const pstContractInput = getPSTContractEl();
  const nameEl = instrumentNameEl();
  const tickerEl = instrumentTickerEl();
  const supplyEl = instrumentSupplyEl();
  const canDeriveEl = instrumentDeriveEl();

  if (instrumentCheckboxState) {
    nameEl.disabled = false;
    tickerEl.disabled = false;
    supplyEl.disabled = false;
    canDeriveEl.disabled = false;
  } else {
    nameEl.disabled = true;
    tickerEl.disabled = true;
    supplyEl.disabled = true;
    canDeriveEl.disabled = true;
  }

  if (pstCheckboxState) {
    pstContractInput.disabled = false;
  } else {
    pstContractInput.disabled = true;
  }
}

export function setProfitSharingContractIdToDOM(id: string) {
  getPSTContractEl().value = id;
}

export function setIsIntrumentToDOM(isIns: boolean) {
  isInstrumentEl().checked = isIns;
}

export function setWillProfitShareToDOM(willShare: boolean) {
  getPSTCheckboxEl().checked = willShare;
}

export function setInstrumentNameToDOM(name: string) {
  instrumentNameEl().value = name;
}

export function setInstrumentTickerToDOM(ticker: string) {
  instrumentTickerEl().value = ticker;
}

export function setInstrumentSupplyToDOM(supply: number) {
  instrumentSupplyEl().valueAsNumber = supply;
}

export function setInstrumentCanDeriveToDOM(canDerive: number) {
  instrumentDeriveEl().valueAsNumber = canDerive;
}

export function setPDFDisplay() {
  const pdfDisplay = getPDFDisplay();
}

export function setBannerDisplayBlock() {
  getById("overlay").style.display = "block";
}

export function setOnlySignerToDOM(onlySigner: string) {
  const onlySignerEl = getById("onlysigner-input") as HTMLInputElement;
  if (onlySigner !== "NONE") {
    onlySignerEl.value = onlySigner;
  }
}

export function setPriceToDOM(price: string) {
  const priceEl = getById("price-input") as HTMLInputElement;
  if (price !== "NONE") {
    priceEl.value = price;
  }
}

export function setExpiresDateToDOM(date: string) {
  const dateEl = getById("expires-input") as HTMLInputElement;
  if (date !== "NEVER") {
    dateEl.valueAsDate = new Date(date);
  }
}

export function setPDFtoDOM(fileList: FileList | string) {
  const pdfEl = getById("pdf-input") as HTMLInputElement;
  if (typeof fileList !== "string") {
    pdfEl.files = fileList;
  }
}

export function setWalletToDom(fileList: FileList | string) {
  const walletInputEl = getById("wallet-input") as HTMLInputElement;
  if (typeof fileList !== "string") {
    walletInputEl.files = fileList;
  }
}

export function setPostToDOM(networkingPage: NetworkingPage) {
  const postTo = getById("postto-input") as HTMLInputElement;

  postTo.value = networkingPage.postto === "NONE" ? "" : networkingPage.postto;

  const redirectEl = getById("redirect-checkbox") as HTMLInputElement;
  const webhookEl = getById("webhook-checkbox") as HTMLInputElement;

  redirectEl.checked = networkingPage.redirect;
  webhookEl.checked = networkingPage.webhook;
}
