import { DeploySC, RenderType, State } from "../types";
import { dispatch } from "./dispatch";
import { Events } from "../types";

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

export function dispatch_renderTransaction(
  props: State,
  url: string,
  ipfsHash: string
) {
  dispatch(Events.render, {
    type: RenderType.transaction,
    props: { ...props, url, ipfsHash },
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

export function dispatch_redirect(url: string) {
  dispatch(Events.render, {
    type: RenderType.redirect,
    props: { url },
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

export function dispatch_renderAreYouSure(props: State) {
  dispatch(Events.render, {
    type: RenderType.areYouSure,
    props,
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

export function dispatch_promptSuccessDOCX(file: File | string) {
  dispatch(Events.render, {
    type: RenderType.promptSuccessDOCX,
    props: { file },
  });
}

export function dispatch_promptErrorDOCX(message: string) {
  dispatch(Events.render, {
    type: RenderType.promptErrorDOCX,
    props: { message },
  });
}

export function dispatch_renderAddress(props: State) {
  dispatch(Events.render, {
    type: RenderType.renderAddress,
    props,
  });
}

export function dispatch_disableCreateInputs() {
  dispatch(Events.render, {
    type: RenderType.disableCreateInputs,
    props: {},
  });
}
export function dispatch_enableCreateInputs() {
  dispatch(Events.render, {
    type: RenderType.enableCreateInputs,
    props: {},
  });
}

export function dispatch_disableAcceptableInputs() {
  dispatch(Events.render, {
    type: RenderType.disableAcceptableInputs,
    props: {},
  });
}
export function dispatch_enableAcceptableInputs() {
  dispatch(Events.render, {
    type: RenderType.enableAcceptableInputs,
    props: {},
  });
}

export function dispatch_deployAgain(props: State) {
  dispatch(Events.render, {
    type: RenderType.deployAgain,
    props,
  });
}

export function dispatch_deploySCIntent(props: State) {
  dispatch(Events.render, {
    type: RenderType.deploySCIntent,
    props,
  });
}

export function dispatch_SCDeploySelected(deploy: DeploySC) {
  dispatch(Events.render, {
    type: RenderType.SCDeploySelected,
    props: { deploy },
  });
}

export function dispatch_DisableSCInputs(params: any) {
  dispatch(Events.render, {
    type: RenderType.DisableSCInputs,
    props: { params },
  });
}
export function dispatch_EnableSCInputs(params: any) {
  dispatch(Events.render, {
    type: RenderType.EnableSCInputs,
    props: { params },
  });
}

export function dispatch_setDeployedSCAddress(address: string) {
  dispatch(Events.render, {
    type: RenderType.SetDeployedSCAddress,
    props: { address },
  });
}

export function dispatch_renderDocXDropper(props: State) {
  dispatch(Events.render, {
    type: RenderType.DocxDropper,
    props,
  });
}

export function dispatch_renderUploadFilePopup(props: State) {
  dispatch(Events.render, {
    type: RenderType.uploadFile,
    props,
  });
}

export function dispatch_hidePopup() {
  dispatch(Events.render, {
    type: RenderType.hidePopup,
    props: {},
  });
}

export function dispatch_renderUploadSummary(
  file: File,
  transaction: any,
  fee: any,
  data: any,
  props: State
) {
  dispatch(Events.render, {
    type: RenderType.uploadSummary,
    props: { transaction, file, fee, data, props },
  });
}

export function dispatch_hideElement(el: HTMLElement, hide: boolean) {
  dispatch(Events.render, {
    type: RenderType.hideElement,
    props: { el, hide },
  });
}

export function dispatch_permapinPopup(props: State, ipfsHash) {
  dispatch(Events.render, {
    type: RenderType.permapinPopup,
    props: { ...props, ipfsHash },
  });
}

export function dispatch_walletPopup(props: State) {
  dispatch(Events.render, {
    type: RenderType.walletPopup,
    props: { ...props },
  });
}

export function dispatch_emptyWalletDropper(props: State) {
  dispatch(Events.render, {
    type: RenderType.emptyWalletDropper,
    props,
  });
}

export function dispatch_addNewIdentityPopup(
  props: State,
  identity: Blob,
  name: string
) {
  dispatch(Events.render, {
    type: RenderType.addNewIdentityPopup,
    props: { ...props, tmp: { identity, name } },
  });
}

export function dispatch_showIdentityPopup(props: State, balance: string) {
  dispatch(Events.render, {
    type: RenderType.showIdentityPopup,
    props: { ...props, tmp: { balance } },
  });
}

export function dispatch_switch_identities(props: State) {
  dispatch(Events.render, {
    type: RenderType.switchIdentities,
    props,
  });
}
