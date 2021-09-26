import { goToCreateRoutes } from "../../../dispatch/dispatch";
import {
  dispatch_initNetworkingPage,
  dispatch_removeError,
  dispatch_renderError,
} from "../../../dispatch/render";
import { dispatch_setNetworkingPage } from "../../../dispatch/stateChange";
import { State } from "../../../types";
import {
  getById,
  getPostTo,
  getRedirectCheckbox,
  getWebhookCheckbox,
} from "../../utils";

export function networkingPage(props: State) {
  dispatch_initNetworkingPage(props);
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

     dispatch_setNetworkingPage({ postto, webhook, redirect, });
    goToCreateRoutes();
  };
}
