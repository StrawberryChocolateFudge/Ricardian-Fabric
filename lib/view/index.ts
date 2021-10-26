import {
  ContractTypes,
  DeploySC,
  Events,
  Renderer,
  RenderType,
  State,
} from "../types";
import { renderCreateButtonClick } from "./actions/createButtonClick";
import { attachExpiryClickAndListener } from "./actions/attachExpiryClickAndListener";
import { renderAcceptOnCLick } from "./actions/renderAcceptButton";
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
  removeSCIntentPopup,
  removeTransaction,
  renderAcceptButton,
  renderButtonSlotAlignment,
  renderContructorInputs,
  renderCounter,
  renderCreateButton,
  renderError,
  renderHarmonyLogo,
  renderLoadingIndicator,
  renderNetworkDropdown,
  renderSanctionsDropdown,
  renderSCIntentPopup,
  renderSummary,
  renderTerms,
  renderTooltips,
  renderTransaction,
  renderVersion,
  setDeployedSCAddressToDOM,
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
import { changeContainerSlotStyle } from "./utils";
import {
  addChainButtonListener,
  addDeployButtonListener,
  networkSelectActions,
} from "./actions/networkSelectActions";
import { constructSCActions, deploySCActions } from "./actions/deploySCActions";

const Render: Renderer = {
  [RenderType.successMessage]: (props: State) => {},
  [RenderType.errorMessage]: (props: State) => {},
  [RenderType.createPage]: (props: State) => {},
  [RenderType.createButton]: (props: State) => {
    renderHarmonyLogo();
    renderButtonSlotAlignment(true);
    createPageAgreeTerms();
    renderCreateButton(true);
    // The order of attaching listeners is important
    onDocFileDropped(props);
    renderCreateButtonClick(props);
    attachExpiryClickAndListener(props);
    renderTooltips();
    renderSanctionsDropdown();
    renderNetworkDropdown();
    networkSelectActions();
    handleDropdownClosing();
    addDeployButtonListener(props);
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
  [RenderType.deploySCIntent]: (props: State) => {
    renderSCIntentPopup();
    deploySCActions();
  },
  [RenderType.deploySCIntentBack]: () => {
    removeSCIntentPopup();
  },
  [RenderType.SCDeploySelected]: (props: { deploy: DeploySC }) => {
    renderContructorInputs(props.deploy);
    constructSCActions(props.deploy);
  },
  [RenderType.DisableSCInputs]: (props: { params: any }) => {
    console.log("running disabling");
    disableSCInputs(props.params);
  },
  [RenderType.EnableSCInputs]: (props: { params: any }) => {
    enableSCInputs(props.params);
  },
  [RenderType.SetDeployedSCAddress]: (props: { address }) => {
    setDeployedSCAddressToDOM(props.address);
  },
};

document.body.addEventListener(Events.render, (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  Render[type](props);
});
