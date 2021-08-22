import {
  dispatch_promptError,
  dispatch_promptSuccess,
  dispatch_removeError,
} from "../../dispatch/render";
import { getById } from "../utils";

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
