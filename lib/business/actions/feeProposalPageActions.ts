import { PageState, PopupState, State } from "../../types";
import { hasError, OptionsBuilder } from "../utils";
import {
  getFeeDaoContract,
  getTokens,
  proposeNewToken,
  getProposals,
  voteOnToken,
  closeTokenProposal,
} from "../../wallet/feeDao/contractCalls";
import { FEEDAOADDRESS, getAddress, getBlockNumber } from "../../wallet/web3";
import {
  dispatch_feeTokenRow,
  dispatch_renderError,
  dispatch_renderTokenProposalPopup,
  dispatch_renderTokenProposals,
} from "../../dispatch/render";
import { copyStringToClipboard, getById } from "../../view/utils";
import {
  dispatch_setPage,
  dispatch_setPopupState,
} from "../../dispatch/stateChange";
import { Contract } from "web3-eth-contract";
import {
  balanceOf,
  getERC20,
  getName,
  getRicContract,
} from "../../wallet/ric/contractCalls";
import {
  getCatalogDAOContractWithWallet,
  getRank,
} from "../../wallet/catalogDAO/contractCalls";
import {
  getDaoStakingContract,
  isStaking,
} from "../../wallet/daoStaking/contractCalls";

export async function feeProposalPageActions(props: State) {
  const copyAddressButton = getById("copyFeeDaoAddress");

  copyAddressButton.onclick = async function () {
    await copyStringToClipboard(FEEDAOADDRESS);
  };

  const proposalButton = getById("proposeTokenPopupButton");

  const feeDaoOptions = await OptionsBuilder(() => getFeeDaoContract());

  if (hasError(feeDaoOptions)) {
    return;
  }
  proposalButton.onclick = function () {
    dispatch_setPopupState(PopupState.emptyPopup);
    dispatch_renderTokenProposalPopup(props, feeDaoOptions.data);
  };

  const myAddressOpts = await OptionsBuilder(() => getAddress());

  if (hasError(myAddressOpts)) {
    return;
  }

  const tokensOpts = await OptionsBuilder(() =>
    getTokens(feeDaoOptions.data, myAddressOpts.data)
  );

  if (hasError(tokensOpts)) {
    return;
  }

  dispatch_feeTokenRow(props, tokensOpts.data);

  const tokenProposalsOpts = await OptionsBuilder(() =>
    getProposals(feeDaoOptions.data, myAddressOpts.data)
  );

  if (hasError(tokenProposalsOpts)) {
    return;
  }

  const blockNumberOpts = await OptionsBuilder(() => getBlockNumber());

  if (hasError(blockNumberOpts)) {
    return;
  }

  dispatch_renderTokenProposals(
    props,
    tokenProposalsOpts.data,
    blockNumberOpts.data,
    myAddressOpts.data
  );
}

export async function tokenProposalsTableActions(props: State) {
  const approveButtons = document.getElementsByClassName("tokenApproveButton");
  const rejectButtons = document.getElementsByClassName("tokenRejectButton");
  const closeButtons = document.getElementsByClassName("tokenCloseButton");

  const onError = (error, receipt) => {
    dispatch_renderError(error.message);
  };
  const onReceipt = (receipt) => {
    dispatch_setPage(PageState.feeProposals);
  };
  const myAddressOpts = await OptionsBuilder(() => getAddress());

  if (hasError(myAddressOpts)) {
    return;
  }
  const ricOpts = await OptionsBuilder(() => getRicContract());
  if (hasError(ricOpts)) {
    return;
  }
  const daoStakingOpts = await OptionsBuilder(() => getDaoStakingContract());
  if (hasError(daoStakingOpts)) {
    return;
  }
  const catalogDaoOpts = await OptionsBuilder(() =>
    getCatalogDAOContractWithWallet()
  );

  if (hasError(catalogDaoOpts)) {
    return;
  }

  const canVote = async () => {
    const isStakingOpts = await OptionsBuilder(() =>
      isStaking(daoStakingOpts.data, myAddressOpts.data, myAddressOpts.data)
    );
    if (hasError(isStakingOpts)) {
      return false;
    }
    if (isStakingOpts.data === false) {
      dispatch_renderError("You need to be staking to vote.");
      return false;
    }

    const balanceOpts = await OptionsBuilder(() =>
      balanceOf(ricOpts.data, myAddressOpts.data, myAddressOpts.data)
    );
    if (hasError(balanceOpts)) {
      return false;
    }

    if (!(parseInt(balanceOpts.data) >= 1000)) {
      // The voter needs a higher balance of ric
      dispatch_renderError("You need at least 1000 RIC to vote");
      return false;
    }

    const rankOpts = await OptionsBuilder(() =>
      getRank(catalogDaoOpts.data, myAddressOpts.data, myAddressOpts.data)
    );

    if (hasError(rankOpts)) {
      return false;
    }

    if (!(parseInt(rankOpts.data) >= 1)) {
      dispatch_renderError("Rank too low");
      return false;
    }

    return true;
  };

  const feeDaoOptions = await OptionsBuilder(() => getFeeDaoContract());

  if (hasError(feeDaoOptions)) {
    return;
  }

  attachButtonClickEvents(approveButtons, async (index) => {
    if (await canVote()) {
      await voteOnToken(
        feeDaoOptions.data,
        index,
        true,
        myAddressOpts.data,
        onError,
        onReceipt
      );
    }
  });
  attachButtonClickEvents(rejectButtons, async (index) => {
    if (await canVote()) {
      await voteOnToken(
        feeDaoOptions.data,
        index,
        false,
        myAddressOpts.data,
        onError,
        onReceipt
      );
    }
  });
  attachButtonClickEvents(closeButtons, async (index) => {
    // Only rank checks are needed for closing the proposal
    const rankOpts = await OptionsBuilder(() =>
      getRank(catalogDaoOpts.data, myAddressOpts.data, myAddressOpts.data)
    );

    if (hasError(rankOpts)) {
      return;
    }
    if (!(parseInt(rankOpts.data) >= 1)) {
      dispatch_renderError("Rank too low");
      return;
    }

    await closeTokenProposal(
      feeDaoOptions.data,
      index,
      myAddressOpts.data,
      onError,
      onReceipt
    );
  });
}

