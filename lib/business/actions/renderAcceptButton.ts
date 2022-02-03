import { getFulfilledPage, getLocation, isBlocked } from "../utils";
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
} from "../../wallet/web3";
import {
  getAcceptableContract,
  getById,
  getFromUrl,
  newTab,
} from "../../view/utils";
import MetaMaskOnboarding from "@metamask/onboarding";
import { getHash } from "../../crypto";

export function renderAcceptOnCLick(props: State) {
  const acceptButton = getById("accept-button") as HTMLInputElement;
  const verifyButton = getById("verifyContract");
  verifyButton.onclick = function () {
    const url = props.creatorAppLink + "?verify=" + location.origin;
    newTab(url);
  };

  acceptButton.onclick = async function () {
    dispatch_removeError();

    if (props.blockedCountries.length > 0 && props.position === undefined) {
      getLocation(props, acceptButton);
      return;
    }

    if (props.blockedCountries.length > 0) {
      const blocked = await isBlocked(props, acceptButton);
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

    if (props.blockedAddresses.includes(participant)) {
      dispatch_renderError("Your address is blocked.");
      return;
    }

    if (props.smartcontract !== "NONE") {
      const canAccept = await canAgree(props.smartcontract, participant);
      if (!canAccept) {
        dispatch_renderError("Already accepted this contract");
        return;
      }
    }

    const hash = await getRecomputedHash(props);

    const signingSuccess = async (participantSignature: string) => {
      const page = await getFulfilledPage({
        version: props.version,
        signedDate: new Date().toISOString(),
        createdDate: props.createdDate,
        issuer: props.issuer,
        legalContract: getAcceptableContract(),
        parentUrl: getFromUrl(),
        domParser: props.domParser,
        expires: props.expires,
        redirectto: props.redirectto,
        network: props.network,
        issuerSignature: props.issuerSignature,
        participant: participant,
        participantSignature: participantSignature,
        smartContract: props.smartcontract,
        ERC20: JSON.stringify(props.isERC20),
        blockedAddresses: props.blockedAddresses,
        blockedCountries: props.blockedCountries,
      });

      dispatch_stashDetails({
        hash,
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
      hash,
      participant,
      network,
      props.smartcontract,
      signingSuccess,
      signingFailure
    );
    dispatch_disableButton(props);
  };
}

async function getRecomputedHash(props: State) {
  const legalContract = getById("contract-display").innerHTML;

  const createdDate = props.createdDate;
  const expires = props.expires;
  const redirectto = props.redirectto;
  const version = props.version;
  const issuer = props.issuer;
  const blockedCountries = props.blockedCountries;
  const blockedAddresses = props.blockedAddresses;
  const network = props.network;
  const smartContract = props.smartcontract;
  const ERC20 = JSON.stringify(props.isERC20);
  const recomputedHash = await getHash({
    legalContract,
    createdDate,
    expires,
    redirectto,
    version,
    issuer,
    blockedCountries,
    network,
    smartContract,
    blockedAddresses,
    ERC20,
  });

  return recomputedHash;
}
