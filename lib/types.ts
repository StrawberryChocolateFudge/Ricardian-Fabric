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
}

export type Renderer = {
  [RenderType.successMessage]: CallableFunction;
  [RenderType.errorMessage]: CallableFunction;
  [RenderType.createPage]: CallableFunction;
  [RenderType.createButton]: CallableFunction;
  [RenderType.acceptButton]: CallableFunction;
  [RenderType.balance]: CallableFunction;
  [RenderType.addLoadingIndicator]: CallableFunction;
  [RenderType.removeLoadingIndicator]: CallableFunction;
  [RenderType.transaction]: CallableFunction;
  [RenderType.renderError]: CallableFunction;
  [RenderType.removeError]: CallableFunction;
  [RenderType.enableButton]: CallableFunction;
  [RenderType.disableButton]: CallableFunction;
  [RenderType.version]: CallableFunction;
  [RenderType.redirectCounter]: CallableFunction;
  [RenderType.dateClickListener]: CallableFunction;
  [RenderType.renderTerms]: CallableFunction;
  [RenderType.feeSummary]: CallableFunction;
  [RenderType.noButtonPressed]: CallableFunction;
  [RenderType.yesButtonPressed]: CallableFunction;
  [RenderType.removeAcceptedButton]: CallableFunction;
  [RenderType.promptSuccess]: CallableFunction;
  [RenderType.promptError]: CallableFunction;
  [RenderType.renderAddress]: CallableFunction;
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
