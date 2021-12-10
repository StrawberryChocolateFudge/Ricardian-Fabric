import { CID } from "ipfs-http-client";
import { handlePost } from "../utils";
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
import { IPFS_Add } from "../../ipfs/add";
import { ContractTypes, Status, State } from "../../types";
import { getById } from "../../view/utils";
import { acceptAgreement, setTerms, watchAsset } from "../../wallet/web3";
import { dispatch_stashIpfsCID } from "../../dispatch/stateChange";

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

    const url = getUrl(CID, false);
    dispatch_stashIpfsCID(id);
    dispatch_renderTransaction(props, url, id);

    const smartContract = props.stashedDetails.smartContract;

    if (props.contracttype === ContractTypes.create) {
      dispatch_deployAgain(props);
    } else {
      await handlePost(props, id);
    }

    if (smartContract !== "NONE") {
      await smartContractActions(props, url, smartContract);
    }

    if (props.contracttype === ContractTypes.acceptable) {
      if (props.isERC20 !== null) {
        await watchAsset(props.isERC20, () => {
          dispatch_renderError(
            "Failed to add " + props.isERC20.name + " token to wallet."
          );
        });
      }
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

    const options = await acceptAgreement({
      url,
      hash: props.stashedDetails.hash,
      contractAddress: props.smartcontract,
      signerAddress: props.stashedDetails.signerAddress,
    });

    if (options.status == Status.Failure) {
      dispatch_renderError(options.error);
    }

    return options;
  }
}

function getUrl(cid: CID, testnet: boolean) {
  if (testnet) {
    return `http://localhost:8080/ipfs/${cid.toString()}`;
  } else {
    return `https://ipfs.infura.io/ipfs/${cid.toString()}`;
  }
}
