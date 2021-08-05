import { acceptAndPayContract, acceptContract } from "../../business/bloc";
import { State } from "../../types";
import { getById, readFile } from "../utils";

export function renderAcceptOnCLick(props: State) {
  const acceptButton = getById("accept-button") as HTMLInputElement;

  acceptButton.onclick = async function () {
    const wallet_file = getById("select-file-input") as HTMLInputElement;
    const getKey = async (key: any) => {
      const price = props.price;
      if (price !== "NONE") {
        await acceptAndPayContract({
          props,
          ar: parseFloat(price), //TODO: handle parsing error!
          key,
        });
      } else {
        await acceptContract(props, key);
      }
    };
    readFile(wallet_file.files, getKey);
  };
}
