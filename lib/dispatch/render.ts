import { RenderType, State } from "../types";
import { dispatch } from "./dispatch";
import { Events } from "../types";

export async function dispatch_renderCreateButton(props: State) {
  dispatch(Events.render, {
    type: RenderType.createButton,
    props,
  });
}

export async function dispatch_renderCreatePage() {
  dispatch(Events.render, {
    type: RenderType.createPage,
  });
}
