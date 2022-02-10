import {
  ContractTypes,
  DeploySC,
  Events,
  PaginatedProposal,
  PopupState,
  RankProposal,
  RenderDispatchArgs,
  Renderer,
  RenderType,
  SmartContractProposal,
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
  renderSidebar,
  setCreatePageProps,
  proposalUpload,
  render_createProposalPageContent,
  renderManageProposals,
  collapseSidebar,
  openSidebarIfScreenIsBig,
  render_wrongNetworkPopup,
  renderRankProposalTable,
  renderMyProposalsRankContent,
  renderConnectYourWallet,
  renderDashboard,
  renderLoadedValue,
  pinnedDashboardData,
  enableStakingButtons,
  renderFeeProposalsPage,
  renderPSTPage,
  renderTokenSalePage,
  renderVaultPage,
  renderTrailsPage,
  tokenSaleInit,
  renderSellAmount,
  renderVaultLockedTokens,
  renderMyRICBalance,
  renderCurrentBlock,
  renderApprovedSpend,
  renderCollectRewardsPage,
  renderPSArweaveAddress,
  renderVaultHistoryEmpty,
  renderTrailsTabs,
  renderTrailDetails,
  renderAddCommentPopup,
  disableButtonElement,
  renderArweaveSummaryTx,
  renderTrailDataPage,
  navigateToQueryString,
  renderIpfsConfigPage,
  renderSmartContractProposalTable,
  renderMyProposalsSmartContractContent,
  renderContractDisplayPage,
  renderVoteOnSmartContract,
  renderSCProposalDisplayPage,
  renderTeardownContractDisplay,
  renderMyAcceptedSmartContractProposalsContent,
} from "./render";
import { renderAcceptTools } from "./render";
import { areYouSureButtons } from "../business/actions/areYouSureButtons";
import {
  docxImportBackButton,
  onDocFileDropped,
} from "../business/actions/onDocFileDropped";
import {
  deployAgainButtonActions,
  redirectAction,
} from "../business/actions/deployAgainButton";
import { changeContainerSlotStyle, setBannerDisplayBlock } from "./utils";
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
  uploadCommentActions,
  uploadFileListener,
  uploadSummaryActions,
  walletCreateActions,
} from "../business/actions/permawebSelectActions";
import { verifyContractActions } from "../business/actions/verifyContractActions";
import {
  catalogAction,
  walletSelectListener,
} from "../business/actions/catalogActions";
import { WinstonToAr } from "../wallet/arweave";
import { menuActions } from "../business/actions/menuActions";
import {
  rankProposalTableActions,
  reviewAndVotePageActions,
  smartContractProposalTableActions,
} from "../business/actions/reviewAndVote";
import {
  createProposalActions,
  uploadProposalActions,
  uploadProposalSummaryActions,
} from "../business/actions/createProposalActions";
import {
  myProposalsActions,
  myRankProposalsTableActions,
  mySmartContractProposalsTableActions,
} from "../business/actions/myProposalsActions";
import { wrongNetworkActions } from "../business/actions/WrongNetworkActions";
import { connectWalletButton } from "../business/actions/connectWalletButton";
import { dashboardActions } from "../business/actions/dashboardActions";
import { feeProposalPageActions } from "../business/actions/feeProposalPageActions";
import { pstPageActions } from "../business/actions/pstPageActions";
import { tokenSalePageActions } from "../business/actions/tokenSalePageActions";
import {
  lockedTokensActions,
  vaultPageActions,
} from "../business/actions/vaultPageActions";
import {
  fetchAllTrailDetails,
  searchButtonClicked,
  trailDetailsActions,
  trailsPageActions,
} from "../business/actions/trailsPageActions";
import { ipfsConfigActions } from "../business/actions/ipfsConfigActions";
import { votingOnContractActions } from "../business/actions/VotingOnContractActions";
import { contractDisplayActions } from "../business/actions/contractDisplayActions";
import { render } from "lit-html";
import { smartContractProductPage } from "./templates/components/smartContractProductPage";

