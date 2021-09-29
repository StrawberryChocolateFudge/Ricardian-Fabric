import { html } from "lit-html";

export const InputsPage = () => html`
  <h2 class="center">Inputs</h2>
  <hr />
  <h5 class="center">Specify the inputs to be saved on a signed contract</h5>
  <h5 class="center">
    These will be collected from the signer, highly encrypted and stored inside the
    signed contract.
  </h5>
  <table aria-label="add input name" class="center">
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td>
        <label aria-labelledby="Add input name">New input</label>
      </td>
      <td>
        <input
          aria-label="name of new input"
          name="newInputName"
          id="new-input-name"
          type="text"
        />
      </td>
      <td>
        <button id="add-input-item">Add</button>
      </td>
    </tr>
    <tr id="inputs-items-added"></tr>
  </table>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div class="button-row">
    <button class="marginRight-20 cancel-button" id="input-cancel">
      Cancel
    </button>
    <button class="marginLeft-20 save-button" id="input-save">Save</button>
  </div>
`;
