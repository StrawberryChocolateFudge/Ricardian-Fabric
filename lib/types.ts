import BN from "bn.js";

export enum Chains {
  Ropsten = "3",
  bscTestnet = "97",
  polygonTestnet = "80001",
  harmonyTestnetShard0 = "1666700000",
}
export enum ChainName {
  Harmony = "Harmony",
  Ropsten = "Ropsten",
  BSC = "BSC",
  Polygon = "Polygon",
}
export enum Events {
  render = "render",
  stateChange = "stateChange",
}

export enum RenderType {
  menu = "menu",
  create = "create",
  sidebar = "sidebar",
  catalog = "catalog",
  acceptButton = "acceptButton",
  balance = "balance",
  addLoadingIndicator = "addLoadingIndicator",
  removeLoadingIndicator = "removeLoadingIndicator",
  transaction = "renderTransaction",
  renderError = "renderError",
  removeError = "removeError",
  enableButton = "enableButton",
  disableButton = "disableButton",
  redirect = "redirect",
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
  catalogPage = "catalogPage",
  SCDeploySelected = "SCDeploySelected",
  DisableSCInputs = "DisableSCInputs",
  EnableSCInputs = "EnableSCInputs",
  SetDeployedSCAddress = "SetDeployedSCAddress",
  DocxDropper = "DocxDropper",
  uploadFile = "uploadFile",
  uploadSummary = "uploadSummary",
  uploadStatus = "uploadStatus",
  discardFile = "discardFile",
  permapinPopup = "permapinPopup",
  walletPopup = "walletPopup",
  emptyWalletDropper = "emptyWalletDropper",
  addNewAccountPopup = "addNewAccountPopup",
  showAccountPopup = "showAccountPopup",
  switchAccounts = "switchAccounts",
  transferPage = "transferPage",
  transferSummaryPage = "transferSummaryPage",
  permapinSummaryPage = "permapinSummaryPage",
  hidePopup = "hidePopup",
  hideElement = "hideElement",
  txId = "txId",
  verifyContract = "verifyContract",
  verificationState = "verificationState",
  createProposalPage = "createProposalPage",
  reviewAndVotePage = "reviewAndVotePage",
  permawebSelectActions = "permawebSelectActions",
  uploadProposal = "uploadProposal",
  proposalSummary = "proposalSummary",
  initializeCreateRicardian = "initializeCreateRicardian",
  initializeProposalUpload = "initializeProposalUpload",
  proposeNewRank = "proposeNewRank",
  proposeNewContract = "proposeNewContract",
}

// TODO refactor to RenderDispatchArgs for specifying the dispatch arguments
// TODO: The render function signature below should take these args
export type RenderDispatchArgs = State & { tmp: any };

type RenderFunction = (props: any) => void;

