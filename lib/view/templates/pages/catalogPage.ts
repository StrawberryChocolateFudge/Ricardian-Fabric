import { html } from "lit-html";
import {
  AcceptedSmartContractProposal,
  ArweaveQueryResult,
  ArweaveTags,
} from "../../../types";
import { getBlockie } from "../components/getBlockies";

export function getCategories() {
  return html` <select id="select-category" class="cursor-pointer">
    <option>All</option>
    <option>Registries</option>
    <option>Tokens</option>
    <option>Token Sale</option>
    <option>Payments</option>
    <option>Governance</option>
    <option>Other</option>
  </select>`;
}

export function catalogPage() {
  return html`<h3>Catalogue of smart contracts</h3>
    <small>
      Select and deploy a smart contract for your specific use case.
    </small>
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
          <td><label for="select-category">Category:</label></td>
          <td>${getCategories()}</td>
          <td><hr /></td>
        </tr>
      </tbody>
    </table>
    <div id="catalog-content" class="placeholder-item">
      <h3>Loading</h3>
    </div>
    <hr /> `;
}

export function catalogContent(
  uploadsFoallContractsToDisplay: Array<AcceptedSmartContractProposal>,
  allIds: Array<string>,
  uploadsForCategory: ArweaveQueryResult[]
) {
  return uploadsForCategory.map((data) => {
    const id = data.node.id;
    const at = allIds.indexOf(id);

    return smartContractElementBoxes(data, uploadsFoallContractsToDisplay[at]);
  });
}

function smartContractElementBoxes(
  uploadsForCategory: ArweaveQueryResult,
  proposal: AcceptedSmartContractProposal
) {
  return html`<div
    data-arweavetxid="${uploadsForCategory.node.id}"
    data-proposal="${JSON.stringify(proposal)}"
    class="box cursor-pointer  labelButton unselectable contract-page-popup"
  >
    <hr />
    <div class="row padding-5">
      <div class="column">
        <div>${getBlockie(uploadsForCategory.node.id, "50px", "")}</div>
        <label>
          ${getChainMessage(
            getTag(uploadsForCategory.node.tags, "ChainId")
          )}</label
        >
      </div>
      <hr />
      <div class="overflow-auto width-100">
        <small> ${getTag(uploadsForCategory.node.tags, "Name")} </small>
      </div>
    </div>
  </div>`;
}

function getChainMessage(chainId) {
  if (chainId === "ALL") {
    return "Supports all networks.";
  } else {
    return `Supporty only ${chainId}`;
  }
}

function getTag(tags: Array<ArweaveTags>, name: string) {
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].name === name) {
      return tags[i].value;
    }
  }
}
