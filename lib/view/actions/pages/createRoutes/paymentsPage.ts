import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import {
  dispatch_initPaymentsPage,
  dispatch_renderError,
} from "../../../../dispatch/render";
import { dispatch_setPaymentsPageData } from "../../../../dispatch/stateChange";
import { State } from "../../../../types";
import { getById, getPrice, getStock } from "../../../utils";

export function paymentsPage(props: State) {
  dispatch_initPaymentsPage(props);

  const paymentsCancelEl = getById("payments-cancel");
  const paymentsSaveEl = getById("payments-save");

  const isProfitSharingEl = getById("is-profitsharing") as HTMLInputElement;
  const percentageEl = getById("pst-percentage") as HTMLInputElement;
  const pscEl = getById("pst-contractid") as HTMLInputElement;
  const accountantContractEl = getById(
    "accountant-contractid"
  ) as HTMLInputElement;
  const needsKYCEl = getById("needs-kyc") as HTMLInputElement;

  isProfitSharingEl.onclick = function () {
    const checked = isProfitSharingEl.checked;
    percentageEl.disabled = !checked;
    pscEl.disabled = !checked;
    accountantContractEl.disabled = !checked;
  };

  paymentsCancelEl.onclick = function () {
    goToCreateRoutes();
  };

  paymentsSaveEl.onclick = function () {
    const price = getPrice();

    if (parseFloat(price) < 0) {
      dispatch_renderError("Price can't be negative!");
      return;
    }

    const stock = getStock();

    if (parseFloat(stock) < 0) {
      dispatch_renderError("Stock can't be negative!");
      return;
    }

    const percentage = percentageEl.value;

    const willProfitShare = isProfitSharingEl.checked;
    const pstContractId = pscEl.value;
    const accountantContractId = accountantContractEl.value;
    const needsKYC = needsKYCEl.checked;

    if (willProfitShare) {
      if (parseFloat(percentage) < 0) {
        dispatch_renderError("Percentage can't be negative!");
        return;
      }

      if (parseFloat(percentage) === NaN) {
        dispatch_renderError("Percentage needs to be a number");
        return;
      }

      if (parseFloat(percentage) > 99.5) {
        dispatch_renderError("Maximum fee you can add is 99.5%");
        return;
      }

      // if (pstContractId === "") {
      //   dispatch_renderError("The contract id must be set");
      //   return;
      // }

      if (accountantContractId === "") {
        dispatch_renderError("The accountant must be set");
        return;
      }
    }

    dispatch_setPaymentsPageData({
      price,
      stock,
      willProfitShare,
      percentage,
      pstContractId,
      accountantContractId,
      needsKYC,
    });

    goToCreateRoutes();
  };
}
