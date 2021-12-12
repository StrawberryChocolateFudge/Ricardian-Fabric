import { dispatch_setSelectedWallet } from "../../dispatch/stateChange";
import { SelectedWallet, State } from "../../types";
import { getById } from "../../view/utils";

export function catalogAction(props: State) {
  const nextButton = getById("SCIntentNextButton") as HTMLButtonElement;

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
