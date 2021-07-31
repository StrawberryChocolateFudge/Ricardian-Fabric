import { createAcceptableContract, getBalance } from "../../business/bloc";
import { State } from "../../types";
import { getById, getKeyFromFile, readFile } from "../utils";

export function renderCreateButton(props: State) {
  getById("save-contract").onclick = function () {
    const legal_contract = getById("contract-text-area") as HTMLInputElement;
    const price = getById("price-input") as HTMLInputElement;
    const recurringPayment = getById("recurring-payment") as HTMLInputElement;
    const wallet_file = getById("select-file-input") as HTMLInputElement;

    if (wallet_file.files !== null) {
      //validators:
      if (wallet_file.files?.length !== 1) {
        // Cannot select more than one or less files
        //need to render error
      } else {
        const getKey = async (key: any) => {
          //Here I call the business logic to do stuff with the key and the other values
          //   await getBalance(props.arweave, key);
          console.log(key);
          const result = await createAcceptableContract(
            props.arweave,
            key,
            legal_contract.value
          );
        };
        readFile(wallet_file.files, getKey);
      }
    }
  };
}
