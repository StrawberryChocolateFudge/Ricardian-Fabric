import {
  AccountantPage,
  AgreementPage,
  CreatePages,
  Events,
  EventType,
  InstrumentPageData,
  ManagementSlider,
  ManagerPages,
  NetworkingPage,
  PDFPage,
  SemanticsInput,
  State,
} from "../types";
import { getCurrentUrl, getPage } from "../view/utils";
import {
  getBundleSrcUrl,
  getCanDeriveFromDataProp,
  getCreatedDateFromDataProp,
  getCreatorAddressDataProp,
  getCurrentPageDataProp,
  getExpiresFromDataProp,
  getInstrumentContractIdFromDataProp,
  getInstrumentNameFromDataProp,
  getInstrumentSupplyFromDataProp,
  getInstrumentTickerFromDataProp,
  getIsInstrumentFromDataProp,
  getOnlySignerFromDataProp,
  getPdfTransactionIdFromDataProp,
  getPostToDataProp,
  getPriceFromDataProp,
  getPstContractIdFromDataProp,
  getRedirectFromDataProp,
  getVersionFromDataProp,
  getWebhookFromDataProp,
} from "./dataPropGetters";
import { setStateHook } from "./setStateHook";

(function InitState() {
  function createState() {
    const pageEl = getPage();

    const state: State = {
      // CreatePage state
      createPages: CreatePages.Routes,
      managerPages: ManagerPages.Routes,
      managementSlider: ManagementSlider.OFF,
      accountantOn: AccountantPage.OFF,
      arweave: undefined,
      domParser: new DOMParser(),

      // Create pages state:
      agreementPage: {
        selectedDate: "",
      },

      walletPage: {
        address: "",
        balance: 0,
        key: "",
        file: "",
        arconnect: false,
      },

      pdfPage: {
        PDF: "",
      },

      signerPage: {
        onlySigner: "",
        availableCountries: [],
      },

      semanticsPage: {
        title: "",
        semanticsInput: SemanticsInput.Docx,
        content: "",
      },

      paymentPage: {
        price: "",
        willProfitShare: false,
        pstContractId: "",
      },

      inputsPage: {
        requiredInputs: [],
      },
      NFTPage: {
        title: "",
        name: "",
        description: "",
        ticker: "",
      },

      instrumentPageData: {
        isInstrument: false,
        name: "",
        ticker: "",
        supply: 0,
        canDerive: 0,
      },

      networkingPage: {
        postto: "",
        webhook: false,
        redirect: false,
      },

      // Manager pages
      historyPageData: {
        acceptable: [],
        signed: [],
      },

      // Acceptable,fulfilled page state
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
      pstContractId: getPstContractIdFromDataProp(pageEl),
      isInstrument: getIsInstrumentFromDataProp(pageEl),
      instrumentName: getInstrumentNameFromDataProp(pageEl),
      instrumentTicker: getInstrumentTickerFromDataProp(pageEl),
      instrumentSupply: getInstrumentSupplyFromDataProp(pageEl),
      canDerive: getCanDeriveFromDataProp(pageEl),
      instrumentContractId: getInstrumentContractIdFromDataProp(pageEl),
      pdfTransactionId: getPdfTransactionIdFromDataProp(pageEl),
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
    [EventType.setBalance]: (value: any) => {
      stateContainer.walletPage = {
        key: "",
        file: "",
        balance: value.balance,
        address: value.address,
        arconnect: value.arconnect,
      };
    },
    [EventType.setSelectedDate]: (value: { date: Date | string }) => {
      const selectedDate = value.date;
      stateContainer.agreementPage = {
        ...stateContainer.agreementPage,
        selectedDate,
      };
    },
    [EventType.setAgreementsPageData]: (value: {
      agreementsData: AgreementPage;
    }) => {
      stateContainer.agreementPage = value.agreementsData;
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
    [EventType.setKey]: (value: { key: any; file: FileList }) => {
      const balance = stateContainer.walletPage.balance;
      const address = stateContainer.walletPage.address;
      const arconnect = stateContainer.walletPage.arconnect;
      stateContainer.walletPage = {
        balance,
        address,
        key: value.key,
        file: value.file,
        arconnect,
      };
      console.log(stateContainer.walletPage);
    },
    [EventType.setInstrumentPageData]: (value: {
      instrumentPageData: InstrumentPageData;
    }) => {
      stateContainer.instrumentPageData = value.instrumentPageData;
    },
    [EventType.setNetworkingPage]: (value: {
      networkingPage: NetworkingPage;
    }) => {
      stateContainer.networkingPage = value.networkingPage;
    },
    [EventType.setManagementSwitch]: (value: { to: ManagementSlider }) => {
      stateContainer.managementSlider = value.to;
    },
  };

  document.body.addEventListener(Events.stateChange, function (event: any) {
    const type: EventType = event.detail.type;
    const value = event.detail.value;

    stateSetter[type](value);
  });
})();
