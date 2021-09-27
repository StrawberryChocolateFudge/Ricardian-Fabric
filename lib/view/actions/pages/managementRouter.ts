import { dispatch_setManagerPages } from "../../../dispatch/stateChange";
import { ManagerPages, State } from "../../../types";
import { getById } from "../../utils";

export function managementRouter(props: State) {
  const routingButtonProps = [
    [ManagerPages.Topup, "topupButton"],
    [ManagerPages.History, "historyButton"],
    [ManagerPages.Identity, "identityButton"],
    [ManagerPages.Messages, "messagesButton"],
    [ManagerPages.NFT, "nftManagerButton"],
    [ManagerPages.Instruments, "instrumentManagerButton"],
    [ManagerPages.Derivatives, "derivativesManagementButton"],
    [ManagerPages.Governance, "governanceButton"],
    [ManagerPages.Accountant, "accountantButton"],
  ];

  routingButtonProps.forEach((p) => {
    attachRouteClick(p[0] as ManagerPages, p[1]);
  });
}

function attachRouteClick(page: ManagerPages, id: string) {
  getById(id).onclick = function () {
    dispatch_setManagerPages(page);
  };
}
