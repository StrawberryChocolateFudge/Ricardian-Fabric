import { html } from "lit-html";

export const WalletPopup = () => html` <h2>New Permaweb Wallet</h2>
  <small
    >You need to use a password protected wallet file with Ricardian
    Fabric.</small
  >
  <small
    >You can import an existing Arweave wallet to encrypt or if you leave that
    empty, you get a new one.</small
  >
  <div id="wallet-dropzone" class="drop-zone">
    <span id="drop-prompt" class="drop-zone__prompt"
      >Drop Your Arweave wallet file here</span
    >
    <input
      type="file"
      name="wallet"
      id="wallet-input"
      class="drop-zone__input"
    />
  </div>
  <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><label for="wallet-password-once">Password:</label></td>
        <td>
          <input
            readonly
            onfocus="this.removeAttribute('readonly');"
            autocomplete="off"
            id="wallet-password-once"
            type="password"
          />
        </td>
      </tr>
      <tr>
        <td><label for="wallet-password-twice">Password again:</label></td>
        <td>
          <input readonly onfocus="this.removeAttribute('readonly');"
          autocomplete="off" id="wallet-password-twice"/ type="password">
        </td>
      </tr>
    </tbody>
  </table>
  <div class="wide-row">
    <button class="marginRight-20 backButton" id="wallet-cancel">Cancel</button>
    <button class="marginLeft-20 NextButton" id="wallet-proceed">
      Create Identity
    </button>
  </div>
  <hr />`;

export const AddNewIdentityPopup = (address: string) => html`
  <h2>Add New Identity?</h2>
  <h5>Address: ${address}</h5>
  <div class="center">
    <small>Your identity is an encrypted Arweave wallet.</small>
    <small
      >The encrypted file is stored in the browser under the current permaweb
      address so you can be sure the code using it will never change.</small
    >
    <small>This should not be your main wallet. Top it up as needed.</small>
  </div>

  <div class="wide-row">
    <button class="marginRight-20 backButton" id="addNewIdentity-cancel">
      Cancel
    </button>
    <button class="marginLeft-20 NextButton" id="addNewIdentity-proceed">
      Add identity
    </button>
  </div>
  <hr />
`;

export const ShowIdentityPopup = (address: string, balance: string) => html`
  <h2>Identity</h2>
  <button class="marginLeft-20 backButton" id="new-identity">
    Create new Identity
  </button>
  <h5>Address: ${address}</h5>
  <h5>Balance: ${balance} Ar</h5>
  <button class="marginLeft-20 backButton">Transfer</button>

  <div class="wide-row">
    <button class="marginRight-20 backButton" id="identity-cancel">Back</button>

    <button class="marginLeft-20 NextButton" id="switchIdentity-proceed">
      Switch Identities
    </button>
  </div>
  <hr />
`;

export const SwitchIdentities = () => html`
  <h2>Identity</h2>
  <small
    >You can switch to a new identity by dropping here an encrypted wallet file.
    Your identity is saved in the browser and will be only accessable by this
    app under the current permaweb address.</small
  >
  <div id="wallet-dropzone" class="drop-zone">
    <span id="drop-prompt" class="drop-zone__prompt"
      >Drop Your Encrypted Wallet File Here To Switch Identities</span
    >
    <input
      type="file"
      name="wallet"
      id="wallet-input"
      class="drop-zone__input"
    />
  </div>
  <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><label for="identityPassword">Password</label></td>
        <td>
          <input
            readonly
            onfocus="this.removeAttribute('readonly');"
            autocomplete="off"
            id="identityPassword"
            type="password"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="wide-row">
    <button class="marginRight-20 backButton" id="identity-cancel">Back</button>
    <button class="marginLeft-20 NextButton" id="switchIdentity-proceed">
      Switch Identity!
    </button>
  </div>
  <hr />
`;
