import {
  ContractTypes,
  DeploySC,
  Events,
  RenderDispatchArgs,
  Renderer,
  RenderType,
  State,
} from "../types";
import { renderCreateButtonClick } from "../business/actions/createButtonClick";
import { attachExpiryClickAndListener } from "../business/actions/attachExpiryClickAndListener";
import { renderAcceptOnCLick } from "../business/actions/renderAcceptButton";
import {
  disableButton,
  disableCreateInputs,
  disableSCInputs,
  enableButton,
  enableCreateInputs,
  enableSCInputs,
  handleDropdownClosing,
  removeAcceptedButton,
  removeButtons,
  removeError,
  removeLoadingIndicator,
  removeTransaction,
  renderAcceptButton,
  renderButtonSlotAlignment,
  renderContructorInputs,
  renderredirect,
  renderCreateButton,
  renderError,
  renderLoadingIndicator,
  renderNetworkDropdown,
  renderSanctionsDropdown,
  renderSummary,
  renderTerms,
  renderTooltips,
  renderTransaction,
  setDeployedSCAddressToDOM,
  updatePromptError,
  updatePromptErrorDOCX,
  updatePromptSuccess,
  updatePromptSuccessDOCX,
  renderSelectedWallet,
  renderPermawebDropdown,
  renderTemplatesDropdown,
  removePopup,
  renderDocXDropper,
  renderUploadFile,
  renderUploadSummary,
  hideElement,
  renderPermapinPopup,
  renderWalletPopup,
  emptyWalletDropper,
  renderAddNewAccountPopup,
  renderShowAccount,
  renderSwitchAccounts,
  renderTransferPage,
  renderTransferSummaryPage,
  renderPermapinSummaryPage,
  renderTxId,
  renderVerifyContractPopup,
  renderVerificationState,
  renderCreateProposalPage,
  renderAccordionOpener,
  renderCreatePage,
  renderUploadStatus,
  discardFile,
  renderMenuPage,
  renderCatalogPage,
  renderReviewAndVotePage,
  renderUploadProposal,
  renderProposalSummary,
} from "./render";
import { renderAcceptTools } from "./render";
import { areYouSureButtons } from "../business/actions/areYouSureButtons";
import {
  docxImportBackButton,
  onDocFileDropped,
} from "../business/actions/onDocFileDropped";
import {
  attachTermsButtonListeners,
  createPageAgreeTerms,
} from "../business/actions/terms";
import {
  deployAgainButtonActions,
  redirectAction,
} from "../business/actions/deployAgainButton";
import { changeContainerSlotStyle } from "./utils";
import {
  addChainButtonListener,
  networkSelectActions,
} from "../business/actions/networkSelectActions";
import { constructSCActions } from "../business/actions/deploySCActions";
import { templateSelectActions } from "../business/actions/templateSelectActions";
import {
  AddNewAccountActions,
  permapinPopupActions,
  permapinSummaryActions,
  permawebSelectActions,
  permawebTransactionAction,
  showAccountActions,
  switchAccountsActions,
  transferPageActions,
  transferSummaryPageActions,
  uploadFileListener,
  uploadSummaryActions,
  walletCreateActions,
} from "../business/actions/permawebSelectActions";
import { verifyContractActions } from "../business/actions/verifyContractActions";
import {
  catalogAction,
  createProposalActions,
  uploadProposalActions,
  walletSelectListener,
} from "../business/actions/catalogActions";
import { WinstonToAr } from "../wallet/arweave";
import { menuActions } from "../business/actions/menuActions";
import { reviewAndVotePageActions } from "../business/actions/reviewAndVote";

