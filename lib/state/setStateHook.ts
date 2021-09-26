import {
  dispatch_attachDateClickListener,
  dispatch_createPage,
  dispatch_renderAcceptButton,
  dispatch_renderBalance,
  dispatch_renderVersion,
} from "../dispatch/render";
import { ContractTypes, SetHookArgs, State, StateProperties } from "../types";

export const setStateHook = {
  [StateProperties.arweave]: (args: SetHookArgs) => {
    const currentPage = args.obj.contracttype;
    if (currentPage === ContractTypes.create) {
      dispatch_createPage(cloneState(args.obj));
      // dispatch_renderCreateButton(cloneState(args.obj));
      dispatch_renderVersion(args.obj.version);
    } else if (currentPage === ContractTypes.acceptable) {
      dispatch_renderAcceptButton(cloneState(args.obj));
    }
  },
  [StateProperties.walletPage]: (args: SetHookArgs) => {
    if (args.value.key === "") {
      dispatch_renderBalance(cloneState(args.obj));
    }
  },
  [StateProperties.agreementPage]: (args: SetHookArgs) => {
    dispatch_attachDateClickListener(cloneState(args.obj));
  },
  [StateProperties.pdfPage]: (args: SetHookArgs) => {},
  [StateProperties.instrumentPageData]: (args: SetHookArgs) => {},
  [StateProperties.createPages]: (args: SetHookArgs) => {
    dispatch_createPage(cloneState(args.obj));
  },
  [StateProperties.networkingPage]: (args: SetHookArgs) => {},
  [StateProperties.managementSlider]: (args: SetHookArgs) => {
    dispatch_createPage(cloneState(args.obj));
  },
};

function cloneState(state: State) {
  return Object.assign({}, state);
}
