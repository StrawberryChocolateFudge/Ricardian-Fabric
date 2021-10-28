import { dispatch_renderDocXDropper } from "../../dispatch/render";
import { State } from "../../types";
import { getById } from "../utils";

export function templateSelectActions(props: State) {
  const importDocX = getById("import-docx-trigger");
  importDocX.onclick = function () {
    //Dispatch a popup and render the docx stuff into it
    dispatch_renderDocXDropper(props);
  };
}

