import { dispatch_renderError } from "../../dispatch/render";
import {
  dispatch_setPage,
  dispatch_setSelectedWallet,
} from "../../dispatch/stateChange";
import { PageState, SelectedWallet, State } from "../../types";
import { getById } from "../../view/utils";

export function createProposalActions(props: State) {
  //TODO: Inject Solc dependency here!

  const back = getById("createproposal-back");
  const proceed = getById("createproposal-proceed");
  const nameEl = getById("smartcontract-name") as HTMLInputElement;
  const descriptionEl = getById(
    "smartcontract-description"
  ) as HTMLInputElement;
  const codeEl = getById("smartcontract-code") as HTMLInputElement;

  const termsEl = getById("smartcontract-terms") as HTMLInputElement;
  const gitEl = getById("smartcontract-repo") as HTMLInputElement;
  const premiumEl = getById("smartcontract-premium") as HTMLInputElement;
  const priceEl = getById("smartcontract-price") as HTMLInputElement;
  const termsAcceptedEl = getById("accepted-terms") as HTMLInputElement;

  back.onclick = function () {
    dispatch_setPage(PageState.Catalog);
  };

  premiumEl.onclick = function () {
    priceEl.disabled = !premiumEl.checked;
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

export function catalogAction(props: State) {
  const backbutton = getById("SCIntentBackButton") as HTMLButtonElement;
  const nextButton = getById("SCIntentNextButton") as HTMLButtonElement;
  const createProposalButton = getById("create-proposal-button");

  createProposalButton.onclick = function () {
    dispatch_setPage(PageState.Proposals);
  };

  backbutton.onclick = function () {
    dispatch_setPage(PageState.Menu);
  };

  nextButton.onclick = function () {
    // if (hrc20.checked) {
    //   dispatch_SCDeploySelected(DeploySC.HRC20);
    // }
  };
}

export function addCatalogButtonListener(props: State) {
  const smartcontract = getById("smart-contracts-button");
  //const proposals = getById("view-proposals-button");
  //const createProp = getById("create-proposal-button");

  smartcontract.onclick = function () {
    // dispatch_setPopupState(PopupState.Catzalog);
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
