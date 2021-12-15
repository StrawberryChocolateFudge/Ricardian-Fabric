import {
  dispatch_renderError,
  dispatch_renderProposalSummary,
  dispatch_initializeProposalUpload,
  dispatch_proposeNewRank,
  dispatch_proposeNewContract,
  dispatch_hideElement,
  dispatch_renderUploadStatus,
  dispatch_renderLoadingIndicator,
  dispatch_removeLoadingIndicator,
} from "../../dispatch/render";
import {
  MyProposals,
  PopupState,
  ProposalFormat,
  RankProposal,
  State,
  Status,
} from "../../types";
import { getAddress, requestAccounts, web3Injected } from "../../wallet/web3";
import MetaMaskOnboarding from "@metamask/onboarding";
import {
  getCatalogDAOContract,
  getMyProposals,
  getRank,
  getRankProposalsByIndex,
  proposeNewRank,
} from "../../wallet/catalogDAO/contractCalls";
import { OptionsBuilder } from "../utils";
import { copyStringToClipboard, getById, readFile } from "../../view/utils";
import {
  dispatch_setPopupState,
  dispatch_setUploadProposalProps,
} from "../../dispatch/stateChange";
import { decryptWallet } from "../../crypto";
import { createProposalTransaction, uploadData } from "../../wallet/arweave";
import {
  convertToHTMLFromArrayBuffer,
  onDocProposalFileDropped,
} from "./onDocFileDropped";

export async function createProposalActions(props: State) {
  if (!web3Injected()) {
    dispatch_renderError("Found no injected web3, install metamask");
    const onboarding = new MetaMaskOnboarding();
    onboarding.startOnboarding();
    return;
  }

  //TODO: CHECK NETWORK CONNECTION!!
  // IT MUST BE HARMONY NETWORK!
  // If it's not, prompt to switch to harmony
  dispatch_renderLoadingIndicator("loading-display");
  await requestAccounts();

  const myAddress = await getAddress();
  const catalogDAO = await getCatalogDAOContract();

  //TODO: While the rank is loading, show a loading indicator
  //TODO: handle the errors on the page with loading indicator
  const rankOptions = await OptionsBuilder(() =>
    getRank(catalogDAO, myAddress, myAddress)
  );

  if (rankOptions.status === Status.Failure) {
    dispatch_renderError("Failed to fetch the Rank!");
    dispatch_removeLoadingIndicator("loading-display");
    return;
  }

  const myProposalOptions = await OptionsBuilder(() =>
    getMyProposals(catalogDAO, myAddress)
  );

  if (myProposalOptions.status === Status.Failure) {
    dispatch_renderError(myProposalOptions.error);
    dispatch_removeLoadingIndicator("loading-display");
    return;
  }

  const myProposals = myProposalOptions.data as MyProposals;
  const myRankProposals = myProposals.rank;
  //TODO: Check if the last RankProposal is still pending!
  const myLastRankProposalOptions = await OptionsBuilder(() =>
    getRankProposalsByIndex(catalogDAO, myRankProposals.slice(-1)[0], myAddress)
  );
  if (myLastRankProposalOptions.status === Status.Failure) {
    dispatch_renderError(myLastRankProposalOptions.error);
    dispatch_removeLoadingIndicator("loading-display");
  }

  const myLastRankProposal = myLastRankProposalOptions.data as RankProposal;
  console.log(myLastRankProposal);

  if (!myLastRankProposal.closed) {
    dispatch_renderError("Your last rank proposal is still open.");
  }

  let rank = rankOptions.data;
  //If the rank is zero and there is no pending Rank proposal

  dispatch_removeLoadingIndicator("loading-display");
  if (rank === "0") {
    dispatch_proposeNewRank(!myLastRankProposal.closed);
  } else {
    dispatch_proposeNewContract();
  }

  //Then render either the proposalTXId input.. or the GithubURL, maybe I just render the labels

  const githubRepoUrl = getById("github-url") as HTMLInputElement;
  const rankheader = getById("rankHeader") as HTMLHeadingElement;
  const submitRankProposal = getById("create-rank-proposal");

  rankheader.textContent = `Your rank is ${rank}`;

  submitRankProposal.onclick = async function () {
    if (githubRepoUrl.value === "") {
      dispatch_renderError("Empty input");
      return;
    }

    if (!githubRepoUrl.validity.valid) {
      dispatch_renderError("Invalid url");
      return;
    }

    const onError = (error, receipt) => {
      dispatch_renderError(error.message);
    };
    const onReceipt = (receipt) => {
      console.log(receipt);
    };

    await proposeNewRank(
      catalogDAO,
      githubRepoUrl.value,
      myAddress,
      onError,
      onReceipt
    );
  };

  // if (props.proposalType === ProposalType.NewSmartContract) {
  const contractProposalSubmit = getById("proposal-submit-button");

  contractProposalSubmit.onclick = function () {
    //TODO: I need tp get the ID entered,
    // use arweave to check if the status is accepted by the network
    //then I call the ricardian fabric smart contract
  };
  // }
}

