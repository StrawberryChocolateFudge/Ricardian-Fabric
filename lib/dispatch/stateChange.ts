import {
  AgreementPage,
  CreatePages,
  Events,
  EventType,
  InstrumentPageData,
  NetworkingPage,
  PDFPage,
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

export function dispatch_instrumentPageData(
  instrumentPageData: InstrumentPageData
) {
  dispatch(Events.stateChange, {
    type: EventType.setInstrumentPageData,
    value: { instrumentPageData },
  });
}

export function dispatch_setKey(key: any, file: FileList) {
  dispatch(Events.stateChange, {
    type: EventType.setKey,
    value: { key, file },
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
