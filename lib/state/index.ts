import { Events, EventType, State, StateProperties } from "../types";
import { setStateHook } from "./setStateHook";

(function InitState() {
  function createState() {
    let state: State = {
      arweave: undefined,
    };

    const stateHandler = {
      set: function (obj: State, prop: StateProperties, value: any) {
        obj[prop] = value;
        setStateHook[prop]({ obj, prop, value });
        console.log(obj);
        return true;
      },
    };

    return new Proxy(state, stateHandler);
  }

  const stateContainer = createState();

  const stateSetter = {
    [EventType.setArweave]: (value: any) => {
      stateContainer.arweave = value;
    },
  };

  document.body.addEventListener(Events.stateChange, function (event: any) {
    const type: EventType = event.detail.type;
    const value = event.detail.value;

    stateSetter[type](value);
  });
})();
