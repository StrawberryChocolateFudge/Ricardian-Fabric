import Arweave from "arweave";
import { getBalance } from "../../../../business/bloc";
import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import {
  dispatch_disableButton,
  dispatch_enableButton,
  dispatch_initWalletPage,
  dispatch_promptError,
  dispatch_promptSuccess,
  dispatch_removeError,
  dispatch_renderError,
} from "../../../../dispatch/render";
import {
  dispatch_setBalance,
  dispatch_setWallet,
} from "../../../../dispatch/stateChange";
import { FileType, State, WalletPage } from "../../../../types";
import { getById, getWallet, readFile } from "../../../utils";

export function walletPage(props: State) {
  dispatch_initWalletPage(props);
  onWalletFileDropped(props);
  const prevButton = getById("AddWalletPage-previous");
  const nextButton = getById("AddWalletPage-next");
  const isWalletFile = getById("isWalletFile") as HTMLInputElement;
  const isArConnect = getById("isArConnect") as HTMLInputElement;

  isWalletFile.onclick = function (e: Event) {
    if (isWalletFile.checked) {
      isArConnect.checked = false;
    }
  };

  isArConnect.onclick = function (e: Event) {
    if (isArConnect.checked) {
      isWalletFile.checked = false;
    }
  };

  prevButton.onclick = function (e: Event) {
    goToCreateRoutes();
  };

  nextButton.onclick = function (e: Event) {
    dispatch_removeError();

    if (isWalletFile.checked) {
      const wallet = getWallet();

      if (wallet === null) {
        dispatch_renderError("You must add your wallet first!");
        return;
      }

      const getKey = async (key: any) => {
        if (key !== undefined && key.kty === "RSA") {
          const walletPage: WalletPage = {
            balance: 0,
            address: "",
            key,
            file: wallet,
            arconnect: isArConnect.checked,
            isWalletFile: isWalletFile.checked,
          };
          dispatch_setWallet(walletPage);
          goToCreateRoutes();
        } else {
          dispatch_renderError("Invalid key!");
          //IF the key is not RSA, I show an error.
        }
      };

      readFile(wallet, getKey, FileType.key);
    } else if (isArConnect.checked) {
      const walletPage: WalletPage = {
        balance: 0,
        address: "",
        key: "",
        file: "",
        arconnect: isArConnect.checked,
        isWalletFile: isWalletFile.checked,
      };
      dispatch_setWallet(walletPage);
      goToCreateRoutes();
    }
  };
}

//THis is used in the acceptable,
//NEED TO DEPRECATE THIS FOR THE ONE BELLOW ON THE ACCEPTABLE PAGE
export function onWalletFileSelect(props: State) {
  const fileInput = getById("select-file-input") as HTMLInputElement;
  fileInput.onchange = function () {
    dispatch_removeError();
    // I need to verify that the file selected is a key
    if (fileInput.files !== null) {
      if (fileInput.files?.length === 1) {
        const getKey = async (key: any) => {
          if (key !== undefined && key.kty === "RSA") {
            //IF the key is not RSA, I show an error and disable create!
            dispatch_enableButton(props);
            getBalance(props.arweave, key);
          } else {
            dispatch_renderError("Invalid key file");
            dispatch_disableButton(props);
          }
        };
        readFile(fileInput.files, getKey, FileType.key);
      } else {
        //If multiple files are selected, I show and error
        dispatch_renderError("You need to select 1 file!");
        dispatch_disableButton(props);
      }
    } else {
      dispatch_disableButton(props);
    }
  };
}

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
      checkKeyFile(walletInput.files, props.arweave);
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
      checkKeyFile(walletInput.files, props.arweave);
    } else {
      dispatch_promptError("Invalid file, must be a single pdf");
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
      dispatch_promptError("Invalid, must be a valid Arweave key.");
      dispatch_setBalance({ balance: 0, address: "" });
    }
  };
  readFile(files, getKey, FileType.key);
}
