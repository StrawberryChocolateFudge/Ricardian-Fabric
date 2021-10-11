import { ContractTypes, Events, Renderer, RenderType, State } from "../types";
import { renderCreateButtonClick } from "./actions/createButtonClick";
import { attachExpiryClickAndListener } from "./actions/attachExpiryClickAndListener";
import { renderAcceptOnCLick } from "./actions/renderAcceptButton";
import {
  disableAcceptableInputs,
  disableButton,
  disableCreateInputs,
  enableAcceptableInputs,
  enableButton,
  enableCreateInputs,
  removeAcceptedButton,
  removeButtons,
  removeError,
  removeLoadingIndicator,
  removeTransaction,
  renderAcceptButton,
  renderCounter,
  renderCreateButton,
  renderError,
  renderLoadingIndicator,
  renderSummary,
  renderTerms,
  renderTooltips,
  renderTransaction,
  renderVersion,
  updatePromptError,
  updatePromptErrorDOCX,
  updatePromptSuccess,
  updatePromptSuccessDOCX,
} from "./render";
import { renderAcceptTools } from "./render";
import { areYouSureButtons } from "./actions/areYouSureButtons";
import { onDocFileDropped } from "./actions/onDocFileDropped";
import {
  attachTermsButtonListeners,
  createPageAgreeTerms,
} from "./actions/terms";
import { deployAgainButtonActions } from "./actions/deployAgainButton";

const Render: Renderer = {
  [RenderType.successMessage]: (props: State) => {},
  [RenderType.errorMessage]: (props: State) => {},
  [RenderType.createPage]: (props: State) => {},
  [RenderType.createButton]: (props: State) => {
    createPageAgreeTerms();
    renderCreateButton(true);
    // The order of attaching listeners is important
    onDocFileDropped(props);
    renderCreateButtonClick(props);
    attachExpiryClickAndListener(props);
    renderTooltips();
  },
  [RenderType.acceptButton]: (props: State) => {
    renderAcceptTools(props);
    renderAcceptButton(props);
    renderAcceptOnCLick(props);
  },
  [RenderType.addLoadingIndicator]: (props: { to: string }) => {
    renderLoadingIndicator(props.to);
  },
  [RenderType.removeLoadingIndicator]: (props: { from: string }) => {
    removeLoadingIndicator(props.from);
  },
  [RenderType.transaction]: (props: { url: string }) => {
    renderTransaction(props.url);
    deployAgainButtonActions();
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
  [RenderType.areYouSure]: (props: any) => {
    renderSummary(props);
    areYouSureButtons(props);
  },

  [RenderType.noButtonPressed]: (props: State) => {
    if (props.contracttype === ContractTypes.create) {
      renderCreateButton(true);
      renderCreateButtonClick(props);
    } else if (props.contracttype === ContractTypes.acceptable) {
      renderAcceptButton(props);
      renderAcceptOnCLick(props);
    }

    enableButton(props);
  },
  [RenderType.yesButtonPressed]: (props: State) => {
    removeButtons();
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
  },
  [RenderType.disableAcceptableInputs]: (props: {}) => {
    disableAcceptableInputs();
  },
  [RenderType.enableAcceptableInputs]: (props: {}) => {
    enableAcceptableInputs();
  },
  [RenderType.deployAgain]: (props: {}) => {
    removeTransaction();
    renderCreateButton(true);
  },
};

document.body.addEventListener(Events.render, (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  Render[type](props);
});
