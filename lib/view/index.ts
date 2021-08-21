import { CreatePages, Events, Renderer, RenderType, State } from "../types";
import { renderCreateButtonClick } from "./actions/createButtonClick";
import { attachExpiryClickAndListener } from "./actions/attachExpiryClickAndListener";
import { onFileSelect } from "./actions/onFileSelect";
import { renderAcceptOnCLick } from "./actions/renderAcceptButton";
import {
  disableButton,
  enableButton,
  removeError,
  removeLoadingIndicator,
  renderbalance,
  renderCounter,
  renderError,
  renderInstrumentSettings,
  renderInstrumentSettingsTooltips,
  renderLoadingIndicator,
  renderPage,
  renderTerms,
  renderToolTipHelptextsForCreate,
  renderTransaction,
  renderVersion,
} from "./render";
import { renderAcceptButton } from "./render";
import { attachTermsButtonListeners } from "./actions/bannerButtonListeners";
import { instrumentCheckboxListener } from "./actions/instrumentCheckboxListener";
import { instrumetsSettingsActions } from "./actions/instrumentsSettingsActions";
import { onPDFFileDropped } from "./actions/onPDFFileDropped";
import { nextButtonClick } from "./actions/nextButtonClick";
import { onWalletFileDropped } from "./actions/onWalletFileDropped";
import { postCheckboxSelect } from "./actions/postCheckboxSelect";

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
  [RenderType.renderInstrumentSettings]: (props: State) => {
    renderInstrumentSettings();
    instrumetsSettingsActions(props);
    renderInstrumentSettingsTooltips();
  },
  [RenderType.setInstrument]: (props: State) => {
    renderCreateButtonClick(props);
  },
};

document.body.addEventListener(Events.render, (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  Render[type](props);
});
