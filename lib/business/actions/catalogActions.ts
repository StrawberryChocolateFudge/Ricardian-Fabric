import {
  dispatch_hideElement,
  dispatch_renderError,
} from "../../dispatch/render";
import { dispatch_setPopupState, dispatch_setSelectedWallet } from "../../dispatch/stateChange";
import { PopupState, SelectedWallet, State } from "../../types";
import { getById } from "../../view/utils";

export function createProposalActions(props: State) {
  const back = getById("createproposal-back");
  const proceed = getById("createproposal-proceed");
  const nameEl = getById("smartcontract-name") as HTMLInputElement;
  const descriptionEl = getById(
    "smartcontract-description"
  ) as HTMLInputElement;
  const codeEl = getById("smartcontract-code") as HTMLInputElement;

  const isERC20El = getById("smartcontract-isERC20") as HTMLInputElement;
  const ERC20NameEl = getById("isERC20-name") as HTMLInputElement;
  const ERC20SymbolEl = getById("isERC20-symbol") as HTMLInputElement;
  const ERC20DecimalEl = getById("isERC20-decimals") as HTMLInputElement;

  const termsEl = getById("smartcontract-terms") as HTMLInputElement;
  const gitEl = getById("smartcontract-repo") as HTMLInputElement;
  const premiumEl = getById("smartcontract-premium") as HTMLInputElement;
  const priceEl = getById("smartcontract-price") as HTMLInputElement;
  const termsAcceptedEl = getById("accepted-terms") as HTMLInputElement;

  back.onclick = function () {
    dispatch_setPopupState(PopupState.NONE);
  };

  premiumEl.onclick = function () {
    priceEl.disabled = !premiumEl.checked;
  };

  isERC20El.onclick = function () {
    const checked = isERC20El.checked;
    ERC20NameEl.disabled = !checked;
    ERC20SymbolEl.disabled = !checked;
    ERC20DecimalEl.disabled = !checked;
  };

  proceed.onclick = async function () {

    if (nameEl.value === "") {
      dispatch_renderError("You must specify the name.");
      return;
    }
    if (descriptionEl.value === "") {
      dispatch_renderError("You must add a short description.");
      return;
    }
    if (codeEl.files.length !== 1) {
      dispatch_renderError("You must add the smartcontract.");
      return;
    }
    if (termsEl.files.length !== 1) {
      dispatch_renderError("You must propose terms for the contract.");
      return;
    }
    if (gitEl.value === "") {
      dispatch_renderError("You must add a valid link for a git repo.");
      return;
    }

    if (isERC20El.checked) {
      if (ERC20NameEl.value === "") {
        dispatch_renderError("You must specify a name for the ERC20");
        return;
      }
      if (ERC20SymbolEl.value === "") {
        dispatch_renderError("You must specify a symbol for the ERC20");
        return;
      }
      if (ERC20DecimalEl.value === "") {
        dispatch_renderError("You must add a decimal for the token.");
        return;
      }
    }

    if (premiumEl.checked === true) {
      if (priceEl.value === "") {
        dispatch_renderError(
          "For premium contracts , you must specify a price."
        );
        return;
      }
    }
    if (termsAcceptedEl.checked === false) {
      dispatch_renderError("You must accept the terms.");
      return;
    }
  };
}

export function addCatalogButtonListener(props: State) {
  const catalogCheckboxToggle = getById("catalog_checkbox_toggle");
  const catalogCheckboxButton = getById("catalog_checkbox_button");

  catalogCheckboxButton.onclick = function () {
    catalogCheckboxToggle.click();
  }

  const smartcontract = getById("smart-contracts-button");
  //const proposals = getById("view-proposals-button");
  //const createProp = getById("create-proposal-button");

  smartcontract.onclick = function () {
    dispatch_setPopupState(PopupState.Catalog);
  };

  // createProp.onclick = function () {
  //   dispatch_setPopupState(PopupState.createProposal);
  // };
}

export function walletSelectListener() {
  const metamask = getById("metamask-logo-container");
  metamask.onclick = function () {
    if (metamask.dataset.disabled === "false") {
      dispatch_setSelectedWallet(SelectedWallet.metamask);
    }
  };
}
