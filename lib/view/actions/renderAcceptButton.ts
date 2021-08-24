import { createFulfilledContractTx, isOnlySigner } from "../../business/bloc";
import {
  dispatch_disableAcceptableInputs,
  dispatch_removeError,
  dispatch_renderError,
  dispatch_renderFee,
} from "../../dispatch/render";
import { FileType, State } from "../../types";
import { getById, readFile } from "../utils";

export function renderAcceptOnCLick(props: State) {
  const acceptButton = getById("accept-button") as HTMLInputElement;

  acceptButton.onclick = async function () {
    const wallet_file = getById("wallet-input") as HTMLInputElement;
    const getKey = async (key: any) => {
      dispatch_removeError();
      const validSigner = await isOnlySigner(props, key);
      if (validSigner) {
        const tx = await createFulfilledContractTx(props, key);
        const txfee = props.arweave.ar.winstonToAr(tx.reward);
        dispatch_disableAcceptableInputs();
        dispatch_renderFee(txfee, props, tx, key);
      } else {
        dispatch_renderError("You are not allowed to sign this contract");
      }
    };
    readFile(wallet_file.files, getKey, FileType.key);
  };
}
