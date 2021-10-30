import { html } from "lit-html";

export const DocXDropper = () => html`
  <div id="docx-dropzone" class="drop-zone">
    <span id="drop-prompt-docx" class="drop-zone__prompt"
      >To load template, drop a .docx file here or click to select it</span
    >
    <input type="file" name="docx" id="docx-input" class="drop-zone__input" />
  </div>
  <hr />
  <div><button id="dropper-back-button" class="backButton">Back</button></div>
  <hr />
`;
