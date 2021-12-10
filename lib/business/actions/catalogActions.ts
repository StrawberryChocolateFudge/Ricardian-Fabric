import { decryptWallet } from "../../crypto";
import {
  dispatch_renderError,
  dispatch_renderProposalSummary,
} from "../../dispatch/render";
import {
  dispatch_setPage,
  dispatch_setPopupState,
  dispatch_setProposalType,
  dispatch_setSelectedWallet,
} from "../../dispatch/stateChange";
import {
  PageState,
  PopupState,
  ProposalFormat,
  ProposalType,
  SelectedWallet,
  State,
  Status,
} from "../../types";
import { getById, readFile } from "../../view/utils";
import { createProposalTransaction } from "../../wallet/arweave";
import { getAddress, requestAccounts, web3Injected } from "../../wallet/web3";
import MetaMaskOnboarding from "@metamask/onboarding";
import {
  getCatalogDAOContract,
  getRank,
} from "../../wallet/catalogDAO/contractCalls";
import { OptionsBuilder } from "../utils";

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

  await requestAccounts();

  const myAddress = await getAddress();
  const catalogDAO = await getCatalogDAOContract();

  const rankOptions = await OptionsBuilder(() =>
    getRank(catalogDAO, myAddress)
  );

  if (rankOptions.status === Status.Failure) {
    dispatch_renderError("Failed to fetch the Rank!");
    return;
  }

  const createRankButton = getById("get-rank-tab-button");

  createRankButton.onclick = function () {
    dispatch_setProposalType(ProposalType.Rank);
  };

  const createProposalButton = getById("propose-new-contract-tab-button");

  createProposalButton.onclick = function () {
    dispatch_setProposalType(ProposalType.NewSmartContract);
  };

  const back = getById("createproposal-back");

  back.onclick = function () {
    dispatch_setPage(PageState.Catalog);
  };

  // TODO: get the rank from the smart contract
  const rank = 0;

  if (props.proposalType === ProposalType.Rank) {
    const githubRepoUrl = getById("github-url") as HTMLInputElement;
    const rankheader = getById("rankHeader") as HTMLHeadingElement;
    const submitRankProposal = getById("create-rank-proposal");

    rankheader.textContent = `Your rank is ${rank}`;

    submitRankProposal.onclick = function () {
      if (githubRepoUrl.value === "") {
        dispatch_renderError("Empty input");
        return;
      }

      if (!githubRepoUrl.validity.valid) {
        dispatch_renderError("Invalid url");
        return;
      }
    };
  }

  if (props.proposalType === ProposalType.NewSmartContract) {
    const contractProposalSubmit = getById("proposal-submit-button");

    contractProposalSubmit.onclick = function () {
      //TODO: I need tp get the ID entered,
      // use arweave to check if the status is accepted by the network
      //then I call the ricardian fabric smart contract
    };
  }
}

export function catalogAction(props: State) {
  const nextButton = getById("SCIntentNextButton") as HTMLButtonElement;
  const createProposalButton = getById("create-proposal-button");
  const reviewAndVoteButton = getById("review-and-vote-button");
  createProposalButton.onclick = function () {
    dispatch_setPage(PageState.Proposals);
  };

  reviewAndVoteButton.onclick = function () {
    dispatch_setPage(PageState.ReviewAndVote);
  };

  nextButton.onclick = function () {
    // if (hrc20.checked) {
    //   dispatch_SCDeploySelected(DeploySC.HRC20);
    // }
  };
}

export function addCatalogButtonListener(props: State) {
  const smartcontract = getById("smart-contracts-button");
  //const proposals = getById("view-proposals-button");
  //const createProp = getById("create-proposal-button");

  smartcontract.onclick = function () {
    // dispatch_setPopupState(PopupState.Catzalog);
  };

  // createProp.onclick = function () {
  //   dispatch_setPopupState(PopupState.createProposal);
  // };
}

export function walletSelectListener() {
  const metamask = getById("metamask-logo-container");
  metamask.onclick = function () {
    if (metamask.dataset.disabled === "false") {
      dispatch_setSelectedWallet(SelectedWallet.metamask);
    }
  };
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

export function uploadProposalActions(props: State) {
  const backbutton = getById("create-contract-back");
  backbutton.onclick = function () {
    dispatch_setPopupState(PopupState.NONE);
  };
  const createContractProposal = getById("create-contract-proposal");

  const nameEl = getById("smartcontract-name") as HTMLInputElement;
  const descriptionEl = getById(
    "smartcontract-description"
  ) as HTMLInputElement;
  const artifactEl = getById("smartcontract-artifact") as HTMLInputElement;

  const termsEl = getById("smartcontract-terms") as HTMLInputElement;
  const gitEl = getById("smartcontract-repo") as HTMLInputElement;
  const commitEl = getById("smartcontract-commit") as HTMLInputElement;
  const premiumEl = getById("smartcontract-premium") as HTMLInputElement;
  const priceEl = getById("smartcontract-price") as HTMLInputElement;
  const termsAcceptedEl = getById("accepted-terms") as HTMLInputElement;

  const networkEl = getById("selected-network") as HTMLSelectElement;
  const passwordEl = getById("arweave-key-password") as HTMLInputElement;

  const categoryEl = getById("select-category") as HTMLSelectElement;
  const implementsSimpleTerms = getById(
    "implements-simpleterms-checkbox"
  ) as HTMLInputElement;

  premiumEl.onclick = function () {
    priceEl.disabled = !premiumEl.checked;
  };

  createContractProposal.onclick = async function () {


    if (nameEl.value === "") {
      dispatch_renderError("You must specify the name.");
      return;
    }
    if (descriptionEl.value === "") {
      dispatch_renderError("You must add a short description.");
      return;
    }
    if (artifactEl.value === "") {
      dispatch_renderError("You must add the Artifact.");
      return;
    }

    if (!artifactValid(artifactEl.value)) {
      dispatch_renderError("Malformed Artifact.");
      return;
    }

    if (gitEl.value === "") {
      dispatch_renderError("You must add a valid link for a git repo.");
      return;
    }

    if (commitEl.value === "") {
      dispatch_renderError("Commit id is empty");
      return;
    }

    if (termsEl.files.length !== 1) {
      dispatch_renderError("You must propose terms for the contract.");
      return;
    }

    if (premiumEl.checked === true) {
      if (priceEl.value === "") {
        dispatch_renderError(
          "For premium contracts , you must specify a price."
        );
        return;
      }

      try {
        parseFloat(priceEl.value);
      } catch (err) {
        dispatch_renderError(err);
        return;
      }
    }
    if (termsAcceptedEl.checked === false) {
      dispatch_renderError("You must accept the terms.");
      return;
    }

    if (passwordEl.value === "") {
      dispatch_renderError("Misssing password");
      return;
    }

    readFile(termsEl.files, async (data) => {
      const proposal: ProposalFormat = {
        name: nameEl.value,
        description: descriptionEl.value,
        artifact: JSON.parse(artifactEl.value),
        terms: data,
        git: gitEl.value,
        commit: commitEl.value,
        premium: premiumEl.checked,
        price: parseFloat(priceEl.value),
        network: networkEl.value,
        category: categoryEl.value,
        simpleterms: implementsSimpleTerms.checked,
      };

      console.log(proposal);

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

      console.log(proposalTransaction);
      dispatch_renderProposalSummary(proposalTransaction, props);
    });
  };
}
