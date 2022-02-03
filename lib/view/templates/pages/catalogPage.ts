import { html } from "lit-html";
import { getBlockie } from "../components/getBlockies";

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
  return html`<h3>Catalogue of smart contracts</h3>
    <small>
     Select a smart contract for your specific use case.
    </small>
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
        width: 60px;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
    </style>
    <div class="card">
      ${getBlockie(id, "100%", "")}
      <div class="row">
        <div class="column"></div>
        <h4><b>${name}</b></h4>
        <label for="category_parag">Category:</label>
        <small id="category_parag">${category}</small>
        <label for="network_parag">Network:</label>
        <small id="network_parag">${network}</small>
      </div>
    </div>`;
}
