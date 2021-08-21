import {
  dispatch_removeError,
  dispatch_renderBalance,
  dispatch_renderError,
} from "../../dispatch/render";
import {
  dispatch_instrumentPageData,
  dispatch_setAgreementsPageData,
  dispatch_setCreatePages,
  dispatch_setEditor,
  dispatch_setKey,
  dispatch_setNetworkingPage,
  dispatch_setPdfPageData,
} from "../../dispatch/stateChange";
import createNewEditor from "../../state/editor";
import { CreatePages, FileType, PDFPage, State } from "../../types";
import {
  setExpiresDateToDOM,
  setInstrumentCanDeriveToDOM,
  setInstrumentNameToDOM,
  setInstrumentSupplyToDOM,
  setInstrumentTickerToDOM,
  setIsIntrumentToDOM,
  setOnlySignerToDOM,
  setPDFtoDOM,
  setPostToDOM,
  setPriceToDOM,
  setProfitSharingContractIdToDOM,
  setSmartContractInputFields,
  setWalletToDom,
  setWillProfitShareToDOM,
} from "../render";
import {
  didExpire,
  discardPDF,
  getById,
  getExpires,
  getInstrumentCanDerive,
  getInstrumentName,
  getInstrumentSupply,
  getInstrumentTicker,
  getIsInstrument,
  getOnlySigner,
  getPDF,
  getPostTo,
  getPrice,
  getProfitSharingContractId,
  getRedirectCheckbox,
  getWallet,
  getWebhookCheckbox,
  isPSTUser,
  readFile,
  revertPrompt,
  updatePromptSuccess,
} from "../utils";

export function nextButtonClick(props: State) {
  if (props.createPages === CreatePages.Agreement) {
    const editor = createNewEditor();

    if (props.agreementPage.selectedDate !== "") {
      setExpiresDateToDOM(props.agreementPage.selectedDate.toString());
      setPriceToDOM(props.agreementPage.price);
      setOnlySignerToDOM(props.agreementPage.onlySigner);
      editor.setContent(props.agreementPage.content, 0);
    }

    const nextButton = getById("AgreementPage-next");

    nextButton.onclick = function () {
      dispatch_removeError();
      const expires = getExpires();
      const expired = didExpire(expires);

      if (expired) {
        dispatch_renderError("Date expired!");
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

      const content = editor.getContent();

      dispatch_setAgreementsPageData({
        price,
        onlySigner,
        selectedDate: expires,
        content,
      });
      dispatch_setCreatePages(CreatePages.PDF);
    };
  } else if (props.createPages === CreatePages.PDF) {
    // Initializing the page if pdf is set in state,
    // that probably means the back button was pushed
    if (props.pdfPage.PDF !== "" && props.pdfPage.PDF !== null) {
      setPDFtoDOM(props.pdfPage.PDF);
      updatePromptSuccess(props.pdfPage.PDF[0]);
    }
    const prevButton = getById("EditPage-previous");
    const nextButton = getById("EditPage-next");
    const discardButton = getById("discard-button");
    prevButton.onclick = function () {
      dispatch_setCreatePages(CreatePages.Agreement);
    };

    discardButton.onclick = function () {
      discardPDF();
      dispatch_setPdfPageData(undefined);
      revertPrompt();
    };

    nextButton.onclick = function (e: Event) {
      dispatch_removeError();

      const PDF = getPDF();

      const pdfPageData: PDFPage = {
        PDF,
      };

      dispatch_setPdfPageData(pdfPageData);
      dispatch_setCreatePages(CreatePages.AddWallet);
    };
  } else if (props.createPages === CreatePages.AddWallet) {
    if (props.walletPage.key !== "") {
      setWalletToDom(props.walletPage.file);
      updatePromptSuccess(props.walletPage.file[0]);
      dispatch_renderBalance(props);
    }

    const prevButton = getById("AddWalletPage-previous");
    const nextButton = getById("AddWalletPage-next");

    prevButton.onclick = function (e: Event) {
      dispatch_setCreatePages(CreatePages.PDF);
    };

    nextButton.onclick = function (e: Event) {
      dispatch_removeError();

      const wallet = getWallet();

      if (wallet === null) {
        dispatch_renderError("You must add your wallet first!");
        return;
      }

      const getKey = async (key: any) => {
        if (key !== undefined && key.kty === "RSA") {
          dispatch_setKey(key, wallet);
          dispatch_setCreatePages(CreatePages.SmartContract);
        } else {
          dispatch_renderError("Invalid key!");
          //IF the key is not RSA, I show an error.
        }
      };

      readFile(wallet, getKey, FileType.key);
    };
  } else if (props.createPages === CreatePages.SmartContract) {
    setWillProfitShareToDOM(props.instrumentPageData.willProfitShare);
    setProfitSharingContractIdToDOM(props.instrumentPageData.pstContractId);
    setIsIntrumentToDOM(props.instrumentPageData.isInstrument);
    setInstrumentNameToDOM(props.instrumentPageData.name);
    setInstrumentTickerToDOM(props.instrumentPageData.ticker);
    setInstrumentSupplyToDOM(props.instrumentPageData.supply);
    setInstrumentCanDeriveToDOM(props.instrumentPageData.canDerive);
    setSmartContractInputFields(
      props.instrumentPageData.willProfitShare,
      props.instrumentPageData.isInstrument
    );

    const prevButton = getById("SmartContractPage-previous");
    const nextButton = getById("SmartContractPage-next");

    prevButton.onclick = function (e: Event) {
      dispatch_setCreatePages(CreatePages.AddWallet);
    };

    nextButton.onclick = function (e: Event) {
      dispatch_removeError();
      const pstContractId = getProfitSharingContractId();
      const willProfitShare = isPSTUser();
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

      if (willProfitShare) {
        if (pstContractId === "") {
          dispatch_renderError("You must specify a contract id");
          return;
        }
      }

      dispatch_instrumentPageData({
        isInstrument,
        willProfitShare,
        pstContractId,
        name,
        ticker,
        canDerive,
        supply,
      });
      dispatch_setCreatePages(CreatePages.Networking);
    };
  } else if (props.createPages === CreatePages.Networking) {
    setPostToDOM(props.networkingPage);
    const prevButton = getById("NetworkingPage-previous");
    const nextButton = getById("NetworkingPage-next");

    prevButton.onclick = function (e: Event) {
      dispatch_setCreatePages(CreatePages.SmartContract);
    };

    nextButton.onclick = function (e: Event) {
      dispatch_removeError();
      const postto = getPostTo();
      const webhook = getWebhookCheckbox();
      const redirect = getRedirectCheckbox();

      if (webhook || redirect) {
        if (postto === "NONE") {
          dispatch_renderError("Post to, where?");
          return;
        }
      }

      dispatch_setNetworkingPage({ postto, webhook, redirect });
      dispatch_setCreatePages(CreatePages.SummaryPage);
    };
  } else if (props.createPages === CreatePages.SummaryPage) {
    //TODO: Initialize:

    // const printPdf = (data: any) => {
    //   const display = getPDFDisplay();
    //   display.data = data;
    // };

    // const pdfFileList = props.pdfPage.PDF as FileList;
    // readFile(pdfFileList, printPdf, FileType.pdf);

    const prevButton = getById("summaryPage-previous");
    const create = getById("create-button");

    prevButton.onclick = function () {
      dispatch_setCreatePages(CreatePages.Networking);
    };

    create.onclick = function () {
      console.log("save etc");
    };
  }
}
