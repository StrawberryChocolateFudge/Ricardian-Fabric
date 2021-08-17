import { Events, Renderer, RenderType, State } from "../types";
import { renderCreateButtonClick } from "./actions/createButtonClick";
import { attachExpiryClickAndListener } from "./actions/attachExpiryClickAndListener";
import { onFileSelect } from "./actions/onFileSelect";
import { postCheckboxSelect } from "./actions/postCheckboxSelect";
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
  renderTerms,
  renderToolTipHelptextsForCreate,
  renderTransaction,
  renderVersion,
} from "./render";
import { renderAcceptButton } from "./render";
import { attachTermsButtonListeners } from "./actions/bannerButtonListeners";
import { attachFinancialInstrumentCheckboxListener } from "./actions/attachFinancialInstrumentCheckboxListener";
import { attachFinancialInstrumetsSettingsActions } from "./actions/attachFinancialInstrumentsSettingsActions";

const Render: Renderer = {
  [RenderType.successMessage]: (props: State) => {},
  [RenderType.errorMessage]: (props: State) => {},
  [RenderType.createPage]: (props: State) => {},
  [RenderType.createButton]: (props: State) => {
    // The order of attaching listeners is important
    postCheckboxSelect();
    onFileSelect(props);
    renderCreateButtonClick(props);
    attachExpiryClickAndListener(props);
    attachFinancialInstrumentCheckboxListener(props);
    renderToolTipHelptextsForCreate();
  },
  [RenderType.acceptButton]: (props: State) => {
    renderAcceptButton(props);
    onFileSelect(props);
    renderAcceptOnCLick(props);
  },
  [RenderType.balance]: (props: State) => {
    renderbalance(props.balance);
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
    attachFinancialInstrumetsSettingsActions(props);
    renderInstrumentSettingsTooltips();
  },
};

document.body.addEventListener(Events.render, (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  Render[type](props);
});
