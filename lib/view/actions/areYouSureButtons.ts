import { postTransactionFromPage } from "../../business/bloc";
import {
  dispatch_enableAcceptableInputs,
  dispatch_enableCreateInputs,
  dispatch_noButtonPressed,
  dispatch_yesButtonPressed,
} from "../../dispatch/render";
import { State } from "../../types";
import { getById } from "../utils";

export function areYouSureButtons(props: any) {
  const noButton = getById("no-button");
  const yesButton = getById("yes-button");
  noButton.onclick = function () {
    dispatch_noButtonPressed(props);
    dispatch_enableCreateInputs();
    dispatch_enableAcceptableInputs();
  };

  yesButton.onclick = async function () {
    dispatch_yesButtonPressed(props);
    await postTransactionFromPage(props as State, props.tx, props.key);
  };
}
