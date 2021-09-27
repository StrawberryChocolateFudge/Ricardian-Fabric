import {
  dispatch_disableButton,
  dispatch_removeError,
  dispatch_renderError,
} from "../../../dispatch/render";
import { dispatch_setCreatePages, dispatch_setSelectedDate } from "../../../dispatch/stateChange";
import { CreatePages, State } from "../../../types";
import { didExpire, getById, getExpires } from "../../utils";

export function createRouter(props: State) {
  //TODO: Dispatch the init


  const routingButtonProps = [
    [CreatePages.AddWallet, "walletButton"],
    [CreatePages.Semantics, "semanticsButton"],
    [CreatePages.PDF, "pdfButton"],
    [CreatePages.Signer, "signerButton"],
    [CreatePages.Payments, "paymentsButton"],
    [CreatePages.Networking, "networkingButton"],
    [CreatePages.NFT, "nftButton"],
    [CreatePages.Inputs, "inputsButton"],
    [CreatePages.Instrument, "instrumentButton"],
  ];

  routingButtonProps.forEach((p) => {
    attachRouteClick(p[0] as CreatePages, p[1]);
  });

  const createButton = getById("createButton");

  
  createButton.onclick = function () {
    dispatch_removeError();
    const expires = getExpires();
    const expired = didExpire(expires);

    if (expired) {
      dispatch_renderError("Date expired");
      return;
    }

    //TODO: dispatch set the exiry date!!
    // dispatch_setAgreementsPageData({})

    dispatch_setCreatePages(CreatePages.SummaryPage);
  };
}

function attachRouteClick(page: CreatePages, id: string) {
  getById(id).onclick = function () {
    dispatch_setCreatePages(page);
  };
}

export const attachExpiryListener = (props: State) => {
  if (props.createPages === CreatePages.Routes) {
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