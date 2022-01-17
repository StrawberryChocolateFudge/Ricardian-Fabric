import { dispatch_renderError } from "../../dispatch/render";
import { getById, newTab } from "../../view/utils";
import { getAddress, requestAccounts, web3Injected } from "../../wallet/web3";
import MetaMaskOnboarding from "@metamask/onboarding";
import {
  acceptedTerms,
  getSignupContract,
  getTerms,
} from "../../wallet/signup/contractCalls";
import { dispatch_setPage } from "../../dispatch/stateChange";
import { PageState } from "../../types";
import { registerEthereumProviderEvents } from "../utils";

export async function connectWalletButton(props) {
  const btn = getById("connectWalletButton");

  btn.onclick = async function () {
    if (!web3Injected()) {
      dispatch_renderError("Found no injected web3, install metamask");
      const onboarding = new MetaMaskOnboarding();
      onboarding.startOnboarding();
      return;
    }

    await requestAccounts();
    registerEthereumProviderEvents(props);

    //TODO: ON TESTNET LAUNCH I NEED TO COMMENT THIS BACK
    //     await switchNetwork(ChainName.Harmony, 0, "Testnet");

    // Now I check if they signed the terms,
    // If the terms is an empty string, I allow pass (dev mode)
    // if they didnt accept the terms, they get redirected

    try {
      const signUpContract = await getSignupContract();

      const contractURL = await getTerms(signUpContract);

      if (contractURL.length === 0) {
        // This is developer mode, no smart contract attached
        dispatch_setPage(PageState.Menu);
        dispatch_setPage(PageState.Dashboard);
      } else {
        const address = await getAddress();
        const signedTerms = await acceptedTerms(signUpContract, address);

        if (signedTerms) {
          // signed the terms already
          dispatch_setPage(PageState.Menu);
          dispatch_setPage(PageState.Dashboard);
        } else {
          newTab(contractURL);
        }
      }
    } catch (err) {
      dispatch_renderError(err);
    }
  };
}
