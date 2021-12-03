import { html } from "lit-html";
import { helperTooltips } from "../components/helperTooltips";
import { BackLogo } from "../components/logos";
import { getCategories, getNetworkSelect } from "../pages/catalogPage";

export const UploadProposalPopup = () => html`
      <div class="uploadProposalDiv">     
	<h4>Upload a proposal to the Permaweb</h4>
	<table class="width-100Percent">
		<thead>
		<tr>
		<th></th>
		<th></th>
		<th></th> 
		</tr>
		</thead>
		<tbody>
		<tr>
		<td><label for="select-category">Category:</label></td>
		<td>${getCategories()}</td>
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
		<label for="smartcontract-description">Description:</label>
		</td>
		<td>
		<input id="smartcontract-description" type="text" />
		</td>
		<td>
		${helperTooltips(
      "A short description to show in the proposal and the catalog."
    )}
		</td>
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
		</tr><td>
		<label for=""></label>
		</td>
		</tr>
		<tr>
		<td>
		<label for="smartcontract-artifact">Artifact:</label>
		</td>
		<td>
		<textarea  id="smartcontract-artifact" placeholder="Paste the artifact here"></textarea>
		</td>
		<td>${helperTooltips("Solidity contract Artifact")}</td>
		</tr>
		<tr>
		<td>
		<label for="smartcontract-repo">Git repo:</label>
		</td>
		<td>
		<input type="url" id="smartcontract-repo" />
		</td>
		<td>${helperTooltips("The url of the git repo")}</td>
		</tr>
		<tr>
		<td><label for="smartcontract-commit">Commit id:</label></td>
	<td><input id="smartcontract-commit" type="text"/></td>
	<td>${helperTooltips(
    "A reviewer will build the project at the commit to verify the contract."
  )}</td>
		</tr>
		<tr>
		<td>
		<label for="implements-simpleterms-checkbox">Inherits from Simple terms?</label>

		</td>
		<td>
			<input type="checkbox" id="implements-simpleterms-checkbox"/>
		</td>
		<td>
			${helperTooltips("Does it implement the simple terms interface?")}
		</td>
		</tr>
		<tr>
		<td><hr /></td>
		<td></td>
		<td></td>
		</tr>
		<td><hr /></td>
		<td></td>
		<td></td>
		</tr>
		<tr>
		<td>
		<label for="smartcontract-terms">Terms:</label>
		</td>
		<td>
		<input type="file" id="smartcontract-terms" />
		</td>
		<td>${helperTooltips("The terms of the contract. A .docx file.")}</td>
		</tr>
		
		<tr>
		<td>
		<label for="smartcontract-premium">Premium:</label>
		</td>
		<td>
		<input id="smartcontract-premium" type="checkbox" />
		</td>
		<td>${helperTooltips("Is the contract for sale of free?")}</td>
		</tr>
		<tr>
		<td>
		<label for="smartcontract-price">Price (Ric):</label>
		</td>
		<td>
		<input id="smartcontract-price" type="number" disabled />
		</td>
		<td>${helperTooltips("The cost of the contract in RIC tokens.")}</td>
		</tr>
		<tr>
		<td>
		<label for="accepted-terms">I accept the terms.</label>
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
		<input readonly onfocus="this.removeAttribute('readonly');" autocomplete="off" type="password" id="arweave-key-password"/>
		</td>
		<td>
		${helperTooltips("The password of the arweave key")}
		</td>
		</tr>
		</tbody>
	</table>
	<div class="row">
		<button class="labelButton" id="create-contract-back">${BackLogo()}Back</button>
		<button id="create-contract-proposal" class="labelButton">Submit</button>
	</div>
      </div>
      <hr/>
      <hr/>
`;

export const UploadProposalSummary = (fee: string, id: string) => {
  return html`
    <table>
      <tr>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td><label>Transaction id:</label></td>
        <td>${id}</td>
      </tr>
      <tr>
        <td>
          <label>Fee:</label>
        </td>
        <td>${fee}</td>
      </tr>
    </table>
    <div id="upload-proposal-display"></div>
    <div class="row">
      <button class="labelButton" id="post-proposal-back">
        ${BackLogo()}Back
      </button>
      <button id="post-proposal" class="labelButton">Post</button>
    </div>
  `;
};
