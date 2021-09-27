import { html } from "lit-html";

export const SemanticsPage = () => html`
  <h2 class="center">Semantics</h2>
  <hr />
  <div>
    <label for="semanticsTitle">Title</label>
    <input id="semanticsTitle" type="text" />
  </div>
  <hr />
  <div id="docx-dropzone" class="drop-zone">
    <span id="drop-prompt" class="drop-zone__prompt"
      >Drop A Docx File Here Or Click To Select It</span
    >
    <input type="file" name="docx" id="docx-input" class="drop-zone__input" />
  </div>
  <hr />
  <div aria-label="Editor" class="editable"></div>
  <div id="editor-control"></div>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div class="button-row">
    <button class="marginRight-20" id="semantics-previous">Cancel</button>
    <button class="marginLeft-20" id="semantics-save">Save</button>
  </div>
`;
