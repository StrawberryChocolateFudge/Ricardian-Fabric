import { html, render } from "lit-html";
import { ContractTypes, State } from "../types";
import { AcceptButton, acceptTools } from "./templates/acceptTools";
import { addressTemplate, balanceTemplate } from "./templates/balance";
import { createButton } from "./templates/createButton";
import { CreateSummary } from "./templates/createSummary";
import { helperTooltips } from "./templates/helperTooltips";
import { loadingIndicator } from "./templates/loadingIndicator";
import { redirectCounter } from "./templates/redirectCounter";
import { termsLayout } from "./templates/terms";
import { transactionUrl } from "./templates/transaction";
import {
  copyStringToClipboard,
  getById,
  getPromptEl,
  setBannerDisplayBlock,
} from "./utils";

export async function renderbalance(balance: number) {
  const balanceEl = getById("balance");
  render(balanceTemplate(balance), balanceEl);
}
export async function renderAddress(address: string) {
  const addressEl = getById("address");
  render(addressTemplate(address), addressEl);
}

export function renderAcceptTools(props: State) {
  const actionContainer = getById("action-container");
  actionContainer.innerHTML = "";
  render(acceptTools(props), actionContainer);
}

export function renderAcceptButton(props: State) {
  const buttonSlot = getById("button-slot");
  render(AcceptButton(), buttonSlot);
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

export function renderCreateButton(disabled: boolean) {
  render(createButton(disabled), getById("button-slot"));
}

export function renderTerms() {
  setBannerDisplayBlock();
  const layout = getById("overlay-layout");
  layout.style.height = "80%";
  render(termsLayout(), layout);
}

export function renderCreateFee(fee: string) {
  render(CreateSummary(fee), getById("button-slot"));
}

export function removeButtons() {
  render(``, getById("button-slot"));
}

export function removeAcceptedButton() {
  getById("accept-button").innerHTML = "";
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

export function renderTooltips() {
  const onlySigner = getById("onlysigner-tooltip");
  const expires = getById("expires-tooltip");
  const postto = getById("postto-tooltip");
  const webhook = getById("webhook-tooltip");
  const redirect = getById("redirect-tooltip");

  render(
    helperTooltips("The only arweave address that can sign this contract."),
    onlySigner
  );
  render(helperTooltips("The contract expires always at midnight"), expires);
  render(
    helperTooltips(
      "Posts to the url to path/{id}. Choose bellow the preferred method."
    ),
    postto
  );
  render(
    helperTooltips(
      "The webhook option offers an extra field on the contract for a pre-shared secret. It will be posted as {secret : string}"
    ),
    webhook
  );
  render(helperTooltips("The contract redirects in 5 seconds."), redirect);
}

export function disableCreateInputs() {
  const editor = getById("editor") as HTMLInputElement;
  const onlySigner = getById("onlysigner-input") as HTMLInputElement;
  const expires = getById("expires-input") as HTMLInputElement;
  const never = getById("expires-reset") as HTMLInputElement;
  const postto = getById("postto-input") as HTMLInputElement;
  const webhook = getById("webhook-checkbox") as HTMLInputElement;
  const redirect = getById("redirect-checkbox") as HTMLInputElement;
  const walletInput = getById("wallet-input") as HTMLInputElement;
  const walletDropzone = getById("wallet-dropzone") as HTMLDivElement;
  editor.contentEditable = "false";
  editor.style.cursor = "not-allowed";
  onlySigner.disabled = true;
  onlySigner.style.cursor = "not-allowed";
  expires.disabled = true;
  expires.style.cursor = "not-allowed";
  never.disabled = true;
  never.style.cursor = "not-allowed";
  postto.disabled = true;
  postto.style.cursor = "not-allowed";
  webhook.disabled = true;
  webhook.style.cursor = "not-allowed";
  redirect.disabled = true;
  redirect.style.cursor = "not-allowed";
  walletInput.disabled = true;
  walletInput.style.cursor = "not-allowed";
  walletDropzone.style.cursor = "not-allowed";
}
export function enableCreateInputs() {
  const editor = getById("editor") as HTMLInputElement;
  const onlySigner = getById("onlysigner-input") as HTMLInputElement;
  const expires = getById("expires-input") as HTMLInputElement;
  const never = getById("expires-reset") as HTMLInputElement;
  const postto = getById("postto-input") as HTMLInputElement;
  const webhook = getById("webhook-checkbox") as HTMLInputElement;
  const redirect = getById("redirect-checkbox") as HTMLInputElement;
  const walletInput = getById("wallet-input") as HTMLInputElement;
  const walletDropzone = getById("wallet-dropzone") as HTMLDivElement;

  editor.contentEditable = "true";
  editor.style.cursor = "text";
  onlySigner.disabled = false;
  onlySigner.style.cursor = "text";
  expires.disabled = false;
  expires.style.cursor = "pointer";
  never.disabled = false;
  never.style.cursor = "pointer";
  postto.disabled = false;
  postto.style.cursor = "text";
  webhook.disabled = false;
  webhook.style.cursor = "pointer";
  redirect.disabled = false;
  redirect.style.cursor = "pointer";
  walletInput.disabled = false;
  walletInput.style.cursor = "pointer";
  walletDropzone.style.cursor = "pointer";
}

export function disableAcceptableInputs() {
  const walletInput = getById("wallet-input") as HTMLInputElement;
  const walletDropzone = getById("wallet-dropzone") as HTMLDivElement;
  const secret = getById("secret-input") as HTMLInputElement;
  walletInput.disabled = true;
  walletInput.style.cursor = "not-allowed";
  walletDropzone.style.cursor = "not-allowed";
  secret.disabled = true;
  secret.style.cursor = "not-allowed";
}

export function enableAcceptableInputs() {
  const walletInput = getById("wallet-input") as HTMLInputElement;
  const walletDropzone = getById("wallet-dropzone") as HTMLDivElement;
  const secret = getById("secret-input") as HTMLInputElement;
  walletInput.disabled = false;
  walletInput.style.cursor = "pointer";
  walletDropzone.style.cursor = "pointer";
  secret.disabled = false;
  secret.style.cursor = "text";
}
