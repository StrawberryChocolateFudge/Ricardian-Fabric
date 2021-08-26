import { dispatch_renderTerms } from "../../dispatch/render";
import { getById } from "../utils";

export const createPageAgreeTerms = function () {
  const termsCheckboxLabel = getById("terms-checkbox-label");

  termsCheckboxLabel.onclick = function () {
    dispatch_renderTerms();
  };
};
