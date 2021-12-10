import { html } from "lit-html";
import {
  BackLogo,
  ContentPasteLogo,
  ContractConfigurationLogo,
  Erc20Logo,
  importLogo,
  neverLogo,
  Policylogo,
} from "../components/logos";

export const CreatePage = () => html`
  <hr />
  <div class="logo-container">
    <div class="Fabric">Create a Ricardian Contract</div>
  </div>
  <div class="row">
    <div id="network-dropdown"></div>
    <div id="permaweb-dropdown"></div>
    <hr />
    <button id="import-docx-trigger" class="labelButton">
      ${importLogo()} Import template
    </button>
  </div>
  <hr />

  <div class="editable-container">
    <div id="editor" aria-label="Editor" class="cursor-text editable"></div>
    <div id="editor-control"></div>
  </div>
  <hr />
  <button class="accordion">
    ${ContractConfigurationLogo()}Contract Configuration
  </button>
  <div class="panel">
    <table id="input-table" aria-label="input field container table">
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="Block countries selected"
            >Block countries:</label
          >
        </td>
        <td>
          <div id="sanctions-dropdown"></div>
        </td>
        <td>
          <span id="sanctions-tooltip"></span>
        </td>
      </tr>
      <tr>
        <td>
          <label for="blocked-addresses" aria-labelledby="Block addresses"
            >Block addresses:</label
          >
        </td>
        <td>
          <input id="blocked-addresses" type="text" placeholder="0x..." />
        </td>
        <td>
          <span id="blocked-addresses-tooltip"></span>
        </td>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="expires label" for="expires-input"
            >Expires:</label
          >
        </td>
        <td>
          <input
            aria-label="expires date input"
            name="expires"
            id="expires-input"
            class="cursor-pointer"
            type="date"
          />
          <button
            aria-label="never expires button"
            name="never"
            class="cursor-pointer labelButton"
            id="expires-reset"
          >
            ${neverLogo()} Never
          </button>
        </td>
        <td>
          <span id="expires-tooltip"></span>
        </td>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="post to label">Redirects to:</label>
        </td>
        <td>
          <input
            aria-label="post to input"
            name="postto"
            id="redirectto-input"
            type="url"
            placeholder="https://"
            class="cursor-text"
          />
        </td>
        <td>
          <span id="redirectto-tooltip"></span>
        </td>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="Compatible  smart contract label"
            >Smart Contract:</label
          >
        </td>
        <td>
          <input
            aria-label="smartcontract to call"
            name="smartcontract"
            id="smartcontract-input"
            type="text"
            placeholder="0x..."
            class="cursor-text"
          />
        </td>
        <td>
          <span id="smartcontract-tooltip"></span>
        </td>
      </tr>
    </table>
  </div>

  <hr />

  <button id="erc20configurationButton" class="accordion">
    ${Erc20Logo()} Wallet Configuration
  </button>
  <div class="panel">
    <table id="erc20-table">
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="add ERC20 to wallet?" for="add-erc20-checkbox"
            >Add ERC20 to wallet?</label
          >
        </td>
        <td><input id="add-erc20-checkbox" type="checkbox" /></td>
        <td><span id="add-erc20-checkbox-tooltip"></span></td>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="ERC20 name" for="erc20-name">Name</label>
        </td>
        <td>
          <input
            id="erc20-name"
            type="text"
            aria-label="erc20 name input"
            placeholder="..."
          />
        </td>
        <td><span id="erc20-name-tooltip"></span></td>
      </tr>
      <tr>
        <td>
          <label aria-labelledby="ERC20 symbol" for="erc20-symbol"
            >Symbol</label
          >
        </td>
        <td>
          <input
            id="erc20-symbol"
            aria-label="erc20 symbol"
            placeholder="..."
            type="text"
          />
        </td>
        <td><span id="erc20-symbol-tooltip"></span></td>
      </tr>
      <tr>
        <td>
          <label for="erc20-decimals" aria-labelledby="ERC20 decimals"
            >Decimals</label
          >
        </td>
        <td>
          <input
            aria-label="erc20 decimal input"
            placeholder="18"
            id="erc20-decimals"
            type="number"
          />
        </td>
        <td><span id="erc20-decimal-tooltip"></span></td>
      </tr>
      <tr>
        <td>
          <label for="erc20-address" aria-labelledby="ERC20 address"
            >Contract address</label
          >
        </td>
        <td>
          <input
            aria-label="erc20 contract address input"
            placeholder="0x"
            id="erc20-address"
            type="text"
          />
          <button
            aria-label="address is same as the above specified"
            name="same"
            class="backButton"
            id="same-contract-button"
          >
            ${ContentPasteLogo()}Same as contract config
          </button>
        </td>
        <td><span id="erc20-address-tooltip"></span></td>
      </tr>
    </table>
    <hr />
  </div>

  <hr />
  <div class="center marginBottom-10">
    <label
      aria-labelledby="I agree to the terms, click on this label for a popup"
      id="terms-checkbox-label"
      class="labelButton terms-button-label"
      >${Policylogo()} I agree to the terms</label
    >
    <input
      aria-label="I agree to the terms checkbox"
      id="terms-checkbox"
      type="checkbox"
    />
  </div>
  <hr />
  <div
    aria-label="transaction-display-slot"
    class="center"
    id="transaction-display"
  ></div>

  <div id="button-slot"></div>
`;
