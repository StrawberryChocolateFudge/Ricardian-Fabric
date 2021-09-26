import { goToCreateRoutes } from "../../../dispatch/dispatch";
import { State } from "../../../types";
import { getById } from "../../utils";

export function paymentsPage(props: State) {
  const paymentsCancel = getById("payments-cancel");
  const paymentsSave = getById("payments-save");

  paymentsCancel.onclick = function () {
    goToCreateRoutes();
  };

  paymentsSave.onclick = function () {
    goToCreateRoutes();
  };
}
