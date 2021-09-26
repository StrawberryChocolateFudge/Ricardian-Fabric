import { html } from "lit-html";

export const SignerPage = () =>
  html`
    <h2 class="center">Signer</h2>
    <hr />
    <table aria-label="only signer" class="center">
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="only signer field input">Only signer:</label>
        </td>
        <td>
          <input aria-label="only signer " id="onlysigner-input" type="text" />
        </td>
        <td><span id="onlysigner-tooltip"></span></td>
      </tr>
    </table>
    <hr />
    <div
      aria-label="error-display-slot"
      class="center red"
      id="error-display"
    ></div>
    <div class="button-row">
      <button class="marginRight-20" id="signer-cancel">Cancel</button>
      <button class="marginLeft-20" id="signer-save">Save</button>
    </div>
  `;
