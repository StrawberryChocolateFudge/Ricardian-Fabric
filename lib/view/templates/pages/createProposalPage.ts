import { html } from "lit-html";
import { getChains } from "../../../wallet/web3";
import { helperTooltips } from "../components/helperTooltips";
import { ChevronRightBlack } from "../components/logos";

export function createProposalPage() {
  return html`
    <h2>Create a Proposal</h2>
    <div class="row">
      <div id="permaweb-dropdown">Permaweb</div>
    </div>
    <h4 id="rankHeader"></h4>
    <div id="loading-display" class="text-align-center"></div>
    <div id="proposeNewContract">${proposeNewContract()}</div>
    <div id="proposeNewRank">${proposeGetRank()}</div>
    <div id="proposalPending">${proposalPending()}</div>
  `;
}

function proposalPending() {
  return html` <small
    >You need to close your last proposal before you can create a new
    one!</small
  >`;
}

function proposeGetRank() {
  return html`
    <small>You need to get Rank to propose a new smart contract.</small>
    <small
      >To create a proposal, add your github repo link, to show off your skills,
      with an open issue to comment on.</small
    >
    <hr />

    <div class="row">
      <label aria-labelledby="github url link" for="github-url"
        >Github url</label
      >

      <input id="github-url" type="url" />

      <button id="create-rank-proposal" class="labelButton">
        ${ChevronRightBlack()}
      </button>

      ${helperTooltips(
        "A github link to your repositiory containing code to show off."
      )}
    </div>

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
    <div class="row">
      <label for="proposal-tx-id">Proposal Tx Id:</label>
      <input id="proposal-tx-id" type="text" />
      <button class="labelButton" id="proposal-submit-button">Submit</button>
    </div>
  `;
}
