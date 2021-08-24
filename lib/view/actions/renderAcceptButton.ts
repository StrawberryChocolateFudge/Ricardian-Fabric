import {
  acceptAndPayContract,
  acceptContract,
  isOnlySigner,
} from "../../business/bloc";
import {
  dispatch_removeError,
  dispatch_renderError,
} from "../../dispatch/render";
import { FileType, State } from "../../types";
import { getById, readFile } from "../utils";

export function renderAcceptOnCLick(props: State) {
  const acceptButton = getById("accept-button") as HTMLInputElement;

  acceptButton.onclick = async function () {
    const wallet_file = getById("select-file-input") as HTMLInputElement;
    const getKey = async (key: any) => {
      dispatch_removeError();
      const validSigner = await isOnlySigner(props, key);
      if (validSigner) {
        const price = props.price;
        if (price !== "NONE") {
          await acceptAndPayContract({
            props,
            ar: price,
            key,
          });
        } else {
          await acceptContract(props, key);
        }
      } else {
        dispatch_renderError("You are not allowed to sign this contract");
      }
    };
    readFile(wallet_file.files, getKey, FileType.key);
  };
}
