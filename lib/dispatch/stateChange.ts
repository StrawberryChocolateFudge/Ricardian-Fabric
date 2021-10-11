import { Events, EventType, StashedDetails } from "../types";
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

export function dispatch_stashAcceptablePage(page: string) {
  dispatch(Events.stateChange, {
    type: EventType.stashAcceptablePage,
    value: { page },
  });
}

export function dispatch_stashDetails(value: StashedDetails) {
  dispatch(Events.stateChange, {
    type: EventType.stashDetails,
    value,
  });
}
