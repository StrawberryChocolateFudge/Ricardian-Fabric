import { getAcceptablePage } from "../utils";
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
import { State, Status } from "../../types";
import {
  canUseContract,
  getAddress,
  getNetwork,
  requestAccounts,
  signHash,
  web3Injected,
} from "../../wallet/web3";
import {
  getById,
  getExpires,
  didExpire,
  getTermsCheckbox,
  getRedirectTo,
  getSmartContract,
  getBlockedCountries,
  getBlockedAddresses,
  getSameAsAboveButton,
  getERCSmartContractElement,
  getERC20Params,
} from "../../view/utils";
import MetaMaskOnboarding from "@metamask/onboarding";

export function renderCreateButtonClick(props: State) {
  const termsCheckbox = getTermsCheckbox();
  const sameButton = getSameAsAboveButton();

  sameButton.onclick = function () {
    const smartC = getSmartContract();
    if (smartC !== "NONE") {
      const ercSmartC = getERCSmartContractElement();
      ercSmartC.value = smartC;
    }
  }


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

    const blockedCountries = getBlockedCountries();
    const blockedAddressOptions = getBlockedAddresses();

    if (blockedAddressOptions.status !== Status.Success) {
      dispatch_renderError("Blocked addresses are malformed");
      return;
    }

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

    const legalContract = props.editor.getContent();
    const createdDate = new Date().toISOString();
    const version = props.version;
    const network = `${await getNetwork()}`;
    const issuer = await getAddress();
    const smartContract = getSmartContract();

    if (smartContract !== "NONE") {
      const canUse = await canUseContract(smartContract, issuer);
      if (!canUse) {
        dispatch_renderError("Invalid smart contract");
        return;
      }
    }
    const ERC20ParamsOptions = getERC20Params();

    if (ERC20ParamsOptions.status === Status.Failure) {
      dispatch_renderError(ERC20ParamsOptions.error);
      return;
    }

    const ERC20 = JSON.stringify(ERC20ParamsOptions.data);

    //I need to create the hash from legalContract,createdDate,expires,redirectto,version,issuer,onlysigner,network
    const hash = await getHash({
      legalContract,
      createdDate,
      expires,
      redirectto,
      version,
      issuer,
      blockedCountries,
      network,
      smartContract,
      blockedAddresses: blockedAddressOptions.data,
      ERC20,
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
          blockedCountries,
          blockedAddresses: blockedAddressOptions.data,
          network,
          issuerSignature,
          smartContract,
          ERC20,
        },
      });

      dispatch_stashDetails({
        hash,
        signerAddress: issuer,
        signature: issuerSignature,
        network,
        smartContract,
      });

      dispatch_stashPage(page);
    };

    const onSigningFailure = async (msg: string) => {
      dispatch_enableButton(props);
      dispatch_enableCreateInputs();
      dispatch_renderError(msg);
    };

    //The issuer needs to sign the hash
    await signHash(
      hash,
      issuer,
      network,
      smartContract,
      signingSuccess,
      onSigningFailure,
      props.contracttype,
      undefined
    );
    dispatch_disableButton(props);
    dispatch_disableCreateInputs();
  };
}
