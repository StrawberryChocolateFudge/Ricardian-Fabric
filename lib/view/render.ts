import { html, render } from "lit-html";
import { ContractTypes, State } from "../types";
import { acceptButton } from "./templates/acceptButton";
import { balanceTemplate } from "./templates/balance";
import { helperTooltips } from "./templates/helperTooltips";
import { instrumentSettings } from "./templates/instrumentSettings";
import { loadingIndicator } from "./templates/loadingIndicator";
import { redirectCounter } from "./templates/redirectCounter";
import { termsLayout } from "./templates/terms";
import { transactionUrl } from "./templates/transaction";
import { copyStringToClipboard, getById, setBannerDisplayBlock } from "./utils";

export async function renderbalance(balance: number) {
  const balanceEl = getById("balance");
  render(balanceTemplate(balance), balanceEl);
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
    helperTooltips(`Price in Ar. The 0.5% fee is not included.`),
    pricetooltip
  );
  render(
    helperTooltips(
      "Profit sharing contract id.\n0.2% fee in Ar will be transferred to a random token holder.\nThis is unavailabe if you are issuing instruments."
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
    helperTooltips("The contract expires always at midnight"),
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
