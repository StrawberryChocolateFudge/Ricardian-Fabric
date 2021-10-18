import { CID } from "ipfs-http-client";
import { handlePost } from "../../business/bloc";
import {
  dispatch_deployAgain,
  dispatch_enableAcceptableInputs,
  dispatch_enableCreateInputs,
  dispatch_noButtonPressed,
  dispatch_renderError,
  dispatch_renderLoadingIndicator,
  dispatch_renderTransaction,
  dispatch_yesButtonPressed,
} from "../../dispatch/render";
import { permapin } from "../../fetch";
import { IPFS_Add } from "../../ipfs/add";
import { ContractTypes, Status, State, PinOptions } from "../../types";
import { acceptAgreement, setTerms } from "../../wallet";
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
    const id = `${CID.toString()}`;
    const url = getUrl(CID);
    dispatch_renderTransaction(props, url);
    // await permapinDispatch(id, props);

    const smartContract = props.stashedDetails.smartContract;

    if (smartContract !== "NONE") {
      await smartContractActions(props, url, smartContract);
    }
  };
}

async function smartContractActions(
  props: State,
  url: string,
  smartContract: string
) {
  if (props.contracttype === ContractTypes.create) {
    const options = await setTerms({
      url,
      hash: props.stashedDetails.hash,
      contractAddress: smartContract,
      signerAddress: props.stashedDetails.signerAddress,
    });
    if (options.status == Status.Failure) {
      dispatch_renderError(options.error);
    }
  } else if (props.contracttype === ContractTypes.acceptable) {
    const options = await acceptAgreement({
      url,
      hash: props.hash,
      contractAddress: props.smartcontract,
      signature: props.stashedDetails.signature,
      signerAddress: props.stashedDetails.signerAddress,
    });

    if (options.status == Status.Failure) {
      dispatch_renderError(options.error);
    }
  }
}

function getUrl(cid: CID) {
  return `http://localhost:8080/ipfs/${cid.toString()}`;
}

async function permapinDispatch(id: string, props: State) {
  await permapin(id, props.ipfsArweaveBridge).then(async (res: PinOptions) => {
    if (res.status === Status.Failure) {
      dispatch_renderError(res.error);
    }

    if (props.contracttype === ContractTypes.create) {
      dispatch_deployAgain(props);
    } else {
      await handlePost(props, id);
    }
  });
}
