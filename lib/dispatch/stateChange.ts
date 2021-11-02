import {
  ERC20Params,
  Events,
  EventType,
  Identity,
  SelectedWallet,
  StashedDetails,
} from "../types";
import { dispatch } from "./dispatch";

export function dispatch_setInit() {
  dispatch(Events.stateChange, {
    type: EventType.init,
    value: {},
  });
}

export function dispatch_setIPFS() {
  dispatch(Events.stateChange, {
    type: EventType.setIPFS,
    value: {},
  });
}

export function dispatch_setSelectedDate(date: Date | string) {
  dispatch(Events.stateChange, {
    type: EventType.setSelectedDate,
    value: { date },
  });
}

export function dispatch_stashPage(page: string) {
  dispatch(Events.stateChange, {
    type: EventType.stashPage,
    value: { page },
  });
}

export function dispatch_stashDetails(value: StashedDetails) {
  dispatch(Events.stateChange, {
    type: EventType.stashDetails,
    value,
  });
}

export function dispatch_setPosition(position: GeolocationPosition) {
  dispatch(Events.stateChange, {
    type: EventType.setPosition,
    value: { position },
  });
}

export function dispatch_setERC20(to: ERC20Params) {
  dispatch(Events.stateChange, {
    type: EventType.setERC20,
    value: to,
  });
}

export function dispatch_setSelectedWallet(to: SelectedWallet) {
  dispatch(Events.stateChange, {
    type: EventType.setSelectedWallet,
    value: to,
  });
}

export function dispatch_setNewIdentity(value: Identity) {
  dispatch(Events.stateChange, {
    type: EventType.setNewIdentity,
    value,
  });
}
