import Arweave from "arweave";
import { getBalance } from "../../business/bloc";
import {
  dispatch_enableButton,
  dispatch_promptError,
  dispatch_promptSuccess,
  dispatch_removeError,
} from "../../dispatch/render";
import { dispatch_setBalance } from "../../dispatch/stateChange";
import { FileType, State } from "../../types";
import { getById, readFile } from "../utils";

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
      dispatch_promptSuccess(walletInput.files[0]);
      dispatch_removeError();
      checkKeyFile(walletInput.files, props.arweave, props);
    } else {
      dispatch_promptError("Invalid wallet,must be a single json file");
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
      dispatch_promptSuccess(e.dataTransfer.files[0]);
      dispatch_removeError();
      checkKeyFile(walletInput.files, props.arweave, props);
    } else {
      dispatch_promptError("Invalid file, must be a single json");
    }
    dropZone.classList.remove("drop-zone--over");
  };
}

function checkKeyFile(files: FileList, arweave: Arweave, props: State) {
  const getKey = async (key: any) => {
    if (key !== undefined && key.kty === "RSA") {
      console.log("balance");
      await getBalance(arweave, key);
      dispatch_enableButton(props);
    } else {
      //IF the key is not RSA, I show an error and disable create!zs
      dispatch_promptError("Invalid, must be a valid Arweave key.");
      dispatch_setBalance({ balance: 0, address: "" });
    }
  };
  readFile(files, getKey, FileType.key);
}
