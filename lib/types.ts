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
  renderInstrumentSettings = "renderInstrumentSettings",
  setInstrument = "setInstrument",
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
  [RenderType.renderInstrumentSettings]: CallableFunction;
  [RenderType.setInstrument]: CallableFunction;
};

export enum EventType {
  setArweave = "setArweave",
  setEditor = "setEditor",
  setBalance = "setBalance",
  setWalletAddress = "setWalletAddress",
  setSelectedDate = "setSelectedDate",
  setPdfPageData = "setPdfPageData",
  setCreatePages = "setCreatePages",
  setInstrumentPageData = "setInstrumentPageData",
}

export enum StateProperties {
  arweave = "arweave",
  editor = "editor",
  balance = "balance",
  address = "address",
  pdfPage = "pdfPage",
  createPages = "createPages",
  instrumentPageData = "instrumentPageData",
}

export enum ContractTypes {
  create = "create",
  acceptable = "acceptable",
  fulfilled = "fulfilled",
}

export enum CreatePages {
  PDF = "PDF",
  AddWallet = "AddWallet",
  SmartContract = "SmartContract",
  Networking = "Networking",
  SummaryPage = "SummaryPage",
}
export type PDFPage = {
  PDF: FileList | string;
  price: string;
  onlySigner: string;
  selectedDate: Date | string;
};

export type State = {
  createPages: CreatePages;
  arweave: Arweave;
  editor: any;
  domParser: DOMParser;
  balance: number;
  address: string;
  walletFile: FileList | string;
  pdfPage: PDFPage;
  instrumentPageData: InstrumentPageData;
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
  pstContractId: string;
  isInstrument: boolean;
  instrumentName: string;
  instrumentTicker: string;
  instrumentSupply: string;
  canDerive: string;
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
};

export type CreateTransactionResult = {
  id: string;
  statusCode: number;
  path: string;
};

export type InstrumentPageData = {
  pstContractId: string;
  isInstrument: boolean;
  name: string;
  ticker: string;
  supply: number;
  canDerive: number;
};
