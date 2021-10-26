import { getFulfilledPage, getLocation, isBlocked } from "../../business/bloc";
import {
  dispatch_disableButton,
  dispatch_enableButton,
  dispatch_removeError,
  dispatch_renderError,
} from "../../dispatch/render";
import {
  dispatch_stashDetails,
  dispatch_stashPage,
} from "../../dispatch/stateChange";
import { State } from "../../types";
import {
  canAgree,
  getAddress,
  getNetwork,
  requestAccounts,
  signHash,
  web3Injected,
} from "../../wallet";
import { getAcceptableContract, getById, getFromUrl } from "../utils";
import MetaMaskOnboarding from "@metamask/onboarding";

export function renderAcceptOnCLick(props: State) {
  const acceptButton = getById("accept-button") as HTMLInputElement;

  acceptButton.onclick = async function () {
    dispatch_removeError();

    if (props.blockedCountries.length > 0 && props.position === undefined) {
      getLocation(props);
      return;
    }

    if (props.blockedCountries.length > 0) {
      const blocked = await isBlocked(props);
      if (blocked) {
        dispatch_renderError("You are not allowed to sign this contract.");
        dispatch_disableButton(props);
        return;
      }
    }

    if (!web3Injected()) {
      dispatch_renderError("Found no injected web3, install metamask");
      const onboarding = new MetaMaskOnboarding();
      onboarding.startOnboarding();
      return;
    }

    await requestAccounts();

    // I need to get the address of the signer
    // make sure its the same network
    const network = `${await getNetwork()}`;

    if (network !== props.network) {
      dispatch_renderError("You must switch to another network!");
      return;
    }

    const participant = await getAddress();

    if (props.smartcontract !== "NONE") {
      const canAccept = await canAgree(props.smartcontract, participant);
      if (!canAccept) {
        dispatch_renderError("Already accepted this contract");
        return;
      }
    }

    const signingSuccess = async (participantSignature: string) => {
      const page = await getFulfilledPage({
        version: props.version,
        createdDate: new Date().toISOString(),
        issuer: props.issuer,
        legalContract: getAcceptableContract(),
        parentUrl: getFromUrl(),
        domParser: props.domParser,
        expires: props.expires,
        redirectto: props.redirectto,
        network: props.network,
        hash: props.hash,
        issuerSignature: props.issuerSignature,
        participant: participant,
        participantSignature: participantSignature,
        smartContract: props.smartcontract,
        ERC20: JSON.stringify(props.isERC20),
      });

      dispatch_stashDetails({
        hash: props.hash,
        signerAddress: participant,
        signature: participantSignature,
        network: props.network,
        smartContract: props.smartcontract,
      });

      dispatch_stashPage(page);
    };
    const signingFailure = async (msg: string) => {
      dispatch_enableButton(props);
      dispatch_renderError(msg);
    };

    await signHash(
      props.hash,
      participant,
      network,
      props.smartcontract,
      signingSuccess,
      signingFailure,
      props.contracttype,
      undefined
    );
    dispatch_disableButton(props);
  };
}
