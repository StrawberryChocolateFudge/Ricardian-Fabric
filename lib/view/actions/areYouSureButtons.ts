import {
  dispatch_deployAgain,
  dispatch_enableAcceptableInputs,
  dispatch_enableCreateInputs,
  dispatch_noButtonPressed,
  dispatch_renderLoadingIndicator,
  dispatch_renderTransaction,
  dispatch_yesButtonPressed,
} from "../../dispatch/render";
import { IPFS_Add } from "../../ipfs/add";
import { ContractTypes, State } from "../../types";
import { getById } from "../utils";

export function areYouSureButtons(props: State) {
  const noButton = getById("no-button");
  const yesButton = getById("yes-button");
  noButton.onclick = function () {
    dispatch_noButtonPressed(props);
    dispatch_enableCreateInputs();
    dispatch_enableAcceptableInputs();
  };

  yesButton.onclick = async function () {
    dispatch_renderLoadingIndicator("transaction-display");
    dispatch_yesButtonPressed(props);

    const CID = await IPFS_Add(props.stashedPage, props.ipfs);
    dispatch_renderTransaction(
      props,
      `http://localhost:8080/ipfs/${CID.toString()}`
    );

    if (props.contracttype === ContractTypes.create) {
      dispatch_deployAgain(props);
    } else {
    }
  };
}
