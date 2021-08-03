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
}

export enum EventType {
  setArweave = "setArweave",
  setEditor = "setEditor",
  setBalance = "setBalance",
  setWalletAddress = "setWalletAddress",
}

export enum StateProperties {
  arweave = "arweave",
  editor = "editor",
  balance = "balance",
  address = "address",
}

export enum ContractTypes {
  create = "create",
  acceptable = "acceptable",
  fulfilled = "fulfilled",
}

export type State = {
  arweave: any;
  editor: any;
  domParser: DOMParser;
  balance: number;
  address: string;
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
  legalContract: string;
  createdDate: string;
  price: string;
  redirect: string;
  arweaveDeps?: Dependency;
  communityJsDep?: Dependency;
  mainDep?: Dependency;
  domParser: DOMParser;
  creatorWallet: string;
};

export type FulfilledPageProps = {
  legalContract: string;
  creator: string;
  id: string; //Transaction and id will come from the URL
  transaction: string;
  createdDate: string;
  paid: string;
  paidTo: string;
  paidFrom: string;
  parentUrl: string;
  domParser: DOMParser;
};

export type CreateTransactionResult = {
  id: string;
  statusCode: number;
  path: string;
};
