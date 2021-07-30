import { getArweaveCall } from "../arweave/arweave";
import { Events, EventType } from "../types";
import { dispatch } from "./dispatch";

export  function dispatch_getArweave(arweave: any) {
  dispatch(Events.stateChange, {
    type: EventType.setArweave,
    value: arweave,
  });
}
