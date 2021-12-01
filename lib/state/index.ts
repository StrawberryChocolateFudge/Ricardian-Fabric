import {
  Events,
  EventType,
  Account,
  PopupState,
  SelectedWallet,
  StashedDetails,
  State,
  PageState,
} from "../types";
import { getCurrentUrl, getPage } from "../view/utils";
import {
  getBlockCountriesFromDataProp,
  getBlockedAddressesFromDataProp,
  getCreatedDateFromDataProp,
  getCurrentPageDataProp,
  getExpiresFromDataProp,
  getIsERC20FromDataProp,
  getIssuerDataProp,
  getIssuerSignatureFromDataProp,
  getNetworkFromDataProp,
  getRedirectToDataProp,
  getSelectedWalletFromDataProp,
  getSmartContractFromDataProp,
  getSourceFromDataProp,
  getVersionFromDataProp,
} from "./dataPropGetters";
import { setStateHook } from "./setStateHook";

(function InitState() {
  function createState() {
    const pageEl = getPage();
    const state: State = {
      init: false,
      ipfs: {
        host: "ipfs.infura.io",
        port: 5001,
        protocol: "https",
      },
      Account: { data: null, address: null, balance: null },
      popupState: PopupState.NONE,
      pageState: PageState.Menu,
      editor: null,
      domParser: new DOMParser(),
      selectedDate: "",
      stashedPage: "",
      stashedDetails: undefined,
      selectedWallet: getSelectedWalletFromDataProp(pageEl),
      contracttype: getCurrentPageDataProp(pageEl),
      redirectto: getRedirectToDataProp(pageEl),
      expires: getExpiresFromDataProp(pageEl),
      createdDate: getCreatedDateFromDataProp(pageEl),
      version: getVersionFromDataProp(pageEl),
      bundleSrcUrl: getSourceFromDataProp(pageEl),
      currentUrl: getCurrentUrl(),
      blockedCountries: getBlockCountriesFromDataProp(pageEl),
      blockedAddresses: getBlockedAddressesFromDataProp(pageEl),
      network: getNetworkFromDataProp(pageEl),
      issuer: getIssuerDataProp(pageEl),
      issuerSignature: getIssuerSignatureFromDataProp(pageEl),
      participant: "",
      participantSignature: "",
      smartcontract: getSmartContractFromDataProp(pageEl),
      position: undefined,
      isERC20: getIsERC20FromDataProp(pageEl),
      ipfsCID: "",
      editFinished: false,
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
    [EventType.setPosition]: (value: { position: GeolocationPosition }) => {
      stateContainer.position = value.position;
    },
    [EventType.setSelectedWallet]: (value: SelectedWallet) => {
      stateContainer.selectedWallet = value;
    },
    [EventType.setNewAccount]: (value: Account) => {
      stateContainer.Account = value;
    },
    [EventType.setPopupState]: (value: PopupState) => {
      stateContainer.popupState = value;
    },
    [EventType.setIpfsCID]: (value: string) => {
      stateContainer.ipfsCID = value;
    },
    [EventType.setEditFinished]: (value: boolean) => {
      stateContainer.editFinished = value;
    },
    [EventType.setPageState]: (value: PageState) => {
      stateContainer.pageState = value;
    },
  };

  document.body.addEventListener(Events.stateChange, function (event: any) {
    const type: EventType = event.detail.type;
    const value = event.detail.value;
    stateSetter[type](value);
  });
})();
