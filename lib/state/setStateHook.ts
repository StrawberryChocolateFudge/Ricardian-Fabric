import {
  dispatch_renderAcceptButton,
  dispatch_renderCreateButton,
} from "../dispatch/render";
import { ContractTypes, SetHookArgs, State, StateProperties } from "../types";
import { getCurrentPage } from "../view/utils";

export const setStateHook = {
  [StateProperties.arweave]: (args: SetHookArgs) => {
    const currentPage = getCurrentPage();
    if (currentPage === ContractTypes.create) {
      dispatch_renderCreateButton(args.obj);
    } else if (currentPage === ContractTypes.acceptable) {
      dispatch_renderAcceptButton(args.obj);
    }
  },
  [StateProperties.editor]: (args: SetHookArgs) => {}
};
