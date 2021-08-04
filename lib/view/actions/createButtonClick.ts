import {
  createAcceptableContract,
  getCreatorWallet,
} from "../../business/bloc";
import { State } from "../../types";
import { getById, getPrice, getRedirect, readFile } from "../utils";
export function renderCreateButtonClick(props: State) {
  getById("save-contract").onclick = function () {
    const wallet_file = getById("select-file-input") as HTMLInputElement;

    if (wallet_file.files !== null) {
      const getKey = async (key: any) => {
        //Here I call the business logic to do stuff with the key and the other values
        await createAcceptableContract({
          props,
          key,
          data: {
            legalContract: props.editor.getContent(),
            createdDate: new Date().toISOString(),
            price: getPrice(),
            redirect: getRedirect(),
            domParser: props.domParser,
            creatorAddress: await getCreatorWallet(props.arweave, key),
          },
        });
      };
      readFile(wallet_file.files, getKey);
    }
  };
}
