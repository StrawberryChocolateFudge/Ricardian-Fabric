import { calculateFeeInWinston } from "../../arweave/arweave";
import {
  createAcceptablePageContractTX,
  getCreatorWallet,
} from "../../business/bloc";
import {
  dispatch_disableButton,
  dispatch_removeError,
  dispatch_renderFee,
  dispatch_renderError,
  dispatch_disableCreateInputs,
} from "../../dispatch/render";
import { FeeType, FileType, State } from "../../types";
import {
  getById,
  getExpires,
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
      dispatch_disableButton(props);
      return;
    }

    const onlySigner = getOnlySigner();
    if (onlySigner !== "NONE" && onlySigner.length !== 43) {
      // the lengths of the address must be 43
      dispatch_renderError("Only signer address is invalid");
      return;
    }
    const price = "NONE";

    const webhook = getWebhookCheckbox();
    const redirect = getRedirectCheckbox();
    const post = getPostTo();

    if (webhook || redirect) {
      if (post === "NONE") {
        dispatch_renderError("Post to, where?");
        return;
      }
    }

    const wallet_file = getById("wallet-input") as HTMLInputElement;

    if (wallet_file.files !== null) {
      const getKey = async (key: any) => {
        const feeInWinston = calculateFeeInWinston(props.arweave, price);
        const fee = props.arweave.ar.winstonToAr(feeInWinston.toString());
        //Here I call the business logic to do stuff with the key and the other values
        const tx = await createAcceptablePageContractTX({
          props,
          key,
          data: {
            legalContract: props.editor.getContent(),
            createdDate: new Date().toISOString(),
            price,
            post,
            webhook,
            redirect,
            expires,
            version: props.version,
            domParser: props.domParser,
            creatorAddress: await getCreatorWallet(props.arweave, key),
            fee,
            onlySigner,
            logoSrc: props.logoSrc,
          },
        });

        const txfee = props.arweave.ar.winstonToAr(tx.reward);
        dispatch_disableCreateInputs();

        //Show popup
        dispatch_renderFee(txfee, props, tx, key);
      };
      readFile(wallet_file.files, getKey, FileType.key);
    }
  };
}

