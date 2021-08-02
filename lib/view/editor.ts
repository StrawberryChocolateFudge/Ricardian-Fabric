import MediumEditor from "medium-editor";

export default function createNewEditor(): MediumEditor {
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
        "strikethrough",
        "subscript",
        "superscript",
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
        "removeFormat",
        "html",
      ],
      diffLeft: 0,
      diffTop: 400,
      firstButtonClass: "medium-editor-button-first",
      lastButtonClass: "medium-editor-button-last",
      relativeContainer: null,
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
