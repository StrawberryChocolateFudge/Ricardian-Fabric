import { html } from "lit-html";
import { helperTooltips } from "../components/helperTooltips";

export function deploySCIntentPopup() {
  return html` <style></style>
    <h2>Smart Contract Catalog</h2>
    <small>
      You can deploy a contract, compatible with Ricardian Fabric.
    </small>
    <div class="deploySCIntentContainer">
      <ul class="deploySCUL">
        <li id="HRC20-li" class="deploySCLI">
          <input id="HRC20-checkbox" type="checkbox" checked />ERC20
          ${helperTooltips("Tokens deployed are compatible with the standard.")}
        </li>
      </ul>

      <div class="SCIntent-button-row">
        <button class="backButton" id="SCIntentBackButton">Back</button>
        <hr />
        <button class="NextButton" id="SCIntentNextButton">Next</button>
      </div>
      <hr />
    </div>`;
}

export function createProposalPopup() {
  return html`
    <h2>Create a Proposal</h2>
    <small
      >You can propose a new smart contract. The DAO will decide if it's
      eligible to be added to the catalog.</small
    >
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
        <tr>
          <td>
            <label for="smartcontract-isERC20">ERC20?</label>
          </td>
          <td>
            <input type="checkbox" id="smartcontract-isERC20" />
          </td>
          <td>
            ${helperTooltips(
              "Is it an erc20? Used for adding tokens to the wallet automaticly."
            )}
          </td>
        </tr>
        <tr id="erc20-name-row">
          <td>
            <label for="isERC20-name">ERC20 name:</label>
          </td>
          <td>
            <input id="isERC20-name" type="text" disabled />
          </td>
          <td>${helperTooltips("The name of the ERC20")}</td>
        </tr>
        <tr id="erc20-symbol-row">
          <td>
            <label for="isERC20-symbol">ERC20 Symbol:</label>
          </td>
          <td>
            <input id="isERC20-symbol" type="text" disabled />
          </td>
          <td>${helperTooltips("The symbol of the ERC20")}</td>
        </tr>
        <tr id="erc20-decimals-row">
          <td>
            <label for="isERC20-decimals">ERC20 Decimals:</label>
          </td>
          <td>
            <input id="isERC20-decimals" type="number" disabled />
          </td>
          <td>${helperTooltips("The decimals of the ERC20")}</td>
        </tr>
        <tr>
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
      <button class="backButton" id="createproposal-back">Back</button>
      <hr />
      <button class="NextButton" id="createproposal-proceed">Next</button>
    </div>
    <hr />
  `;
}
