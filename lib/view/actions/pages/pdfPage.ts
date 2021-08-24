import {
  dispatch_discardPdf,
  dispatch_initPDFPage,
  dispatch_removeError,
} from "../../../dispatch/render";
import {
  dispatch_setCreatePages,
  dispatch_setPdfPageData,
} from "../../../dispatch/stateChange";
import { CreatePages, PDFPage, State } from "../../../types";
import { getById, getPDF } from "../../utils";

export function pdfPage(props: State) {
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
}
