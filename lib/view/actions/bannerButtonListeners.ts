import { getById, setTermsAccepted } from "../utils";

export function attachTermsButtonListeners() {
  getById("terms-accept-button").onclick = acceptTerms;
}

export function acceptTerms() {
  setTermsAccepted(true);
  getById("overlay").style.display = "none";
}
