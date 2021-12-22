import {
  dispatch_removeLoadingIndicator,
  dispatch_renderError,
  dispatch_renderLoadingIndicator,
  dispatch_renderMyProposals,
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
  PopupState,
  RankProposal,
  RemovalProposal,
  SmartContractProposal,
  State,
  Status,
} from "../../types";
import {
  closeRankProposal,
  getAcceptedSmartContractProposalsPaginated,
  getCatalogDAOContractWithWallet,
  getMyProposals,
  getMyRankProposalsPaginated,
  getMySmartContractProposalsPaginated,
} from "../../wallet/catalogDAO/contractCalls";
import {
  getProposals,
  OptionsBuilder,
  proposalsToFetch,
  startPaginatingMyProposals,
} from "../utils";

export async function myProposalsActions(props: State) {
  if (!web3Injected()) {
    dispatch_renderError("Found no injected web3, install metamask");
    const onboarding = new MetaMaskOnboarding();
    onboarding.startOnboarding();
    return;
  }

  dispatch_renderLoadingIndicator("my-proposals-container");
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
    dispatch_removeLoadingIndicator("my-proposals-container");
    return;
  }

  const myProposals = myProposalOptions.data as MyProposals;
  const paginatedProposalData = startPaginatingMyProposals(myProposals);

  const rankProposalsToFetch = proposalsToFetch(paginatedProposalData.rank);

  const rankProposals = await getProposals<RankProposal[]>(
    catalogDAO,
    myAddress,
    rankProposalsToFetch,
    getMyRankProposalsPaginated
  );

  const smartCProposalsToFetch = proposalsToFetch(
    paginatedProposalData.smartContract
  );

  const smartCProposals = await getProposals<SmartContractProposal[]>(
    catalogDAO,
    myAddress,
    smartCProposalsToFetch,
    getMySmartContractProposalsPaginated
  );

  const acceptedToFetch = proposalsToFetch(paginatedProposalData.accepted);

  const acceptedProposals = await getProposals<AcceptedSmartContractProposal[]>(
    catalogDAO,
    myAddress,
    acceptedToFetch,
    getAcceptedSmartContractProposalsPaginated
  );

  const removalToFetch = proposalsToFetch(paginatedProposalData.removal);

  const removalProposals = await getProposals<RemovalProposal[]>(
    catalogDAO,
    myAddress,
    removalToFetch,
    getAcceptedSmartContractProposalsPaginated
  );

  dispatch_removeLoadingIndicator("my-proposals-container");
  dispatch_renderMyProposals(
    props,
    paginatedProposalData,
    {
      rankIndexes: rankProposalsToFetch,
      rank: rankProposals,
      smartContractIndexes: smartCProposalsToFetch,
      smartContract: smartCProposals,
      acceptedIndexes: acceptedToFetch,
      accepted: acceptedProposals,
      removalIndexes: removalToFetch,
      removal: removalProposals,
    },
    blockNumber
  );
}

export async function myProposalsTableActions() {
  const closeRankButtons = document.getElementsByClassName(
    "rankProposalButtonId"
  );

  for (let i = 0; i < closeRankButtons.length; i++) {
    const button = closeRankButtons[i] as HTMLButtonElement;

    button.onclick = async function () {
      const index = button.dataset.proposalindex;

      const myAddress = await getAddress();
      const catalogDAO = await getCatalogDAOContractWithWallet();
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
}