export type Renderer = {
  [RenderType.menu]: RenderFunction;
  [RenderType.create]: RenderFunction;
  [RenderType.sidebar]: RenderFunction;
  [RenderType.acceptButton]: RenderFunction;
  [RenderType.addLoadingIndicator]: RenderFunction;
  [RenderType.removeLoadingIndicator]: RenderFunction;
  [RenderType.transaction]: RenderFunction;
  [RenderType.renderError]: RenderFunction;
  [RenderType.removeError]: RenderFunction;
  [RenderType.enableButton]: RenderFunction;
  [RenderType.disableButton]: RenderFunction;
  [RenderType.redirect]: RenderFunction;
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
  [RenderType.catalogPage]: RenderFunction;
  [RenderType.SCDeploySelected]: RenderFunction;
  [RenderType.DisableSCInputs]: RenderFunction;
  [RenderType.EnableSCInputs]: RenderFunction;
  [RenderType.SetDeployedSCAddress]: RenderFunction;
  [RenderType.DocxDropper]: RenderFunction;
  [RenderType.uploadFile]: RenderFunction;
  [RenderType.uploadSummary]: RenderFunction;
  [RenderType.uploadStatus]: RenderFunction;
  [RenderType.discardFile]: RenderFunction;
  [RenderType.permapinPopup]: RenderFunction;
  [RenderType.walletPopup]: RenderFunction;
  [RenderType.emptyWalletDropper]: RenderFunction;
  [RenderType.addNewAccountPopup]: RenderFunction;
  [RenderType.showAccountPopup]: RenderFunction;
  [RenderType.switchAccounts]: RenderFunction;
  [RenderType.transferPage]: RenderFunction;
  [RenderType.transferSummaryPage]: RenderFunction;
  [RenderType.permapinSummaryPage]: RenderFunction;
  [RenderType.hidePopup]: RenderFunction;
  [RenderType.hideElement]: RenderFunction;
  [RenderType.txId]: RenderFunction;
  [RenderType.verifyContract]: RenderFunction;
  [RenderType.verificationState]: RenderFunction;
  [RenderType.createProposalPage]: RenderFunction;
  [RenderType.reviewAndVotePage]: RenderFunction;
  [RenderType.permawebSelectActions]: RenderFunction;
  [RenderType.uploadProposal]: RenderFunction;
  [RenderType.proposalSummary]: RenderFunction;
  [RenderType.initializeCreateRicardian]: RenderFunction;
  [RenderType.initializeProposalUpload]: RenderFunction;
  [RenderType.proposeNewRank]: RenderFunction;
  [RenderType.proposeNewContract]: RenderFunction;
};

export enum VerificationState {
  success,
  failure,
  none,
}

export enum EventType {
  init = "init",
  setIPFS = "setIPFS",
  setEditor = "setEditor",
  setBalance = "setBalance",
  setWalletAddress = "setWalletAddress",
  setSelectedDate = "setSelectedDate",
  stashPage = "stashPage",
  stashDetails = "stashDetails",
  setPosition = "setPosition",
  setERC20 = "setERC20",
  setSelectedWallet = "setSelectedWallet",
  setNewAccount = "setNewAccount",
  setPopupState = "setPopupState",
  setIpfsCID = "setIpfsCID",
  setEditFinished = "setEditFinished",
  setPageState = "setPageState",
  setCreateRicardianPageProps = "setCreateRicardianPageProps",
  saveToStateUploadProposalProps = "saveToStateUploadProposalProps",
}

