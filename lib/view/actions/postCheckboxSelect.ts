import { getById } from "../utils";

export function postCheckboxSelect() {
  const webhook = getById("webhook-checkbox") as HTMLInputElement;
  const redirect = getById("redirect-checkbox") as HTMLInputElement;
  webhook.checked = false;
  redirect.checked = false;
  webhook.onchange = function () {
    if (redirect.checked) {
      redirect.checked = false;
    }
  };
  redirect.onchange = function () {
    if (webhook.checked) {
      webhook.checked = false;
    }
  };
}
