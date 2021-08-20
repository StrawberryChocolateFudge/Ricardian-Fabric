import {
  dispatch_attachDateClickListener,
  dispatch_createPage,
  dispatch_instrumentsSetRerender,
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
  [StateProperties.editor]: (args: SetHookArgs) => {},
  [StateProperties.balance]: (args: SetHookArgs) => {
    dispatch_renderBalance(cloneState(args.obj));
  },
  [StateProperties.address]: (args: SetHookArgs) => {},
  [StateProperties.pdfPage]: (args: SetHookArgs) => {
    if (args.value.PDF === "") {
      console.log("RUNS");
      //There is a case when I only set the date
      dispatch_attachDateClickListener(cloneState(args.obj));
    }
  },
  [StateProperties.instrumentPageData]: (args: SetHookArgs) => {},
  [StateProperties.createPages]: (args: SetHookArgs) => {
    dispatch_createPage(cloneState(args.obj));
  },
};

function cloneState(state: State) {
  return Object.assign({}, state);
}
