import { RenderType, State } from "../types";
import { dispatch } from "./dispatch";
import { Events } from "../types";
import Transaction from "arweave/node/lib/transaction";

export function dispatch_renderCreateButton(props: State) {
  dispatch(Events.render, {
    type: RenderType.createButton,
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

export function dispatch_renderCreateFee(
  fee: string,
  props: State,
  tx: Transaction,
  key: any
) {
  dispatch(Events.render, {
    type: RenderType.createFeeSummary,
    props: { ...props, fee, tx, key },
  });
}

export function dispatch_noButtonPressed(props: any) {
  dispatch(Events.render, {
    type: RenderType.noButtonPressed,
    props,
  });
}

export function dispatch_yesButtonPressed(props: any) {
  dispatch(Events.render, {
    type: RenderType.yesButtonPressed,
    props,
  });
}

export function dispatch_removeAcceptedButton(props: State) {
  dispatch(Events.render, {
    type: RenderType.removeAcceptedButton,
    props,
  });
}
