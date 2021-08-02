import { render } from "lit-html";
import { Events, RenderType, State } from "../types";
import { renderCreateButtonClick } from "./actions/createButtonClick";
import renderAcceptButton from "./actions/renderAcceptButton";
import { acceptButton } from "./templates/acceptButton";
import { getById } from "./utils";
const Render = {
  [RenderType.successMessage]: (props: State) => {},
  [RenderType.errorMessage]: (props: State) => {},
  [RenderType.createButton]: (props: State) => renderCreateButtonClick(props),
  [RenderType.acceptButton]: (props: State) => renderAcceptButton(props),
};

document.body.addEventListener(Events.render, (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  Render[type](props);
});
