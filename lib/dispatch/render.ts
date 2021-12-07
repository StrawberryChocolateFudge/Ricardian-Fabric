import { DeploySC, RenderType, State, VerificationState } from "../types";
import { dispatch } from "./dispatch";
import { Events } from "../types";

export function dispatch_renderMenu(props: State) {
  dispatch(Events.render, {
    type: RenderType.menu,
    props,
  });
}

export function dispatch_renderCreate(props: State) {
  dispatch(Events.render, {
    type: RenderType.create,
    props,
  });
}

export function dispatch_sideBar(props: State){
  dispatch(Events.render,{
    type: RenderType.sidebar,
    props
  })
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

export function dispatch_catalogPage(props: State) {
  dispatch(Events.render, {
    type: RenderType.catalogPage,
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

export function dispatch_renderUploadStatus(props: State, progress: string) {
  dispatch(Events.render, {
    type: RenderType.uploadStatus,
    props: { ...props, tmp: { progress } },
  });
}

export function dispatch_discardFile(props: State) {
  dispatch(Events.render, {
    type: RenderType.discardFile,
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
  data: any,
  props: State
) {
  dispatch(Events.render, {
    type: RenderType.uploadSummary,
    props: { transaction, file, data, props },
  });
}

export function dispatch_renderProposalSummary(transaction: any, props: State) {
  dispatch(Events.render, {
    type: RenderType.proposalSummary,
    props: { ...props, tmp: { transaction } },
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

export function dispatch_addNewAccountPopup(
  props: State,
  Account: ArrayBuffer,
  name: string
) {
  dispatch(Events.render, {
    type: RenderType.addNewAccountPopup,
    props: { ...props, tmp: { Account, name } },
  });
}

export function dispatch_showAccountPopup(
  props: State,
  balance: string,
  address: string
) {
  dispatch(Events.render, {
    type: RenderType.showAccountPopup,
    props: { ...props, tmp: { balance, address } },
  });
}

export function dispatch_switch_Accounts(props: State) {
  dispatch(Events.render, {
    type: RenderType.switchAccounts,
    props,
  });
}

export function dispatch_renderTransferPage(props: State) {
  dispatch(Events.render, {
    type: RenderType.transferPage,
    props,
  });
}

export function dispatch_renderTransferSummaryPage(
  props: State,
  mainTransaction: any,
  amountToSend: string,
  sendTip: boolean,
  tipAmount: string,
  tipTransaction: any,
  jwk: any
) {
  dispatch(Events.render, {
    type: RenderType.transferSummaryPage,
    props: {
      ...props,
      tmp: {
        mainTransaction,
        amountToSend,
        sendTip,
        tipAmount,
        tipTransaction,
        jwk,
      },
    },
  });
}

export function dispatch_renderPermapinSummaryPage(
  props: State,
  pinTransaction: any,
  sendTip: boolean,
  tipTransaction: any
) {
  dispatch(Events.render, {
    type: RenderType.permapinSummaryPage,
    props: { ...props, tmp: { pinTransaction, sendTip, tipTransaction } },
  });
}

export function dispatch_renderTxId(to: string, txId: any) {
  dispatch(Events.render, {
    type: RenderType.txId,
    props: { to, txId },
  });
}

export function dispatch_renderVerifyContract(props: State) {
  dispatch(Events.render, {
    type: RenderType.verifyContract,
    props,
  });
}

export function dispatch_verificationState(
  verificationState: VerificationState
) {
  dispatch(Events.render, {
    type: RenderType.verificationState,
    props: { tmp: { verificationState } },
  });
}

export function dispatch_renderCreateProposalPage(props: State) {
  dispatch(Events.render, {
    type: RenderType.createProposalPage,
    props,
  });
}

export function dispatch_renderReviewAndVotePage(props: State) {
  dispatch(Events.render, {
    type: RenderType.reviewAndVotePage,
    props,
  });
}

export function dispatch_permawebselectActions(props: State) {
  dispatch(Events.render, {
    type: RenderType.permawebSelectActions,
    props,
  });
}

export function dispatch_uploadProposal(props: State) {
  dispatch(Events.render, {
    type: RenderType.uploadProposal,
    props,
  });
}
