import { RenderType, State } from "../types";
import { dispatch } from "./dispatch";
import { Events } from "../types";

export async function dispatch_renderCreateButton(props: State) {
  dispatch(Events.render, {
    type: RenderType.createButton,
    props,
  });
}

export async function dispatch_renderAcceptButton(props: State) {
  dispatch(Events.render, { type: RenderType.acceptButton, props });
}

export async function dispatch_renderBalance(props: State) {
  dispatch(Events.render, { type: RenderType.balance, props });
}