export enum StateProperties {
  init = "init",
  ipfs = "ipfs",
  createRicardianPageProps = "createRicardianPageProps",
  balance = "balance",
  address = "address",
  selectedDate = "selectedDate",
  stashedPage = "stashedPage",
  stashedDetails = "stashedDetails",
  position = "position",
  selectedWallet = "selectedWallet",
  Account = "Account",
  popupState = "popupState",
  ipfsCID = "ipfsCID",
  editFinished = "editFinished",
  editor = "editor",
  pageState = "pageState",
  proposalType = "proposalType",
  uploadProposalProps = "uploadProposalProps",
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

export enum DeploySC {
  HRC20 = "HRC20",
  PST = "PST",
}

export enum WalletDropperType {
  ENCRYPTED,
  PLAINTEXT,
}

export enum SelectedWallet {
  metamask = "metamask",
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

export type ERC20Params = {
  name: string;
  symbol: string;
  address: string;
  decimals: number;
};

export type NetworkType = "Mainnet" | "Testnet";

export type Account = {
  data: ArrayBuffer;
  address: string;
  balance: string;
};
export enum PopupState {
  NONE,
  Terms,
  ImportTemplate,
  ShowAccount,
  NewAccount,
  AddNewAccount, //THE add new Account page is not used in state for more efficien passing of data
  TransferAr,
  SwitchAccount,
  UploadFile,
  UploadSummary, // Upload summary is not used in state because it get's passed a signed transaction
  Permapin,
  PermapinSummary, //Same as upload summary...
  UploadProposal,
  UploadProposalStep2,
  UploadProposalStep3,
  UploadProposalStep4,
}

export enum PageState {
  Menu,
  CreateRicardian,
  VerifyContract,
  Staking,
  Catalog,
  Proposals,
  ReviewAndVote,
}

export type State = {
  init: boolean;
  ipfs: IPFSParams;
  Account: Account;
  editor: any;
  domParser: DOMParser;
  selectedDate: Date | string;
  popupState: PopupState;
  pageState: PageState;
  createRicardianPageProps: CreateRicardianPageProps;
  uploadProposalProps: ProposalFormat;
  stashedPage: string;
  stashedDetails: StashedDetails;
  selectedWallet: SelectedWallet;
  contracttype: ContractTypes;
  redirectto: string;
  bundleSrcUrl: string;
  createdDate: string;
  expires: string;
  currentUrl: string;
  version: string;
  blockedCountries: BlockCountry[];
  blockedAddresses: string[];
  network: string;
  issuer: string;
  issuerSignature: string;
  participant: string;
  participantSignature: string;
  smartcontract: string;
  position: GeolocationPosition;
  isERC20: ERC20Params;
  ipfsCID: string;
  editFinished: boolean;
};

export type SetHookArgs = {
  obj: State;
  prop: StateProperties;
  value: any;
};

type Dependency = {
  src: string;
};

export type CreateRicardianPageProps = {
  blockedCountries: BlockCountry[];
  blockedAddresses: string;
  expires: string;
  redirectto: string;
  smartContract: string;
  erc20Add: boolean;
  erc20Name: string;
  erc20Symbol: string;
  erc20Decimals: string;
  erc20Address: string;
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
  blockedAddresses: string[];
  network: string;
  issuerSignature: string;
  smartContract: string;
  ERC20: string;
};

export type FulfilledPageProps = {
  version: string;
  issuer: string;
  createdDate: string;
  signedDate: string;
  expires: string;
  redirectto: string;
  domParser: DOMParser;
  legalContract: string;
  participant: string;
  parentUrl: string;
  network: string;
  issuerSignature: string;
  participantSignature: string;
  smartContract: string;
  ERC20: string;
  blockedCountries: BlockCountry[];
  blockedAddresses: string[];
};

export enum Status {
  Success,
  Failure,
  AlreadyExists,
}
// export type PinOptions = {
//   status: Status;
//   error: any;
//   result: Response;
// };

export type IssuerHashedData = {
  legalContract: string;
  createdDate: string;
  expires: string;
  redirectto: string;
  version: string;
  issuer: string;
  blockedCountries: BlockCountry[];
  blockedAddresses: string[];
  network: string;
  smartContract: string;
  ERC20: string;
};

export type Options<T> = {
  status: Status;
  error: any;
  data: T;
};

export type Tags = {
  network: string;
  issuer: string;
  contractType: string;
  participant: string;
  version: string;
};

export type VerifyOptions = {
  status: Status;
  tags: Tags;
  error: string;
};

export type HashWithIds = { hash: string; message: string; status: Status };

export type HashWithTransaction = { hash: string; tx: any; status: Status };

declare global {
  interface Window {
    ethereum: any;
    Module: any;
  }
}

window.ethereum = window.ethereum || {};

export type ProposalFormat = {
  name: string;
  description: string;
  artifact: string;
  terms: string | File;
  git: string;
  commit: string;
  network: string;
  category: string;
  simpleterms: boolean;
};

export type RankProposal = {
  repository: string;
  creator: string;
  createdBlock: BN;
  approvals: BN;
  rejections: BN;
  closed: boolean;
};

export type MyProposals = {
  rank: BN[];
  smartContract: BN[];
  acceptedSCProposals: BN[];
  removedFromMe: BN[];
  removal: BN[];
};

export type SmartContractProposal = {
  arweaveTxId: string;
  creator: string;
  createdBlock: BN;
  approvals: BN;
  rejections: BN;
  closed: boolean;
};

export type AcceptedSmartContractProposal = {
  arweaveTxId: string;
  creator: string;
  removed: boolean;
};

export type RemovalProposal = {
  discussionUrl: string;
  creator: string;
  malicious: boolean;
  acceptedIndex: BN; // The index from acceptedSCProposals
  createdBlock: BN;
  approvals: BN;
  rejections: BN;
  closed: boolean;
};
