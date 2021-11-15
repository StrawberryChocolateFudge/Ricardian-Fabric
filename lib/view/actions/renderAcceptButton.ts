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
import { BlockCountry, State } from "../../types";
import {
  canAgree,
  getAddress,
  getNetwork,
  requestAccounts,
  signHash,
  web3Injected,
} from "../../wallet/web3";
import { getAcceptableContract, getById, getFromUrl } from "../utils";
import MetaMaskOnboarding from "@metamask/onboarding";
import { getHash } from "../../crypto";

export function renderAcceptOnCLick(props: State) {
  const acceptButton = getById("accept-button") as HTMLInputElement;

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

    const hash = await getRecomputedHash();

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
        issuerSignature: props.issuerSignature,
        participant: participant,
        participantSignature: participantSignature,
        smartContract: props.smartcontract,
        ERC20: JSON.stringify(props.isERC20),
        selectedWallet: props.selectedWallet,
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
      signingFailure,
      props.contracttype,
      undefined
    );
    dispatch_disableButton(props);
  };
}

async function getRecomputedHash() {
  const legalContract = getById("contract-display").innerHTML;
  const page = getById("page");
  const createdDate = page.dataset.created;
  const expires = page.dataset.expires;
  const redirectto = page.dataset.redirectto;
  const version = page.dataset.version;
  const issuer = page.dataset.issuer;
  const blockedCountries = JSON.parse(
    page.dataset.blockedcountries
  ) as BlockCountry[];
  const network = page.dataset.network;
  const smartContract = page.dataset.smartcontract;
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
  });

  return recomputedHash;
}
