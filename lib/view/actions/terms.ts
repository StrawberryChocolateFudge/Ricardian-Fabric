import { dispatch_renderTerms } from "../../dispatch/render";
import { getById } from "../utils";
import { setTermsAccepted } from "../utils";

export const createPageAgreeTerms = function () {
  const termsCheckboxLabel = getById("terms-checkbox-label");

  termsCheckboxLabel.onclick = function () {
    dispatch_renderTerms();
  };
};

export function attachTermsButtonListeners() {
  getById("terms-accept-button").onclick = acceptTerms;
}

export function acceptTerms() {
  setTermsAccepted(true);
  getById("overlay").style.display = "none";
}
