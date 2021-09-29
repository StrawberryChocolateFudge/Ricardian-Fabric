import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import {
  dispatch_initInputsPage,
  dispatch_renderInputs,
} from "../../../../dispatch/render";
import { dispatch_setInputsPageData } from "../../../../dispatch/stateChange";
import { State } from "../../../../types";
import { getById, getRequiredInputs } from "../../../utils";

export function inputsPage(props: State) {
  dispatch_initInputsPage(props);

  const cancelButtonEl = getById("input-cancel");
  const saveButtonEl = getById("input-save");

  const addNewInputEl = getById("add-input-item") as HTMLButtonElement;
  const newInputEl = getById("new-input-name") as HTMLInputElement;

  const inputs: Array<string> = props.inputsPage.requiredInputs.slice();

  addNewInputEl.onclick = function () {
    const input = newInputEl.value;

    if (input === "") {
      return "";
    }
    if (inputs.includes(input)) {
      return;
    }

    inputs.push(input);
    newInputEl.value = "";
    dispatchInputListRenders(inputs);
  };

  cancelButtonEl.onclick = function () {
    goToCreateRoutes();
  };
  saveButtonEl.onclick = function () {
    const requiredInputs = getRequiredInputs();
    dispatch_setInputsPageData({ requiredInputs });
    goToCreateRoutes();
  };
}

export function attachListenersToRemoveInputButtons(inputs: Array<string>) {
  inputs.forEach((input) => {
    const currentEl = getById(`remove-input-${input}`);
    currentEl.onclick = function (ev: any) {
      const index = inputs.indexOf(ev.target.name);
      inputs.splice(index, 1);
      dispatchInputListRenders(inputs);
      console.log(inputs);
    };
  });
}

export function dispatchInputListRenders(inputs: Array<string>) {
  dispatch_renderInputs(inputs);
  attachListenersToRemoveInputButtons(inputs);
}
