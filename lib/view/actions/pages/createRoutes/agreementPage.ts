import { dispatch_initAgreementPage, dispatch_removeError, dispatch_renderError } from "../../../../dispatch/render";
import { dispatch_setAgreementsPageData, dispatch_setCreatePages } from "../../../../dispatch/stateChange";
import createNewEditor from "../../../../state/editor";
import { CreatePages, State } from "../../../../types";
import { didExpire, getById, getExpires, getOnlySigner, getPrice } from "../../../utils";

export function agreementPage(props: State){
   const editor = createNewEditor();

    dispatch_initAgreementPage(props, editor);

    const nextButton = getById("AgreementPage-next");

    nextButton.onclick = function () {
      dispatch_removeError();
      const expires = getExpires();
      const expired = didExpire(expires);

      if (expired) {
        dispatch_renderError("Date expired!");
        return;
      }

      const onlySigner = getOnlySigner();
      if (onlySigner !== "NONE" && onlySigner.length !== 43) {
        // the lengths of the address must be 43
        dispatch_renderError("Only signer address is invalid");
        return;
      }
      const price = getPrice();

      if (parseFloat(price) < 0) {
        dispatch_renderError("Price can't be negative!");
        return;
      }

      const content = editor.getContent();

      dispatch_setAgreementsPageData({
        selectedDate: expires,
      });
      dispatch_setCreatePages(CreatePages.PDF);
    };
}