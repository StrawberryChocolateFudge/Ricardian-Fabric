import { html } from "lit-html";

export const InputsPage = () => html`
  <h2 class="center">Inputs</h2>
  <hr />
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
        <button>Add</button>
      </td>
    </tr>
  </table>
  <ul>
    <li>
      <p>First name</p>
      <button>X</button>
    </li>
  </ul>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div class="button-row">
    <button class="marginRight-20" id="input-cancel">Cancel</button>
    <button class="marginLeft-20" id="input-save">Save</button>
  </div>
`;
