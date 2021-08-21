import Arweave from "arweave";
import { getBalance } from "../../business/bloc";
import { dispatch_removeError } from "../../dispatch/render";
import { dispatch_setBalance } from "../../dispatch/stateChange";
import { FileType, State } from "../../types";
import {
  getById,
  readFile,
  updatePromptError,
  updatePromptSuccess,
} from "../utils";

export function onWalletFileDropped(props: State) {
  const walletInput = getById("wallet-input") as HTMLInputElement;
  const dropZone = getById("wallet-dropzone");

  dropZone.onclick = function () {
    walletInput.click();
  };

  walletInput.onchange = function () {
    const file = walletInput.files[0];
    if (walletInput.files.length === 1 && file.type === "application/json") {
      // It's valid
      updatePromptSuccess(walletInput.files[0]);
      dispatch_removeError();
      checkKeyFile(walletInput.files, props.arweave);
    } else {
      updatePromptError("Invalid wallet,must be a single json file");
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
    if (e.dataTransfer.files.length === 1 && file.type === "application/json") {
      walletInput.files = e.dataTransfer.files;
      updatePromptSuccess(e.dataTransfer.files[0]);
      dispatch_removeError();
      checkKeyFile(walletInput.files, props.arweave);
    } else {
      updatePromptError("Invalid file, must be a single pdf");
    }
    dropZone.classList.remove("drop-zone--over");
  };
}

function checkKeyFile(files: FileList, arweave: Arweave) {
  const getKey = async (key: any) => {
    if (key !== undefined && key.kty === "RSA") {
      getBalance(arweave, key);
    } else {
      //IF the key is not RSA, I show an error and disable create!zs
      updatePromptError("Invalid, must be a valid Arweave key.");
      dispatch_setBalance({ balance: 0, address: "" });
    }
  };
  readFile(files, getKey, FileType.key);
}