function attachButtonClickEvents(
  buttons: HTMLCollectionOf<Element>,
  fn: CallableFunction
) {
  for (let i = 0; i < buttons.length; i++) {
    const bttn = buttons[i] as HTMLButtonElement;
    bttn.onclick = async function () {
      const index = bttn.dataset.index;
      await fn(index);
    };
  }
}

export async function tokenRowActions() {
  const copyButtons = document.getElementsByClassName("tokenAddressCopy");

  for (let i = 0; i < copyButtons.length; i++) {
    const bttn = copyButtons[i] as HTMLButtonElement;
    bttn.onclick = async function () {
      await copyStringToClipboard(bttn.dataset.address);
    };
  }
}

export async function tokenProposalPopupActions(
  _props: State,
  feeDao: Contract
) {
  const addressEl = getById("contractProposalAddress") as HTMLInputElement;
  const discussionLink = getById("discussionLinkInput") as HTMLInputElement;
  const backButton = getById("proposalBackButton");
  const proceedBttn = getById("proposeTokenButton");

  backButton.onclick = function () {
    dispatch_setPopupState(PopupState.NONE);
  };

  const ricOpts = await OptionsBuilder(() => getRicContract());
  if (hasError(ricOpts)) {
    return;
  }

  const catalogDAOOpts = await OptionsBuilder(() =>
    getCatalogDAOContractWithWallet()
  );
  if (hasError(catalogDAOOpts)) {
    return;
  }

  const daoStakingOpts = await OptionsBuilder(() => getDaoStakingContract());
  if (hasError(daoStakingOpts)) {
    return;
  }

  proceedBttn.onclick = async function () {
    if (discussionLink.value.length === 0) {
      dispatch_renderError("Invalid discussion link");
    }
    const myAddressOpts = await OptionsBuilder(() => getAddress());
    if (hasError(myAddressOpts)) {
      return;
    }

    const isStakingOpts = await OptionsBuilder(() =>
      isStaking(daoStakingOpts.data, myAddressOpts.data, myAddressOpts.data)
    );
    if (hasError(isStakingOpts)) {
      return;
    }
    if (!isStakingOpts.data) {
      dispatch_renderError(
        "You need to stake before you can propose a new token!"
      );
      return;
    }
    const balanceOpts = await OptionsBuilder(() =>
      balanceOf(ricOpts.data, myAddressOpts.data, myAddressOpts.data)
    );
    if (hasError(balanceOpts)) {
      return false;
    }

    if (!(parseInt(balanceOpts.data) >= 1000)) {
      // The voter needs a higher balance of ric
      dispatch_renderError("You need at least 1000 RIC to vote");
      return false;
    }

    const rankOpts = await OptionsBuilder(() =>
      getRank(catalogDAOOpts.data, myAddressOpts.data, myAddressOpts.data)
    );
    if (hasError(rankOpts)) {
      return;
    }
    if (!(parseInt(rankOpts.data) >= 1)) {
      dispatch_renderError("You need rank before you can propose a new token.");
      return;
    }

    const erc20Opts = await OptionsBuilder(() => getERC20(addressEl.value));

    if (hasError(erc20Opts)) {
      return;
    }

    // I should perform a fetch to the deployed contract
    // to verify it's an erc 20, so let's get the name
    const getNameOpts = await OptionsBuilder(() =>
      getName(erc20Opts.data, myAddressOpts.data)
    );

    if (hasError(getNameOpts)) {
      return;
    }

    const onError = (error, receipt) => {
      dispatch_renderError(error.message);
    };
    const onReceipt = (receipt) => {
      //DISPATCH RERENDER THE PAGE
      dispatch_setPopupState(PopupState.NONE);
      dispatch_setPage(PageState.feeProposals);
      addressEl.value = "";
      discussionLink.value = "";
    };
    await proposeNewToken(
      feeDao,
      addressEl.value,
      discussionLink.value,
      getNameOpts.data,
      myAddressOpts.data,
      onError,
      onReceipt
    );
  };
}
