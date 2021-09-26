import {
  CreatePages,
  ManagementSlider,
  ManagerPages,
  State,
} from "../../../types";
import { agreementPage } from "./agreementPage";
import { createRouter } from "./createRouter";
import { inputsPage } from "./inputsPage";
import { networkingPage } from "./networkingPage";
import { nftPage } from "./nftPage";
import { paymentsPage } from "./paymentsPage";
import { pdfPage } from "./pdfPage";
import { semanticsPage } from "./semanticsPage";
import { signerPage } from "./signerPage";
import { summaryPage } from "./summaryPage";
import { walletPage } from "./walletPage";

export function nextButtonClick(props: State) {
  if (props.managementSlider === ManagementSlider.OFF) {
    if (props.createPages === CreatePages.Routes) {
      createRouter(props);
    } else if (props.createPages === CreatePages.Agreement) {
      agreementPage(props);
    } else if (props.createPages === CreatePages.PDF) {
      pdfPage(props);
    } else if (props.createPages === CreatePages.AddWallet) {
      walletPage(props);
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
    } else if (props.createPages === CreatePages.SummaryPage) {
      summaryPage(props);
    }
  } else {
    if (props.managerPages === ManagerPages.Routes) {
    }
  }
}
