import { Events, RenderType, State } from "../types";
import { renderCreateButton } from "./templates/createButton";
const Render = {
  [RenderType.successMessage]: (props: State) => {},
  [RenderType.errorMessage]: (props: State) => {},
  [RenderType.createButton]: (props: State) => renderCreateButton(props),
};

document.body.addEventListener(Events.render, (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  Render[type](props);
});
