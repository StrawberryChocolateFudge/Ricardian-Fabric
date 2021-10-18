import { Events, EventType, StashedDetails, State } from "../types";
import { getCurrentUrl, getPage } from "../view/utils";
import {
  getCreatedDateFromDataProp,
  getCurrentPageDataProp,
  getExpiresFromDataProp,
  getHashFromDataProp,
  getIssuerDataProp,
  getIssuerSignatureFromDataProp,
  getNetworkFromDataProp,
  getOnlySignerFromDataProp,
  getRedirectToDataProp,
  getSmartContractFromDataProp,
  getSourceFromDataProp,
  getVersionFromDataProp,
} from "./dataPropGetters";
import createNewEditor from "./editor";
import { setStateHook } from "./setStateHook";
import { create } from "ipfs-http-client";
(function InitState() {
  function createState() {
    const pageEl = getPage();
    const state: State = {
      init: false,
      ipfs: {
        host: "127.0.0.1",
        port: 5001,
        protocol: "http",
      },
      ipfsArweaveBridge: "https://bridge.ricardianfabric.com",
      editor: createNewEditor(),
      domParser: new DOMParser(),
      selectedDate: "",
      stashedPage: "",
      stashedDetails: undefined,
      contracttype: getCurrentPageDataProp(pageEl),
      redirectto: getRedirectToDataProp(pageEl),
      expires: getExpiresFromDataProp(pageEl),
      createdDate: getCreatedDateFromDataProp(pageEl),
      version: getVersionFromDataProp(pageEl),
      bundleSrcUrl: getSourceFromDataProp(pageEl),
      currentUrl: getCurrentUrl(),
      onlySigner: getOnlySignerFromDataProp(pageEl),
      network: getNetworkFromDataProp(pageEl),
      hash: getHashFromDataProp(pageEl),
      issuer: getIssuerDataProp(pageEl),
      issuerSignature: getIssuerSignatureFromDataProp(pageEl),
      participant: "",
      participantSignature: "",
      smartcontract: getSmartContractFromDataProp(pageEl)
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
    [EventType.init]: (value: {}) => {
      stateContainer.init = true;
    },
    [EventType.setIPFS]: (value: {}) => {
      stateContainer.ipfs = {
        host: "ipfs.infura.io",
        port: 5001,
        protocol: "https",
      };
    },
    [EventType.setEditor]: (value: any) => {
      stateContainer.editor = value;
    },
    [EventType.setSelectedDate]: (value: { date: Date | string }) => {
      stateContainer.selectedDate = value.date;
    },
    [EventType.stashPage]: (value: { page: string }) => {
      stateContainer.stashedPage = value.page;
    },
    [EventType.stashDetails]: (value: StashedDetails) => {
      stateContainer.stashedDetails = value;
    },
  };

  document.body.addEventListener(Events.stateChange, function (event: any) {
    const type: EventType = event.detail.type;
    const value = event.detail.value;

    stateSetter[type](value);
  });
})();
