import {
  dispatch_removeLoadingIndicator,
  dispatch_renderError,
  dispatch_renderLoadingIndicator,
  dispatch_renderMyProposals,
  dispatch_renderMyRankProposals,
} from "../../dispatch/render";
import {
  checkNetwork,
  getAddress,
  getBlockNumber,
  requestAccounts,
  web3Injected,
} from "../../wallet/web3";
import MetaMaskOnboarding from "@metamask/onboarding";
import {
  dispatch_setPage,
  dispatch_setPopupState,
} from "../../dispatch/stateChange";
import {
  AcceptedSmartContractProposal,
  MyProposals,
  PageState,
  PaginatedProposal,
  PopupState,
  RankProposal,
  RemovalProposal,
  SmartContractProposal,
  State,
  Status,
} from "../../types";
import {
  closeRankProposal,
  getCatalogDAOContractWithWallet,
  getMyProposals,
  getMyRankProposalsPaginated,
} from "../../wallet/catalogDAO/contractCalls";
import {
  getProposals,
  OptionsBuilder,
  proposalsToFetch,
  startPaginatingAProposal,
} from "../utils";
import { getById } from "../../view/utils";
import { Contract } from "web3-eth-contract";

export async function myProposalsActions(props: State) {
  if (!web3Injected()) {
    dispatch_renderError("Found no injected web3, install metamask");
    const onboarding = new MetaMaskOnboarding();
    onboarding.startOnboarding();
    return;
  }

  // TODO: dispatch loading indicator to the other tables too!
  dispatch_renderLoadingIndicator("my-rank-proposals-container");
  await requestAccounts();

  const correctNetwork = await checkNetwork();

  if (!correctNetwork) {
    dispatch_renderError("You need to switch to Harmony network!");
    dispatch_setPopupState(PopupState.WrongNetwork);
    return;
  }

  const myAddress = await getAddress();
  const blockNumber = await getBlockNumber();
  const catalogDAO = await getCatalogDAOContractWithWallet();

  const myProposalOptions = await OptionsBuilder(() =>
    getMyProposals(catalogDAO, myAddress)
  );

  if (myProposalOptions.status === Status.Failure) {
    dispatch_renderError(myProposalOptions.error);
    dispatch_removeLoadingIndicator("my-rank-proposals-container");
    return;
  }

  const myProposals = myProposalOptions.data as MyProposals;
  const paginatedRank = startPaginatingAProposal(
    myProposals.rank.slice().reverse(),
    1
  );
  await rankFetcher(paginatedRank, catalogDAO, myAddress, props, blockNumber);
  // const smartCProposalsToFetch = proposalsToFetch(
  //   paginatedProposalData.smartContract
  // );

  // const smartCProposals = await getProposals<SmartContractProposal[]>(
  //   catalogDAO,
  //   myAddress,
  //   smartCProposalsToFetch,
  //   getMySmartContractProposalsPaginated
  // );

  // const acceptedToFetch = proposalsToFetch(paginatedProposalData.accepted);

  // const acceptedProposals = await getProposals<AcceptedSmartContractProposal[]>(
  //   catalogDAO,
  //   myAddress,
  //   acceptedToFetch,
  //   getAcceptedSmartContractProposalsPaginated
  // );

  // const removalToFetch = proposalsToFetch(paginatedProposalData.removal);

  // const removalProposals = await getProposals<RemovalProposal[]>(
  //   catalogDAO,
  //   myAddress,
  //   removalToFetch,
  //   getAcceptedSmartContractProposalsPaginated
  // );

  // dispatch_removeLoadingIndicator("my-proposals-container");
  // dispatch_renderMyProposals(
  //   props,
  //   paginatedProposalData,
  //   {
  //     rankIndexes: rankProposalsToFetch,
  //     rank: rankProposals,
  //     smartContractIndexes: smartCProposalsToFetch,
  //     smartContract: smartCProposals,
  //     acceptedIndexes: acceptedToFetch,
  //     accepted: acceptedProposals,
  //     removalIndexes: removalToFetch,
  //     removal: removalProposals,
  //   },
  //   blockNumber
  // );
}

export async function rankFetcher(
  paginatedRank: PaginatedProposal,
  catalogDAO: Contract,
  myAddress: string,
  props: State,
  blockNumber: number
) {
  const rankProposalsToFetch: string[] = proposalsToFetch(paginatedRank);

  const rankProposals = await getProposals<RankProposal[]>(
    catalogDAO,
    myAddress,
    rankProposalsToFetch,
    getMyRankProposalsPaginated
  );
  dispatch_renderMyRankProposals(props, blockNumber, [
    rankProposals,
    rankProposalsToFetch,
    paginatedRank,
  ]);
}

// export async function myProposalsTableActions() {}

export async function myRankProposalsTableActions(
  props: State,
  rankProposalIndexes: string[]
) {
  const closeRankButtons = document.getElementsByClassName(
    "rankProposalButtonId"
  );
  const paginationButtons = document.getElementsByClassName(
    "myRankPaginationButton"
  );
  const pageLeftButton = getById("rank-page-left");
  const pageRightButton = getById("rank-page-right");
  const catalogDAO = await getCatalogDAOContractWithWallet();

  for (let i = 0; i < closeRankButtons.length; i++) {
    const button = closeRankButtons[i] as HTMLButtonElement;

    button.onclick = async function () {
      const index = button.dataset.proposalindex;

      const myAddress = await getAddress();
      const onError = (error, receipt) => {
        if (error.message.includes("915")) {
          dispatch_renderError("The voting period is not over,yet.");
        } else {
          dispatch_renderError(error.message);
        }
      };

      const onReceipt = (receipt) => {
        dispatch_setPage(PageState.ManageProposals);
      };
      await closeRankProposal(catalogDAO, index, myAddress, onError, onReceipt);
    };
  }

  // add the onclick for the rank pagination buttons
  for (let i = 0; i < paginationButtons.length; i++) {
    const paginationButton = paginationButtons[i] as HTMLButtonElement;
    paginationButton.onclick = async function () {
      const pageIndex = parseInt(paginationButton.dataset.rankpage);
      const blockNumber = await getBlockNumber();
      const paginatedRank = startPaginatingAProposal(
        rankProposalIndexes,
        pageIndex
      );
      const myAddress = await getAddress();

      await rankFetcher(
        paginatedRank,
        catalogDAO,
        myAddress,
        props,
        blockNumber
      );
    };
  }

  pageLeftButton.onclick = async function () {
    const index = parseInt(pageLeftButton.dataset.rankpage);

    if (index > 1) {
      const blockNumber = await getBlockNumber();
      const paginatedRank = startPaginatingAProposal(
        rankProposalIndexes,
        index - 1
      );
      const myAddress = await getAddress();

      await rankFetcher(
        paginatedRank,
        catalogDAO,
        myAddress,
        props,
        blockNumber
      );
    }
  };

  pageRightButton.onclick = async function () {
    const index = parseInt(pageRightButton.dataset.rankpage);
    const total = parseInt(pageRightButton.dataset.totalpages);

    if (index < total) {
      const blockNumber = await getBlockNumber();
      const paginatedRank = startPaginatingAProposal(
        rankProposalIndexes,
        index + 1
      );
      const myAddress = await getAddress();

      await rankFetcher(
        paginatedRank,
        catalogDAO,
        myAddress,
        props,
        blockNumber
      );
    }
  };
}
