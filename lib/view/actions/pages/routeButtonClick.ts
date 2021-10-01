import {
  CreatePages,
  ManagementSlider,
  ManagerPages,
  State,
} from "../../../types";
import { agreementPage } from "./createRoutes/agreementPage";
import { attachExpiryListener, createRouter } from "./createRouter";
import { inputsPage } from "./createRoutes/inputsPage";
import { networkingPage } from "./createRoutes/networkingPage";
import { nftPage } from "./createRoutes/nftPage";
import { paymentsPage } from "./createRoutes/paymentsPage";
import { pdfPage } from "./createRoutes/pdfPage";
import { semanticsPage } from "./createRoutes/semanticsPage";
import { signerPage } from "./createRoutes/signerPage";
import { summaryPage } from "./summaryPage";
import { onWalletFileDropped, walletPage } from "./createRoutes/walletPage";
import { managementRouter } from "./managementRouter";
import { accountantRouter } from "./accountantRoutes/accountantRouter";
import { instrumentPage } from "./createRoutes/instrumentPage";

export function routeButtonClick(props: State) {
  if (props.managementSlider === ManagementSlider.OFF) {
    if (props.createPages === CreatePages.Routes) {
      createRouter(props);
      attachExpiryListener(props);
    } else if (props.createPages === CreatePages.Agreement) {
      agreementPage(props);
    } else if (props.createPages === CreatePages.PDF) {
      pdfPage(props);
    } else if (props.createPages === CreatePages.AddWallet) {
      walletPage(props);
      onWalletFileDropped(props);
    } else if (props.createPages === CreatePages.Semantics) {
      semanticsPage(props);
    } else if (props.createPages === CreatePages.Signer) {
      signerPage(props);
    } else if (props.createPages === CreatePages.Payments) {
      paymentsPage(props);
    } else if (props.createPages === CreatePages.NFT) {
      nftPage(props);
    } else if (props.createPages === CreatePages.Networking) {
      networkingPage(props);
    } else if (props.createPages === CreatePages.Inputs) {
      inputsPage(props);
    } else if (props.createPages === CreatePages.Instrument) {
      instrumentPage(props);
    } else if (props.createPages === CreatePages.SummaryPage) {
      summaryPage(props);
    }
  } else {
    if (props.managerPages === ManagerPages.Routes) {
      managementRouter(props);
    } else if (props.managerPages === ManagerPages.Accountant) {
      accountantRouter(props);
    }
  }
}
