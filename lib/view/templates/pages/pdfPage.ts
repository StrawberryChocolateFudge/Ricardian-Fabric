import { html } from "lit-html";

export const PDFPage = () => html`
  <h2 class="center">Upload a pdf</h2>
  <hr />
  <div id="pdf-dropzone" class="drop-zone">
    <span id="drop-prompt" class="drop-zone__prompt"
      >Drop PDF here or click to upload</span
    >
    <input type="file" name="pdf" id="pdf-input" class="drop-zone__input" />
  </div>
  <hr />
  <button class="center" id="discard-button">discard file</button>
  <hr />
  <p class="center">You may proceed without uploading a pdf.</p>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div class="button-row">
    <button class="marginRight-20" id="EditPage-previous">Previous</button>
    <button class="marginLeft-20" id="EditPage-next">Next</button>
  </div>
`;
