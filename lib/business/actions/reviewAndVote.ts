import {
  dispatch_setPage,
  dispatch_setPopupState,
} from "../../dispatch/stateChange";
import {
  AcceptedSmartContractProposal,
  PageState,
  PopupState,
  RankProposal,
  RemovalProposal,
  SmartContractProposal,
  State,
} from "../../types";
import { getById } from "../../view/utils";
import {
  checkNetwork,
  getAddress,
  getBlockNumber,
  requestAccounts,
  web3Injected,
} from "../../wallet/web3";
import MetaMaskOnboarding from "@metamask/onboarding";
import {
  dispatch_renderError,
  dispatch_renderReviewRankProposals,
} from "../../dispatch/render";
import {
  getCatalogDAOContractWithWallet,
  getRankProposalIndex,
  getSmartContractProposalIndex,
  getAcceptedSmartContractIndex,
  getRemovalProposalIndex,
  getMyRankProposalsPaginated,
  getMySmartContractProposalsPaginated,
  getAcceptedSmartContractProposalsPaginated,
  getRemovalProposalsPaginated,
  voteOnNewRank,
} from "../../wallet/catalogDAO/contractCalls";
import { getPaginatedByIndexSTART } from "../utils";

export async function reviewAndVotePageActions(props: State) {
  const createProposalButton = getById("create-proposal-button");
  createProposalButton.onclick = function () {
    dispatch_setPage(PageState.Proposals);
  };

  const myProposalsButton = getById("my-proposals-button");
  myProposalsButton.onclick = function () {
    dispatch_setPage(PageState.ManageProposals);
  };

  if (!web3Injected()) {
    dispatch_renderError("Found no injected web3, install metamask");
    const onboarding = new MetaMaskOnboarding();
    onboarding.startOnboarding();
    return;
  }

  await requestAccounts();
  const correctNetwork = await checkNetwork();

  if (!correctNetwork) {
    dispatch_renderError("You need to switch to Harmony network!");
    dispatch_setPopupState(PopupState.WrongNetwork);
    return;
  }

  const myAddress = await getAddress();
  const catalogDAO = await getCatalogDAOContractWithWallet();
  const blockNumber = await getBlockNumber();

  const rankPage = await getPaginatedByIndexSTART<RankProposal[]>(
    catalogDAO,
    myAddress,
    getRankProposalIndex,
    getMyRankProposalsPaginated
  );

  dispatch_renderReviewRankProposals(props, blockNumber, rankPage);

  const smartContractPage = await getPaginatedByIndexSTART<
    SmartContractProposal[]
  >(
    catalogDAO,
    myAddress,
    getSmartContractProposalIndex,
    getMySmartContractProposalsPaginated
  );

  const acceptedSmartContractPage =
    await getPaginatedByIndexSTART<AcceptedSmartContractProposal>(
      catalogDAO,
      myAddress,
      getAcceptedSmartContractIndex,
      getAcceptedSmartContractProposalsPaginated
    );

  const removalPage = await getPaginatedByIndexSTART<RemovalProposal>(
    catalogDAO,
    myAddress,
    getRemovalProposalIndex,
    getRemovalProposalsPaginated
  );
}

export async function rankProposalTableActions() {
  const approveButtons = document.getElementsByClassName(
    "rankProposalApproveButton"
  );
  const rejectButtons = document.getElementsByClassName(
    "rankProposalRejectButton"
  );
  const myAddress = await getAddress();
  const catalogDAO = await getCatalogDAOContractWithWallet();
  const onError = (error, receipt) => {
    if (error.message.includes("903")) {
      dispatch_renderError(
        "You need to accept the DAO terms before you can vote."
      );
    } else if (error.message.includes("911")) {
      dispatch_renderError("You need rank to vote.");
    } else if (error.message.includes("912")) {
      dispatch_renderError("You voted already!");
    } else {
      dispatch_renderError(error.message);
    }
  };

  const onReceipt = (receipt) => {
    dispatch_setPage(PageState.ReviewAndVote);
  };

  const vote = async (approve: boolean, index: string) =>
    await voteOnNewRank(
      catalogDAO,
      index,
      approve,
      myAddress,
      onError,
      onReceipt
    );

  for (let i = 0; i < approveButtons.length; i++) {
    const approveButton = approveButtons[i] as HTMLButtonElement;
    const rejectButton = rejectButtons[i] as HTMLButtonElement;
    approveButton.onclick = async function () {
      const index = approveButton.dataset.index;
      vote(true, index);
    };
    rejectButton.onclick = async function () {
      const index = rejectButton.dataset.index;
      vote(false, index);
    };
  }
}
