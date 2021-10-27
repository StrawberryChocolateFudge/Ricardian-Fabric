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
import { acceptAgreement, setTerms, signHash, watchAsset } from "../../wallet";
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

    if (props.contracttype === ContractTypes.create) {
      dispatch_deployAgain(props);
    } else {
      await handlePost(props, id);
    }
  };
}

async function smartContractActions(
  props: State,
  url: string,
  smartContract: string
) {
  const hash = props.stashedDetails.hash;
  const signerAddress = props.stashedDetails.signerAddress;
  if (props.contracttype === ContractTypes.create) {
    const options = await setTerms({
      url,
      hash,
      contractAddress: smartContract,
      signerAddress,
    });
    if (options.status == Status.Failure) {
      dispatch_renderError(options.error);
    }
  } else if (props.contracttype === ContractTypes.acceptable) {
    //I need to sign both the url and the hash

    const onSuccess = async (signature: string) => {
      //I NEED TO CALL THE ACCEPT AGREEMENT FROM HERE!


      const options = await acceptAgreement({
        url,
        hash: props.hash,
        contractAddress: props.smartcontract,
        signature: signature,
        signerAddress: props.stashedDetails.signerAddress,
      });

      if (options.status == Status.Failure) {
        dispatch_renderError(options.error);
      }

      if (props.isERC20.name !== undefined) {
        await watchAsset(props.isERC20, () => {
          dispatch_renderError(
            "Failed to add " + props.isERC20.name + " token to wallet."
          );
        });
      }
    };

    const onError = (msg: string) => {
      dispatch_renderError(msg);
    };

    await signHash(
      hash,
      signerAddress,
      props.network,
      props.smartcontract,
      onSuccess,
      onError,
      props.contracttype,
      url
    );
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
  });
}
