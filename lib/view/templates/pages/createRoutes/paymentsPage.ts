import { html } from "lit-html";

export const PaymentsPage = () =>
  html`
    <h2 class="center">Payments</h2>
    <hr />
    <table aria-label="payments " class="center">
      <tr>
        <th>The cost of the agreement:</th>
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
            placeholder="Ar"
          />
        </td>
        <td><span id="price-tooltip"></span></td>
      </tr>
      <tr>
        <th>Add a new fee</th>
        <th></th>
        <th></th>
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
          <label aria-labelledby="perdcentage label" for="pst-percentage"
            >Percentage:
          </label>
        </td>
        <td>
          <input
            aria-label="percentage"
            name="pstPercentage"
            id="pst-percentage"
            type="number"
            placeholder="%"
            disabled
          />
        </td>
        <td><span id="PSTPercentage-tooltip"></span></td>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="profit share label" for="pst-contractid"
            >PSC:</label
          >
        </td>
        <td>
          <input
            aria-label="Profit sharing contract id"
            name="pstContractId"
            id="pst-contractid"
            type="text"
            placeholder="contract id"
            disabled
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
            aria-label="accountant contract id"
            name="accountant"
            id="accountant-contractid"
            type="text"
            placeholder="contract id"
            disabled
          />
        </td>
        <td><span id="accountantAddress-tooltip"></span></td>
      </tr>
      <tr>
        <th>Compliance</th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="accountant address label" for="needs-kyc"
            >Needs KYC:
          </label>
        </td>
        <td>
          <input
            aria-label="needs kyc?"
            id="needs-kyc"
            type="checkbox"
          />
        </td>
        <td><span id="kyc-tooltip"></span></td>
      </tr>
    </table>
    <div
      aria-label="error-display-slot"
      class="center red"
      id="error-display"
    ></div>
    <div class="button-row">
      <button class="marginRight-20 cancel-button" id="payments-cancel">
        Cancel
      </button>
      <button class="marginLeft-20 save-button" id="payments-save">Save</button>
    </div>
  `;
