export enum Events {
  render = "render",
  stateChange = "stateChange",
}

export enum RenderType {
  successMessage = "successMessage",
  errorMessage = "errorMessage",
  createPage = "createPage",
  createButton = "createButton",
}

export enum EventType {
  setArweave = "setArweave",
}

export enum StateProperties {
  arweave = "arweave",
}

export enum ContractTypes {
  create = "create",
  acceptable = "acceptable",
  fulfilled = "fulfilled",
}

export type State = {
  arweave: any;
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

export type InlineProps = {
  arweaveDeps: Dependency;
  communityJsDep: Dependency;
  mainDep: Dependency;
};

export type AcceptablePageProps = {
  legalContract: string,
  creator: string;
  id: string;
  transaction: string;
  createdDate: string;
  price: string;
};
