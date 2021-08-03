import { Events, RenderType, State } from "../types";
import { renderCreateButtonClick } from "./actions/createButtonClick";
import { onFileSelect } from "./actions/onFileSelect";
import renderAcceptButton from "./actions/renderAcceptButton";
import { renderbalance } from "./actions/renderBalance";

const Render = {
  [RenderType.successMessage]: (props: State) => {},
  [RenderType.errorMessage]: (props: State) => {},
  [RenderType.createButton]: (props: State) => {
    // The order of attaching listeners is important
    onFileSelect(props);
    renderCreateButtonClick(props);
  },
  [RenderType.acceptButton]: (props: State) => {
    renderAcceptButton(props);
    onFileSelect(props);
  },
  [RenderType.balance]: (props: State) => {
    renderbalance(props.balance);
  }
};

document.body.addEventListener(Events.render, (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  Render[type](props);
});
