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
  setManagementSwitch = "setManagementSwitch",
}

export enum StateProperties {
  arweave = "arweave",
  agreementPage = "agreementPage",
  pdfPage = "pdfPage",
  createPages = "createPages",
  walletPage = "walletPage",
  instrumentPageData = "instrumentPageData",
  networkingPage = "networkingPage",
  managementSlider = "managementSlider",
}

export enum ContractTypes {
  create = "create",
  acceptable = "acceptable",
  fulfilled = "fulfilled",
}

export enum CreatePages {
  Routes = "Routes",
  Agreement = "Agreement",
  Semantics = "Semantics",
  Signer = "Signer",
  Payments = "Payments",
  NFT = "NFT",
  Inputs = "Inputs",
  Instrument = "Instrument",
  PDF = "PDF",
  AddWallet = "AddWallet",
  SmartContract = "SmartContract",
  Networking = "Networking",
  SummaryPage = "SummaryPage",
}

export enum ManagerPages {
  Routes = "Routes",
  Topup = "Topup",
  History = "History",
  Identity = "Identity",
  Messages = "Messages",
  NFT = "NFT",
  Instruments = "Instruments",
  Derivatives = "Derivatives",
  Governance = "Governance",
}

export enum ManagementSlider {
  ON,
  OFF,
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
  arconnect: boolean;
};

export type NetworkingPage = {
  postto: string;
  webhook: boolean;
  redirect: boolean;
};

export type AgreementPage = {
  // price: string;
  // onlySigner: string;
  selectedDate: string | Date;
  // content: string;
};

export enum SemanticsInput {
  Docx,
  type,
}

export type SemanticsPage = {
  title: string;
  semanticsInput: SemanticsInput;
  content: string;
};

export type SignerPage = {
  onlySigner: string;
  availableCountries: Array<string>;
};

export type PaymentPage = {
  price: string;
  willProfitShare: boolean;
  pstContractId: string;
};

export type InputsPage = {
  requiredInputs: Array<string>;
};

export type NFTPage = {
  title: string;
  name: string;
  description: string;
  ticker: string;
};

export type InstrumentPageData = {
  // pstContractId: string;
  // willProfitShare: boolean;
  isInstrument: boolean;
  name: string;
  ticker: string;
  supply: number;
  canDerive: number;
};

export type HistoryPageData = {
  acceptable: Array<string>;
  signed: Array<string>;
};

export enum AccountType {
  pro,
  enterprise,
}
export type Topup = {
  accountType: AccountType;
  expires: string;
};

export type Signup = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  addressLine2: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
  acceptedTerms: string;
};

export enum MessageType {
  kyc = "kyc",
  agreementSigned = "agreementSigned",
}

export type Message = {
  title: string;
  type: MessageType;
  content: string;
};

export type Messages = {
  data: Array<Message>;
};

export enum AccountantPage {
  ON,
  OFF,
}

export type State = {
  // These are for create
  createPages: CreatePages; // These are the create pages
  managerPages: ManagerPages; // These are the management pages
  managementSlider: ManagementSlider; //Decides if the management UI is on or off
  accountantOn: AccountantPage;
  arweave: Arweave;
  domParser: DOMParser;

  // This is the create page data:
  agreementPage: AgreementPage;
  walletPage: WalletPage;
  pdfPage: PDFPage;
  signerPage: SignerPage;
  semanticsPage: SemanticsPage;
  paymentPage: PaymentPage;
  inputsPage: InputsPage;
  networkingPage: NetworkingPage;
  NFTPage: NFTPage;
  instrumentPageData: InstrumentPageData;

  // This is the manager page data:
  historyPageData: HistoryPageData;

  // This is to evaluate the current contract's type
  contracttype: ContractTypes;

  // These are for acceptable page!
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
  pstContractId: string;
  isInstrument: boolean;
  instrumentName: string;
  instrumentTicker: string;
  instrumentSupply: string;
  canDerive: string;
  instrumentContractId: string;
  pdfTransactionId: string;
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

export type CreatedTransactions = {
  pdfTransaction: Transaction;
  instrumentContractTx: Transaction;
  pageTransaction: Transaction;
};
