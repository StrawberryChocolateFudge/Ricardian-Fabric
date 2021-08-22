import { createTransactionsWithPDF } from "../../business/bloc";
import {
  dispatch_discardPdf,
  dispatch_initAgreementPage,
  dispatch_initNetworkingPage,
  dispatch_initPDFPage,
  dispatch_initSmartContractPage,
  dispatch_initWalletPage,
  dispatch_removeError,
  dispatch_renderError,
} from "../../dispatch/render";
import {
  dispatch_instrumentPageData,
  dispatch_setAgreementsPageData,
  dispatch_setCreatePages,
  dispatch_setKey,
  dispatch_setNetworkingPage,
  dispatch_setPdfPageData,
} from "../../dispatch/stateChange";
import createNewEditor from "../../state/editor";
import {
  CreatedTransactions,
  CreatePages,
  FileType,
  PDFPage,
  State,
} from "../../types";
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
  getPostTo,
  getPrice,
  getProfitSharingContractId,
  getRedirectCheckbox,
  getWallet,
  getWebhookCheckbox,
  isPSTUser,
  readFile,
} from "../utils";

export function nextButtonClick(props: State) {
  if (props.createPages === CreatePages.Agreement) {
    const editor = createNewEditor();

    dispatch_initAgreementPage(props, editor);

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
    dispatch_initPDFPage(props);
    const prevButton = getById("EditPage-previous");
    const nextButton = getById("EditPage-next");
    const discardButton = getById("discard-button");
    prevButton.onclick = function () {
      dispatch_setCreatePages(CreatePages.Agreement);
    };

    discardButton.onclick = function () {
      dispatch_setPdfPageData(undefined);
      dispatch_discardPdf();
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
    dispatch_initWalletPage(props);
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
    dispatch_initSmartContractPage(props);
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
    dispatch_initNetworkingPage(props);
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
    let txs: CreatedTransactions;

    const pdfFileList = props.pdfPage.PDF as FileList;

    //I unlock the create button from here
    if (
      pdfFileList?.length === 1 &&
      pdfFileList[0].type === "application/pdf"
    ) {
      //TODO: Get tx-s to get fees
      const proceed = async (data: any) => {
        txs = await createTransactionsWithPDF(props, data, true);
        console.log("TXS");
        console.log(txs);
        getById("pdfFee").textContent = txs.pdfTransaction.reward;
        getById("smartFee").textContent = txs.instrumentContractTx.reward;
        getById("pageFee").textContent = txs.pageTransaction.reward;
      };

      readFile(pdfFileList, proceed, FileType.pdf);
      //Has pdf, I get the transactions in the proceed callback
    } else {
      //DOn't have pdf so I can just create the other transactions
    }

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
