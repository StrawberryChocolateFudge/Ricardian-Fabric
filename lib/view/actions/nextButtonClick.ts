import {
  dispatch_removeError,
  dispatch_renderError,
} from "../../dispatch/render";
import {
  dispatch_instrumentPageData,
  dispatch_setCreatePages,
  dispatch_setPdfPageData,
} from "../../dispatch/stateChange";
import { CreatePages, PDFPage, State } from "../../types";
import {
  didExpire,
  getById,
  getExpires,
  getInstrumentCanDerive,
  getInstrumentName,
  getInstrumentSupply,
  getInstrumentTicker,
  getIsInstrument,
  getOnlySigner,
  getPDF,
  getPrice,
  getProfitSharingContractId,
  getWallet,
  setExpiresDateToDOM,
  setInstrumentCanDeriveToDOM,
  setInstrumentNameToDOM,
  setInstrumentSupplyToDOM,
  setInstrumentTickerToDOM,
  setIsIntrumentToDOM,
  setOnlySignerToDOM,
  setPDFtoDOM,
  setPriceToDOM,
  setProfitSharingContractIdToDOM,
  setSmartContractInputFields,
  updatePromptSuccess,
} from "../utils";

export function nextButtonClick(props: State) {
  if (props.createPages === CreatePages.PDF) {
    // Initializing the page if pdf is set in state,
    // that probably means the back button was pushed
    if (props.pdfPage.PDF !== "") {
      setPDFtoDOM(props.pdfPage.PDF);
      updatePromptSuccess(props.pdfPage.PDF[0]);
      setExpiresDateToDOM(props.pdfPage.selectedDate.toString());
      setPriceToDOM(props.pdfPage.price);
      setOnlySignerToDOM(props.pdfPage.onlySigner);
    }

    const nextButton = getById("EditPage-next");

    nextButton.onclick = function (e: Event) {
      dispatch_removeError();
      const expires = getExpires();
      const expired = didExpire(expires);

      if (expired) {
        dispatch_renderError("Date expired!");
        return;
      }

      const PDF = getPDF();

      if (!PDF) {
        dispatch_renderError("A valid file must be selected!");
        return;
      }

      const onlySigner = getOnlySigner();
      if (onlySigner !== "NONE" && onlySigner.length !== 43) {
        // the lengths of the address must be 43
        dispatch_renderError("Only signer address is invalid");
        return;
      }
      const price = getPrice();

      if (parseFloat(price) < 0) {
        dispatch_renderError("Price can't be negative!");
        return;
      }
      const pdfPageData: PDFPage = {
        PDF,
        price,
        onlySigner,
        selectedDate: expires,
      };
      dispatch_setPdfPageData(pdfPageData);
      dispatch_setCreatePages(CreatePages.AddWallet);
    };
  } else if (props.createPages === CreatePages.AddWallet) {
    //TODO: initialize
    const prevButton = getById("AddWalletPage-previous");
    const nextButton = getById("AddWalletPage-next");

    prevButton.onclick = function (e: Event) {
      dispatch_setCreatePages(CreatePages.PDF);
    };

    nextButton.onclick = function (e: Event) {
      dispatch_removeError();

      const Wallet = getWallet();
//TODO: WALLET!!

    };
  } else if (props.createPages === CreatePages.SmartContract) {
    setProfitSharingContractIdToDOM(props.instrumentPageData.pstContractId);
    setIsIntrumentToDOM(props.instrumentPageData.isInstrument);
    setInstrumentNameToDOM(props.instrumentPageData.name);
    setInstrumentTickerToDOM(props.instrumentPageData.ticker);
    setInstrumentSupplyToDOM(props.instrumentPageData.supply);
    setInstrumentCanDeriveToDOM(props.instrumentPageData.canDerive);
    setSmartContractInputFields(props.instrumentPageData.isInstrument);

    const prevButton = getById("SmartContractPage-previous");
    const nextButton = getById("SmartContractPage-next");

    prevButton.onclick = function (e: Event) {
      dispatch_setCreatePages(CreatePages.AddWallet);
    };

    nextButton.onclick = function (e: Event) {
      dispatch_removeError();
      const pstContractId = getProfitSharingContractId();
      const isInstrument = getIsInstrument();
      const name = getInstrumentName();
      const ticker = getInstrumentTicker();
      const instrumentSupply = getInstrumentSupply();
      const instrumentCanDerive = getInstrumentCanDerive();
      const supply = parseInt(instrumentSupply);
      const canDerive = parseInt(instrumentCanDerive);

      if (isInstrument) {
        if (name === "") {
          dispatch_renderError("Instrument name is not specified");
          return;
        }

        if (ticker === "") {
          dispatch_renderError("Ticker is not specified");
          return;
        }
        if (isNaN(supply)) {
          dispatch_renderError("Invalid supply, must be a valid integer");
          return;
        }

        if (supply < 1) {
          dispatch_renderError("The minimum supply is 1");
          return;
        }

        if (isNaN(canDerive)) {
          dispatch_renderError(
            "Invalid derive amount, must be a valid integer"
          );
          return;
        }
      }
      dispatch_instrumentPageData({
        isInstrument,
        pstContractId,
        name,
        ticker,
        canDerive,
        supply,
      });
      dispatch_setCreatePages(CreatePages.Networking);
    };
  } else if (props.createPages === CreatePages.Networking) {
    const prevButton = getById("NetworkingPage-previous");
    const nextButton = getById("NetworkingPage-next");

    prevButton.onclick = function (e: Event) {
      dispatch_setCreatePages(CreatePages.SmartContract);
    };
  } else if (props.createPages === CreatePages.SummaryPage) {
  }
}
