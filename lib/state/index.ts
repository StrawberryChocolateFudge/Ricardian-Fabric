import { Events, EventType, State, StateProperties } from "../types";
import {
  getArweaveDependencyUrl,
  getBundleSrcUrl,
  getCommunityJsDependencyUrl,
  getCreatorAddressDataProp,
  getCurrentPageDataProp,
  getPriceFromDataProp,
  getRedirectDataProp,
} from "./dataPropGetters";
import createNewEditor from "./editor";
import { setStateHook } from "./setStateHook";

(function InitState() {
  function createState() {
    const state: State = {
      arweave: undefined,
      editor: createNewEditor(),
      domParser: new DOMParser(),
      balance: 0,
      address: "",
      contracttype: getCurrentPageDataProp(),
      redirect: getRedirectDataProp(),
      creatorAddress: getCreatorAddressDataProp(),
      price: getPriceFromDataProp(),
      bundleSrcUrl: getBundleSrcUrl(),
      arweaveDependencyUrl: getArweaveDependencyUrl(),
      communityJsDependencyUrl: getCommunityJsDependencyUrl(),
    };

    const stateHandler = {
      set: function (obj: State, prop: string, value: any) {
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
    [EventType.setEditor]: (value: any) => {
      stateContainer.editor = value;
    },
    [EventType.setBalance]: (value: any) => {
      stateContainer.balance = value.balance;
      stateContainer.address = value.address;
    },
  };

  document.body.addEventListener(Events.stateChange, function (event: any) {
    const type: EventType = event.detail.type;
    const value = event.detail.value;

    stateSetter[type](value);
  });
})();
