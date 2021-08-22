import { CreatePages, Events, Renderer, RenderType, State } from "../types";
import { renderCreateButtonClick } from "./actions/createButtonClick";
import { attachExpiryClickAndListener } from "./actions/attachExpiryClickAndListener";
import { onFileSelect } from "./actions/onFileSelect";
import { renderAcceptOnCLick } from "./actions/renderAcceptButton";
import {
  disableButton,
  discardPDF,
  enableButton,
  removeError,
  removeLoadingIndicator,
  renderbalance,
  renderCounter,
  renderError,
  renderInstrumentSettingsTooltips,
  renderLoadingIndicator,
  renderPage,
  renderTerms,
  renderToolTipHelptextsForCreate,
  renderTransaction,
  renderVersion,
  revertPrompt,
  setExpiresDateToDOM,
  setInstrumentCanDeriveToDOM,
  setInstrumentNameToDOM,
  setInstrumentSupplyToDOM,
  setInstrumentTickerToDOM,
  setIsIntrumentToDOM,
  setOnlySignerToDOM,
  setPDFtoDOM,
  setPostToDOM,
  setPriceToDOM,
  setProfitSharingContractIdToDOM,
  setSmartContractInputFields,
  setWalletToDom,
  setWillProfitShareToDOM,
  updatePromptError,
  updatePromptSuccess,
} from "./render";
import { renderAcceptButton } from "./render";
import { attachTermsButtonListeners } from "./actions/bannerButtonListeners";
import { instrumentCheckboxListener } from "./actions/instrumentCheckboxListener";
import { instrumetsSettingsActions } from "./actions/instrumentsSettingsActions";
import { onPDFFileDropped } from "./actions/onPDFFileDropped";
import { nextButtonClick } from "./actions/nextButtonClick";
import { onWalletFileDropped } from "./actions/onWalletFileDropped";
import { postCheckboxSelect } from "./actions/postCheckboxSelect";
import { dispatch_renderBalance } from "../dispatch/render";

const Render: Renderer = {
  [RenderType.successMessage]: (props: State) => {},
  [RenderType.errorMessage]: (props: State) => {},
  [RenderType.createPage]: (props: State) => {
    renderPage(props);
    nextButtonClick(props);
    renderToolTipHelptextsForCreate();
    if (props.createPages === CreatePages.Agreement) {
      attachExpiryClickAndListener(props);
    } else if (props.createPages === CreatePages.PDF) {
      onPDFFileDropped();
    } else if (props.createPages === CreatePages.SmartContract) {
      renderInstrumentSettingsTooltips();
      instrumentCheckboxListener(props);
    } else if (props.createPages === CreatePages.AddWallet) {
      onWalletFileDropped(props);
    } else if (props.createPages === CreatePages.Networking) {
      postCheckboxSelect();
    }
  },
  [RenderType.createButton]: (props: State) => {
    // The order of attaching listeners is important
    console.log("create button setup runs");
    // postCheckboxSelect();
    // onFileSelect(props);
    // renderCreateButtonClick(props);
    // attachExpiryClickAndListener(props);
    // instrumentCheckboxListener(props);
    // renderToolTipHelptextsForCreate();
  },
  [RenderType.acceptButton]: (props: State) => {
    renderAcceptButton(props);
    onFileSelect(props);
    renderAcceptOnCLick(props);
  },
  [RenderType.balance]: (props: State) => {
    renderbalance(props.walletPage.balance, props.walletPage.address);
  },
  [RenderType.addLoadingIndicator]: (props: { to: string }) => {
    renderLoadingIndicator(props.to);
  },
  [RenderType.removeLoadingIndicator]: (props: { from: string }) => {
    removeLoadingIndicator(props.from);
  },
  [RenderType.transaction]: (props: { url: string }) => {
    renderTransaction(props.url);
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
  [RenderType.version]: (props: { version: string }) => {
    renderVersion(props.version);
  },
  [RenderType.redirectCounter]: (props: { count: number }) => {
    renderCounter(props.count);
  },
  [RenderType.dateClickListener]: (props: State) => {
    attachExpiryClickAndListener(props);
  },
  [RenderType.renderTerms]: () => {
    renderTerms();
    attachTermsButtonListeners();
  },
  [RenderType.setInstrument]: (props: State) => {
    renderCreateButtonClick(props);
  },
  [RenderType.initAgreementPage]: (props: any) => {
    if (props.agreementPage.selectedDate !== "") {
      setExpiresDateToDOM(props.agreementPage.selectedDate.toString());
      setPriceToDOM(props.agreementPage.price);
      setOnlySignerToDOM(props.agreementPage.onlySigner);
      props.editor.setContent(props.agreementPage.content, 0);
    }
  },
  [RenderType.initPDFPage]: (props: State) => {
    // Initializing the page if pdf is set in state,
    // that probably means the back button was pushed
    if (props.pdfPage.PDF !== "" && props.pdfPage.PDF !== null) {
      setPDFtoDOM(props.pdfPage.PDF);
      updatePromptSuccess(props.pdfPage.PDF[0] as File);
    }
  },
  [RenderType.discardPdf]: (props: {}) => {
    discardPDF();
    revertPrompt();
  },
  [RenderType.initWalletPage]: (props: State) => {
    if (props.walletPage.key !== "") {
      setWalletToDom(props.walletPage.file);
      updatePromptSuccess(props.walletPage.file[0] as File);
      dispatch_renderBalance(props);
    }
  },
  [RenderType.initSmartContractPage]: (props: State) => {
    setWillProfitShareToDOM(props.instrumentPageData.willProfitShare);
    setProfitSharingContractIdToDOM(props.instrumentPageData.pstContractId);
    setIsIntrumentToDOM(props.instrumentPageData.isInstrument);
    setInstrumentNameToDOM(props.instrumentPageData.name);
    setInstrumentTickerToDOM(props.instrumentPageData.ticker);
    setInstrumentSupplyToDOM(props.instrumentPageData.supply);
    setInstrumentCanDeriveToDOM(props.instrumentPageData.canDerive);
    setSmartContractInputFields(
      props.instrumentPageData.willProfitShare,
      props.instrumentPageData.isInstrument
    );
  },
  [RenderType.initNetworkingPage]: (props: State) => {
    setPostToDOM(props.networkingPage);
  },
  [RenderType.initSummaryPage]: (props: State) => {},
  [RenderType.promptSuccess]: (props: { file: File | string }) => {
    updatePromptSuccess(props.file as File);
  },
  [RenderType.promptError]: (props: { message: string }) => {
    updatePromptError(props.message);
  },
};

document.body.addEventListener(Events.render, (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  Render[type](props);
});
