import { dispatch_renderCreate } from "../../dispatch/render";
import { State } from "../../types";
import { getById } from "../../view/utils";
import { verifyContractPopupTrigger } from "./verifyContractActions";

export function menuActions(props: State) {
    verifyContractPopupTrigger();
    const createPage = getById("create-contract-button");

    createPage.onclick = function () {
        dispatch_renderCreate(props);
    }
}