export enum Events {
  render = "render",
  stateChange = "stateChange",
}

export enum RenderType {
  successMessage = "successMessage",
  errorMessage = "errorMessage",
  createButton = "createButton",
}

export enum EventType {
  setArweave = "setArweave",
}

export enum StateProperties {
  arweave = "arweave",
}

export type State = {
  arweave: any;
};

export type SetHookArgs = {
  obj: State;
  prop: StateProperties;
  value: any;
};
