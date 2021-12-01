import { html } from "lit-html";
import { getBlockie } from "../components/getBlockies";
import { helperTooltips } from "../components/helperTooltips";
import { BackLogo } from "../components/logos";

function getCategories() {
  return html` <select>
    <option>Registries</option>
    <option>Tokens</option>
    <option>Token Sale</option>
    <option>Payments</option>
    <option>Governance</option>
    <option>Other</option>
  </select>`;
}

function getSmartContracts() {
  return html`
    ${SmartContractCards(
      `Generic ERC-20", "Tokens","All"`,
      "Generic ERC-20",
      "Tokens",
      "All"
    )}
    ${SmartContractCards(
      `"Capped tokens", "Tokens","All"`,
      "Capped tokens",
      "Tokens",
      "All"
    )}
    ${SmartContractCards(
      `"Escrow with xDai", "Finance","xDai"`,
      "Escrow with xDai",
      "Finance",
      "xDai"
    )}
    ${SmartContractCards(`zsfasfaa`, "Generic ERC-20", "Tokens", "All")}
    ${SmartContractCards(`zsfasfaa`, "Generic ERC-20", "Tokens", "All")}
  `;
}

export function catalogPage() {
  return html` <style></style>
    <h2>Smart Contract Catalog</h2>
    <small>
      You can deploy a contract, compatible with Ricardian Fabric, propose a new
      one or Vote.
    </small>
    <div>
      <button class="labelButton" id="create-proposal-button">Create a proposal</button>
      <button class="labelButton">Review and Vote</button>
    </div>
    <table>
      <thead>
        <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <label id="categories-label">Category:</label>
          </td>
          <td>
    ${getCategories()}
          </td>
          <td><hr/></td>
          <td>
            <button class="labelButton">Search:</button>
          </td>
          <td>
            <input id="search-input" type="text" placeholder="Search for..."/>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="catalogList">
     ${getSmartContracts()}
</div>
<hr/>
      <div class="SCIntent-button-row">
        <button class="backButton" id="SCIntentBackButton">Back</button>
      </div>
      <hr />
    </div>`;
}

export function SmartContractCards(
  id: string,
  name: string,
  category: string,
  network: string
) {
  return html`<style>
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        /* width: 20%; */
        margin-top: 10px;
        cursor: pointer;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
    </style>
    <div class="card">
      ${getBlockie(id, "100%", "")}
      <div>
        <h4><b>${name}</b></h4>
        <label for="category_parag">Category:</label>
        <p id="category_parag">${category}</p>
        <label for="network_parag">Network:</label>
        <p id="network_parag">${network}</p>
      </div>
    </div>`;
}

export function createProposalPopup() {
  return html`
    <h2>Create a Proposal</h2>
    <small
      >You can propose a new smart contract. The DAO will decide if it's
      eligible to be added to the catalog.</small
    >
    <small>Proposal data is uploaded to the permaweb.</small>
    <hr/>
    <p>TODO: Add tabs</p>
    <div id="permaweb-dropdown">Permaweb</div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
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
            <td><select>
              <option>All</option>
              <option>Harmony</option>
            </select>></td> 
            <td>${helperTooltips("Choose the compatible network")}</td>
          </tr>
        </tr><td>
         <label for=""></label>
        </td>
        </tr>
        <tr>
          <td>
            <label for="smartcontract-code">Code:</label>
          </td>
          <td>
            <input type="file" id="smartcontract-code" />
          </td>
          <td>${helperTooltips("The code of the contract. A .sol file.")}</td>
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
            <label for="smartcontract-repo">Git repo:</label>
          </td>
          <td>
            <input type="url" id="smartcontract-repo" />
          </td>
          <td>${helperTooltips("The url of the git repo")}</td>
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
            ${helperTooltips(
              "Accept the Ricardian Fabric terms and agreements!"
            )}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <button class="backButton" id="createproposal-back">
        ${BackLogo()} Back
      </button>
      <hr />
      <button class="NextButton" id="createproposal-proceed">Next</button>
    </div>
    <hr />
  `;
}
