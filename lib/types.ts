import Arweave from "arweave";

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
  feeSummary = "feeSummary",
  noButtonPressed = "noButtonPressed",
  yesButtonPressed = "yesButtonPressed",
  removeAcceptedButton = "removeAcceptedButton",
  promptSuccess = "promptSuccess",
  promptError = "promptError",
  renderAddress = "renderAddress",
  disableCreateInputs = "disableCreateInputs",
  enableCreateInputs = "enableCreateInputs",
  disableAcceptableInputs = "disableAcceptableInputs",
  enableAcceptableInputs = "enableAcceptableInputs",
}
type RenderFunction = (props: any) => void;

export type Renderer = {
  [RenderType.successMessage]: RenderFunction;
  [RenderType.errorMessage]: RenderFunction;
  [RenderType.createPage]: RenderFunction;
  [RenderType.createButton]: RenderFunction;
  [RenderType.acceptButton]: RenderFunction;
  [RenderType.balance]: RenderFunction;
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
  [RenderType.feeSummary]: RenderFunction;
  [RenderType.noButtonPressed]: RenderFunction;
  [RenderType.yesButtonPressed]: RenderFunction;
  [RenderType.removeAcceptedButton]: RenderFunction;
  [RenderType.promptSuccess]: RenderFunction;
  [RenderType.promptError]: RenderFunction;
  [RenderType.renderAddress]: RenderFunction;
  [RenderType.disableCreateInputs]: RenderFunction;
  [RenderType.enableCreateInputs]: RenderFunction;
  [RenderType.disableAcceptableInputs]: RenderFunction;
  [RenderType.enableAcceptableInputs]: RenderFunction;
};

export enum EventType {
  setArweave = "setArweave",
  setEditor = "setEditor",
  setBalance = "setBalance",
  setWalletAddress = "setWalletAddress",
  setSelectedDate = "setSelectedDate",
}

export enum StateProperties {
  arweave = "arweave",
  editor = "editor",
  balance = "balance",
  address = "address",
  selectedDate = "selectedDate",
}

export enum ContractTypes {
  create = "create",
  acceptable = "acceptable",
  fulfilled = "fulfilled",
}

export type State = {
  arweave: Arweave;
  editor: any;
  domParser: DOMParser;
  balance: number;
  address: string;
  selectedDate: Date | string;
  contracttype: ContractTypes;
  postto: string;
  webhook: boolean;
  redirect: boolean;
  creatorAddress: string;
  price: string;
  bundleSrcUrl: string;
  createdDate: string;
  expires: string;
  currentUrl: string;
  version: string;
  onlySigner: string;
  logoSrc: string;
};

export type SetHookArgs = {
  obj: State;
  prop: StateProperties;
  value: any;
};

type Dependency = {
  src: string;
  code: string;
};

export type AcceptablePageProps = {
  version: string;
  createdDate: string;
  creatorAddress: string;
  price: string;
  expires: string;
  post: string;
  webhook: boolean;
  redirect: boolean;
  mainDep?: Dependency;
  domParser: DOMParser;
  fee: string;
  legalContract: string;
  onlySigner: string;
  logoSrc: string;
};

export type FulfilledPageProps = {
  version: string;
  creatorAddress: string;
  createdDate: string;
  price: string;
  expires: string;
  post: string;
  webhook: boolean;
  redirect: boolean;
  domParser: DOMParser;
  fee: string;
  legalContract: string;
  paidFrom: string;
  parentUrl: string;
  logoSrc: string;
};

export type CreateTransactionResult = {
  id: string;
  statusCode: number;
  path: string;
};
export enum FileType {
  key = "key",
  pdf = "pdf",
}

export enum FeeType {
  createPage,
  acceptPage,
}
