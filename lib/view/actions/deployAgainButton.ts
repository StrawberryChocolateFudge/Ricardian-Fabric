import {
  dispatch_enableAcceptableInputs,
  dispatch_enableCreateInputs,
  dispatch_noButtonPressed,
  dispatch_removeError,
} from "../../dispatch/render";
import { ContractTypes, State } from "../../types";
import { getById } from "../utils";

export function deployAgainButtonActions(props: State) {
  const buttonEl = getById("deploy-again-button");

  if (props.contracttype === ContractTypes.acceptable) {
    buttonEl.remove();
  }

  buttonEl.onclick = function () {
    dispatch_enableCreateInputs();
    dispatch_noButtonPressed(props);
    dispatch_enableCreateInputs();
    dispatch_enableAcceptableInputs();
    dispatch_removeError();
  };
}
