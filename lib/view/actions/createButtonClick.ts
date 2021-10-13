import Web3 from "web3";
import { getAcceptablePage } from "../../business/bloc";
import { getHash } from "../../crypto";
import {
  dispatch_disableButton,
  dispatch_removeError,
  dispatch_renderError,
  dispatch_disableCreateInputs,
  dispatch_enableButton,
  dispatch_enableCreateInputs,
} from "../../dispatch/render";
import {
  dispatch_stashPage,
  dispatch_stashDetails,
} from "../../dispatch/stateChange";
import { State } from "../../types";
import {
  getAddress,
  getNetwork,
  requestAccounts,
  signHash,
  web3Injected,
} from "../../wallet";
import {
  getById,
  getExpires,
  didExpire,
  getOnlySigner,
  getTermsCheckbox,
  getRedirectTo,
  getSmartContract,
} from "../utils";
import MetaMaskOnboarding from '@metamask/onboarding';

export function renderCreateButtonClick(props: State) {
  const termsCheckbox = getTermsCheckbox();

  termsCheckbox.onclick = function () {
    if (termsCheckbox.checked) {
      const expires = getExpires();

      if (!didExpire(expires)) {
        dispatch_enableButton(props);
      }
    } else {
      dispatch_disableButton(props);
    }
  };

  getById("save-contract").onclick = async function () {
    dispatch_removeError();
    const expires = getExpires();
    const expired = didExpire(expires);

    if (expired) {
      dispatch_renderError("Date expired!");
      return;
    }

    const onlySigner = getOnlySigner();
    const redirectto = getRedirectTo();

    //Terms and agreements need to be accepted again with a checkbox
    const termsCheckbox = getTermsCheckbox();

    if (!termsCheckbox.checked) {
      dispatch_renderError(
        "You must check the checkbox to agree to the terms."
      );
      return;
    }

    if (!web3Injected()) {
      dispatch_renderError("Found no injected web3, install metamask");
      const onboarding = new MetaMaskOnboarding();
      onboarding.startOnboarding();
      return;
    }

    await requestAccounts();

    const web3 = new Web3(window.ethereum);

    //I would need to show a loading indicator and a button to cancel while I request signatures

    const legalContract = props.editor.getContent();
    const createdDate = new Date().toISOString();
    const version = props.version;
    const network = `${await getNetwork(web3)}`;
    const issuer = await getAddress(web3);
    const smartcontract = getSmartContract();
    //I need to create the hash from legalContract,createdDate,expires,redirectto,version,issuer,onlysigner,network
    const hash = await getHash({
      legalContract,
      createdDate,
      expires,
      redirectto,
      version,
      issuer,
      onlySigner,
      network,
      smartcontract,
    });

    const signingSuccess = async (issuerSignature: string) => {
      const page = await getAcceptablePage({
        props,
        data: {
          domParser: props.domParser,
          legalContract,
          createdDate,
          redirectto,
          expires,
          version,
          issuer,
          onlySigner,
          network,
          hash,
          issuerSignature,
          smartcontract,
        },
      });

      dispatch_stashDetails({
        hash,
        signerAddress: issuer,
        signature: issuerSignature,
        network,
      });

      dispatch_stashPage(page);
    };

    const onSigningFailure = async (msg: string) => {
      dispatch_enableButton(props);
      dispatch_enableCreateInputs();
      dispatch_renderError(msg);
    };

    //The issuer needs to sign the hash
    await signHash(hash, web3, issuer, signingSuccess, onSigningFailure);
    dispatch_disableButton(props);
    dispatch_disableCreateInputs();
  };
}
