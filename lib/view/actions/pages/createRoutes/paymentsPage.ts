import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import {
  dispatch_initPaymentsPage,
  dispatch_renderError,
} from "../../../../dispatch/render";
import { dispatch_setPaymentsPageData } from "../../../../dispatch/stateChange";
import { State } from "../../../../types";
import { getById, getPrice } from "../../../utils";

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

    const percentage = percentageEl.value;

    if (parseFloat(percentage) < 0) {
      dispatch_renderError("Percentage can't be negative!");
      return;
    }

    const willProfitShare = isProfitSharingEl.checked;
    const pstContractId = pscEl.value;
    const accountantContractId = accountantContractEl.value;
    const needsKYC = needsKYCEl.checked;

    dispatch_setPaymentsPageData({
      price,
      willProfitShare,
      percentage,
      pstContractId,
      accountantContractId,
      needsKYC,
    });

    goToCreateRoutes();
  };
}
