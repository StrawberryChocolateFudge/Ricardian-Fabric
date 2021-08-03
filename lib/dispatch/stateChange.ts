import { Events, EventType } from "../types";
import { dispatch } from "./dispatch";
import MediumEditor from "medium-editor";

export function dispatch_getArweave(arweave: any) {
  dispatch(Events.stateChange, {
    type: EventType.setArweave,
    value: arweave,
  });
}

export function dispatch_setBalance(arg: {
  balance: number;
  address: string;
}) {
  dispatch(Events.stateChange, {
    type: EventType.setBalance,
    value: arg,
  });
}
