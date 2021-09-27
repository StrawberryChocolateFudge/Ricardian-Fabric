import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import { State } from "../../../../types";
import { getById } from "../../../utils";

export function nftPage(props: State) {
  //Dispatch the initialization

  const cancelButton = getById("nftpage-cancel");
  const saveButton = getById("nftpage-save");

  cancelButton.onclick = function (e: Event) {
    goToCreateRoutes();
  };

  saveButton.onclick = function (e: Event) {
    goToCreateRoutes();
  };
}
