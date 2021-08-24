import { CreatePages, State } from "../../../types";
import { agreementPage } from "./agreementPage";
import { networkingPage } from "./networkingPage";
import { pdfPage } from "./pdfPage";
import { smartContractPage } from "./smartContractPage";
import { summaryPage } from "./summaryPage";
import { walletPage } from "./walletPage";

export function nextButtonClick(props: State) {
  if (props.createPages === CreatePages.Agreement) {
    agreementPage(props);
  } else if (props.createPages === CreatePages.PDF) {
    pdfPage(props);
  } else if (props.createPages === CreatePages.AddWallet) {
    walletPage(props);
  } else if (props.createPages === CreatePages.SmartContract) {
    smartContractPage(props);
  } else if (props.createPages === CreatePages.Networking) {
    networkingPage(props);
  } else if (props.createPages === CreatePages.SummaryPage) {
    summaryPage(props);
  }
}
