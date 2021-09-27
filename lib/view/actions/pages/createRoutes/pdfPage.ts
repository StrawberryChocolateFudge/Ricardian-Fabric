import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import {
  dispatch_discardPdf,
  dispatch_initPDFPage,
  dispatch_promptError,
  dispatch_promptSuccess,
  dispatch_removeError,
} from "../../../../dispatch/render";
import { dispatch_setPdfPageData } from "../../../../dispatch/stateChange";
import { PDFPage, State } from "../../../../types";
import { getById, getPDF } from "../../../utils";

export function pdfPage(props: State) {
  dispatch_initPDFPage(props);
  onPDFFileDropped();
  const prevButton = getById("EditPage-previous");
  const nextButton = getById("EditPage-next");
  const discardButton = getById("discard-button");
  prevButton.onclick = function () {
    goToCreateRoutes();
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
    goToCreateRoutes();
  };
}

export function onPDFFileDropped() {
  const pdfInput = getById("pdf-input") as HTMLInputElement;
  const dropZone = getById("pdf-dropzone");
  dropZone.onclick = function () {
    pdfInput.click();
  };

  pdfInput.onchange = function () {
    const file = pdfInput.files[0];

    if (pdfInput.files.length === 1 && file.type === "application/pdf") {
      // It's valid
      dispatch_promptSuccess(pdfInput.files[0]);
      dispatch_removeError();
    } else {
      dispatch_promptError("Invalid file, must be a single pdf");
    }
  };

  dropZone.ondragover = function (e: Event) {
    e.preventDefault();
    dropZone.classList.add("drop-zone--over");
  };
  dropZone.ondragleave = function (e: Event) {
    dropZone.classList.remove("drop-zone--over");
  };
  dropZone.ondragend = function (e: Event) {
    dropZone.classList.remove("drop-zone--over");
  };
  dropZone.ondrop = function (e: DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (e.dataTransfer.files.length === 1 && file.type === "application/pdf") {
      pdfInput.files = e.dataTransfer.files;
      dispatch_promptSuccess(e.dataTransfer.files[0]);
      dispatch_removeError();
    } else {
      dispatch_promptError("Invalid file, must be a single pdf");
    }

    dropZone.classList.remove("drop-zone--over");
  };
}

export function fileSizeError(file: File): boolean {
  if (file.size > 1048576) {
    return true;
  }
  return false;
}
