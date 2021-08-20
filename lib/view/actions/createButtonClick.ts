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
  getWebhookCheckbox,
  getRedirectCheckbox,
  didExpire,
  getOnlySigner,
} from "../utils";

//TODO: The create button needs to show a modal with summary and a SIGN button should be there!

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

    const webhook = getWebhookCheckbox();
    const redirect = getRedirectCheckbox();
    const post = getPostTo();

    if (webhook || redirect) {
      if (post === "NONE") {
        dispatch_renderError("Post to, where?");
        return;
      }
    }

    // const pstContractId = getProfitSharingContractId();
    // const isInstrument = getIsInstrument();

    // if (isInstrument) {
    //   if (props.instrumentSettings.name === "") {
    //     dispatch_renderError("Instrument name is not specified");
    //     return;
    //   }

    //   if (props.instrumentSettings.ticker === "") {
    //     dispatch_renderError("Ticker is not specified");
    //     return;
    //   }

    //   if (parseInt(props.instrumentSettings.supply)) {
    //     dispatch_renderError("Invalid supply, must be a valid integer");
    //     return;
    //   }

    //   if (parseInt(props.instrumentSettings.canDerive)) {
    //     dispatch_renderError(
    //       "Invalid canDerive field, must be a valid integer"
    //     );
    //     return;
    //   }
    // }

    // const wallet_file = getById("select-file-input") as HTMLInputElement;

    // if (wallet_file.files !== null) {
    //   const getKey = async (key: any) => {
    //     //Here I call the business logic to do stuff with the key and the other values
    //     const feeInWinston = calculateFeeInWinston(props.arweave, price);
    //     const fee = props.arweave.ar.winstonToAr(feeInWinston.toString());
    //     await createAcceptableContract({
    //       props,
    //       key,
    //       data: {
    //         legalContract: props.editor.getContent(),
    //         createdDate: new Date().toISOString(),
    //         price,
    //         post,
    //         webhook,
    //         redirect,
    //         expires,
    //         version: props.version,
    //         domParser: props.domParser,
    //         creatorAddress: await getCreatorWallet(props.arweave, key),
    //         fee,
    //         onlySigner,
    //         pstContractId,
    //         isInstrument,
    //         instrumentName: props.instrumentSettings.name,
    //         instrumentTicker: props.instrumentSettings.ticker,
    //         instrumentSupply: props.instrumentSettings.supply,
    //         canDerive: props.instrumentSettings.canDerive,
    //       },
    //     });
    //   };
    //   readFile(wallet_file.files, getKey);
    // }


  };
}
