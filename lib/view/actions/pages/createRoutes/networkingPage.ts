import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import {
  dispatch_initNetworkingPage,
  dispatch_removeError,
  dispatch_renderError,
} from "../../../../dispatch/render";
import { dispatch_setNetworkingPage } from "../../../../dispatch/stateChange";
import { State } from "../../../../types";
import {
  getById,
  getPostTo,
  getRedirectCheckbox,
  getWeavemailCheckbox,
  getWebhookCheckbox,
} from "../../../utils";

export function networkingPage(props: State) {
  dispatch_initNetworkingPage(props);
  postCheckboxSelect();
  const prevButton = getById("NetworkingPage-previous");
  const nextButton = getById("NetworkingPage-next");

  prevButton.onclick = function (e: Event) {
    goToCreateRoutes();
  };

  nextButton.onclick = function (e: Event) {
    dispatch_removeError();
    const postto = getPostTo();
    const webhook = getWebhookCheckbox();
    const redirect = getRedirectCheckbox();
    if (webhook || redirect) {
      if (postto === "NONE") {
        dispatch_renderError("Post to, where?");
        return;
      }
    }
    const weavemail = getWeavemailCheckbox();

    dispatch_setNetworkingPage({ postto, webhook, redirect, weavemail });
    goToCreateRoutes();
  };
}

export function postCheckboxSelect() {
  const webhook = getById("webhook-checkbox") as HTMLInputElement;
  const redirect = getById("redirect-checkbox") as HTMLInputElement;
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
