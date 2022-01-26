import {
  dispatch_setPage,
  dispatch_setPopupState,
} from "../../dispatch/stateChange";
import { PageState, PopupState, RankProposal, State } from "../../types";
import { getById, newTab } from "../../view/utils";
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
  getMyRankProposalsPaginated,
  voteOnNewRank,
  acceptedTerms,
  getTerms,
} from "../../wallet/catalogDAO/contractCalls";
import { getPaginatedByIndex, hasError, OptionsBuilder } from "../utils";
import {
  getDaoStakingContract,
  isStaking,
} from "../../wallet/daoStaking/contractCalls";

export async function reviewAndVotePageActions(props: State) {
  const createProposalButton = getById("create-proposal-button");
  createProposalButton.onclick = async function () {
    const catalogDAOOptions = await OptionsBuilder(() =>
      getCatalogDAOContractWithWallet()
    );

    if (hasError(catalogDAOOptions)) {
      return;
    }
    const acceptedOptions = await OptionsBuilder(() =>
      acceptedTerms(catalogDAO, myAddress)
    );
    if (hasError(acceptedOptions)) {
      return;
    }

    if (acceptedOptions.data === false) {
      dispatch_renderError("You need to accept the DAO terms.");
      const URLOptions = await OptionsBuilder(async () => getTerms(catalogDAO));

      if (hasError(URLOptions)) {
        return;
      }
      newTab(URLOptions.data);
    } else {
      dispatch_setPage(PageState.Proposals);
    }
  };

  const myProposalsButton = getById("my-proposals-button");
  myProposalsButton.onclick = function () {
    dispatch_setPage(PageState.ManageProposals);
  };

  const pSTPageButton = getById("profit-sharing-button");

  pSTPageButton.onclick = async function () {
    const addressOptions = await OptionsBuilder(() => getAddress());
    if (hasError(addressOptions)) {
      return;
    }
    // Check if the user is staking..
    const daoStakingOptions = await OptionsBuilder(() =>
      getDaoStakingContract()
    );

    if (hasError(daoStakingOptions)) {
      return;
    }
    const isStakingOptions = await OptionsBuilder(() =>
      isStaking(
        daoStakingOptions.data,
        addressOptions.data,
        addressOptions.data
      )
    );

    if (hasError(isStakingOptions)) {
      return;
    }

    if (isStakingOptions.data === true) {
      dispatch_setPage(PageState.profitSharing);
    } else {
      dispatch_renderError("You need to be staking to access Ar sharing");
    }
  };

  const feePageButton = getById("fee-proposals-button");

  feePageButton.onclick = function () {
    dispatch_setPage(PageState.feeProposals);
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

  const rankPage = await getPaginatedByIndex<RankProposal[]>(
    1,
    catalogDAO,
    myAddress,
    getRankProposalIndex,
    getMyRankProposalsPaginated
  );

  dispatch_renderReviewRankProposals(props, blockNumber, rankPage);

  // const smartContractPage = await getPaginatedByIndexSTART<
  //   SmartContractProposal[]
  // >(
  //   catalogDAO,
  //   myAddress,
  //   getSmartContractProposalIndex,
  //   getMySmartContractProposalsPaginated
  // );

  // const acceptedSmartContractPage =
  //   await getPaginatedByIndexSTART<AcceptedSmartContractProposal>(
  //     catalogDAO,
  //     myAddress,
  //     getAcceptedSmartContractIndex,
  //     getAcceptedSmartContractProposalsPaginated
  //   );

  // const removalPage = await getPaginatedByIndexSTART<RemovalProposal>(
  //   catalogDAO,
  //   myAddress,
  //   getRemovalProposalIndex,
  //   getRemovalProposalsPaginated
  // );
}

export async function rankProposalTableActions(props: State) {
  const paginationButtons = document.getElementsByClassName(
    "rankPagePaginationButton"
  );
  const pageLeftButton = getById("rank-page-left");
  const pageRightButton = getById("rank-page-right");

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
  // starts with _ because an import can shadow it
  const _getProposals = async (index: number) =>
    await getPaginatedByIndex<RankProposal[]>(
      index,
      catalogDAO,
      myAddress,
      getRankProposalIndex,
      getMyRankProposalsPaginated
    );

  // Add the onclick for the Rank approve buttons

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

  // add the onclick for the rank pagination buttons
  for (let i = 0; i < paginationButtons.length; i++) {
    const paginationButton = paginationButtons[i] as HTMLButtonElement;
    paginationButton.onclick = async function () {
      const pageIndex = parseInt(paginationButton.dataset.rankpage);
      const rankPage = await _getProposals(pageIndex);
      const blockNumber = await getBlockNumber();

      dispatch_renderReviewRankProposals(props, blockNumber, rankPage);
    };
  }

  pageLeftButton.onclick = async function () {
    const index = parseInt(pageLeftButton.dataset.rankpage);

    if (index > 1) {
      const rankPage = await _getProposals(index - 1);

      const blockNumber = await getBlockNumber();

      dispatch_renderReviewRankProposals(props, blockNumber, rankPage);
    }
  };
  pageRightButton.onclick = async function () {
    const index = parseInt(pageRightButton.dataset.rankpage);
    const total = parseInt(pageRightButton.dataset.totalpages);

    if (index < total) {
      const rankPage = await _getProposals(index + 1);

      const blockNumber = await getBlockNumber();

      dispatch_renderReviewRankProposals(props, blockNumber, rankPage);
    }
  };
}
