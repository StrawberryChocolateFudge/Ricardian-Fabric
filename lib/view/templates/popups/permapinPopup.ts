import { html } from "lit-html";

export const PermapinPopup = () => html`
  <h2>Permapin a Contract</h2>
  <small
    >You can permapin the IPFS content on Arweave to store it forever.</small
  >
  <small>Only content created with Ricardian Fabric is allowed.</small>
  <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><label for="CID-input-permapin">IPFS Content Identifier</label></td>
        <td>
          <input id="CID-input-permapin" type="text" />
        </td>
      </tr>
      <tr>
        <td>
          <label id="terms-button" class="terms-button-label"
            >I accept the terms.</label
          >
        </td>
        <td><input id="permapin-terms-checkbox" type="checkbox" /></td>
      </tr>
    </tbody>
  </table>
  <hr />
  <div class="wide-row">
    <button class="backButton" id="permapin-back">back</button>
    <button class="NextButton" id="permapin-proceed">Pin!</button>
  </div>
  <hr />
`;
