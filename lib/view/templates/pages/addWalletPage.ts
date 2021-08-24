import { html } from "lit-html";

export const AddWalletPage = () => html` <h2 class="center">Add your wallet</h2>
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
    <tr id="address"></tr>
    <tr id="balance"></tr>
  </table>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div class="button-row">
    <button class="marginRight-20" id="AddWalletPage-previous">Previous</button>
    <button class="marginLeft-20" id="AddWalletPage-next">Save</button>
  </div>`;
