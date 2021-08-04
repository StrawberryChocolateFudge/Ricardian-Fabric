import { render } from "lit-html";
import { toWinston } from "../../arweave/arweave";
import { acceptAndPayContract, acceptContract } from "../../business/bloc";
import { State } from "../../types";
import { acceptButton } from "../templates/acceptButton";
import {
  getById,
  // getCreatorAddressDataProp,
  // getPriceFromDataProp,
  readFile,
} from "../utils";

export function renderAcceptOnCLick(props: State) {
  const acceptButton = getById("accept-button") as HTMLInputElement;

  acceptButton.onclick = async function () {
    const wallet_file = getById("select-file-input") as HTMLInputElement;

    const getKey = async (key: any) => {
      const price = props.price;
      if (price !== "NONE") {
        const winston = toWinston(price);
        await acceptAndPayContract({
          props,
          winston,
          key,
        });
      } else {
        await acceptContract(props.arweave, key);
      }
    };
    readFile(wallet_file.files, getKey);
  };
}
