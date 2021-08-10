import { html, render } from "lit-html";
import { ContractTypes, State } from "../types";
import { acceptButton } from "./templates/acceptButton";
import { balanceTemplate } from "./templates/balance";
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
  } else if (currentPage === ContractTypes.acceptable) {
    const saveButton = getById("accept-button") as HTMLButtonElement;
    saveButton.disabled = false;
  }
}

export function disableButton(props: State) {
  const currentPage = props.contracttype;
  if (currentPage === ContractTypes.create) {
    const saveButton = getById("save-contract") as HTMLButtonElement;
    saveButton.disabled = true;
  } else if (currentPage === ContractTypes.acceptable) {
    const saveButton = getById("accept-button") as HTMLButtonElement;
    saveButton.disabled = true;
  }
}

export function renderTerms() {
  setBannerDisplayBlock();
  const layout = getById("overlay-layout");
  render(termsLayout(), layout);
}
