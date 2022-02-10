import {
  dispatch_removeLoadingIndicator,
  dispatch_renderError,
  dispatch_renderLoadingIndicator,
  dispatch_renderMyAcceptedSmartContractProposals,
  dispatch_renderMyRankProposals,
  dispatch_renderMySmartContractProposals,
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
  SmartContractProposal,
  State,
  Status,
} from "../../types";
import {
  closeRankProposal,
  closeSmartContractProposal,
  getAcceptedSmartContractProposalsPaginated,
  getCatalogDAOContractWithWallet,
  getMyProposals,
  getMyRankProposalsPaginated,
  getMySmartContractProposalsPaginated,
} from "../../wallet/catalogDAO/contractCalls";
import {
  getProposals,
  hasError,
  OptionsBuilder,
  proposalsToFetch,
  startPaginatingAProposal,
} from "../utils";
import { getById } from "../../view/utils";
import { Contract } from "web3-eth-contract";
import { addContractDetailsPopup } from "./reviewAndVote";

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
  const paginatedSmartContract = startPaginatingAProposal(
    myProposals.smartContract.slice().reverse(),
    1
  );
  await smartContractProposalFetcher(
    paginatedSmartContract,
    catalogDAO,
    myAddress,
    props,
    blockNumber
  );

  const paginatedAcceptedContract = startPaginatingAProposal(
    myProposals.acceptedSCProposals.slice().reverse(),
    1
  );
  await acceptedSmartContractProposalFetcher(
    paginatedAcceptedContract,
    catalogDAO,
    myAddress,
    props,
    blockNumber
  );

  // const removalToFetch = proposalsToFetch(paginatedProposalData.removal);

  // const removalProposals = await getProposals<RemovalProposal[]>(
  //   catalogDAO,
  //   myAddress,
  //   removalToFetch,
  //   getAcceptedSmartContractProposalsPaginated
  // );

  // dispatch_removeLoadingIndicator("my-proposals-container");
  addContractDetailsPopup(props);
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

export async function smartContractProposalFetcher(
  paginatedSmartContract: PaginatedProposal,
  catalogDAO: Contract,
  myAddress: string,
  props: State,
  blockNumber: number
) {
  const smartContractProposalsToFetch: string[] = proposalsToFetch(
    paginatedSmartContract
  );

  const smartContractProposals = await getProposals<SmartContractProposal[]>(
    catalogDAO,
    myAddress,
    smartContractProposalsToFetch,
    getMySmartContractProposalsPaginated
  );

  dispatch_renderMySmartContractProposals(props, blockNumber, [
    smartContractProposals,
    smartContractProposalsToFetch,
    paginatedSmartContract,
  ]);
}

export async function acceptedSmartContractProposalFetcher(
  paginatedContract: PaginatedProposal,
  catalogDAO: Contract,
  myAddress: string,
  props: State,
  blockNumber: number
) {
  const acceptedProposalsToFetch: string[] =
    proposalsToFetch(paginatedContract);

  const acceptedProposals = await getProposals<AcceptedSmartContractProposal[]>(
    catalogDAO,
    myAddress,
    acceptedProposalsToFetch,
    getAcceptedSmartContractProposalsPaginated
  );

  dispatch_renderMyAcceptedSmartContractProposals(props, blockNumber, [
    acceptedProposals,
    acceptedProposalsToFetch,
    paginatedContract,
  ]);
}

export async function myAcceptedSmartContractProposalTableActions(
  props: State,
  indexes: string[]
) {
  const removeButtons = document.getElementsByClassName(
    "contract-remove-button"
  );
  const claimRewardButtons = document.getElementsByClassName(
    "contract-claim-reward-button"
  );

  const paginationButtons = document.getElementsByClassName(
    "myAcceptedSmartContractPaginationButton"
  );
  const pageLeftButton = getById("acceptedcontract-page-left");
  const pageRightButton = getById("acceptedcontract-page-right");

  //TODO:
}

export async function mySmartContractProposalsTableActions(
  props: State,
  smartContractProposalIndexes: string[]
) {
  const closeSmartContractButtons = document.getElementsByClassName(
    "smartContractProposalButtonId"
  );
  const paginationButtons = document.getElementsByClassName(
    "mySmartContractPaginationButton"
  );

  const pageLeftButton = getById("smartcontract-page-left");
  const pageRightButton = getById("smartcontract-page-right");

  const catalogDAO = await getCatalogDAOContractWithWallet();
  const myAddressOptions = await OptionsBuilder(() => getAddress());
  if (hasError(myAddressOptions)) {
    return;
  }
  const myAddress = myAddressOptions.data;

  for (let i = 0; i < closeSmartContractButtons.length; i++) {
    const button = closeSmartContractButtons[i] as HTMLButtonElement;
    button.onclick = async function () {
      const index = button.dataset.proposalindex;

      const onError = (error, receipt) => {
        dispatch_renderError(error.message);
      };
      const onReceipt = (receipt) => {
        dispatch_setPage(PageState.ManageProposals);
      };
      await closeSmartContractProposal(
        catalogDAO,
        index,
        myAddress,
        onError,
        onReceipt
      );
    };
  }

  // add the onclick for the smart contract pagination buttons

  for (let i = 0; i < paginationButtons.length; i++) {
    const paginationButton = paginationButtons[i] as HTMLButtonElement;
    paginationButton.onclick = async function () {
      const pageIndex = parseInt(paginationButton.dataset.smartcontractpage);
      const blockNumber = await getBlockNumber();
      const paginatedSmartContract = startPaginatingAProposal(
        smartContractProposalIndexes,
        pageIndex
      );
      await smartContractProposalFetcher(
        paginatedSmartContract,
        catalogDAO,
        myAddress,
        props,
        blockNumber
      );
    };
  }

  pageLeftButton.onclick = async function () {
    const index = parseInt(pageLeftButton.dataset.smartcontractpage);
    if (index > 1) {
      const blockNumber = await getBlockNumber();
      const paginatedSmartcontract = startPaginatingAProposal(
        smartContractProposalIndexes,
        index - 1
      );

      await smartContractProposalFetcher(
        paginatedSmartcontract,
        catalogDAO,
        myAddress,
        props,
        blockNumber
      );
    }
  };

  pageRightButton.onclick = async function () {
    const index = parseInt(pageRightButton.dataset.smartcontractpage);
    const total = parseInt(pageRightButton.dataset.totalpages);
    if (index < total) {
      const blockNumber = await getBlockNumber();
      const paginatedSmartContractProposal = startPaginatingAProposal(
        smartContractProposalIndexes,
        index + 1
      );

      await smartContractProposalFetcher(
        paginatedSmartContractProposal,
        catalogDAO,
        myAddress,
        props,
        blockNumber
      );
    }
  };
}

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
