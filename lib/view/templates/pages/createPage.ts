import { CreatePages, State } from "../../../types";
import { AddWalletPage } from "./addWalletPage";
import { AgreementPage } from "./agreementPage";
import { NetworkingPage } from "./networkingPage";
import { PDFPage } from "./pdfPage";
import { SmartContractPage } from "./smartContractPage";
import { SummaryPage } from "./summaryPage";

export const CreatePage = (props: State) => {
  if (props.createPages === CreatePages.Agreement) {
    return AgreementPage();
  } else if (props.createPages === CreatePages.PDF) {
    return PDFPage();
  } else if (props.createPages === CreatePages.AddWallet) {
    return AddWalletPage();
  } else if (props.createPages === CreatePages.Networking) {
    return NetworkingPage();
  } else if (props.createPages === CreatePages.SmartContract) {
    return SmartContractPage();
  } else if (props.createPages === CreatePages.SummaryPage) {
    return SummaryPage();
  }
};
