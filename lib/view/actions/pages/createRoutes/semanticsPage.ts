import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import createNewEditor from "../../../../state/editor";
import { State } from "../../../../types";
import { getById } from "../../../utils";

export function semanticsPage(props: State) {
  console.log("semantics page runs");
  const editor = createNewEditor();

  //Dispatch init like agreementPage

  //GET the CHECKBOXES

  const docx = getById("docX-checkbox") as HTMLInputElement;
  const type = getById("type-checkbox") as HTMLInputElement;

  docx.onchange = function () {
    if (docx.checked) {
      type.checked = false;
    }
  };

  type.onchange = function () {
    if (type.checked) {
      docx.checked = false;
    }
  };

  const cancelButton = getById("semantics-previous");
  const saveButton = getById("semantics-save");

  cancelButton.onclick = function () {
    goToCreateRoutes();
  };

  saveButton.onclick = function () {
    // let content =

    // if(docx )

    const content = editor.getContent();

    //Dispatch the content!!

    //TODO: Do the Save
    goToCreateRoutes();
  };
}
