import { html } from "lit-html";

export const instrumentSettings = () => html`
  <h3 class="center">Instrument setup</h3>
  <table>
    <tr>
      <th></th>
      <th></th>
      <th></th>
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
        />
      </td>
      <td>
        <span id="instrument-name-tooltip"></span>
      </td>
    </tr>
    <tr>
      <td>
        <label aria-labelledby="instrument ticker" for="instrument-ticker-input"
          >Ticker:</label
        >
      </td>
      <td>
        <input
          aria-label="input for ticker"
          name="instrumentticker"
          id="instrument-ticker-input"
          type="text"
        />
      </td>
      <td>
        <span id="instrument-ticker-tooltip"></span>
      </td>
    </tr>
    <tr>
      <td>
        <label aria-labelledby="instrument supply" for="instrument-supply-input"
          >Supply:</label
        >
      </td>
      <td>
        <input
          aria-label="input for supply"
          name="instrumentsupply"
          id="instrument-supply-input"
          type="number"
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
        />
      </td>
      <td>
        <span id="instrument-derive-tooltip"></span>
      </td>
    </tr>
  </table>
  <div>
    <button id="instrument-cancel">Cancel</button>
    <button id="instrument-save">Save</button>
  </div>
`;
