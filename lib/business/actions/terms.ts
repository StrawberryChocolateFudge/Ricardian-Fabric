import { dispatch_setPopupState } from "../../dispatch/stateChange";
import { PopupState } from "../../types";
import { getById } from "../../view/utils";
import { setTermsAccepted } from "../../view/utils";

export const createPageAgreeTerms = function () {
  const termsCheckboxLabel = getById("terms-checkbox-label");

  termsCheckboxLabel.onclick = function () {
    dispatch_setPopupState(PopupState.Terms);
  };
};

export function attachTermsButtonListeners() {
  getById("terms-accept-button").onclick = acceptTerms;
}

export function acceptTerms() {
  setTermsAccepted(true);
  dispatch_setPopupState(PopupState.NONE);
}
