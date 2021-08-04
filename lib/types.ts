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
};

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
  contracttype: ContractTypes;
  postto: string;
  webhook: boolean;
  redirect:boolean;
  creatorAddress: string;
  price: string;
  bundleSrcUrl: string;
  arweaveDependencyUrl: string;
  communityJsDependencyUrl: string;
  createdDate: string;
  expires: string;
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
  post: string;
  webhook: boolean;
  redirect: boolean;
  expires: string;
  arweaveDeps?: Dependency;
  communityJsDep?: Dependency;
  mainDep?: Dependency;
  domParser: DOMParser;
  creatorAddress: string;
};

export type FulfilledPageProps = {
  legalContract: string;
  creator: string;
  createdDate: string;
  fee: string;
  paidAmount: number;
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
