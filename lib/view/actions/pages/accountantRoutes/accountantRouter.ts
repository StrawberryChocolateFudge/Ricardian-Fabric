import { gotToManagerRoutes } from "../../../../dispatch/dispatch";
import { dispatch_setAccountantPages } from "../../../../dispatch/stateChange";
import { AccountantPage, State } from "../../../../types";
import { getById } from "../../../utils";

export function accountantRouter(props: State) {
  const routingButtonProps = [
    [AccountantPage.KYC, "kycButton"],
    [AccountantPage.FEES, "feesButton"],
    [AccountantPage.RESALE, "resaleButton"],
    [AccountantPage.TRADE, "tradeButton"],
  ];

  routingButtonProps.forEach((p) => {
    attachRouteClick(p[0] as AccountantPage, p[1] as string);
  });

  const back = getById("accountant-back");
  const start = getById("accounting-start");
  back.onclick = function () {
    gotToManagerRoutes();
  };
  start.onclick = function () {};
}

function attachRouteClick(page: AccountantPage, id: string) {
  getById(id).onclick = function () {
    dispatch_setAccountantPages(page);
  };
}
