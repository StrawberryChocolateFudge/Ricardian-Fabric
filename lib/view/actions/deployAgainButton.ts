import { dispatch_deployAgain, dispatch_enableCreateInputs, dispatch_renderCreateButton } from "../../dispatch/render";
import { removeTransaction } from "../render";
import { getById } from "../utils";

export function deployAgainButtonActions() {
  const buttonEl = getById("deploy-again-button");

  buttonEl.onclick = function () {
    dispatch_enableCreateInputs();
    dispatch_deployAgain();
  };
}
