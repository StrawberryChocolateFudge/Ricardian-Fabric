import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import { State } from "../../../../types";
import { getById } from "../../../utils";

export function inputsPage(props: State) {
  // ToDo: init

  const cancelButton = getById("input-cancel");
  const saveButton = getById("input-save");

  cancelButton.onclick = function () {
    goToCreateRoutes();
  };
  saveButton.onclick = function () {
    goToCreateRoutes();
  };
}
