import { dispatch_setPage } from "../../dispatch/stateChange";
import { PageState, State } from "../../types";
import { getById } from "../../view/utils";
import {
  getAddress,
  requestAccounts,
  switchToHarmony,
  web3Injected,
} from "../../wallet/web3";
import MetaMaskOnboarding from "@metamask/onboarding";
import { getCatalogDAOContract } from "../../wallet/catalogDAO/contractCalls";

export async function reviewAndVotePageActions(props: State) {
  if (!web3Injected()) {
    dispatch_renderError("Found no injected web3, install metamask");
    const onboarding = new MetaMaskOnboarding();
    onboarding.startOnboarding();
    return;
  }

  await requestAccounts();
  // IT MUST BE HARMONY NETWORK!
  // If it's not, prompt to switch to harmony
  await switchToHarmony(0, "Testnet");
  
  const myAddress = await getAddress();
  const catalogDAO = await getCatalogDAOContract();

  const createProposalButton = getById("create-proposal-button");
  createProposalButton.onclick = function () {
    dispatch_setPage(PageState.Proposals);
  };
}

function dispatch_renderError(arg0: string) {
  throw new Error("Function not implemented.");
}
