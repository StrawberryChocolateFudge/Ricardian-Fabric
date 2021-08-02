import { createAcceptableContract } from "../../business/bloc";
import { State } from "../../types";
import { getById, readFile } from "../utils";

export function renderCreateButtonClick(props: State) {
  getById("save-contract").onclick = function () {
    const price = getById("price-input") as HTMLInputElement;
    const redirect = getById("redirect-input") as HTMLInputElement;
    const wallet_file = getById("select-file-input") as HTMLInputElement;

    if (wallet_file.files !== null) {
      //TODO:validators
      if (wallet_file.files?.length !== 1) {
        // Cannot select more than one or less files
        //need to render error
      } else {
        const getKey = async (key: any) => {
          //Here I call the business logic to do stuff with the key and the other values
          //   await getBalance(props.arweave, key);
          console.log(key);
          const result = await createAcceptableContract(props.arweave, key, {
            legalContract: props.editor.getContent(),
            createdDate: new Date().toISOString(),
            price: price.value,
            redirect: redirect.value,
            domParser: props.domParser,
          });
        };

        readFile(wallet_file.files, getKey);
      }
    }
  };
}
