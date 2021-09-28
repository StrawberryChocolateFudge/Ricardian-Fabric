import { html } from "lit-html";
import { CountriesDropdown } from "../../components/countriesDropdown";

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
      <tr>
        <td>
          <label aria-labelledby="only signer available input">Available in:</label>
        </td>
        <td>
          ${CountriesDropdown("country-to-add")}
        </td>
        </td>
        <td><button id="add-country-item">Add</button></td>
      </tr>
       <tr id="country-items-added"></tr>
    </table>
    <hr />
    <div
      aria-label="error-display-slot"
      class="center red"
      id="error-display"
    ></div>
    <div class="button-row">
      <button class="marginRight-20 cancel-button" id="signer-cancel">Cancel</button>
      <button class="marginLeft-20 save-button" id="signer-save">Save</button>
    </div>
  `;
