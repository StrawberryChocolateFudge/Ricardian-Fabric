import { Events, EventType, State } from "../types";
import { getCurrentUrl, getPage } from "../view/utils";
import {
  getCreatedDateFromDataProp,
  getCreatorAddressDataProp,
  getCurrentPageDataProp,
  getExpiresFromDataProp,
  getImgSrcUrl,
  getOnlySignerFromDataProp,
  getPostToDataProp,
  getPriceFromDataProp,
  getRedirectFromDataProp,
  getSourceFromDataProp,
  getVersionFromDataProp,
  getWebhookFromDataProp,
} from "./dataPropGetters";
import createNewEditor from "./editor";
import { setStateHook } from "./setStateHook";

(function InitState() {
  function createState() {
    const pageEl = getPage();

    const state: State = {
      arweave: undefined,
      editor: createNewEditor(),
      domParser: new DOMParser(),
      balance: 0,
      address: "",
      selectedDate: "",
      contracttype: getCurrentPageDataProp(pageEl),
      postto: getPostToDataProp(pageEl),
      webhook: getWebhookFromDataProp(pageEl),
      redirect: getRedirectFromDataProp(pageEl),
      creatorAddress: getCreatorAddressDataProp(pageEl),
      price: getPriceFromDataProp(pageEl),
      expires: getExpiresFromDataProp(pageEl),
      createdDate: getCreatedDateFromDataProp(pageEl),
      version: getVersionFromDataProp(pageEl),
      bundleSrcUrl: getSourceFromDataProp(pageEl),
      currentUrl: getCurrentUrl(),
      onlySigner: getOnlySignerFromDataProp(pageEl),
      logoSrc: getImgSrcUrl(),
    };

    const stateHandler = {
      set: function (obj: State, prop: string, value: any) {
        obj[prop] = value;
        setStateHook[prop]({ obj, prop, value });
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
    [EventType.setSelectedDate]: (value: { date: Date | string }) => {
      stateContainer.selectedDate = value.date;
    },
  };

  document.body.addEventListener(Events.stateChange, function (event: any) {
    const type: EventType = event.detail.type;
    const value = event.detail.value;

    stateSetter[type](value);
  });
})();
