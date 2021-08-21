import {
  dispatch_disableButton,
  dispatch_enableButton,
  dispatch_removeError,
  dispatch_renderError,
} from "../../dispatch/render";
import { dispatch_setSelectedDate } from "../../dispatch/stateChange";
import { CreatePages, State } from "../../types";
import { didExpire, getById, getExpires } from "../utils";

export const attachExpiryClickAndListener = (props: State) => {
  if (props.createPages === CreatePages.Agreement) {
    const reset = getById("expires-reset");
    const date = getById("expires-input") as HTMLInputElement;
    if (props.agreementPage.selectedDate === "") {
      date.valueAsDate = new Date();
    } else {
      handleExpiry();
    }

    reset.onclick = function () {
      date.value = "";
      dispatch_setSelectedDate(getExpires());
    };

    date.onchange = function () {
      dispatch_setSelectedDate(getExpires());
    };

    function handleExpiry() {
      const expires = getExpires();
      const expired = didExpire(expires);
      if (expired) {
        dispatch_renderError("Date expired!");
        dispatch_disableButton(props);
      } else {
        dispatch_removeError();
      }
    }
  }
};
