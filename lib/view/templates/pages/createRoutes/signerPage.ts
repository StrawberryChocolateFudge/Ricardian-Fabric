import { html } from "lit-html";
import { CountriesDropdown } from "../../components/countriesDropdown";

export const SignerPage = () =>
  html`
    <h2 class="center">Signer</h2>
    <hr />
    <h4 class="center">Restrict who can sign the contract</h4>
    <h5 class="center">Add the only address that can sign it, or specify what country's residents can sign it.</h5>
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
        <th></th>
        <th></th>
        <th></th>
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
      
       <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </table>
    <h5 class="center">Users must grant the location permission in the brower to sign these agreements.</h5>
    <h5 class="center">If you leave the countries empty, no restrictions are applied.</h5>
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
