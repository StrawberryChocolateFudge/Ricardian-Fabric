import { html, render } from "lit-html";
import { ContractTypes, State } from "../types";
import { AcceptButton, acceptTools } from "./templates/acceptTools";
import { createButton } from "./templates/createButton";
import { CreateSummary } from "./templates/createSummary";
import { helperTooltips } from "./templates/helperTooltips";
import { loadingIndicator } from "./templates/loadingIndicator";
import { redirectCounter } from "./templates/redirectCounter";
import { SanctionsDropdown } from "./templates/sanctionsDropdown";
import { termsLayout } from "./templates/terms";
import { transactionUrl } from "./templates/transaction";
import {
  copyStringToClipboard,
  getById,
  getPromptEl,
  getPromptElDOCX,
  setBannerDisplayBlock,
} from "./utils";

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

export async function renderTransaction(props: State, url: string) {
  render(transactionUrl(props, url), getById("transaction-display"));
  copyStringToClipboard(url);
}

export async function removeTransaction() {
  render("", getById("transaction-display"));
}

export function renderError(message: string) {
  const errorDisplay = getById("error-display");
  // Add the "show" class to DIV
  errorDisplay.className = "show";
  errorDisplay.textContent = message;
}

export function removeError() {
  const errorDisplay = getById("error-display");
  errorDisplay.className = errorDisplay.className.replace("show", "");
  errorDisplay.innerHTML = "";
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

export function renderSummary(props: State) {
  render(CreateSummary(props), getById("button-slot"));
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

export function updatePromptSuccessDOCX(file: File) {
  const prompt = getPromptElDOCX();
  prompt.style.color = "black";
  prompt.textContent = file.name;
}

export function updatePromptErrorDOCX(message: string) {
  const prompt = getPromptElDOCX();
  prompt.textContent = message;
  prompt.style.color = "red";
}

export function renderTooltips() {
  const sanctions = getById("sanctions-tooltip");
  const expires = getById("expires-tooltip");
  const redirectto = getById("redirectto-tooltip");
  const Scontract = getById("smartcontract-tooltip");
  const customNetwork = getById("customnetwork-tooltip");
  render(
    helperTooltips(
      "Ricardian Fabric uses Geolocation to block access from sanctioned countries."
    ),
    sanctions
  );
  render(helperTooltips("The contract expires always at midnight"), expires);
  render(
    helperTooltips("Redirects here with /{id}. Leave empty if not used"),
    redirectto
  );

  render(
    helperTooltips(
      "The address of a Compatible Smart Contract that Ricardian Fabric will call."
    ),
    Scontract
  );
  render(
    helperTooltips(
      "Check this to use your own custom network in metamask. Default is Harmony."
    ),
    customNetwork
  );
}

export function disableCreateInputs() {
  const editor = getById("editor") as HTMLInputElement;
  const expires = getById("expires-input") as HTMLInputElement;
  const never = getById("expires-reset") as HTMLInputElement;
  const redirectto = getById("redirectto-input") as HTMLInputElement;
  const termsCheckbox = getById("terms-checkbox") as HTMLInputElement;
  const termsCheckboxLabel = getById("terms-checkbox-label");

  const docxDropper = getById("docx-input") as HTMLInputElement;
  const smartContract = getById("smartcontract-input") as HTMLInputElement;
  const sanctions = getById("sanctions_checkbox_toggle") as HTMLInputElement;
  const sanctionsLabel = getById("sanctions_checkbox_label");

  editor.contentEditable = "false";
  editor.style.cursor = "not-allowed";

  sanctions.disabled = true;

  sanctions.style.cursor = "not-allowed";
  sanctionsLabel.style.cursor = "not-allowed";
  sanctionsLabel.style.backgroundColor = "white";

  expires.disabled = true;
  expires.style.cursor = "not-allowed";
  never.disabled = true;
  never.style.cursor = "not-allowed";
  redirectto.disabled = true;
  redirectto.style.cursor = "not-allowed";

  termsCheckbox.disabled = true;
  termsCheckbox.style.cursor = "not-allowed";
  termsCheckboxLabel.style.backgroundColor = "white";

  docxDropper.disabled = true;
  docxDropper.style.cursor = "not-allowed";

  smartContract.disabled = true;
  smartContract.style.cursor = "not-allowed";
}
export function enableCreateInputs() {
  const editor = getById("editor") as HTMLInputElement;
  const expires = getById("expires-input") as HTMLInputElement;
  const never = getById("expires-reset") as HTMLInputElement;
  const redirectto = getById("redirectto-input") as HTMLInputElement;
  const termsCheckbox = getById("terms-checkbox") as HTMLInputElement;
  const termsCheckboxLabel = getById("terms-checkbox-label");

  const docxDropper = getById("docx-input") as HTMLInputElement;
  const smartContract = getById("smartcontract-input") as HTMLInputElement;
  const sanctions = getById("sanctions_checkbox_toggle") as HTMLInputElement;
  const sanctionsLabel = getById("sanctions_checkbox_label");

  sanctions.disabled = false;
  sanctions.style.cursor = "pointer";
  sanctionsLabel.style.cursor = "pointer";
  sanctionsLabel.style.backgroundColor = "#f2f2f2";

  editor.contentEditable = "true";
  editor.style.cursor = "text";
  expires.disabled = false;
  expires.style.cursor = "pointer";
  never.disabled = false;
  never.style.cursor = "pointer";
  redirectto.disabled = false;
  redirectto.style.cursor = "auto";

  termsCheckbox.disabled = false;
  termsCheckbox.style.cursor = "pointer";
  termsCheckboxLabel.style.backgroundColor = "#f2f2f2";

  docxDropper.disabled = false;
  docxDropper.style.cursor = "pointer";

  smartContract.disabled = false;
  smartContract.style.cursor = "auto";
}

export function renderButtonSlotAlignment(center: boolean) {
  const buttonSlot = getById("button-slot");

  if (center) {
    buttonSlot.style.margin = "0 auto";
  } else {
    buttonSlot.style.margin = null;
  }
}

export function renderSanctionsDropdown() {
  const dropdown = getById("dropdown");
  render(SanctionsDropdown(true), dropdown);
  const toggle = getById("sanctions_checkbox_toggle") as HTMLInputElement;
  toggle.onchange = function () {
    if (toggle.checked) {
      render(SanctionsDropdown(false), dropdown);
    } else {
      render(SanctionsDropdown(true), dropdown);
    }
  };

  const page = getById("page");
  page.onclick = function (ev: Event) {
    // Handling click away by checking where the click bubbles from
    if (!ev.composedPath().includes(dropdown)) {
      //If the click event didn't bubble from the dropdown
      toggle.checked = false;
      render(SanctionsDropdown(true), dropdown);
    }
  };
}
