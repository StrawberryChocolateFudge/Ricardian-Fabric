import {
  RenderType,
  State,
} from "../types";
import { dispatch } from "./dispatch";
import { Events } from "../types";

export function dispatch_createPage(props: State) {
  dispatch(Events.render, {
    type: RenderType.createPage,
    props,
  });
}

export function dispatch_renderAcceptButton(props: State) {
  dispatch(Events.render, { type: RenderType.acceptButton, props });
}

export function dispatch_renderBalance(props: State) {
  dispatch(Events.render, { type: RenderType.balance, props });
}

export function dispatch_renderLoadingIndicator(to: string) {
  dispatch(Events.render, {
    type: RenderType.addLoadingIndicator,
    props: { to },
  });
}

export function dispatch_removeLoadingIndicator(from: string) {
  dispatch(Events.render, {
    type: RenderType.removeLoadingIndicator,
    props: { from },
  });
}

export function dispatch_renderTransaction(url: string) {
  dispatch(Events.render, {
    type: RenderType.transaction,
    props: { url },
  });
}

export function dispatch_removeError() {
  dispatch(Events.render, {
    type: RenderType.removeError,
  });
}

export function dispatch_enableButton(props: State) {
  dispatch(Events.render, {
    type: RenderType.enableButton,
    props,
  });
}

export function dispatch_disableButton(props: State) {
  dispatch(Events.render, {
    type: RenderType.disableButton,
    props,
  });
}

export function dispatch_renderError(message: string) {
  dispatch(Events.render, {
    type: RenderType.renderError,
    props: { message },
  });
}

export function dispatch_renderVersion(version: string) {
  dispatch(Events.render, {
    type: RenderType.version,
    props: { version },
  });
}

export function dispatch_redirectCounter(count: number) {
  dispatch(Events.render, {
    type: RenderType.redirectCounter,
    props: { count },
  });
}

export function dispatch_attachDateClickListener(props: State) {
  dispatch(Events.render, {
    type: RenderType.dateClickListener,
    props,
  });
}

export function dispatch_renderTerms() {
  dispatch(Events.render, {
    type: RenderType.renderTerms,
    props: {},
  });
}

export function dispatch_renderInstrumentSettings(props: State) {
  dispatch(Events.render, {
    type: RenderType.renderInstrumentSettings,
    props,
  });
}

export function dispatch_instrumentsSetRerender(props: State) {
  dispatch(Events.render, {
    type: RenderType.setInstrument,
    props,
  });
}

export function dispatch_renderCountries(availableCountries: Array<string>) {
  dispatch(Events.render, {
    type: RenderType.signerCountries,
    props: { availableCountries },
  });
}

export function dispatch_initAgreementPage(props: State, editor: any) {
  dispatch(Events.render, {
    type: RenderType.initAgreementPage,
    props: { ...props, editor },
  });
}

export function dispatch_initSemanticsPage(props: State, editor: any) {
  dispatch(Events.render, {
    type: RenderType.initSemanticsPage,
    props: { props, editor },
  });
}

export function dispatch_initSignerPage(props: State) {
  dispatch(Events.render, {
    type: RenderType.initSignerPage,
    props,
  });
}

export function dispatch_initPDFPage(props: State) {
  dispatch(Events.render, {
    type: RenderType.initPDFPage,
    props,
  });
}

export function dispatch_initWalletPage(props: State) {
  dispatch(Events.render, {
    type: RenderType.initWalletPage,
    props,
  });
}

export function dispatch_initSmartContractPage(props: State) {
  dispatch(Events.render, {
    type: RenderType.initSmartContractPage,
    props,
  });
}

export function dispatch_initNetworkingPage(props: State) {
  dispatch(Events.render, {
    type: RenderType.initNetworkingPage,
    props,
  });
}

export function dispatch_initSummaryPage(props: State) {
  dispatch(Events.render, {
    type: RenderType.initSummaryPage,
    props,
  });
}

export function dispatch_discardPdf() {
  dispatch(Events.render, {
    type: RenderType.discardPdf,
    props: {},
  });
}

export function dispatch_promptSuccess(file: File | string) {
  dispatch(Events.render, {
    type: RenderType.promptSuccess,
    props: { file },
  });
}
export function dispatch_promptError(message: string) {
  dispatch(Events.render, {
    type: RenderType.promptError,
    props: { message },
  });
}
