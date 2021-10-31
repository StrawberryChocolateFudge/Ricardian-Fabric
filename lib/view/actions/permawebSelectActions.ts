import {
  dispatch_hideElement,
  dispatch_hidePopup,
  dispatch_permapinPopup,
  dispatch_promptError,
  dispatch_promptSuccess,
  dispatch_removeError,
  dispatch_removeLoadingIndicator,
  dispatch_renderError,
  dispatch_renderLoadingIndicator,
  dispatch_renderTerms,
  dispatch_renderUploadFilePopup,
  dispatch_renderUploadSummary,
} from "../../dispatch/render";
import { State, Status } from "../../types";
import { createFileTransaction, uploadFile } from "../../wallet/arweave";
import { getById, readFile } from "../utils";
import { addHash } from "../../wallet/permapin/ipfsArweave";

export function permawebSelectActions(props: State) {
  const uploadFile = getById("upload-popup-button");
  const permapin = getById("permapin-popup-button");
  uploadFile.onclick = function () {
    dispatch_renderUploadFilePopup(props);
  };

  permapin.onclick = function () {
    dispatch_permapinPopup(props, "");
  };
}

export function uploadFileListener(props: State) {
  const fileInput = getById("file-input") as HTMLInputElement;
  onFileDropped();
  const backbutton = getById("upload-cancel") as HTMLButtonElement;
  const uploadButton = getById("upload-proceed") as HTMLButtonElement;
  const termsLabel = getById("terms-button");

  termsLabel.onclick = function () {
    dispatch_renderTerms();
  };

  function hideButtons() {
    dispatch_hideElement(uploadButton, true);
  }
  function showButtons() {
    dispatch_hideElement(uploadButton, false);
  }

  backbutton.onclick = function () {
    dispatch_hidePopup();
  };

  uploadButton.onclick = async function () {
    if (window.arweaveWallet === undefined) {
      dispatch_renderError("You need to install Arconnect!");
      window.open("https://arconnect.io");
      return;
    }

    if (fileInput.files.length !== 1) {
      dispatch_renderError("You need to select a single file to upload!");
      return;
    }

    const termscheckbox = getById("upload-terms-checkbox") as HTMLInputElement;
    if (termscheckbox.checked === false) {
      dispatch_renderError("You need to accept the terms!");
      return;
    }

    hideButtons();
    readFile(fileInput.files, async (data) => {
      uploadButton.disabled = true;
      dispatch_renderLoadingIndicator("upload-loading-indicator");

      try {
        const { tx, fee } = await createFileTransaction(
          fileInput.files[0].type,
          data,
          props.version
        );
        dispatch_renderUploadSummary(fileInput.files[0], tx, fee, data, props);
      } catch (err) {
        dispatch_removeLoadingIndicator("upload-loading-indicator");
        uploadButton.disabled = false;
        dispatch_renderError("Failed to create the transaction!");
        showButtons();
      }
    });
  };
}

export function onFileDropped() {
  const fileInput = getById("file-input") as HTMLInputElement;
  const dropZone = getById("file-dropzone");
  dropZone.onclick = function () {
    fileInput.click();
  };

  fileInput.onchange = function () {
    if (fileInput.files.length === 1) {
      // It's valid
      dispatch_promptSuccess(fileInput.files[0]);
      dispatch_removeError();
    } else {
      dispatch_promptError("You can only upload a single file.");
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

    if (e.dataTransfer.files.length === 1) {
      fileInput.files = e.dataTransfer.files;
      dispatch_promptSuccess(e.dataTransfer.files[0]);
      dispatch_removeError();
    } else {
      dispatch_promptError("You can only upload a single filezs");
    }
    dropZone.classList.remove("drop-zone--over");
  };
}

export function uploadSummaryActions(
  transaction: any,
  data: any,
  props: State
) {
  const back = getById("uploadSummary-cancel");
  const proceed = getById("uploadSummary-proceed");
  const transactiondisplay = getById("uploadSummary-tx");
  back.onclick = function () {
    dispatch_renderUploadFilePopup(props);
  };

  proceed.onclick = async function () {
    dispatch_hideElement(proceed, true);
    dispatch_hideElement(back, true);
    try {
      const res = await uploadFile(transaction, data);
      //TODO: RENDER THE SAVED URL so people can save it!
      if (res.status === 200) {
      } else {
        dispatch_renderError(res.statusText);
        dispatch_hideElement(proceed, false);
        dispatch_hideElement(transactiondisplay, false);
      }
      dispatch_hideElement(back, false);
    } catch (err) {
      dispatch_renderError(err);
      dispatch_hideElement(proceed, false);
      dispatch_hideElement(back, false);
    }
  };
}

export function permapinPopupActions(props: any) {
  const back = getById("permapin-back");
  const proceed = getById("permapin-proceed");
  const CIDEl = getById("CID-input-permapin") as HTMLInputElement;
  const termsLabel = getById("terms-button");

  termsLabel.onclick = function () {
    dispatch_renderTerms();
  };

  if (props?.ipfsHash !== undefined) {
    CIDEl.value = props.ipfsHash;
  }

  back.onclick = function () {
    dispatch_hidePopup();
  };

  proceed.onclick = async function () {
    console.log("proceed clicked");
    if (window.arweaveWallet === undefined) {
      dispatch_renderError("You need to install Arconnect!");
      window.open("https://arconnect.io");
      return;
    }
    const termsEl = getById("permapin-terms-checkbox") as HTMLInputElement;
    if (CIDEl.value === "") {
      dispatch_renderError("You must add an ipfs identifier!");
      return;
    }

    if (termsEl.checked === false) {
      dispatch_renderError("You must accept the terms!");
      return;
    }
    const ipfsHash = CIDEl.value;
    const result = await addHash(ipfsHash, props.ipfs);
    if (result.status === Status.Failure) {
      dispatch_renderError(result.message);
      return;
    }
    if (result.status === Status.AlreadyExists) {
    }
  };
}

export function permawebTransactionAction(props: State, hash: string) {
  const permapinButton = getById("permapin-deployed-button");
  permapinButton.onclick = function () {
    dispatch_permapinPopup(props, hash);
  };
}
