import { dispatch_renderCreate } from "../../dispatch/render";
import { State } from "../../types";
import { getById } from "../../view/utils";
import { verifyContractPopupTrigger } from "./verifyContractActions";

export function menuActions(props: State) {
    verifyContractPopupTrigger();
    const createPage = getById("create-contract-button");
    const smartContractButton = getById("smart-contract-catalog-button");
    createPage.onclick = function () {
        dispatch_renderCreate(props);
    }

    smartContractButton.onclick = function () {
        console.log("smnart contract button clicked")
    }
}