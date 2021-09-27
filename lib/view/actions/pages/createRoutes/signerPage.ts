import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import { State } from "../../../../types";
import { getById } from "../../../utils";

export function signerPage(props: State) {
  const cancelButton = getById("signer-cancel");
  const nextButton = getById("signer-save");
  const addSelectedCountry = getById("add-country");

  cancelButton.onclick = function () {
    goToCreateRoutes();
  };

  nextButton.onclick = function () {
    goToCreateRoutes();
  };

}
