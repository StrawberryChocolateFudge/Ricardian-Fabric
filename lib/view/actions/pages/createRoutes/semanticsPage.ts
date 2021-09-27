import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import {
  dispatch_initSemanticsPage,
  dispatch_promptError,
  dispatch_promptSuccess,
  dispatch_removeError,
} from "../../../../dispatch/render";
import createNewEditor from "../../../../state/editor";
import { State } from "../../../../types";
import { getById } from "../../../utils";
import mammoth from "mammoth";
import { isPropertySignature } from "typescript";
import { dispatch_setSemanticsPageData } from "../../../../dispatch/stateChange";

export function semanticsPage(props: State) {
  const editor = createNewEditor();
  dispatch_initSemanticsPage(props, editor);
  onDocFileDropped(props, editor);
  //GET the CHECKBOXES

  const cancelButton = getById("semantics-previous");
  const saveButton = getById("semantics-save");
  const titleInput = getById("semanticsTitle") as HTMLInputElement;

  cancelButton.onclick = function () {
    goToCreateRoutes();
  };

  saveButton.onclick = function () {
    const content = editor.getContent();
    //Dispatch the content!!

    //TODO: Do the Save
    dispatch_setSemanticsPageData({
      title: titleInput.value,
      content: content,
    });

    goToCreateRoutes();
  };
}

export function onDocFileDropped(props: State, editor: any) {
  const walletInput = getById("docx-input") as HTMLInputElement;
  const dropZone = getById("docx-dropzone");

  dropZone.onclick = function () {
    walletInput.click();
  };

  walletInput.onchange = function () {
    const file = walletInput.files[0];
    if (
      walletInput.files.length === 1 &&
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      // It's valid
      dispatch_promptSuccess(walletInput.files[0]);
      dispatch_removeError();
      convertToHTML(walletInput.files[0], editor);
    } else {
      dispatch_promptError("Invalid wallet,must be a docx file");
    }
  };

  dropZone.ondragover = function (e: Event) {
    e.preventDefault();
    dropZone.classList.add("drop-zone--over");
  };
  dropZone.ondragleave = function (e: Event) {
    dropZone.classList.remove("drop-zone--over");
  };
  dropZone.ondragend = function (e: Event) {
    dropZone.classList.remove("drop-zone--over");
  };

  dropZone.ondrop = function (e: DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    //TODO: file.type must be doc or docx
    if (
      e.dataTransfer.files.length === 1 &&
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      walletInput.files = e.dataTransfer.files;
      dispatch_promptSuccess(e.dataTransfer.files[0]);
      dispatch_removeError();
      convertToHTML(e.dataTransfer.files[0], editor);
      // checkKeyFile(walletInput.files, props.arweave);
    } else {
      dispatch_promptError("Invalid file, must be a docx file");
    }
    dropZone.classList.remove("drop-zone--over");
  };
}

function convertToHTML(file: File, editor: any) {
  readFileInputEventAsArrayBuffer(file, function (arrayBuffer) {
    mammoth
      .convertToHtml({ arrayBuffer: arrayBuffer })
      .then((result) => {
        editor.setContent(result.value, 0);
      })
      .done();
  });
}

function readFileInputEventAsArrayBuffer(file, callback) {
  var reader = new FileReader();

  reader.onload = function (loadEvent) {
    var arrayBuffer = loadEvent.target.result;
    callback(arrayBuffer);
  };

  reader.readAsArrayBuffer(file);
}
