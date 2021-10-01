import { html } from "lit-html";

export const InstrumentPage = () => html`
      <h2 class="center">Create an Instrument</h2>
      <hr />
      <table aria-label="input field container table" class="center">
        <tr>
          <th></th>
          <th></th>
          <th></th>
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
      <div
        aria-label="error-display-slot"
        class="center red"
        id="error-display"
      ></div>
      <div class="button-row">
        <button class="marginRight-20 cancel-button" id="instrumentPage-cancel">
          cancel
        </button>
        <button class="marginLeft-20 save-button" id="instrumentPage-save">Save</button>
      </div>
    `;