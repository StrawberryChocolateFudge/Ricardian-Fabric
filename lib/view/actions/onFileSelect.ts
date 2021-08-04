import { getBalance } from "../../business/bloc";
import {
  dispatch_disableButton,
  dispatch_enableButton,
  dispatch_removeError,
  dispatch_renderError,
} from "../../dispatch/render";
import { State } from "../../types";
import { getById, readFile } from "../utils";

export function onFileSelect(props: State) {
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
        readFile(fileInput.files, getKey);
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
