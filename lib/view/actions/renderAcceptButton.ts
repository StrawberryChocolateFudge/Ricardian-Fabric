import { render } from "lit-html";
import { State } from "../../types";
import { acceptButton } from "../templates/acceptButton";
import { getById } from "../utils";

export default function renderAcceptButton(props: State) {
  const actionContainer = getById("action-container");
  actionContainer.innerHTML = "";
  render(acceptButton(), actionContainer);
}
