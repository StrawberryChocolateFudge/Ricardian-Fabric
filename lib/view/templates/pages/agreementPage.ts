import { html } from "lit-html";

export const AgreementPage = () => html`
  <h2 class="center">Create the agreement</h2>
  <hr />
  <div class="editable-container">
    <div aria-label="Editor" class="editable"></div>
    <div id="editor-control"></div>
    <table aria-label="edit field container table" class="center">
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="Price label" for="price-input">Price:</label>
        </td>
        <td>
          <input
            aria-label="Input for price"
            name="price"
            id="price-input"
            type="number"
          />
        </td>
        <td><span id="price-tooltip"></span></td>
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
      <tr>
        <td>
          <label aria-labelledby="expires label" for="center">Expires :</label>
        </td>
        <td>
          <input
            aria-label="expires date input"
            name="expires"
            id="expires-input"
            type="date"
          />
          <button
            aria-label="never expires button"
            name="never"
            id="expires-reset"
          >
            Never
          </button>
        </td>
        <td><span id="expires-tooltip"></span></td>
      </tr>
    </table>
  </div>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div class="button-row">
    <button class="marginLeft-20" id="AgreementPage-next">Save</button>
  </div>
`;
