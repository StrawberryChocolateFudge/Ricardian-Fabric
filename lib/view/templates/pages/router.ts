import {
  AccountantPage,
  CreatePages,
  ManagementSlider,
  ManagerPages,
  State,
} from "../../../types";
import { CreateRouterUI } from "./createRoutes/createRouterUI";
import { AddWalletPage } from "./createRoutes/addWalletPage";
import { NetworkingPage } from "./createRoutes/networkingPage";
import { PDFPage } from "./createRoutes/pdfPage";
import { SummaryPage } from "./createRoutes/summaryPage";
import { SemanticsPage } from "./createRoutes/semanticsPage";
import { SignerPage } from "./createRoutes/signerPage";
import { PaymentsPage } from "./createRoutes/paymentsPage";
import { NFTPage } from "./createRoutes/NFTPage";
import { InputsPage } from "./createRoutes/inputsPage";
import { ManagerRoutes } from "./managerRoutes/managerRoutes";
import { TopUp } from "./managerRoutes/topup";
import { History } from "./managerRoutes/history";
import { Identity } from "./managerRoutes/identity";
import { Messages } from "./managerRoutes/messages";
import { NFTManager } from "./managerRoutes/nft";
import { Instrument } from "./managerRoutes/instrument";
import { Derivatives } from "./managerRoutes/derivatives";
import { Governance } from "./managerRoutes/governance";
import { AccountantRoutes } from "./accountantRoutes/accountantRoutes";
import { TemplateResult } from "lit-html";

export const Router = (props: State) => {
  if (props.managementSlider === ManagementSlider.OFF) {
    if (props.createPages === CreatePages.Routes) {
      return CreateRouterUI();
      // } else if (props.createPages === CreatePages.Agreement) {
      //   return AgreementPage();
    } else if (props.createPages === CreatePages.Semantics) {
      return SemanticsPage();
    } else if (props.createPages === CreatePages.Signer) {
      return SignerPage();
    } else if (props.createPages === CreatePages.PDF) {
      return PDFPage();
    } else if (props.createPages === CreatePages.AddWallet) {
      return AddWalletPage();
    } else if (props.createPages === CreatePages.Networking) {
      return NetworkingPage();
    } else if (props.createPages === CreatePages.Payments) {
      return PaymentsPage();
    } else if (props.createPages === CreatePages.NFT) {
      return NFTPage();
    } else if (props.createPages === CreatePages.Inputs) {
      return InputsPage();
    } else if (props.createPages === CreatePages.SummaryPage) {
      return SummaryPage();
    }
  } else if (props.managementSlider === ManagementSlider.ON) {
    if (props.managerPages === ManagerPages.Routes) {
      return ManagerRoutes();
    } else if (props.managerPages === ManagerPages.Topup) {
      return TopUp();
    } else if (props.managerPages === ManagerPages.History) {
      return History();
    } else if (props.managerPages === ManagerPages.Identity) {
      return Identity();
    } else if (props.managerPages === ManagerPages.Messages) {
      return Messages();
    } else if (props.managerPages === ManagerPages.NFT) {
      return NFTManager();
    } else if (props.managerPages === ManagerPages.Instruments) {
      return Instrument();
    } else if (props.managerPages === ManagerPages.Derivatives) {
      return Derivatives();
    } else if (props.managerPages === ManagerPages.Governance) {
      return Governance();
    } else if (props.managerPages === ManagerPages.Accountant) {
      return switchAccountantRoutes(props);
    }
  }
};

function switchAccountantRoutes(props: State): TemplateResult {
  if (props.accountantPages === AccountantPage.ROUTER) {
    return AccountantRoutes();
  }
}
