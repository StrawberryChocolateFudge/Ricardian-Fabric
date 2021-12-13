import { html } from "lit-html";
import { ProposalFormat } from "../../../types";
import { ProposalDocXDropper } from "../components/docxDropper";
import { helperTooltips } from "../components/helperTooltips";
import { BackLogo } from "../components/logos";
import { smartContractProductPage } from "../components/smartContractProductPage";
import { getCategories } from "../pages/catalogPage";
import { getNetworkSelect } from "../pages/createProposalPage";

export const UploadProposalPopup = () => html`
  ${UploadProposalStep1()} ${UploadProposalStep2()} ${UploadProposalStep3()}
  ${UploadProposalStep4()}
  <div class="row">${UploadProposalButtons("Next")}</div>
`;

export const UploadProposalSummary = (
  fee: string,
  id: string,
  proposal: ProposalFormat
) => {
  return html`
    ${smartContractProductPage(id, proposal, true)}
    <div class="row">
      <label>Transaction id:</label>
      <small>${id}</small>
    </div>
    <div class="row">
      <label>Fee:</label>
      <small>${fee}</small>
    </div>
    <div id="upload-proposal-display"></div>
    <div class="row">
      <button class="labelButton" id="post-proposal-back">
        ${BackLogo()}Back
      </button>
      <button id="post-proposal" class="labelButton">Post</button>
    </div>
    <hr />
    <hr />
    <hr />
    <hr />
  `;
};

export const UploadProposalStep1 = () => html` <div
  id="uploadProposalStep1"
  class="uploadProposalDiv"
>
  <h4>Upload a proposal to the Permaweb.</h4>
  <table class="width-100Percent">
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td><label for="select-category">Category:</label></td>
      <td>${getCategories()}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <label for="smartcontract-name">Name:</label>
      </td>
      <td>
        <input id="smartcontract-name" type="text" />
      </td>
      <td>${helperTooltips("The name of the smart contract")}</td>
    </tr>
    <tr>
      <td>
        <label for="smartcontract-description">Short Description:</label>
      </td>
      <td>
        <input id="smartcontract-description" type="text" />
      </td>
      <td>
        ${helperTooltips(
          "A short description to show in the proposal and the catalog."
        )}
      </td>
    </tr>

    <tr>
      <td>
        <label for="Network-options">Network:</label>
      </td>
      <td>
        <select id="selected-network">
          ${getNetworkSelect()}
        </select>
      </td>
      <td>${helperTooltips("Choose the compatible network")}</td>
    </tr>
  </table>
</div>`;

export const UploadProposalStep2 = () => html` <div
  id="uploadProposalStep2"
  class="uploadProposalDiv"
>
  <h4>Add the contract code.</h4>
  <table class="width-100Percent">
    <tr>
      <td>
        <label for="smartcontract-artifact">Artifact:</label>
      </td>
      <td>
        <textarea
          id="smartcontract-artifact"
          placeholder="Paste the artifact here"
        ></textarea>
      </td>
      <td>${helperTooltips("Solidity contract Artifact")}</td>
    </tr>
    <tr>
      <td>
        <label for="smartcontract-repo">Git repo at commit:</label>
      </td>
      <td>
        <input type="url" id="smartcontract-repo" />
      </td>
      <td>
        ${helperTooltips(
          "A reviewer will build the project at the commit to verify the contract."
        )}
      </td>
    </tr>
    <tr>
      <td><label for="smartcontract-frontend">Front end:</label></td>
      <td><input id="smartcontract-frontend" type="text" /></td>
      <td>
        ${helperTooltips(
          "URL of the Smart contract front end, uploaded to ipfs or arweave."
        )}
      </td>
    </tr>
    <tr>
      <td>
        <label for="implements-simpleterms-checkbox"
          >Inherits from Simple terms?</label
        >
      </td>
      <td>
        <input type="checkbox" id="implements-simpleterms-checkbox" />
      </td>
      <td>
        ${helperTooltips("Does it implement the simple terms interface?")}
      </td>
    </tr>
  </table>
</div>`;

export function UploadProposalStep3() {
  return html` <div id="uploadProposalStep3" class="uploadProposalDiv">
    <h4>Add terms.</h4>
    <small>Upload a .docx file with the proposals.</small>
    ${ProposalDocXDropper()}
  </div>`;
}

export function UploadProposalStep4() {
  return html` <div id="uploadProposalStep4" class="uploadProposalDiv">
    <h4>Create the transaction</h4>
    <table class="width-100Percent">
      <tr>
        <td>
          <label for="accepted-terms"
            >I agree this is permanent and I accept the terms and
            agreements.</label
          >
        </td>
        <td>
          <input type="checkbox" id="accepted-terms" />
        </td>
        <td>
          ${helperTooltips("Accept the Ricardian Fabric terms and agreements!")}
        </td>
      </tr>
      <tr>
        <td>
          <label for="arweave-key-password">Password:</label>
        </td>
        <td>
          <input
            readonly
            onfocus="this.removeAttribute('readonly');"
            autocomplete="off"
            type="password"
            id="arweave-key-password"
          />
        </td>
        <td>${helperTooltips("The password of the arweave key")}</td>
      </tr>
    </table>
  </div>`;
}

export function uploadProposalStep5() {
  // A preview of the smart contract page in the catalog
}

export function UploadProposalButtons(label: string) {
  return html`<div class="row">
    <button class="labelButton" id="create-contract-back">
      ${BackLogo()}Back
    </button>
    <button id="create-contract-proposal" class="labelButton">${label}</button>
  </div>`;
}
