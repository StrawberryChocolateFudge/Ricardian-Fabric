import { postTransactionFromPage } from "../../business/bloc";
import {
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
  };

  yesButton.onclick = function () {
    postTransactionFromPage(props as State, props.tx, props.key);
    dispatch_yesButtonPressed(props);
  };
}
