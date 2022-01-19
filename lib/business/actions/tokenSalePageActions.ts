import Web3 from "web3";
import Decimal from "decimal.js";
import {
  dispatch_renderError,
  dispatch_renderSellAmount,
  dispatch_tokenSalePageInit,
} from "../../dispatch/render";
import { dispatch_setPage } from "../../dispatch/stateChange";
import { PageState, State, Status } from "../../types";
import { getById } from "../../view/utils";
import {
  balanceOf,
  getRicContract,
  RICPARAMS,
} from "../../wallet/ric/contractCalls";
import {
  buyTokens,
  getCurrentRate,
  getRicSaleContract,
  getTokensSold,
  purchasedAlready,
  remainingTokens,
} from "../../wallet/ricSale/contractCalls";
import { getAddress, watchAsset } from "../../wallet/web3";
import { OptionsBuilder } from "../utils";

export async function tokenSalePageActions(props: State) {
  const buyButton = getById("buy-ric");
  const amountEl = getById("buy-amount") as HTMLInputElement;

  const addressOptions = await OptionsBuilder(() => getAddress());

  if (addressOptions.status === Status.Failure) {
    dispatch_renderError(addressOptions.error);
    return;
  }
  const address = addressOptions.data;

  const ricOptions = await OptionsBuilder(() => getRicContract());

  if (ricOptions.status === Status.Failure) {
    dispatch_renderError(ricOptions.error);
    return;
  }
  const ricsaleOptions = await OptionsBuilder(() => getRicSaleContract());
  if (ricsaleOptions.status === Status.Failure) {
    dispatch_renderError(ricsaleOptions.error);
    return;
  }
  const ricsale = ricsaleOptions.data;
  const ricLeftOptions = await OptionsBuilder(() =>
    remainingTokens(ricsale, address)
  );

  if (ricLeftOptions.status === Status.Failure) {
    dispatch_renderError(ricLeftOptions.error);
    return;
  }
  const ricLeft = ricLeftOptions.data;

  const ricBalanceOptions = await OptionsBuilder(() =>
    balanceOf(ricOptions.data, address, address)
  );

  if (ricBalanceOptions.status === Status.Failure) {
    dispatch_renderError(ricBalanceOptions.error);
    return;
  }
  let tokensSoldOptions = await OptionsBuilder(() =>
    getTokensSold(ricsale, address)
  );
  if (tokensSoldOptions.status === Status.Failure) {
    dispatch_renderError(tokensSoldOptions.error);
    return;
  }
  const tokensSold = tokensSoldOptions.data;
  const ricRateOptions = await OptionsBuilder(() =>
    getCurrentRate(ricsale, tokensSold, address)
  );

  if (ricRateOptions.status === Status.Failure) {
    dispatch_renderError(ricRateOptions.error);
    return;
  }
  const purchasedAlreadyOptions = await OptionsBuilder(() =>
    purchasedAlready(ricsale, address, address)
  );

  if (purchasedAlreadyOptions.status === Status.Failure) {
    dispatch_renderError(purchasedAlreadyOptions.error);
    return;
  }
  const rate = ricRateOptions.data;
  const balance = ricBalanceOptions.data;
  dispatch_tokenSalePageInit(
    props,
    ricLeft,
    rate,
    balance,
    tokensSold,
    purchasedAlreadyOptions.data
  );
  const ricSaleOptions = await OptionsBuilder(() => getRicSaleContract());

  if (ricSaleOptions.status === Status.Failure) {
    dispatch_renderError(ricSaleOptions.error);
    return;
  }

  function setSellAmount(amount: string) {
    if (amount === "") {
      return;
    }
    const sellAmountDec = new Decimal(rate).times(amount); //.mul(amount);
    const sellAmount: number = sellAmountDec.toNumber();
    if (sellAmount > 100000) {
      dispatch_renderError("Max buy amount exceeded");
    }
    dispatch_renderSellAmount(props, sellAmount);
  }

  setSellAmount("0");

  buyButton.onclick = async function () {
    if (purchasedAlreadyOptions.data) {
      dispatch_renderError("You already made a purchase at this rate.");
      return;
    }

    const onError = (error: any, receipt: any) => {
      dispatch_renderError(error.message);
    };
    const onReceipt = async (receipt: any) => {
      dispatch_setPage(PageState.tokenSale);
      await watchAsset(RICPARAMS, () => {
        dispatch_renderError("Couldn't add token to wallet.");
      });
    };

    // If max price is not exceeded
    const getAmount = amountEl.value;
    try {
      const weiAmount = Web3.utils.toWei(getAmount);
      buyTokens(ricSaleOptions.data, weiAmount, address, onError, onReceipt);
    } catch (err) {
      dispatch_renderError(err.message);
    }
  };

  amountEl.onchange = async function (ev: Event) {
    try {
      //@ts-ignore
      setSellAmount(ev.target.value);
    } catch (err) {
      dispatch_renderError(err.message);
      return;
    }
  };
}
