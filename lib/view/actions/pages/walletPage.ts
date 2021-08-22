import {
  dispatch_initWalletPage,
  dispatch_removeError,
  dispatch_renderError,
} from "../../../dispatch/render";
import {
  dispatch_setCreatePages,
  dispatch_setKey,
} from "../../../dispatch/stateChange";
import { CreatePages, FileType, State } from "../../../types";
import { getById, getWallet, readFile } from "../../utils";

export function walletPage(props: State) {
  dispatch_initWalletPage(props);
  const prevButton = getById("AddWalletPage-previous");
  const nextButton = getById("AddWalletPage-next");

  prevButton.onclick = function (e: Event) {
    dispatch_setCreatePages(CreatePages.PDF);
  };

  nextButton.onclick = function (e: Event) {
    dispatch_removeError();

    const wallet = getWallet();

    if (wallet === null) {
      dispatch_renderError("You must add your wallet first!");
      return;
    }

    const getKey = async (key: any) => {
      if (key !== undefined && key.kty === "RSA") {
        dispatch_setKey(key, wallet);
        dispatch_setCreatePages(CreatePages.SmartContract);
      } else {
        dispatch_renderError("Invalid key!");
        //IF the key is not RSA, I show an error.
      }
    };

    readFile(wallet, getKey, FileType.key);
  };
}
