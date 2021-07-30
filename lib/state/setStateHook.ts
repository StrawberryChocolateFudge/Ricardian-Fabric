import { dispatch_renderCreateButton } from "../dispatch/render";
import { SetHookArgs, State, StateProperties } from "../types";

export const setStateHook = {
  [StateProperties.arweave]: (args: SetHookArgs) => {
    dispatch_renderCreateButton(args.obj);
  },
};
