import { Events, Renderer, RenderType, State } from "../types";
import { renderAcceptOnCLick } from "./actions/renderAcceptButton";
import {
  disableButton,
  discardPDF,
  enableButton,
  removeError,
  removeLoadingIndicator,
  renderbalance,
  renderCounter,
  renderCountriesList,
  renderError,
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
  setNFTPageToDOM,
  setOnlySignerToDOM,
  setPDFtoDOM,
  setPostToDOM,
  setPriceToDOM,
  setProfitSharingToDOM,
  setSemanticsTitleToDOM,
  setWalletToDom,
  updatePromptError,
  updatePromptSuccess,
} from "./render";
import { renderAcceptButton } from "./render";
import {
  dispatch_renderBalance,
} from "../dispatch/render";
import { managerSwitch } from "./actions/pages/managerSwitch";
import { routeButtonClick } from "./actions/pages/routeButtonClick";
import { attachTermsButtonListeners } from "./actions/pages/terms/bannerButtonListeners";
import { onWalletFileSelect } from "./actions/pages/createRoutes/walletPage";
import { dispatchCountryListRenders } from "./actions/pages/createRoutes/signerPage";

const Render: Renderer = {
  [RenderType.createPage]: (props: State) => {
    renderPage(props);
    routeButtonClick(props);
    managerSwitch(props);
    renderToolTipHelptextsForCreate();
  },
  [RenderType.acceptButton]: (props: State) => {
    renderAcceptButton(props);
    //TODO: THE WALLET PAGE FOR THE ACCEPTABLE
    onWalletFileSelect(props);
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

  //ENABLE AND DISABLE BUTTON MIGHT CHANGE
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

  //TODO: deprecated
  [RenderType.dateClickListener]: (props: State) => {
    // attachExpiryClickAndListener(props);
  },

  [RenderType.renderTerms]: () => {
    renderTerms();
    attachTermsButtonListeners();
  },

  [RenderType.setInstrument]: (props: State) => {
    //TODO: What is this? remove it??
    // renderCreateButtonClick(props);
  },

  [RenderType.signerCountries]: (props: {
    availableCountries: Array<string>;
  }) => {
    renderCountriesList(props.availableCountries);
  },

  //Initializing the pages with an event
  [RenderType.initAgreementPage]: (props: any) => {
    if (props.agreementPage.selectedDate !== "") {
      setExpiresDateToDOM(props.agreementPage.selectedDate.toString());
      setPriceToDOM(props.agreementPage.price);
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
    setWalletToDom(props.walletPage);
    if (props.walletPage.key !== "") {
      updatePromptSuccess(props.walletPage.file[0] as File);
      dispatch_renderBalance(props);
    }
  },
  [RenderType.initSemanticsPage]: ({
    props,
    editor,
  }: {
    props: State;
    editor: any;
  }) => {
    editor.setContent(props.semanticsPage.content, 0);
    setSemanticsTitleToDOM(props.semanticsPage.title);
  },
  [RenderType.initSignerPage]: (props: State) => {
    dispatchCountryListRenders(props.signerPage.availableCountries);
    setOnlySignerToDOM(props.signerPage.onlySigner);
  },
  [RenderType.initPaymentsPage]: (props: State) =>{
    setPriceToDOM(props.paymentPage.price);
    setProfitSharingToDOM(props.paymentPage)
  },
  [RenderType.initSmartContractPage]: (props: State) => {
    // setWillProfitShareToDOM(props.instrumentPageData.willProfitShare);
    // setProfitSharingContractIdToDOM(props.instrumentPageData.pstContractId);
    setIsIntrumentToDOM(props.instrumentPageData.isInstrument);
    setInstrumentNameToDOM(props.instrumentPageData.name);
    setInstrumentTickerToDOM(props.instrumentPageData.ticker);
    setInstrumentSupplyToDOM(props.instrumentPageData.supply);
    setInstrumentCanDeriveToDOM(props.instrumentPageData.canDerive);
    // setSmartContractInputFields(
    //   props.instrumentPageData.willProfitShare,
    //   props.instrumentPageData.isInstrument
    // );
  },
  [RenderType.initNetworkingPage]: (props: State) => {
    setPostToDOM(props.networkingPage);
  },
  [RenderType.initNFTPage]: (props: State) =>{
   setNFTPageToDOM(props);
  },
  [RenderType.initSummaryPage]: (props: State) => {},

  //Showing success and error on the PDF,Wallet and Docx droppers
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
