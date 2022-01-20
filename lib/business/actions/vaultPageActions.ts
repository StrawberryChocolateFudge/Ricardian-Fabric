import Web3 from "web3";
import {
  dispatch_renderApprovedSpend,
  dispatch_renderCurrentBlock,
  dispatch_renderError,
  dispatch_renderMyRicBalance,
} from "../../dispatch/render";
import {
  dispatch_setBlockPollingInterval,
  dispatch_setPage,
} from "../../dispatch/stateChange";
import { PageState, State } from "../../types";
import { getById } from "../../view/utils";
import {
  allowance,
  approve,
  balanceOf,
  getRicContract,
} from "../../wallet/ric/contractCalls";
import {
  getRicVaultContract,
  lockFunds,
  release,
  RICVAULTADDRESS,
} from "../../wallet/ricVault/contractCalls";
import { getAddress, getBlockNumber } from "../../wallet/web3";
import { getVaultPaginatedFromIndex, hasError, OptionsBuilder } from "../utils";

export async function vaultPageActions(props: State) {
  const lockButton = getById("lock-button");
  const approveButton = getById("approve-vault-button");
  const addressOptions = await OptionsBuilder(() => getAddress());
  if (hasError(addressOptions)) {
    return;
  }
  const addr = addressOptions.data;
  const ricOptions = await OptionsBuilder(() => getRicContract());
  if (hasError(ricOptions)) {
    return;
  }
  const ricBalanceOptions = await OptionsBuilder(() =>
    balanceOf(ricOptions.data, addr, addr)
  );
  if (hasError(ricBalanceOptions)) {
    return;
  }

  const allowanceOptions = await OptionsBuilder(() =>
    allowance(ricOptions.data, addr, RICVAULTADDRESS, addr)
  );
  if (hasError(allowanceOptions)) {
    return;
  }
  dispatch_renderApprovedSpend(allowanceOptions.data);
  dispatch_renderMyRicBalance(props, ricBalanceOptions.data);
  const blockOptions = await OptionsBuilder(() => getBlockNumber());
  if (hasError(blockOptions)) {
    return;
  }

  dispatch_renderCurrentBlock(blockOptions.data);
  const vaultOptions = await OptionsBuilder(() => getRicVaultContract());

  if (hasError(vaultOptions)) {
    return;
  }
  const vault = vaultOptions.data;

  await getVaultPaginatedFromIndex(props, 1, vault, addr, blockOptions.data);

  await pollBlocks();

  lockButton.onclick = async function () {
    const amountEl = getById("lock-amount") as HTMLInputElement;
    const periodEl = getById("lock-time") as HTMLInputElement;

    if (amountEl.value === "") {
      dispatch_renderError("Missing input");
      return;
    }
    if (periodEl.value === "") {
      dispatch_renderError("Missing input");
      return;
    }

    const amountVal = parseFloat(amountEl.value);
    const periodVal = parseFloat(periodEl.value);

    if (amountVal <= 0) {
      dispatch_renderError("Invalid amount");
      return;
    }
    if (periodVal <= 0) {
      dispatch_renderError("Invalid blocks");
      return;
    }

    if (parseFloat(ricBalanceOptions.data) < amountVal) {
      dispatch_renderError("Not enough balance");
      return;
    }

    const onError = (error, receipt) => {
      dispatch_renderError(error.message);
    };
    const onReceipt = (receipt) => {
      dispatch_setPage(PageState.vault);
    };

    await lockFunds(
      vault,
      periodVal.toString(),
      amountVal.toString(),
      addr,
      onError,
      onReceipt
    );
  };

  approveButton.onclick = async function () {
    const addressOptions = await OptionsBuilder(() => getAddress());
    if (hasError(addressOptions)) {
      return;
    }
    const addr = addressOptions.data;
    const amountEl = getById("lock-amount") as HTMLInputElement;
    if (amountEl.value === "") {
      dispatch_renderError("Missing input");
      return;
    }
    const amountVal = parseFloat(amountEl.value);

    if (amountVal < 0) {
      dispatch_renderError("Invalid amount");
      return;
    }

    const ricOptions = await OptionsBuilder(() => getRicContract());

    if (hasError(ricOptions)) {
      return;
    }

    const onError = (error, receipt) => {
      dispatch_renderError(error.message);
    };
    const onReceipt = async (receipt) => {
      const allowanceOptions = await OptionsBuilder(() =>
        allowance(ricOptions.data, addr, RICVAULTADDRESS, addr)
      );
      if (hasError(allowanceOptions)) {
        return;
      }
      dispatch_renderApprovedSpend(allowanceOptions.data);
    };
    await approve(
      ricOptions.data,
      RICVAULTADDRESS,
      Web3.utils.toWei(amountEl.value),
      addr,
      onError,
      onReceipt
    );
  };

  const paginationButtons =
    document.getElementsByClassName("vaultPagingButtons");
  for (let i = 0; i < paginationButtons.length; i++) {
    const paginationButton = paginationButtons[i] as HTMLButtonElement;
    paginationButton.onclick = async function () {
      const pageIndex = parseInt(paginationButton.dataset.vaultpage);
      const blockNumber = await getBlockNumber();
      await getVaultPaginatedFromIndex(
        props,
        pageIndex,
        vault,
        addr,
        blockNumber
      );
    };
  }

  const pageLeftButton = getById("vault-page-left");
  const pageRightButton = getById("vault-page-right");

  pageLeftButton.onclick = async function () {
    const index = parseInt(pageLeftButton.dataset.vaultpage);
    if (index > 1) {
      const blockNumber = await getBlockNumber();
      await getVaultPaginatedFromIndex(
        props,
        index - 1,
        vault,
        addr,
        blockNumber
      );
    }
  };
  pageRightButton.onclick = async function () {
    const index = parseInt(pageRightButton.dataset.vaultpage);
    const total = parseInt(pageRightButton.dataset.totalpages);

    if (index < total) {
      const blockNumber = await getBlockNumber();
      await getVaultPaginatedFromIndex(
        props,
        index + 1,
        vault,
        addr,
        blockNumber
      );
    }
  };
}

