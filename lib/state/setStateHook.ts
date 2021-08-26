import { decomissioned } from "../business/bloc";
import {
  dispatch_attachDateClickListener,
  dispatch_renderAcceptButton,
  dispatch_renderAddress,
  dispatch_renderBalance,
  dispatch_renderCreateButton,
  dispatch_renderVersion,
} from "../dispatch/render";
import { ContractTypes, SetHookArgs, State, StateProperties } from "../types";

export const setStateHook = {
  [StateProperties.arweave]: (args: SetHookArgs) => {
    const currentPage = args.obj.contracttype;
    if (currentPage === ContractTypes.create) {
      const clone = cloneState(args.obj);
      dispatch_renderCreateButton(clone);
      dispatch_renderVersion(clone.version);
      decomissioned();
    } else if (currentPage === ContractTypes.acceptable) {
      dispatch_renderAcceptButton(cloneState(args.obj));
    }
  },
  [StateProperties.editor]: (args: SetHookArgs) => {},
  [StateProperties.balance]: (args: SetHookArgs) => {
    dispatch_renderBalance(cloneState(args.obj));
  },
  [StateProperties.address]: (args: SetHookArgs) => {
    dispatch_renderAddress(cloneState(args.obj));
  },
  [StateProperties.selectedDate]: (args: SetHookArgs) => {
    dispatch_attachDateClickListener(cloneState(args.obj));
  },
};

function cloneState(state: State) {
  return Object.assign({}, state);
}
