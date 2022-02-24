import {
  dispatch_renderRewardTokenRowWithBalances,
  dispatch_renderRewardTokenWithdraw,
} from "../../dispatch/render";
import { State, Token } from "../../types";
import {
  getCurrentbalance,
  getFeeDaoContract,
  getTokens,
} from "../../wallet/feeDao/contractCalls";
import { balanceOf, getERC20 } from "../../wallet/ric/contractCalls";
import { FEEDAOADDRESS, getAddress } from "../../wallet/web3";
import { hasError, OptionsBuilder } from "../utils";

export async function collectRewardsPageActions(props: State) {
  const feeDaoOptions = await OptionsBuilder(() => getFeeDaoContract());

  if (hasError(feeDaoOptions)) {
    return;
  }

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

  const currentBalanceOpts = await OptionsBuilder(() =>
    getCurrentbalance(feeDaoOptions.data, myAddressOpts.data)
  );

  if (hasError(currentBalanceOpts)) {
    return;
  }

  const tokenBalances = [
    { name: "ONE", balance: currentBalanceOpts.data, address: "Harmony ONE" },
  ];
  const tokens = tokensOpts.data as Token[];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    const getERC20Opts = await OptionsBuilder(() => getERC20(token.token));

    if (hasError(getERC20Opts)) {
      return;
    }
    // Check how much the feedao has of the tokens!
    const balanceOpts = await OptionsBuilder(() =>
      balanceOf(getERC20Opts.data, FEEDAOADDRESS, myAddressOpts.data)
    );

    if (hasError(balanceOpts)) {
      return;
    }

    const balance = balanceOpts.data;

    tokenBalances.push({
      name: token.name,
      address: token.token,
      balance: balance,
    });
  }
  dispatch_renderRewardTokenRowWithBalances(props, tokenBalances);
}

export function onRewardTokenRowClicks(props: State) {
  const feeTokenDisplayButtons = document.getElementsByClassName(
    "feeTokenDisplayButton"
  );

  for (let i = 0; i < feeTokenDisplayButtons.length; i++) {
    const feetokenBttn = feeTokenDisplayButtons[i] as HTMLElement;

    feetokenBttn.onclick = async () => {
      const name = feetokenBttn.dataset.name;
      const address = feetokenBttn.dataset.address;
      const balance = feetokenBttn.dataset.balance;

      //TODO: fetch how much I can withdraw from the tokens
      //TODO: need to be able to withdraw from 1 and 3, maybe I still need the checkboxes??
      // to be able to select 3 lol
      // Or I need a way to drag and drop them into slots or something
      //drag one or drag 3....
      dispatch_renderRewardTokenWithdraw(props, { name, address, balance });
    };
  }
}
