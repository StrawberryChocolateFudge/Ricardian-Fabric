import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import {
  dispatch_initNFTPage,
  dispatch_renderError,
} from "../../../../dispatch/render";
import { dispatch_setNFTPageData } from "../../../../dispatch/stateChange";
import { State } from "../../../../types";
import { getById, getNFTFields } from "../../../utils";

export function nftPage(props: State) {
  //Dispatch the initialization
  dispatch_initNFTPage(props);
  const cancelButton = getById("nftpage-cancel");
  const saveButton = getById("nftpage-save");

  const [allowNFTEl, titleEl, nameEl, descriptionEl, tickerEl] = getNFTFields();
  const checked = allowNFTEl.checked;
  disableToggle([titleEl, nameEl, descriptionEl, tickerEl], checked);

  allowNFTEl.onchange = (ev: Event) => {
    const clicked = allowNFTEl.checked;
    disableToggle([titleEl, nameEl, descriptionEl, tickerEl], clicked);
  };

  cancelButton.onclick = function (e: Event) {
    goToCreateRoutes();
  };

  saveButton.onclick = function (e: Event) {
    const title = titleEl.value;
    const name = nameEl.value;
    const description = descriptionEl.value;
    const ticker = tickerEl.value;
    const allowNFT = allowNFTEl.checked;

    if (allowNFT) {
      if (title === "") {
        dispatch_renderError("The title field is empty");
        return;
      }
      if (name === "") {
        dispatch_renderError("The name field is empty");
        return;
      }
      if (ticker === "") {
        dispatch_renderError("The ticker field is empty");
        return;
      }
      if (description === "") {
        dispatch_renderError("The description field is empty");
        return;
      }
    }

    dispatch_setNFTPageData({
      title,
      name,
      description,
      ticker,
      allowNFT,
    });
    goToCreateRoutes();
  };
}

function disableToggle(elements: Array<HTMLInputElement>, checked: boolean) {
  elements.forEach((el) => (el.disabled = !checked));
}
