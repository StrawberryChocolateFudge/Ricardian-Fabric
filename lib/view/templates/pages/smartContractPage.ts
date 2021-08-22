import { html } from "lit-html";

export const SmartContractPage = () => html`
      <h2 class="center">Add SmartContract</h2>
      <hr />
      <table aria-label="input field container table" class="center">
        <tr>
          <th></th>
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
            <input
              type="checkbox"
              name="isCryptoInstrument"
              id="is-profitsharing"
            />
          </td>
          <td><span id="isProfitsharing-tooltip"></span></td>
        </tr>
        <tr>
          <td>
            <label aria-labelledby="profit share label" for="profit-share-input"
              >PST contract id:</label
            >
          </td>
          <td>
            <input
              aria-label="Profit sharing contract id"
              name="pstContractId"
              id="pstContractId"
              type="text"
            />
          </td>
          <td><span id="pst-tooltip"></span></td>
        </tr>
        <tr>
          <td>
            <label
              aria-labelledby="is crypto instrument"
              for="is-crypto-instrument"
              >Crypto instrument?</label
            >
          </td>
          <td>
            <input
              type="checkbox"
              name="isCryptoInstrument"
              id="is-crypto-instrument"
            />
          </td>
          <td><span id="instrument-tooltip"></span></td>
        </tr>
        <tr>
          <td>
            <label aria-labelledby="instrument name" for="instrument-name-input"
              >Name:</label
            >
          </td>
          <td>
            <input
              aria-label="input for name"
              name="instrumentname"
              id="instrument-name-input"
              type="text"
              disabled
            />
          </td>
          <td>
            <span id="instrument-name-tooltip"></span>
          </td>
        </tr>
        <tr>
          <td>
            <label
              aria-labelledby="instrument ticker"
              for="instrument-ticker-input"
              >Ticker:</label
            >
          </td>
          <td>
            <input
              aria-label="input for ticker"
              name="instrumentticker"
              id="instrument-ticker-input"
              type="text"
              disabled
            />
          </td>
          <td>
            <span id="instrument-ticker-tooltip"></span>
          </td>
        </tr>
        <tr>
          <td>
            <label
              aria-labelledby="instrument supply"
              for="instrument-supply-input"
              >Supply:</label
            >
          </td>
          <td>
            <input
              aria-label="input for supply"
              name="instrumentsupply"
              id="instrument-supply-input"
              type="number"
              value="0"
              disabled
            />
          </td>
          <td>
            <span id="instrument-supply-tooltip"></span>
          </td>
        </tr>
        <tr>
          <td>
            <label
              aria-labelledby="instrument derivation count"
              for="instrument-derive-input"
              >Can derive:</label
            >
          </td>
          <td>
            <input
              aria-label="input for derive"
              name="instrumentderive"
              id="instrument-derive-input"
              type="number"
              value="0"
              disabled
            />
          </td>
          <td>
            <span id="instrument-derive-tooltip"></span>
          </td>
        </tr>
      </table>
      <p class="center">
        You may proceed without filling out any of the fields
      </p>
      <div
        aria-label="error-display-slot"
        class="center red"
        id="error-display"
      ></div>
      <div class="button-row">
        <button class="marginRight-20" id="SmartContractPage-previous">
          Previous
        </button>
        <button class="marginLeft-20" id="SmartContractPage-next">Save</button>
      </div>
    `;