export async function pollBlocks() {
  const intervalVal = setInterval(async () => {
    const blockOptions = await OptionsBuilder(() => getBlockNumber());
    if (hasError(blockOptions)) {
      return;
    }

    dispatch_renderCurrentBlock(blockOptions.data);
  }, 2000);

  dispatch_setBlockPollingInterval(intervalVal);
}

export function lockedTokensActions(props: State) {
  const releaseButtons = document.getElementsByClassName("vaultReleaseButtons");

  for (let index = 0; index < releaseButtons.length; index++) {
    const element = releaseButtons[index] as HTMLElement;
    const lockindex = element.dataset.lockindex;
    const currentPage = parseInt(element.dataset.currentpage);
    element.onclick = async function () {
      const addressOptions = await OptionsBuilder(() => getAddress());

      if (hasError(addressOptions)) {
        return;
      }
      const addr = addressOptions.data;

      const vaultOptions = await OptionsBuilder(() => getRicVaultContract());

      if (hasError(vaultOptions)) {
        return;
      }
      const vault = vaultOptions.data;

      const onError = (error) => {
        dispatch_renderError(error.message);
      };
      const onReceipt = async () => {
        // dispatch_setPage(PageState.vault);
        const blockNumber = await getBlockNumber();
        await getVaultPaginatedFromIndex(
          props,
          currentPage,
          vault,
          addr,
          blockNumber
        );
        const ricOptions = await OptionsBuilder(() => getRicContract());
        if (hasError(ricOptions)) {
          return;
        }
        const ricBalanceOptions = await OptionsBuilder(() =>
          balanceOf(ricOptions.data, addr, addr)
        );
        if (hasError(ricBalanceOptions)) {
          return;
        }
        dispatch_renderMyRicBalance(props, ricBalanceOptions.data);
      };

      await release(vault, lockindex, addr, onError, onReceipt);
    };
  }
}
