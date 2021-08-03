import { getBalance } from "../../business/bloc";
import { State } from "../../types";
import {
  disableCreateButton,
  enableCreateButton,
  getById,
  readFile,
  removeError,
  renderError,
} from "../utils";

export function onFileSelect(props: State) {
  const fileInput = getById("select-file-input") as HTMLInputElement;
  fileInput.onchange = function () {
    removeError();
    // I need to verify that the file selected is a key
    if (fileInput.files !== null) {
      if (fileInput.files?.length === 1) {
        const getKey = async (key: any) => {
          if (key !== undefined && key.kty === "RSA") {
            //IF the key is not RSA, I show an error and disable create!
            enableCreateButton();
            getBalance(props.arweave, key);
          } else {
            renderError("Invalid key file");
            disableCreateButton();
          }
        };

        readFile(fileInput.files, getKey);
      } else {
        //If multiple files are selected, I show and error
        renderError("You need to select 1 file!");
        disableCreateButton();
      }
    } else {
      disableCreateButton();
    }
  };
}
