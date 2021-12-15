import { dispatch_setPage } from "../../dispatch/stateChange";
import { PageState, State } from "../../types";
import { getById } from "../../view/utils";
import { getAddress, requestAccounts, web3Injected } from "../../wallet/web3";
import MetaMaskOnboarding from "@metamask/onboarding";
import {
  getCatalogDAOContract,
  getRankProposalIndex,
} from "../../wallet/catalogDAO/contractCalls";
import { dispatch_renderError } from "../../dispatch/render";

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
  // Should show a popup prompting to switch to harmony network!
  //await switchToHarmony(0, "Testnet");

  const myAddress = await getAddress();
  const catalogDAO = await getCatalogDAOContract();

  const rankProposalIndex = await getRankProposalIndex(catalogDAO, myAddress);

  const createProposalButton = getById("create-proposal-button");
  createProposalButton.onclick = function () {
    dispatch_setPage(PageState.Proposals);
  };

  const myProposalsButton = getById("my-proposals-button");
  myProposalsButton.onclick = function () {
    dispatch_setPage(PageState.ManageProposals);
  };
}
