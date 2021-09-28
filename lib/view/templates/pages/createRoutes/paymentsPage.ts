import { html } from "lit-html";

export const PaymentsPage = () =>
  html`
    <h2 class="center">Payments</h2>
    <hr />
    <table aria-label="payments " class="center">
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
          <label aria-labelledby="is profit sharing" for="is-profitsharing"
            >Profit sharing?</label
          >
        </td>
        <td>
          <input type="checkbox" name="isProfitsharing" id="is-profitsharing" />
        </td>
        <td><span id="isProfitsharing-tooltip"></span></td>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="profit share label" for="profit-share-input"
            >PST:</label
          >
        </td>
        <td>
          <input
            aria-label="Profit sharing contract id"
            name="pstContractId"
            id="pstContractId"
            type="text"
            placeholder="contract id"
          />
        </td>
        <td><span id="pst-tooltip"></span></td>
      </tr>
      <tr>
        <td>
          <label
            aria-labelledby="accountant address label"
            for="accountant-address"
            >Accountant:
          </label>
        </td>
        <td>
          <input
            aria-label="accountant address"
            name="accountantAddress"
            id="accountantAddress"
            type="text"
            placeholder="contract id"
          />
        </td>
        <td><span id="accountantAddress-tooltip"></span></td>
      </tr>
    </table>
    <div
      aria-label="error-display-slot"
      class="center red"
      id="error-display"
    ></div>
    <div class="button-row">
      <button class="marginRight-20 cancel-button" id="payments-cancel">Cancel</button>
      <button class="marginLeft-20 save-button" id="payments-save">Save</button>
    </div>
  `;
