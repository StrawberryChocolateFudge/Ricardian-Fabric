import {
  AccountantPage,
  AgreementPage,
  CreatePages,
  Events,
  EventType,
  InstrumentPageData,
  ManagementSlider,
  ManagerPages,
  NetworkingPage,
  NFTPage,
  PaymentPage,
  PDFPage,
  SemanticsPage,
  SignerPage,
  WalletPage,
} from "../types";
import { dispatch } from "./dispatch";

export function dispatch_getArweave(arweave: any) {
  dispatch(Events.stateChange, {
    type: EventType.setArweave,
    value: arweave,
  });
}

export function dispatch_setBalance(arg: { balance: number; address: string }) {
  dispatch(Events.stateChange, {
    type: EventType.setBalance,
    value: arg,
  });
}

export function dispatch_setSelectedDate(date: Date | string) {
  dispatch(Events.stateChange, {
    type: EventType.setSelectedDate,
    value: { date },
  });
}

export function dispatch_setAgreementsPageData(agreementsData: AgreementPage) {
  dispatch(Events.stateChange, {
    type: EventType.setAgreementsPageData,
    value: { agreementsData },
  });
}

export function dispatch_setSemanticsPageData(semanticsData: SemanticsPage) {
  dispatch(Events.stateChange, {
    type: EventType.setSemanticsPageData,
    value: { semanticsData },
  });
}

export function dispatch_setSignerPageData(signerData: SignerPage) {
  dispatch(Events.stateChange, {
    type: EventType.setSignerPageData,
    value: { signerData },
  });
}

export function dispatch_setPdfPageData(pdfPageData: PDFPage) {
  dispatch(Events.stateChange, {
    type: EventType.setPdfPageData,
    value: { pdfPageData },
  });
}

export function dispatch_setCreatePages(createPage: CreatePages) {
  dispatch(Events.stateChange, {
    type: EventType.setCreatePages,
    value: { createPage },
  });
}

export function dispatch_setManagerPages(managerPage: ManagerPages) {
  dispatch(Events.stateChange, {
    type: EventType.setManagerPages,
    value: { managerPage },
  });
}

export function dispatch_setAccountantPages(accountantPage: AccountantPage) {
  dispatch(Events.stateChange, {
    type: EventType.setAccountantPages,
    value: { accountantPage },
  });
}

export function dispatch_setPaymentsPageData(paymentsPage: PaymentPage) {
  dispatch(Events.stateChange, {
    type: EventType.setPaymentPageData,
    value: { paymentsPage },
  });
}

export function dispatch_setNFTPageData(nftPageData: NFTPage) {
  dispatch(Events.stateChange, {
    type: EventType.setNFTPageData,
    value: { nftPageData },
  });
}


export function dispatch_instrumentPageData(
  instrumentPageData: InstrumentPageData
) {
  dispatch(Events.stateChange, {
    type: EventType.setInstrumentPageData,
    value: { instrumentPageData },
  });
}

export function dispatch_setWallet(walletPage: WalletPage) {
  dispatch(Events.stateChange, {
    type: EventType.setWallet,
    value: { walletPage },
  });
}

export function dispatch_setNetworkingPage(networkingPage: NetworkingPage) {
  dispatch(Events.stateChange, {
    type: EventType.setNetworkingPage,
    value: { networkingPage },
  });
}

export function dispatch_setEditor(editor: any) {
  dispatch(Events.stateChange, {
    type: EventType.setEditor,
    value: { editor },
  });
}

export function dispatch_managerSwitch(to: ManagementSlider) {
  dispatch(Events.stateChange, {
    type: EventType.setManagementSwitch,
    value: { to },
  });
}
