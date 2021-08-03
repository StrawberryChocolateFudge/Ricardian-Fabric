import {
  dispatch_renderAcceptButton,
  dispatch_renderBalance,
  dispatch_renderCreateButton,
} from "../dispatch/render";
import { ContractTypes, SetHookArgs, State, StateProperties } from "../types";
import { getCurrentPageDataProp } from "../view/utils";

export const setStateHook = {
  [StateProperties.arweave]: (args: SetHookArgs) => {
    const currentPage = getCurrentPageDataProp();
    if (currentPage === ContractTypes.create) {
      dispatch_renderCreateButton(Object.assign({}, args.obj));
    } else if (currentPage === ContractTypes.acceptable) {
      dispatch_renderAcceptButton(Object.assign({}, args.obj));
    }
  },
  [StateProperties.editor]: (args: SetHookArgs) => {},
  [StateProperties.balance]: (args: SetHookArgs) => {
    dispatch_renderBalance(Object.assign({}, args.obj));
  },
  [StateProperties.address]: (args: SetHookArgs) => {},
};
