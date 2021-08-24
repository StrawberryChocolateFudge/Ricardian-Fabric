import MediumEditor from "medium-editor";
import { getById } from "../view/utils";

export default function createNewEditor() {
  const editor = new MediumEditor(".editable", {
    imageDragging: false,
    toolbar: {
      /* These are the default options for the toolbar,
		 if nothing is passed this is what is used */
      allowMultiParagraphSelection: true,
      buttons: [
        "bold",
        "italic",
        "underline",
        "anchor",
        "anchor",
        "quote",
        "pre",
        "orderedlist",
        "unorderedlist",
        "indent",
        "outdent",
        "justifyLeft",
        "justifyCenter",
        "justifyRight",
        "justifyFull",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
      ],
      firstButtonClass: "medium-editor-button-first",
      lastButtonClass: "medium-editor-button-last",
      standardizeSelectionStart: true,
      static: false,
      /* options which only apply when static is true */
      align: "center",
      sticky: false,
      updateOnEmptySelection: false,
    },
    placeholder: {
      text: "Type your legal contract",
      hideOnClick: false,
    },
  });
  return editor;
}
