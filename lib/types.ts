import { IPFSHTTPClient } from "ipfs-http-client";

export enum Events {
  render = "render",
  stateChange = "stateChange",
}

export enum RenderType {
  successMessage = "successMessage",
  errorMessage = "errorMessage",
  createPage = "createPage",
  createButton = "createButton",
  acceptButton = "acceptButton",
  balance = "balance",
  addLoadingIndicator = "addLoadingIndicator",
  removeLoadingIndicator = "removeLoadingIndicator",
  transaction = "renderTransaction",
  renderError = "renderError",
  removeError = "removeError",
  enableButton = "enableButton",
  disableButton = "disableButton",
  version = "version",
  redirectCounter = "redirectCounter",
  dateClickListener = "dateClickListener",
  renderTerms = "renderTerms",
  areYouSure = "areYouSure",
  noButtonPressed = "noButtonPressed",
  yesButtonPressed = "yesButtonPressed",
  removeAcceptedButton = "removeAcceptedButton",
  promptSuccess = "promptSuccess",
  promptError = "promptError",
  promptSuccessDOCX = "promptSuccessDOCX",
  promptErrorDOCX = "promptErrorDOCX",
  renderAddress = "renderAddress",
  disableCreateInputs = "disableCreateInputs",
  enableCreateInputs = "enableCreateInputs",
  disableAcceptableInputs = "disableAcceptableInputs",
  enableAcceptableInputs = "enableAcceptableInputs",
  deployAgain = "deployAgain",
}
type RenderFunction = (props: any) => void;

export type Renderer = {
  [RenderType.successMessage]: RenderFunction;
  [RenderType.errorMessage]: RenderFunction;
  [RenderType.createPage]: RenderFunction;
  [RenderType.createButton]: RenderFunction;
  [RenderType.acceptButton]: RenderFunction;
  [RenderType.addLoadingIndicator]: RenderFunction;
  [RenderType.removeLoadingIndicator]: RenderFunction;
  [RenderType.transaction]: RenderFunction;
  [RenderType.renderError]: RenderFunction;
  [RenderType.removeError]: RenderFunction;
  [RenderType.enableButton]: RenderFunction;
  [RenderType.disableButton]: RenderFunction;
  [RenderType.version]: RenderFunction;
  [RenderType.redirectCounter]: RenderFunction;
  [RenderType.dateClickListener]: RenderFunction;
  [RenderType.renderTerms]: RenderFunction;
  [RenderType.areYouSure]: RenderFunction;
  [RenderType.noButtonPressed]: RenderFunction;
  [RenderType.yesButtonPressed]: RenderFunction;
  [RenderType.removeAcceptedButton]: RenderFunction;
  [RenderType.promptSuccess]: RenderFunction;
  [RenderType.promptError]: RenderFunction;
  [RenderType.promptSuccessDOCX]: RenderFunction;
  [RenderType.promptErrorDOCX]: RenderFunction;
  [RenderType.disableCreateInputs]: RenderFunction;
  [RenderType.enableCreateInputs]: RenderFunction;
  [RenderType.disableAcceptableInputs]: RenderFunction;
  [RenderType.enableAcceptableInputs]: RenderFunction;
  [RenderType.deployAgain]: RenderFunction;
};

export enum EventType {
  init = "init",
  setIPFS = "setIPFS",
  setEditor = "setEditor",
  setBalance = "setBalance",
  setWalletAddress = "setWalletAddress",
  setSelectedDate = "setSelectedDate",
  stashPage = "stashPage",
  stashDetails = "stashDetails",
}

export enum StateProperties {
  init = "init",
  ipfs = "ipfs",
  editor = "editor",
  balance = "balance",
  address = "address",
  selectedDate = "selectedDate",
  stashedPage = "stashedPage",
  stashedDetails = "stashedDetails",
}

export enum ContractTypes {
  create = "create",
  acceptable = "acceptable",
  fulfilled = "fulfilled",
}

export enum BlockCountry {
  OFEC = "OFEC",
  EU = "EU",
  UN = "UN",
  BLOCKUSA = "BLOCKUSA",
  BLOCKNY = "BLOCKNY",
}

export type StashedDetails = {
  hash: string;
  signerAddress: string;
  signature: string;
  network: string;
  smartContract: string;
};

export type IPFSParams = {
  host: string;
  port: number;
  protocol: string;
};

export type State = {
  init: boolean;
  ipfs: IPFSParams;
  ipfsArweaveBridge: string;
  editor: any;
  domParser: DOMParser;
  selectedDate: Date | string;
  stashedPage: string;
  stashedDetails: StashedDetails;
  contracttype: ContractTypes;
  redirectto: string;
  bundleSrcUrl: string;
  createdDate: string;
  expires: string;
  currentUrl: string;
  version: string;
  blockedCountries: BlockCountry[];
  network: string;
  hash: string;
  issuer: string;
  issuerSignature: string;
  participant: string;
  participantSignature: string;
  smartcontract: string;
};

export type SetHookArgs = {
  obj: State;
  prop: StateProperties;
  value: any;
};

type Dependency = {
  src: string;
};

export type AcceptablePageProps = {
  version: string;
  createdDate: string;
  issuer: string;
  expires: string;
  redirectto: string;
  mainDep?: Dependency;
  domParser: DOMParser;
  legalContract: string;
  blockedCountries: BlockCountry[];
  network: string;
  hash: string;
  issuerSignature: string;
  smartContract: string;
};

export type FulfilledPageProps = {
  version: string;
  issuer: string;
  createdDate: string;
  expires: string;
  redirectto: string;
  domParser: DOMParser;
  legalContract: string;
  participant: string;
  parentUrl: string;
  network: string;
  hash: string;
  issuerSignature: string;
  participantSignature: string;
  smartContract: string;
};

export enum Status {
  Success,
  Failure,
}
export type PinOptions = {
  status: Status;
  error: any;
  result: Response;
};

export type IssuerHashedData = {
  legalContract: string;
  createdDate: string;
  expires: string;
  redirectto: string;
  version: string;
  issuer: string;
  blockedCountries: BlockCountry[];
  network: string;
  smartContract: string;
};

export type Options = {
  status: Status;
  error: any;
  data: any;
};

declare global {
  interface Window {
    ethereum: any;
  }
}

window.ethereum = window.ethereum || {};
