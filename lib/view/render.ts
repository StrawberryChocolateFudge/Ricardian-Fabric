import { html, render } from "lit-html";
import {
  ContractTypes,
  InstrumentPageData,
  NetworkingPage,
  PaymentPage,
  State,
  WalletPage,
} from "../types";
import { acceptButton } from "./templates/acceptable/acceptButton";
import {
  addressTemplate,
  balanceTemplate,
} from "./templates/components/balance";
import { CountriesList } from "./templates/components/countriesList";
import { helperTooltips } from "./templates/components/helperTooltips";
import { InputsList } from "./templates/components/inputsList";
import { loadingIndicator } from "./templates/components/loadingIndicator";
import { redirectCounter } from "./templates/components/redirectCounter";
import { termsLayout } from "./templates/components/terms";
import { transactionUrl } from "./templates/components/transaction";
import { Router } from "./templates/pages/router";
import {
  copyStringToClipboard,
  getById,
  getInstrumentFields,
  getNFTFields,
  getPDFDisplay,
  getPDFInputEl,
  getPrice,
  getPromptEl,
  getPSTCheckboxEl,
  getPSTContractEl,
  instrumentDeriveEl,
  instrumentNameEl,
  instrumentSupplyEl,
  instrumentTickerEl,
  isInstrumentEl,
} from "./utils";

export function renderPage(props: State) {
  render(Router(props), getById("page"));
}

export function renderbalance(balance: number, address: string) {
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

export function renderLoadingIndicator(to: string) {
  render(loadingIndicator, getById(to));
}

export function removeLoadingIndicator(from: string) {
  render(html`<div></div>`, getById(from));
}

export function renderTransaction(url: string) {
  render(transactionUrl(url), getById("transaction-display"));
  copyStringToClipboard(url);
}

export function renderCountriesList(available: Array<string>) {
  render(CountriesList(available), getById("country-items-added"));
}

export function renderInputsList(inputs: Array<string>) {
  render(InputsList(inputs), getById("inputs-items-added"));
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

export function setInstrumentFieldsToDOM(
  instrumentPageData: InstrumentPageData
) {
  const [isInstrumentEl, nameEl, tickerEl, supplyEl, canDeriveEl] =
    getInstrumentFields();


  const checked = instrumentPageData.isInstrument;

  isInstrumentEl.checked = checked;

  if (checked) {
    nameEl.disabled = false;
    tickerEl.disabled = false;
    supplyEl.disabled = false;
    canDeriveEl.disabled = false;
  }

  nameEl.value = instrumentPageData.name;
  tickerEl.value = instrumentPageData.ticker;
  supplyEl.value = instrumentPageData.supply.toString();
  canDeriveEl.value = instrumentPageData.canDerive.toString();
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

export function setStockToDOM(stock: string){
  const stockEl = getById("stock-input") as HTMLInputElement;
  if(stock !== "NONE"){
    stockEl.value = stock;
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

export function setWalletToDom(walletPage: WalletPage) {
  const walletInputEl = getById("wallet-input") as HTMLInputElement;
  if (typeof walletPage.file !== "string") {
    walletInputEl.files = walletPage.file;
  }

  const isWalletFile = getById("isWalletFile") as HTMLInputElement;
  const isArConnect = getById("isArConnect") as HTMLInputElement;

  isWalletFile.checked = walletPage.isWalletFile;
  isArConnect.checked = walletPage.arconnect;
}

export function setPostToDOM(networkingPage: NetworkingPage) {
  const postTo = getById("postto-input") as HTMLInputElement;

  postTo.value = networkingPage.postto === "NONE" ? "" : networkingPage.postto;

  const redirectEl = getById("redirect-checkbox") as HTMLInputElement;
  const webhookEl = getById("webhook-checkbox") as HTMLInputElement;
  redirectEl.checked = networkingPage.redirect;
  webhookEl.checked = networkingPage.webhook;

  const weavemailEl = getById("weavemail-checkbox") as HTMLInputElement;
  weavemailEl.checked = networkingPage.weavemail;
}

export function setSemanticsTitleToDOM(title: string) {
  const titleEl = getById("semanticsTitle") as HTMLInputElement;
  titleEl.value = title;
}

export function setProfitSharingToDOM(data: PaymentPage) {
  const isProfitSharingEl = getById("is-profitsharing") as HTMLInputElement;
  const percentageEl = getById("pst-percentage") as HTMLInputElement;
  const pscEl = getById("pst-contractid") as HTMLInputElement;
  const accountantContractEl = getById(
    "accountant-contractid"
  ) as HTMLInputElement;
  const needsKYCEl = getById("needs-kyc") as HTMLInputElement;

  isProfitSharingEl.checked = data.willProfitShare;

  const disabled = !data.willProfitShare;

  percentageEl.value = data.percentage.toString();
  percentageEl.disabled = disabled;
  pscEl.value = data.pstContractId;
  pscEl.disabled = disabled;
  accountantContractEl.value = data.accountantContractId;
  accountantContractEl.disabled = disabled;
  needsKYCEl.checked = data.needsKYC;
}

export function setNFTPageToDOM(props: State) {
  const [allowNFTEl, titleEl, nameEl, descriptionEl, tickerEl] = getNFTFields();
  const page = props.NFTPage;

  allowNFTEl.checked = page.allowNFT;
  titleEl.value = page.title;
  nameEl.value = page.name;
  descriptionEl.value = page.description;
  tickerEl.value = page.ticker;
}

export function revertPrompt() {
  const prompt = getPromptEl();
  prompt.textContent = "Drop PDF here or click to upload";
  prompt.style.color = "black";
}

export function updatePromptSuccess(file: File) {
  const prompt = getPromptEl();
  prompt.style.color = "black";
  prompt.textContent = file.name;
}

export function updatePromptError(message: string) {
  const prompt = getPromptEl();
  prompt.textContent = message;
  prompt.style.color = "red";
}

export function discardPDF() {
  const pdf = getPDFInputEl();
  pdf.value = "";
}