function artifactValid(data: string): boolean {
  const artifact = JSON.parse(data);
  if (artifact.bytecode === undefined) {
    return false;
  }

  if (artifact.abi === undefined) {
    return false;
  }

  return true;
}

export function uploadProposalActions(props: State, step: PopupState) {
  const backbutton = getById("create-contract-back");

  const createContractProposal = getById("create-contract-proposal");

  const nameEl = getById("smartcontract-name") as HTMLInputElement;
  const artifactEl = getById("smartcontract-artifact") as HTMLInputElement;

  const termsEl = getById("docx-input") as HTMLInputElement;
  const gitEl = getById("smartcontract-repo") as HTMLInputElement;
  const frontEndEl = getById("smartcontract-frontend") as HTMLInputElement;
  const termsAcceptedEl = getById("accepted-terms") as HTMLInputElement;

  const networkEl = getById("selected-network") as HTMLSelectElement;
  const passwordEl = getById("arweave-key-password") as HTMLInputElement;

  const categoryEl = getById("select-category") as HTMLSelectElement;
  const implementsSimpleTerms = getById(
    "implements-simpleterms-checkbox"
  ) as HTMLInputElement;

  onDocProposalFileDropped(props);

  if (props.uploadProposalProps !== null) {
    dispatch_initializeProposalUpload(props, {
      nameEl,
      artifactEl,
      termsEl,
      gitEl,
      frontEndEl,
      networkEl,
      categoryEl,
      implementsSimpleTerms,
    });
  }

  if (props.Account.address === null) {
    dispatch_renderError("You need to add an arweave account.");
  }

  backbutton.onclick = function () {
    dispatch_setUploadProposalProps({
      name: nameEl.value,
      artifact: artifactEl.value,
      terms: termsEl.files[0],
      git: gitEl.value,
      frontEnd: frontEndEl.value,
      network: networkEl.value,
      category: categoryEl.value,
      simpleterms: implementsSimpleTerms.checked,
    });
    switch (step) {
      case PopupState.UploadProposal:
        dispatch_setPopupState(PopupState.NONE);
        break;
      case PopupState.UploadProposalStep2:
        dispatch_setPopupState(PopupState.UploadProposal);
        break;
      case PopupState.UploadProposalStep3:
        dispatch_setPopupState(PopupState.UploadProposalStep2);
        break;
      case PopupState.UploadProposalStep4:
        dispatch_setPopupState(PopupState.UploadProposalStep3);
        break;
      default:
        break;
    }
  };

  createContractProposal.onclick = async function () {
    dispatch_setUploadProposalProps({
      name: nameEl.value,
      artifact: artifactEl.value,
      terms: termsEl.files[0],
      git: gitEl.value,
      frontEnd: frontEndEl.value,
      network: networkEl.value,
      category: categoryEl.value,
      simpleterms: implementsSimpleTerms.checked,
    });
    switch (step) {
      case PopupState.UploadProposal:
        if (nameEl.value === "") {
          dispatch_renderError("You must specify the name.");
          return;
        }
        dispatch_setPopupState(PopupState.UploadProposalStep2);
        break;
      case PopupState.UploadProposalStep2:
        if (artifactEl.value === "") {
          dispatch_renderError("You must add the Artifact.");
          return;
        }

        const artifactiOptions = await OptionsBuilder(() =>
          artifactValid(artifactEl.value)
        );

        if (artifactiOptions.status === Status.Failure) {
          dispatch_renderError(artifactiOptions.error);
          return;
        }

        const artifactIsValid = artifactiOptions.data;

        if (!artifactIsValid) {
          dispatch_renderError("Malformed Artifact.");
          return;
        }

        if (gitEl.value === "") {
          dispatch_renderError("You must add a valid link for a git repo.");
          return;
        }

        dispatch_setPopupState(PopupState.UploadProposalStep3);
        break;
      case PopupState.UploadProposalStep3:
        if (
          termsEl.files.length !== 1 &&
          props.uploadProposalProps.terms === undefined
        ) {
          dispatch_renderError("You must propose terms for the contract.");
          return;
        }
        dispatch_setPopupState(PopupState.UploadProposalStep4);
        break;
      case PopupState.UploadProposalStep4:
        if (termsAcceptedEl.checked === false) {
          dispatch_renderError("You must accept the terms.");
          return;
        }

        if (passwordEl.value === "") {
          dispatch_renderError("Misssing password");
          return;
        }

        const file =
          termsEl.files.length === 0
            ? (props.uploadProposalProps.terms as File)
            : termsEl.files[0];

        readFile(file, async (data) => {
          const proposal: ProposalFormat = {
            name: nameEl.value,
            artifact: JSON.parse(artifactEl.value),
            terms: data,
            git: gitEl.value,
            frontEnd: frontEndEl.value,
            network: networkEl.value,
            category: categoryEl.value,
            simpleterms: implementsSimpleTerms.checked,
          };

          if (props.Account.data === null) {
            dispatch_renderError("Missing arweave account.");
            return;
          }
          const decryptOptions = await decryptWallet(
            props.Account.data,
            passwordEl.value
          );

          if (decryptOptions.status !== Status.Success) {
            dispatch_renderError(decryptOptions.error);
            return;
          }

          const proposalTransaction = await createProposalTransaction(
            proposal,
            props.version,
            decryptOptions.data,
            nameEl.value,
            categoryEl.value,
            networkEl.value,
            implementsSimpleTerms.checked
          );

          const getTerms = (terms: string) => {
            dispatch_renderProposalSummary(
              proposalTransaction,
              props,
              proposal,
              terms
            );
          };

          convertToHTMLFromArrayBuffer(proposal.terms, getTerms);
        });
        break;
      default:
        break;
    }
  };
}

