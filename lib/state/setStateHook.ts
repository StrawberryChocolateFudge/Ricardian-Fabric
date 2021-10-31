import { showBanner } from "../business/bloc";
import {
  dispatch_attachDateClickListener,
  dispatch_renderAcceptButton,
  dispatch_renderAddress,
  dispatch_renderAreYouSure,
  dispatch_renderBalance,
  dispatch_renderCreateButton,
  dispatch_renderVersion,
} from "../dispatch/render";
import { ContractTypes, SetHookArgs, State, StateProperties } from "../types";

export const setStateHook = {
  [StateProperties.init]: (args: SetHookArgs) => {
    const currentPage = args.obj.contracttype;
    const clone = cloneState(args.obj);
    if (currentPage === ContractTypes.create) {
      showBanner();
      dispatch_renderCreateButton(clone);
      dispatch_renderVersion(clone.version);

    } else if (currentPage === ContractTypes.acceptable) {
      dispatch_renderAcceptButton(clone);
    }
  },
  [StateProperties.ipfs]: (args: SetHookArgs) => {},
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
  [StateProperties.stashedPage]: (args: SetHookArgs) => {
    //Show popup
    dispatch_renderAreYouSure(cloneState(args.obj));
  },
  [StateProperties.stashedDetails]: (args: SetHookArgs) => {
    // I'm dispatching stashDetails before stashedPage so the details are passed in the above .stashedPage hook.
  },
  [StateProperties.position]: (args: SetHookArgs) => {
    // This happens only on acceptable pages
    dispatch_renderAcceptButton(cloneState(args.obj));
  },
  [StateProperties.isERC20]: (args: SetHookArgs) => {
    if (args.obj.contracttype === ContractTypes.create) {
      const clone = cloneState(args.obj);
      dispatch_renderCreateButton(clone);
    }
  },
  [StateProperties.selectedWallet]: (args: SetHookArgs) => {
    if (args.obj.contracttype === ContractTypes.create) {
      const clone = cloneState(args.obj);
      dispatch_renderCreateButton(clone);
    }
  },
};

function cloneState(state: State) {
  return Object.assign({}, state);
}