const Render: Renderer = {
  [RenderType.menu]: (props: State) => {
    renderMenuPage(props);
    menuActions(props);
  },
  [RenderType.create]: (props: State) => {
    renderCreatePage();
    renderButtonSlotAlignment(true);
    createPageAgreeTerms();

    // TODO: Check these, I will add web3 modal!
    renderSelectedWallet(props.selectedWallet);
    walletSelectListener();

    renderCreateButton(true);
    renderCreateButtonClick(props);
    attachExpiryClickAndListener(props);
    renderTooltips();
    renderSanctionsDropdown();
    renderNetworkDropdown();
    networkSelectActions();
    renderPermawebDropdown(props.pageState);
    permawebSelectActions(props);
    renderTemplatesDropdown();
    templateSelectActions(props);

    handleDropdownClosing();

    renderAccordionOpener();
  },
  [RenderType.acceptButton]: (props: State) => {
    renderAcceptTools(props);
    renderAcceptButton(props);
    renderAcceptOnCLick(props);
    enableButton(props);

    addChainButtonListener(props);
  },
  [RenderType.addLoadingIndicator]: (props: { to: string }) => {
    renderLoadingIndicator(props.to);
  },
  [RenderType.removeLoadingIndicator]: (props: { from: string }) => {
    removeLoadingIndicator(props.from);
  },
  [RenderType.transaction]: (props: any) => {
    renderTransaction(props, props.url);
    permawebTransactionAction(props, props.ipfsHash);
  },
  [RenderType.renderError]: (props: { message: string }) => {
    renderError(props.message);
  },
  [RenderType.removeError]: () => {
    removeError();
  },
  [RenderType.enableButton]: (props: State) => {
    enableButton(props);
  },
  [RenderType.disableButton]: (props: State) => {
    disableButton(props);
  },
  [RenderType.redirect]: (props: { url: string }) => {
    renderredirect();
    redirectAction(props.url);
  },
  [RenderType.dateClickListener]: (props: State) => {
    attachExpiryClickAndListener(props);
  },
  [RenderType.renderTerms]: () => {
    renderTerms();
    attachTermsButtonListeners();
  },
  [RenderType.areYouSure]: (props: State) => {
    if (props.contracttype === ContractTypes.acceptable) {
      changeContainerSlotStyle(true);
    }
    renderSummary(props);
    areYouSureButtons(props);
    renderButtonSlotAlignment(false);
  },

  [RenderType.noButtonPressed]: (props: State) => {
    if (props.contracttype === ContractTypes.create) {
      renderCreateButton(true);
      renderCreateButtonClick(props);
    } else if (props.contracttype === ContractTypes.acceptable) {
      changeContainerSlotStyle(false);
      renderAcceptButton(props);
      renderAcceptOnCLick(props);
    }
    enableButton(props);
    renderButtonSlotAlignment(true);
  },
  [RenderType.yesButtonPressed]: (props: State) => {
    removeButtons();
    renderButtonSlotAlignment(true);
  },
  [RenderType.removeAcceptedButton]: (props: State) => {
    removeAcceptedButton();
  },
  [RenderType.promptSuccess]: (props: { file: File | string }) => {
    updatePromptSuccess(props.file as File);
  },
  [RenderType.promptError]: (props: { message: string }) => {
    updatePromptError(props.message);
  },
  [RenderType.promptSuccessDOCX]: (props: { file: File | string }) => {
    updatePromptSuccessDOCX(props.file as File);
  },
  [RenderType.promptErrorDOCX]: (props: { message: string }) => {
    updatePromptErrorDOCX(props.message);
  },
  [RenderType.disableCreateInputs]: (props: {}) => {
    disableCreateInputs();
  },
  [RenderType.enableCreateInputs]: (props: {}) => {
    enableCreateInputs();
    //If we deployed, this will remove the transaction when we want to deploy again
    removeTransaction();
  },
  [RenderType.disableAcceptableInputs]: (props: {}) => {},
  [RenderType.enableAcceptableInputs]: (props: {}) => {},
  [RenderType.deployAgain]: (props: State) => {
    deployAgainButtonActions(props);
  },
  [RenderType.catalogPage]: (props: State) => {
    renderCatalogPage();
    catalogAction(props);
  },
  [RenderType.SCDeploySelected]: (props: { deploy: DeploySC }) => {
    renderContructorInputs(props.deploy);
    constructSCActions(props.deploy);
  },
  [RenderType.DisableSCInputs]: (props: { params: any }) => {
    disableSCInputs(props.params);
  },
  [RenderType.EnableSCInputs]: (props: { params: any }) => {
    enableSCInputs(props.params);
  },
  [RenderType.SetDeployedSCAddress]: (props: { address }) => {
    setDeployedSCAddressToDOM(props.address);
  },
  [RenderType.DocxDropper]: (props: State) => {
    renderDocXDropper();
    onDocFileDropped(props);
    docxImportBackButton();
  },
  [RenderType.uploadFile]: (props: State) => {
    renderUploadFile();
    uploadFileListener(props);
  },
  [RenderType.uploadSummary]: (props: {
    file: File;
    transaction: any;
    data: any;
    props: State;
  }) => {
    const fee = WinstonToAr(props.transaction.reward);
    renderUploadSummary(props.file, fee, props.transaction.id);
    uploadSummaryActions(props.transaction, props.data, props.props);
  },
  [RenderType.uploadStatus]: (props: RenderDispatchArgs) => {
    renderUploadStatus(props.tmp.progress);
  },
  [RenderType.discardFile]: (props: State) => {
    discardFile();
  },
  [RenderType.permapinPopup]: (props: State) => {
    renderPermapinPopup();
    permapinPopupActions(props);
  },
  [RenderType.walletPopup]: (props: State) => {
    renderWalletPopup();
    walletCreateActions(props);
  },
  [RenderType.emptyWalletDropper]: (props: State) => {
    emptyWalletDropper();
  },
  [RenderType.addNewAccountPopup]: (props: RenderDispatchArgs) => {
    renderAddNewAccountPopup(props.tmp.Account, props.tmp.name);
    AddNewAccountActions(props, props.tmp.Account, props.tmp.name);
  },
  [RenderType.showAccountPopup]: (props: RenderDispatchArgs) => {
    renderShowAccount(props.tmp.address, props.tmp.balance);
    showAccountActions(props);
    permawebTransactionAction(props, props.ipfsCID);
  },
  [RenderType.switchAccounts]: (props: State) => {
    renderSwitchAccounts();
    switchAccountsActions(props);
  },
  [RenderType.transferPage]: (props: RenderDispatchArgs) => {
    renderTransferPage(props.Account.balance);
    transferPageActions(props);
  },
  [RenderType.transferSummaryPage]: (props: RenderDispatchArgs) => {
    renderTransferSummaryPage(props.tmp);
    transferSummaryPageActions(props);
  },
  [RenderType.permapinSummaryPage]: (props: RenderDispatchArgs) => {
    //permapin summary page actions
    renderPermapinSummaryPage({
      permapinTx: props.tmp.pinTransaction,
      sendTip: props.tmp.sendTip,
      tipTx: props.tmp.tipTransaction,
    });
    permapinSummaryActions({
      permapinTx: props.tmp.pinTransaction,
      sendTip: props.tmp.sendTip,
      tipTx: props.tmp.tipTransaction,
    });
  },
  [RenderType.hidePopup]: ({}) => {
    removePopup();
  },
  [RenderType.hideElement]: (props: { el: HTMLElement; hide: boolean }) => {
    hideElement(props.el, props.hide);
  },
  [RenderType.txId]: (props: { to: string; txId: string }) => {
    renderTxId(props.to, props.txId);
  },
  [RenderType.verifyContract]: (props: State) => {
    renderVerifyContractPopup();
    verifyContractActions(props);
  },
  [RenderType.verificationState]: (props: RenderDispatchArgs) => {
    renderVerificationState(props.tmp.verificationState);
  },
  [RenderType.createProposalPage]: (props: RenderDispatchArgs) => {
    renderCreateProposalPage(props);
    createProposalActions(props);
    renderAccordionOpener();
  },
  [RenderType.reviewAndVotePage]: (props: RenderDispatchArgs) => {
    renderReviewAndVotePage(props);
    reviewAndVotePageActions(props);
  },
  [RenderType.permawebSelectActions]: (props: RenderDispatchArgs) => {
    renderPermawebDropdown(props.pageState);
    permawebSelectActions(props);
    handleDropdownClosing();
  },
  [RenderType.uploadProposal]: (props: RenderDispatchArgs) => {
    renderUploadProposal();
    uploadProposalActions(props);
  },
  [RenderType.proposalSummary]: (props: RenderDispatchArgs) => {
    const fee = WinstonToAr(props.tmp.transaction.reward);
    const id = props.tmp.transaction.id;
    renderProposalSummary(fee, id);
    //TODO: actions
  },
};

document.body.addEventListener(Events.render, (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  Render[type](props);
});
