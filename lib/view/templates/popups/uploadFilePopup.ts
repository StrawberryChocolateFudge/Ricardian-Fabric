import { html } from "lit-html";

export const uploadFilePopup = () => html`
  <h2 class="center">Upload a File</h2>
  <hr />
  <small
    >Upload a file to the permaweb. Pay only once, and it's stored forever and
    served as a website.</small
  >
  <hr />
  <div id="file-dropzone" class="drop-zone">
    <span id="drop-prompt" class="drop-zone__prompt"
      >Drop File here or click to upload</span
    >
    <input type="file" name="file" id="file-input" class="drop-zone__input" />
  </div>
  <hr />
  <div class="center marginBottom-10">
    <label
      aria-labelledby="I agree to the terms"
      class="terms-button-label"
      id="terms-button"
      >I agree to the terms</label
    >
    <input
      aria-label="I agree to the terms checkbox"
      id="upload-terms-checkbox"
      type="checkbox"
    />
  </div>
  <div id="upload-loading-indicator"></div>
  <div class="wide-row">
    <button class="marginRight-20 backButton" id="upload-cancel">Cancel</button>
    <button class="marginLeft-20 NextButton" id="upload-proceed">Next</button>
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
  <hr />
  <label for="uploadSummary-tx"
    >Content will be available at this url after posting it to the
    network:</label
  >
  <small id="uploadSummary-tx">https://arweave.net/${id}</small>
  <hr />
  <div class="button-row">
    <button class="marginRight-20 backButton" id="uploadSummary-cancel">
      Cancel
    </button>
    <button class="marginLeft-20 NextButton" id="uploadSummary-proceed">
      Post
    </button>
  </div>
  <hr />
`;
