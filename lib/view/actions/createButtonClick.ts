import { calculateFeeInWinston } from "../../arweave/arweave";
import {
  createAcceptableContract,
  getCreatorWallet,
} from "../../business/bloc";
import {
  dispatch_removeError,
  dispatch_renderError,
} from "../../dispatch/render";
import { State } from "../../types";
import {
  getById,
  getExpires,
  getPrice,
  getPostTo,
  readFile,
  getWebhookCheckbox,
  getRedirectCheckbox,
  didExpire,
  getOnlySigner,
} from "../utils";
export function renderCreateButtonClick(props: State) {
  getById("save-contract").onclick = function () {
    dispatch_removeError();
    const expires = getExpires();
    const expired = didExpire(expires);

    if (expired) {
      dispatch_renderError("Date expired!");
      return;
    }

    const onlySigner = getOnlySigner();
    if (onlySigner !== "NONE" && onlySigner.length !== 43) {
      // the lengths of the address must be 43
      dispatch_renderError("Only signer address is invalid");
      return;
    }
    const price = getPrice();

    if (parseFloat(price) < 0) {
      dispatch_renderError("Price can't be negative!");
      return;
    }

    const wallet_file = getById("select-file-input") as HTMLInputElement;
    if (wallet_file.files !== null) {
      const getKey = async (key: any) => {
        //Here I call the business logic to do stuff with the key and the other values
        const feeInWinston = calculateFeeInWinston(props.arweave, price);
        const fee = props.arweave.ar.winstonToAr(feeInWinston.toString());
        await createAcceptableContract({
          props,
          key,
          data: {
            legalContract: props.editor.getContent(),
            createdDate: new Date().toISOString(),
            price,
            post: getPostTo(),
            webhook: getWebhookCheckbox(),
            redirect: getRedirectCheckbox(),
            expires,
            version: props.version,
            domParser: props.domParser,
            creatorAddress: await getCreatorWallet(props.arweave, key),
            fee,
            onlySigner,
          },
        });
      };
      readFile(wallet_file.files, getKey);
    }
  };
}
