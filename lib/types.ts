import Arweave from "arweave";
import Transaction from "arweave/node/lib/transaction";

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
  initAgreementPage = "initAgreementPage",
  initPDFPage = "initPDFPage",
  initWalletPage = "initWalletPage",
  initSmartContractPage = "initSmartContractPage",
  initNetworkingPage = "initNetworkingPage",
  initSummaryPage = "initSummaryPage",
  discardPdf = "discardPdf",
  promptSuccess = "promptSuccess",
  promptError = "promptError",
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
  [RenderType.setInstrument]: CallableFunction;
  [RenderType.initAgreementPage]: CallableFunction;
  [RenderType.initPDFPage]: CallableFunction;
  [RenderType.initWalletPage]: CallableFunction;
  [RenderType.initSmartContractPage]: CallableFunction;
  [RenderType.initNetworkingPage]: CallableFunction;
  [RenderType.initSummaryPage]: CallableFunction;
  [RenderType.discardPdf]: CallableFunction;
  [RenderType.promptSuccess]: CallableFunction;
  [RenderType.promptError]: CallableFunction;
};

export enum EventType {
  setArweave = "setArweave",
  setEditor = "setEditor",
  setBalance = "setBalance",
  setAgreementsPageData = "setAgreementsPageData",
  setWalletAddress = "setWalletAddress",
  setSelectedDate = "setSelectedDate",
  setPdfPageData = "setPdfPageData",
  setCreatePages = "setCreatePages",
  setInstrumentPageData = "setInstrumentPageData",
  setKey = "setKey",
  setNetworkingPage = "setNetworkingPage",
}

export enum StateProperties {
  arweave = "arweave",
  agreementPage = "agreementPage",
  pdfPage = "pdfPage",
  createPages = "createPages",
  walletPage = "walletPage",
  instrumentPageData = "instrumentPageData",
  networkingPage = "networkingPage",
}

export enum ContractTypes {
  create = "create",
  acceptable = "acceptable",
  fulfilled = "fulfilled",
}

export enum CreatePages {
  Agreement = "Agreement",
  PDF = "PDF",
  AddWallet = "AddWallet",
  SmartContract = "SmartContract",
  Networking = "Networking",
  SummaryPage = "SummaryPage",
}

export enum FileType {
  key = "key",
  pdf = "pdf",
}

export type PDFPage = {
  PDF: FileList | string;
};
export type WalletPage = {
  balance: number;
  address: string;
  key: any;
  file: FileList | string;
};

export type NetworkingPage = {
  postto: string;
  webhook: boolean;
  redirect: boolean;
};

export type AgreementPage = {
  price: string;
  onlySigner: string;
  selectedDate: string | Date;
  content: string;
};

export type State = {
  // These are for create
  createPages: CreatePages;
  arweave: Arweave;
  domParser: DOMParser;
  agreementPage: AgreementPage;
  pdfPage: PDFPage;
  instrumentPageData: InstrumentPageData;
  walletPage: WalletPage;
  contracttype: ContractTypes;
  networkingPage: NetworkingPage;

  //These are for acceptable page!
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
  legalContract: string;
  onlySigner: string;
  pstContractId: string;
  isInstrument: boolean;
  instrumentName: string;
  instrumentTicker: string;
  instrumentSupply: number;
  canDerive: number;
  instrumentContractId: string;
  pdfTransactionId: string;
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
  willProfitShare: boolean;
  isInstrument: boolean;
  name: string;
  ticker: string;
  supply: number;
  canDerive: number;
};

export type CreatedTransactions = {
  pdfTransaction: Transaction;
  instrumentContractTx: Transaction;
  pageTransaction: Transaction;
};
