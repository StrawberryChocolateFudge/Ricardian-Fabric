import { html } from "lit-html";
import { CreatePages, State } from "../../types";

export const CreatePage = (props: State) => {
  if (props.createPages === CreatePages.PDF) {
    return html`
      <h2 class="center">Create the agreement</h2>
      <hr />
      <div id="pdf-dropzone" class="drop-zone">
        <span id="drop-prompt" class="drop-zone__prompt"
          >Drop PDF here or click to upload</span
        >
        <input type="file" name="pdf" id="pdf-input" class="drop-zone__input" />
      </div>
      <hr />
      <table aria-label="edit field container table" class="center">
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>
            <label aria-labelledby="Price label" for="price-input"
              >Price:</label
            >
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
            <label aria-labelledby="only signer field input"
              >Only signer:</label
            >
          </td>
          <td>
            <input
              aria-label="only signer "
              id="onlysigner-input"
              type="text"
            />
          </td>
          <td><span id="onlysigner-tooltip"></span></td>
        </tr>
        <tr>
          <td>
            <label aria-labelledby="expires label" for="center">Expires:</label>
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
      <div
        aria-label="error-display-slot"
        class="center red"
        id="error-display"
      ></div>
      <button class="center" id="EditPage-next">Next</button>
    `;
  } else if (props.createPages === CreatePages.AddWallet) {
    return html` <h2 class="center">Add your wallet</h2>
      <hr />
      <div id="wallet-dropzone" class="drop-zone">
        <span id="drop-prompt" class="drop-zone__prompt"
          >Drop Your wallet here or click to select it</span
        >
        <input
          type="file"
          name="wallet"
          id="wallet-input"
          class="drop-zone__input"
        />
      </div>
      <hr />
      <table aria-label="input field container table" class="center">
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr id="balance"></tr>
      </table>

      <div class="button-row">
        <button class="marginRight-20" id="AddWalletPage-previous">
          Previous
        </button>
        <button class="marginLeft-20" id="AddWalletPage-next">Next</button>
      </div>`;
  } else if (props.createPages === CreatePages.Networking) {
    return html`
      <h2 class="center">Networking</h2>
      <hr />
      <table aria-label="input field container table" class="center">
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>
            <label aria-labelledby="post to label">Post to:</label>
          </td>
          <td>
            <input
              aria-label="post to input"
              name="postto"
              id="postto-input"
              type="url"
            />
          </td>
          <td><span id="postTo-tooltip"></span></td>
        </tr>
        <tr>
          <td>
            <label
              aria-labelledby="webhook checkbox label"
              for="webhook-checkbox"
              >Webhook:</label
            >
            <input
              aria-label="webhook-checkbox"
              id="webhook-checkbox"
              type="checkbox"
            />
          </td>
          <td>
            <label
              aria-labelledby="redirect-checkbox-label"
              for="redirect-checkbox"
              >Redirect:</label
            >
            <input
              aria-label="redirect-checkbox"
              id="redirect-checkbox"
              type="checkbox"
            />
          </td>
          <td>
            <span id="webhook-tooltip"></span>
          </td>
        </tr>
      </table>
      <div class="button-row">
        <button class="marginRight-20" id="NetworkingPage-previous">
          Previous
        </button>
        <button class="marginLeft-20" id="NetworkingPage-next">Next</button>
      </div>
    `;
  } else if (props.createPages === CreatePages.SmartContract) {
    return html`
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
      <div
        aria-label="error-display-slot"
        class="center red"
        id="error-display"
      ></div>
      <div class="button-row">
        <button class="marginRight-20" id="SmartContractPage-previous">
          Previous
        </button>
        <button class="marginLeft-20" id="SmartContractPage-next">Next</button>
      </div>
    `;
  } else if (props.createPages === CreatePages.SummaryPage) {
    return html`
      <hr />
      <label
        aria-labelledby="select wallet label"
        class="center"
        id="wallet-label"
        for="select-file-input"
        >Wallet
      </label>
      <input
        aria-label="select-walletfile-input"
        name="select-file-input"
        class="center"
        id="select-file-input"
        type="file"
      />
      <hr />
      <div
        aria-label="error-display-slot"
        class="center red"
        id="error-display"
      ></div>
      <div
        aria-label="transaction-display-slot"
        class="center"
        id="transaction-display"
      ></div>
      <button
        class="center width-100"
        id="save-contract"
        disabled
        role="button"
        aria-label="Create"
      >
        Create
      </button>
    `;
  }
};
