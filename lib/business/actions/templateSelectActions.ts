import { dispatch_setPopupState } from "../../dispatch/stateChange";
import { PopupState, State } from "../../types";
import { getById } from "../../view/utils";

export function templateSelectActions(props: State) {
  const importDocX = getById("import-docx-trigger");
  importDocX.onclick = function () {
    //Dispatch a popup and render the docx stuff into it
    dispatch_setPopupState(PopupState.ImportTemplate);
  };
}