export function uploadProposalSummaryActions(transaction: any, props: State) {
  const backButton = getById("post-proposal-back");
  const postButton = getById("post-proposal");
  const copyButton = getById("copy-proposal-address");

  copyButton.onclick = function () {
    const txIdEl = getById("transactionid");
    copyStringToClipboard(txIdEl.dataset.id);
  };

  backButton.onclick = function () {
    dispatch_setPopupState(PopupState.UploadProposalStep4);
  };

  postButton.onclick = async function () {
    dispatch_hideElement(backButton, true);
    dispatch_hideElement(postButton, true);
    dispatch_renderLoadingIndicator("upload-proposal-display");
    try {
      const res = await uploadData(transaction, (uploader) => {
        dispatch_renderUploadStatus(
          props,
          `${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`
        );
      });
      if (res.status === Status.Failure) {
        dispatch_renderError(res.error);
        dispatch_hideElement(backButton, false);
        dispatch_hideElement(postButton, false);
      }
      dispatch_removeLoadingIndicator("upload-proposal-display");
      dispatch_hideElement(backButton, false);
      backButton.onclick = function () {
        dispatch_setPopupState(PopupState.NONE);
      };
    } catch (err) {
      dispatch_renderError(err.message);
      dispatch_hideElement(backButton, false);
      dispatch_hideElement(postButton, false);
      dispatch_removeLoadingIndicator("upload-proposal-display");
    }
  };
}
