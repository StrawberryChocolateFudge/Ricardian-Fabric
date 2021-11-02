import {
  dispatch_addNewIdentityPopup,
  dispatch_emptyWalletDropper,
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
  dispatch_showIdentityPopup,
  dispatch_switch_identities,
  dispatch_walletPopup,
} from "../../dispatch/render";
import { State, Status, WalletDropperType } from "../../types";
import {
  createFileTransaction,
  createWallet,
  getWalletAddress,
  getWalletBalance,
  uploadFile,
} from "../../wallet/arweave";
import { getById, readFile, readWalletFile } from "../utils";
import { addHash } from "../../wallet/permapin/ipfsArweave";
import { encryptWallet } from "../../crypto";
import { downloadBlob } from "../render";
import { dispatch_setNewIdentity } from "../../dispatch/stateChange";

export function permawebSelectActions(props: State) {
  const uploadFile = getById("upload-popup-button");
  const permapin = getById("permapin-popup-button");
  const identity = getById("identity-popup-button");
  uploadFile.onclick = function () {
    dispatch_renderUploadFilePopup(props);
  };

  permapin.onclick = function () {
    dispatch_permapinPopup(props, "");
  };

  identity.onclick = async function () {
    if (props.identity.address === null) {
      dispatch_showIdentityPopup(props, "");
    } else {
      const balance = await getWalletBalance(props.identity.address);
      dispatch_showIdentityPopup(props, balance);
    }
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

export function walletCreateActions(props: State) {
  const backbutton = getById("wallet-cancel");
  const proceed = getById("wallet-proceed");
  const password = getById("wallet-password-once") as HTMLInputElement;
  const passwordAgain = getById("wallet-password-twice") as HTMLInputElement;
  const fileInput = getById("wallet-input") as HTMLInputElement;
  // If proceed was hidden, I need to show it again.
  dispatch_hideElement(proceed, false);

  onWalletFileDropped(props, WalletDropperType.PLAINTEXT);

  //On init I empty the password fields, even tho the browser will substitute something in.ZP
  password.value = "";
  passwordAgain.value = "";

  backbutton.onclick = async function () {
    const balance = await getWalletBalance(props.identity.address);
    dispatch_showIdentityPopup(props, balance);

    dispatch_emptyWalletDropper(props);
  };

  proceed.onclick = async function () {
    const pass1 = password.value;
    const pass2 = passwordAgain.value;
    if (pass1 !== pass2) {
      dispatch_renderError("The passwords don't match");
      return;
    }
    if (pass1.length < 8) {
      dispatch_renderError("The passwords must be at least 8 characters long.");
      return;
    }

    const keyFound = async (key: any) => {
      dispatch_hideElement(proceed, true);
      const address = await getWalletAddress(key);
      const encryptedBlob = await encryptWallet(key, pass1);
      downloadBlob(encryptedBlob, address + ".enc");
      // after the blob is downloaded I redirect to Identity, and set the blob
      dispatch_addNewIdentityPopup(props, encryptedBlob, address);
    };

    if (fileInput.files.length > 0) {
      if (fileInput.files.length !== 1) {
        dispatch_renderError("You can import only one file");
        return;
      }

      if (fileInput.files[0].type !== "application/json") {
        dispatch_renderError(
          "File type is invalid. Must be unencrypted arweave wallet file."
        );
        return;
      }

      readWalletFile(fileInput.files, async (key) => {
        if (key !== undefined && key.kty === "RSA") {
          keyFound(key);
        } else {
          dispatch_renderError(
            "File type is invalid. Must be unencrypted arweave wallet file."
          );
        }
      });
    } else {
      const key = await createWallet();
      keyFound(key);
    }
  };
}

export function onWalletFileDropped(props: State, type: WalletDropperType) {
  const walletInput = getById("wallet-input") as HTMLInputElement;
  const dropZone = getById("wallet-dropzone");
  const requiredType =
    type === WalletDropperType.PLAINTEXT
      ? "application/json"
      : "application/download";

  dropZone.onclick = function () {
    walletInput.click();
  };

  walletInput.onchange = function () {
    const file = walletInput.files[0];

    if (walletInput.files.length === 1 && file.type === requiredType) {
      // It's valid
      dispatch_promptSuccess(walletInput.files[0]);
      dispatch_removeError();
    } else {
      dispatch_promptError("Invalid File");
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
    console.log(file.type);
    if (e.dataTransfer.files.length === 1 && file.type === requiredType) {
      walletInput.files = e.dataTransfer.files;
      dispatch_promptSuccess(e.dataTransfer.files[0]);
      dispatch_removeError();
    } else {
      dispatch_promptError("Invalid File");
    }
    dropZone.classList.remove("drop-zone--over");
  };
}

export function AddNewIdentityActions(
  props: State,
  identity: Blob,
  address: string
) {
  const cancelButton = getById("addNewIdentity-cancel");
  const proceedButton = getById("addNewIdentity-proceed");

  cancelButton.onclick = function () {
    dispatch_hidePopup();
  };

  proceedButton.onclick = function () {
    dispatch_setNewIdentity({ data: identity, address });
    dispatch_hidePopup();
  };
}

export function showIdentityActions(props: State) {
  const cancelButton = getById("identity-cancel");
  const proceedButton = getById("switchIdentity-proceed");
  const newIdentityButton = getById("new-identity");
  // onWalletFileDropped(props, WalletDropperType.ENCRYPTED);
  cancelButton.onclick = function () {
    dispatch_hidePopup();
  };

  proceedButton.onclick = function () {
    dispatch_switch_identities(props);
  };

  newIdentityButton.onclick = function () {
    dispatch_walletPopup(props);
  };
}

export function switchIdentitiesActions(props: State) {
  const cancelButton = getById("identity-cancel");
  const proceedButton = getById("switchIdentity-proceed");

  // onWalletFileDropped(props, WalletDropperType.ENCRYPTED);
  cancelButton.onclick = async function () {
    const balance = await getWalletBalance(props.identity.address);
    dispatch_showIdentityPopup(props, balance);
  };

  proceedButton.onclick = function () {
    // dispatch_switch_identities(props);
  };
}
