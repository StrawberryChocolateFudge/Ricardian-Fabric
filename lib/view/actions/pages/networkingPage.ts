import { dispatch_initNetworkingPage, dispatch_removeError, dispatch_renderError } from "../../../dispatch/render";
import { dispatch_setCreatePages, dispatch_setNetworkingPage } from "../../../dispatch/stateChange";
import { CreatePages, State } from "../../../types";
import { getById, getPostTo, getRedirectCheckbox, getWebhookCheckbox } from "../../utils";

export function networkingPage(props: State){
 dispatch_initNetworkingPage(props);
    const prevButton = getById("NetworkingPage-previous");
    const nextButton = getById("NetworkingPage-next");

    prevButton.onclick = function (e: Event) {
      dispatch_setCreatePages(CreatePages.SmartContract);
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

      dispatch_setNetworkingPage({ postto, webhook, redirect });
      dispatch_setCreatePages(CreatePages.SummaryPage);
    };	
}