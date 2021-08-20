import {
  CreatePages,
  Events,
  EventType,
  InstrumentPageData,
  PDFPage,
  State,
} from "../types";
import { CreatePage } from "../view/templates/createPage";
import { getCurrentUrl, getPage } from "../view/utils";
import {
  getBundleSrcUrl,
  getCreatedDateFromDataProp,
  getCreatorAddressDataProp,
  getCurrentPageDataProp,
  getExpiresFromDataProp,
  getOnlySignerFromDataProp,
  getPostToDataProp,
  getPriceFromDataProp,
  getRedirectFromDataProp,
  getVersionFromDataProp,
  getWebhookFromDataProp,
} from "./dataPropGetters";
import createNewEditor from "./editor";
import { setStateHook } from "./setStateHook";

(function InitState() {
  function createState() {
    const pageEl = getPage();

    const state: State = {
      createPages: CreatePages.PDF,
      arweave: undefined,
      editor: createNewEditor(),
      domParser: new DOMParser(),
      balance: 0,
      address: "",
      walletFile: "",
      pdfPage: {
        PDF: "",
        price: "",
        onlySigner: "",
        selectedDate: "",
      },
      instrumentPageData: {
        pstContractId: "",
        isInstrument: false,
        name: "",
        ticker: "",
        supply: 0,
        canDerive: 0,
      },
      contracttype: getCurrentPageDataProp(pageEl),
      postto: getPostToDataProp(pageEl),
      webhook: getWebhookFromDataProp(pageEl),
      redirect: getRedirectFromDataProp(pageEl),
      creatorAddress: getCreatorAddressDataProp(pageEl),
      price: getPriceFromDataProp(pageEl),
      expires: getExpiresFromDataProp(pageEl),
      createdDate: getCreatedDateFromDataProp(pageEl),
      version: getVersionFromDataProp(pageEl),
      bundleSrcUrl: getBundleSrcUrl(),
      currentUrl: getCurrentUrl(),
      onlySigner: getOnlySignerFromDataProp(pageEl),
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
    [EventType.setSelectedDate]: (value: { date: Date | string }) => {
      const selectedDate = value.date;
      stateContainer.pdfPage = { ...stateContainer.pdfPage, selectedDate };
    },
    [EventType.setInstrumentPageData]: (value: {
      instrumentpageData: InstrumentPageData;
    }) => {
      stateContainer.instrumentPageData = value.instrumentpageData;
    },
    [EventType.setPdfPageData]: (value: { pdfPageData: PDFPage }) => {
      stateContainer.pdfPage = value.pdfPageData;
    },
    [EventType.setCreatePages]: (value: { createPage: CreatePages }) => {
      stateContainer.createPages = value.createPage;
    },
    [EventType.setInstrumentPageData]: (value: {
      instrumentPageData: InstrumentPageData;
    }) => {
      stateContainer.instrumentPageData = value.instrumentPageData;
    },
  };

  document.body.addEventListener(Events.stateChange, function (event: any) {
    const type: EventType = event.detail.type;
    const value = event.detail.value;

    stateSetter[type](value);
  });
})();