const Render: Renderer = {
  [RenderType.connectYourWallet]: (props: State) => {
    renderConnectYourWallet(props);
    connectWalletButton(props);
  },
  [RenderType.renderDashboard]: async (props: State) => {
    renderDashboard(props);
    await dashboardActions(props);
  },
  [RenderType.menu]: async (props: State) => {
    renderMenuPage(props);
    await menuActions(props);
    openSidebarIfScreenIsBig();
  },
  [RenderType.create]: (props: State) => {
    renderCreatePage();
    renderButtonSlotAlignment(true);

    // TODO: Check these, I will add web3 modal!
    renderSelectedWallet(props.selectedWallet);
    walletSelectListener();

    renderCreateButton(true);
    renderCreateButtonClick(props, RenderType.create);
    attachExpiryClickAndListener(props);
    renderTooltips();
    renderSanctionsDropdown();
    renderNetworkDropdown();
    networkSelectActions();
    renderPermawebDropdown(props.pageState, props.contracttype);
    permawebSelectActions(props);
    renderTemplatesDropdown();
    templateSelectActions(props);

    handleDropdownClosing();

    renderAccordionOpener();
  },
  [RenderType.sidebar]: (props: State) => {
    renderSidebar(props);
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
      renderCreateButtonClick(props, RenderType.noButtonPressed);
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
    tipTransaction: any;
    hasTip: boolean;
  }) => {
    let fee: string | number = parseFloat(props.transaction.reward);
    if (props.hasTip) {
      fee += parseFloat(props.tipTransaction.reward);
      fee += parseFloat(props.tipTransaction.quantity);
    }

    fee = WinstonToAr(fee.toString());

    renderUploadSummary(props.file, fee, props.transaction.id);
    uploadSummaryActions(
      props.transaction,
      props.props,
      PopupState.UploadFile,
      props.hasTip,
      props.tipTransaction
    );
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
  [RenderType.createProposalPage]: async (props: RenderDispatchArgs) => {
    renderCreateProposalPage(props);
    await createProposalActions(props);
    renderAccordionOpener();
  },
  [RenderType.reviewAndVotePage]: (props: RenderDispatchArgs) => {
    renderReviewAndVotePage(props);
    reviewAndVotePageActions(props);
  },
  [RenderType.permawebSelectActions]: (props: RenderDispatchArgs) => {
    renderPermawebDropdown(props.pageState, props.contracttype);
    permawebSelectActions(props);
    handleDropdownClosing();
  },
  [RenderType.uploadProposal]: (props: RenderDispatchArgs) => {
    const step = props.tmp.step;
    renderUploadProposal(step);
    uploadProposalActions(props, step);
  },
  [RenderType.proposalSummary]: (props: RenderDispatchArgs) => {
    let fee: string | number = parseFloat(props.tmp.transaction.reward);
    if (props.tmp.hasTip) {
      fee += parseFloat(props.tmp.tipTransaction.reward);
      fee += parseFloat(props.tmp.tipTransaction.quantity);
    }
    fee = WinstonToAr(fee.toString());
    const id = props.tmp.transaction.id;
    renderProposalSummary(fee, id, props.tmp.terms, props.tmp.proposal);
    uploadProposalSummaryActions(
      props.tmp.transaction,
      props,
      props.tmp.hasTip,
      props.tmp.tipTransaction
    );
  },
  [RenderType.initializeCreateRicardian]: (props: RenderDispatchArgs) => {
    if (props.tmp.pageProps !== null) {
      setCreatePageProps(props.tmp.pageProps);
    }
  },
  [RenderType.initializeProposalUpload]: (props: RenderDispatchArgs) => {
    proposalUpload(props, props.tmp);
  },
  [RenderType.proposeNewRank]: (props: RenderDispatchArgs) => {
    const hasOpenRankProposal = props.tmp.hasOpenProposal;
    render_createProposalPageContent(
      RenderType.proposeNewRank,
      hasOpenRankProposal
    );
  },
  [RenderType.proposeNewContract]: (props: RenderDispatchArgs) => {
    render_createProposalPageContent(
      RenderType.proposeNewContract,
      props.tmp.hasOpenProposal
    );
  },
  [RenderType.manageProposals]: (props: RenderDispatchArgs) => {
    renderManageProposals();
    myProposalsActions(props);
  },
  [RenderType.renderMyRankProposals]: (props: RenderDispatchArgs) => {
    const rankPage: [RankProposal[], string[], PaginatedProposal] =
      props.tmp.rankPage;
    const blockNr = props.tmp.blockNumber;
    renderMyProposalsRankContent(
      rankPage[0],
      rankPage[1],
      blockNr,
      rankPage[2].totalPages,
      rankPage[2].currentPage
    );
    myRankProposalsTableActions(props, rankPage[2].proposals);
  },
  [RenderType.renderMySmartContractProposals]: async (
    props: RenderDispatchArgs
  ) => {
    const smartContractPage: [
      SmartContractProposal[],
      string[],
      PaginatedProposal
    ] = props.tmp.smartContractPage;
    const blockNr = props.tmp.blockNumber;
    renderMyProposalsSmartContractContent(
      smartContractPage[0],
      smartContractPage[1],
      blockNr,
      smartContractPage[2].totalPages,
      smartContractPage[2].currentPage
    );
    await mySmartContractProposalsTableActions(
      props,
      smartContractPage[2].proposals
    );
  },
  [RenderType.renderMyAcceptedSmartContractProposals]: (
    props: RenderDispatchArgs
  ) => {
    renderMyAcceptedSmartContractProposalsContent(
      props.tmp.page[0],
      props.tmp.page[1],
      props.tmp.blockNumber,
      props.tmp.page[2].totalPages,
      props.tmp.page[2].currentPage
    );
  },
  [RenderType.dismissSidebar]: (props: RenderDispatchArgs) => {
    collapseSidebar();
  },
  [RenderType.renderWrongNetworkPopup]: (props: RenderDispatchArgs) => {
    render_wrongNetworkPopup();
    wrongNetworkActions(props);
  },
  [RenderType.renderReviewRankProposals]: (props: RenderDispatchArgs) => {
    renderRankProposalTable(
      props.tmp.blockNumber,
      props.tmp.rankPage[0],
      props.tmp.rankPage[1],
      props.tmp.rankPage[2]
    );
    rankProposalTableActions(props);
  },
  [RenderType.renderReviewSmartContractProposals]: (
    props: RenderDispatchArgs
  ) => {
    renderSmartContractProposalTable(
      props.tmp.blockNumber,
      props.tmp.smartContractPage[0],
      props.tmp.smartContractPage[1],
      props.tmp.smartContractPage[2]
    );
    smartContractProposalTableActions(props);
  },
  [RenderType.renderLoadedValue]: (props: RenderDispatchArgs) => {
    renderLoadedValue(props.tmp.loadedValue, props.tmp.renderTo);
  },
  [RenderType.pinnedDashboardData]: (props: RenderDispatchArgs) => {
    pinnedDashboardData(props.ipfs.v2Url, props.tmp.nodes);
  },
  [RenderType.stakingButtons]: (props: RenderDispatchArgs) => {
    enableStakingButtons(
      props.tmp.enableStakingButton,
      props.tmp.enableAllowanceButton,
      props.tmp.ricBalance,
      props.tmp.isStaking
    );
  },
  [RenderType.feeProposalsPage]: (props: RenderDispatchArgs) => {
    renderFeeProposalsPage(props);
    feeProposalPageActions(props);
  },
  [RenderType.pstPage]: (props: RenderDispatchArgs) => {
    renderPSTPage(props);
    pstPageActions(props);
  },
  [RenderType.tokenSalePage]: async (props: RenderDispatchArgs) => {
    renderTokenSalePage(props);
    await tokenSalePageActions(props);
  },
  [RenderType.vaultPage]: async (props: RenderDispatchArgs) => {
    renderVaultPage(props);
    await vaultPageActions(props);
  },
  [RenderType.trailsPage]: async (props: RenderDispatchArgs) => {
    renderTrailsPage(props);
    await trailsPageActions(props);
  },
  [RenderType.tokenSalePageInit]: (props: RenderDispatchArgs) => {
    tokenSaleInit(
      props.tmp.ricLeft,
      props.tmp.rate,
      props.tmp.tokensSold,
      props.tmp.purchasedAlready
    );
  },
  [RenderType.renderSellAmount]: (props: RenderDispatchArgs) => {
    renderSellAmount(props.tmp.rate);
  },
  [RenderType.renderVaultLockedTokens]: (props: RenderDispatchArgs) => {
    renderVaultLockedTokens(
      props.tmp.lockedTokens,
      props.tmp.blocks,
      props.tmp.firstIndex,
      props.tmp.lastIndex,
      props.tmp.currentPage,
      props.tmp.totalPages
    );
    lockedTokensActions(props);
  },
  [RenderType.renderMyRicBalance]: (props: RenderDispatchArgs) => {
    renderMyRICBalance(props.tmp.balance);
  },
  [RenderType.renderCurrentBlock]: (props: RenderDispatchArgs) => {
    renderCurrentBlock(props.tmp.block);
  },
  [RenderType.renderApprovedSpend]: (props: RenderDispatchArgs) => {
    renderApprovedSpend(props.tmp.spend);
  },
  [RenderType.collectRewardsPage]: (props: RenderDispatchArgs) => {
    renderCollectRewardsPage(props);
  },
  [RenderType.PSArweaveAddress]: (props: RenderDispatchArgs) => {
    renderPSArweaveAddress(props.tmp.address);
  },
  [RenderType.vaultHistoryEmpty]: (props: RenderDispatchArgs) => {
    renderVaultHistoryEmpty();
  },
  [RenderType.trailsTabs]: async (props: RenderDispatchArgs) => {
    renderTrailsTabs(props.tmp.tab);
    await searchButtonClicked(props, props.tmp.trails, props.tmp.addr);
  },
  [RenderType.trailsDetails]: async (props: RenderDispatchArgs) => {
    const creatorCalls = props.tmp.trailDetails.creator === props.tmp.caller;
    renderTrailDetails(
      props.tmp.name,
      props.tmp.trailDetails.access,
      creatorCalls,
      props.tmp.trailDetails.contentIndex
    );

    await fetchAllTrailDetails(
      props,
      props.tmp.name,
      props.tmp.trails,
      props.tmp.trailDetails,
      props.tmp.caller,
      creatorCalls
    );
  },
  [RenderType.addCommentPopup]: (props: RenderDispatchArgs) => {
    renderAddCommentPopup();
    uploadCommentActions(props);
  },
  [RenderType.disableButtonElement]: (props: RenderDispatchArgs) => {
    disableButtonElement(props.tmp.el, props.tmp.disabled);
  },
  [RenderType.arweaveTxSummary]: (props: RenderDispatchArgs) => {
    let fee: string | number = parseFloat(props.tmp.transaction.reward);
    if (props.tmp.hasTip) {
      fee += parseFloat(props.tmp.tipTransaction.reward);
      fee += parseFloat(props.tmp.tipTransaction.quantity);
    }
    fee = WinstonToAr(fee.toString());
    renderArweaveSummaryTx(fee, props.tmp.transaction.id);

    uploadSummaryActions(
      props.tmp.transaction,
      props,
      PopupState.AddComment,
      props.tmp.hasTip,
      props.tmp.tipTransaction
    );
  },
  [RenderType.trailDataPage]: (props: RenderDispatchArgs) => {
    renderTrailDataPage(props.tmp.dataPage, props.tmp.creatorCalls);
    trailDetailsActions(
      props,
      props.tmp.trails,
      props.tmp.trailId,
      props.tmp.creatorCalls,
      props.tmp.caller,
      props.tmp.trailDetails,
      props.tmp.dataPage
    );
  },
  [RenderType.navigateToQueryString]: (props: RenderDispatchArgs) => {
    navigateToQueryString(props.tmp.queryStrings, props.tmp.value);
  },
  [RenderType.renderIpfsConfig]: (props: RenderDispatchArgs) => {
    renderIpfsConfigPage(props);
    ipfsConfigActions(props);
  },
  [RenderType.emptyPopup]: (props: RenderDispatchArgs) => {
    setBannerDisplayBlock();
  },
  [RenderType.renderContractDisplay]: (props: RenderDispatchArgs) => {
    renderContractDisplayPage(props.tmp.contractId);
    contractDisplayActions(props, props.tmp.contractId);
  },
  [RenderType.teardownContractDisplay]: (props: RenderDispatchArgs) => {
    renderTeardownContractDisplay();
  },
  [RenderType.renderVoteOnSmartContract]: async (props: RenderDispatchArgs) => {
    renderVoteOnSmartContract(props.tmp.accepted, props.tmp.contractIndex);
    await votingOnContractActions(
      props,
      props.tmp.accepted,
      props.tmp.contractIndex,
      props.tmp.arweaveTxId,
      props.tmp.refresh
    );
  },
  [RenderType.renderSCProposalDisplayPage]: async (
    props: RenderDispatchArgs
  ) => {
    renderSCProposalDisplayPage(
      props.tmp.arweaveTxId,
      props.tmp.proposal,
      props.tmp.terms
    );
  },
};

document.body.addEventListener(Events.render, async (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  await Render[type](props);
});
