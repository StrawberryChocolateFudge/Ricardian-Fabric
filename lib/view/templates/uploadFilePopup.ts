import { html } from "lit-html";

export const uploadFilePopup = () => html`
  <h2 class="center">Upload a File</h2>
  <hr />
  <div id="file-dropzone" class="drop-zone">
    <span id="drop-prompt" class="drop-zone__prompt"
      >Drop File here or click to upload</span
    >
    <input type="file" name="file" id="file-input" class="drop-zone__input" />
  </div>
  <hr />
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div id="upload-loading-indicator"></div>
  <div class="button-row">
    <button class="marginRight-20 backButton" id="upload-cancel">Cancel</button>
    <button class="marginLeft-20 SCNextButton" id="upload-proceed">Next</button>
  </div>
  <hr />
`;

export const uploadFileSummary = (
  name: string,
  contentType: string,
  fee: string,
  id: string
) => html`
  <h2 class="center">Upload Summary</h2>
  <hr />
  <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><label>File Name:</label></td>
        <td><div>${name}</div></td>
      </tr>
      <tr>
        <td><label>Content-Type:</label></td>
        <td><div>${contentType}</div></td>
      </tr>
      <tr>
        <td><label>Upload Fee:</label></td>
        <td><div>${fee} Ar</div></td>
      </tr>
    </tbody>
  </table>
  <label for="uploadSummary-tx">Url after upload:</label>
  <small id="uploadSummary-tx">http://arweave.net/${id}</small>
  <hr />
  <div class="button-row">
    <button class="marginRight-20 backButton" id="uploadSummary-cancel">
      Cancel
    </button>
    <button class="marginLeft-20 SCNextButton" id="uploadSummary-proceed">
      Upload
    </button>
  </div>
  <hr />
`;
