import {
  dispatch_disableButton,
  dispatch_enableButton,
  dispatch_removeError,
  dispatch_renderError,
} from "../../dispatch/render";
import { State } from "../../types";
import { didExpire, getById, getExpires } from "../utils";

export const attachExpiryClickAndListener = (props: State) => {
  const reset = getById("expires-reset");
  const date = getById("expires-input") as HTMLInputElement;
  date.valueAsDate = new Date();

  reset.onclick = function () {
    date.value = "";
  };

  date.onchange = function () {
    const expires = getExpires();
    const expired = didExpire(expires);
    if (expired) {
      dispatch_renderError("Date expired!");
      dispatch_disableButton(props);
    } else {
      dispatch_removeError();
      if (props.address !== "") {
        dispatch_enableButton(props);
      }
    }
  };
};
