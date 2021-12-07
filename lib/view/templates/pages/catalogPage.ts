import { html } from "lit-html";
import { ProposalType } from "../../../types";
import { getChains } from "../../../wallet/web3";
import { getBlockie } from "../components/getBlockies";
import { helperTooltips } from "../components/helperTooltips";
import { BackLogo } from "../components/logos";

export function getCategories() {
  return html` <select id="select-category">
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
      `"Escrow on Harmony", "Finance","Harmony"`,
      "Escrow on Harmony",
      "Payments",
      "Harmony"
    )}
    ${SmartContractCards(`zsfasfaa`, "Burnable ERC-20", "Tokens", "All")}
    ${SmartContractCards(
      `Generic NFT contract`,
      "Generic NFT contract",
      "Tokens",
      "All"
    )}
  `;
}

export function catalogPage() {
  return html` <style></style>
    <div class="logo-container">
    <div class="Fabric">Smart Contract catalog</div>
  </div>
    <small>
      You can deploy a contract, compatible with Ricardian Fabric, propose a new
      one or Vote.
    </small>
    <div>
      <button class="labelButton" id="create-proposal-button">Create a proposal</button>
      <button class="labelButton" id="review-and-vote-button">Review and Vote</button>
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
            <label id="categories-label" for="select-category">Category:</label>
          </td>
          <td>
    ${getCategories()}
          </td>
          <td><hr/></td>
          <td>
            <button class="labelButton">Search</button>
          </td>
          <td><input id="search-input" type="text" placeholder="Search for..."/></td>
        </tr>
        <tr>
           <td>
            <label>Sort by date</label>
          </td>
          <td>
            <select>
              <option>Ascending</option>
              <option>Descending</option>
            </select>
          </td>
          <td><hr/></td>
          <td><label>Premium</label> <input type="checkbox"/></td>
          <td> <label>ISimpleTerms</label> <input type="checkbox"/></td>
        </tr>
        </tbody>
    </table>
    <div class="catalogList">
     ${getSmartContracts()}
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
        width: 120px;
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
        <small id="category_parag">${category}</small>
        <label for="network_parag">Network:</label>
        <small id="network_parag">${network}</small>
      </div>
    </div>`;
}

export function createProposalPage(proposalType: ProposalType) {
  return html`
    <h2>Create a Proposal</h2>
    <div class="row">
      <button class="labelButton" id="createproposal-back">
        ${BackLogo()} Back
      </button>
      <button id="get-rank-tab-button" class="labelButton">Get Rank</button>
      <button id="propose-new-contract-tab-button" class="labelButton">
        Propose a new smart contract
      </button>
    </div>
    ${proposalType === ProposalType.NewSmartContract
      ? proposeNewContract()
      : proposeGetRank()}
    <div class="row">
      <hr />
      <!-- <button class="NextButton" id="createproposal-proceed">Submit</button> -->
    </div>
    <hr />
  `;
}

function proposeGetRank() {
  return html`
    <h4 id="rankHeader"></h4>
    <small>You need to get Rank to propose a new smart contract.</small>
    <small
      >To create a proposal, add your github repo link, to show off your skills,
      with an open issue to comment on.</small
    >
    <hr />
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
            <label aria-labelledby="github url link" for="github-url"
              >Github url</label
            >
          </td>
          <td>
            <input id="github-url" type="url" />
            <button id="create-rank-proposal" class="labelButton">
              Submit
            </button>
          </td>
          <td>
            ${helperTooltips(
              "A github link to your repositiory containing code to show off."
            )}
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
  `;
}

export function getNetworkSelect() {
  const chains = getChains();

  return chains.map((ch) => html`<option value="${ch.id}">${ch.name}</option>`);
}

function proposeNewContract() {
  return html`
    <small
      >You can propose a new smart contract. The DAO will decide if it's
      eligible to be added to the catalog.</small
    >
    <small
      >Proposal data is uploaded to the permaweb. Select it from the
      dropdown.</small
    >
    <div id="permaweb-dropdown">Permaweb</div>

    <div class="row">
      <label for="proposal-tx-id">Proposal Tx Id:</label>
      <input id="proposal-tx-id" type="text" />
      <button class="labelButton" id="proposal-submit-button">Submit</button>
    </div>
  `;
}
