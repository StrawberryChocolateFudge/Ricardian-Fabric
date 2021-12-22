import { html } from "lit-html";
import { RankProposal, RemovalProposal } from "../../../types";
import { getBlockie } from "../components/getBlockies";
import {
  AddLogo,
  ManageAccountLogo,
  ThumbsDown,
  ThumbsUp,
  WebAsset,
} from "../components/logos";
import { getRankPagingButtons, GetStatus } from "./manageProposals";

export function ReviewAndVote() {
  return html`
    <h2>
      DAO
      <button
        id="create-proposal-button"
        class="labelButton"
        title="Propose a new smart contract"
      >
        ${AddLogo()}
      </button>
      <button id="my-proposals-button" class="labelButton" title="My proposals">
        ${ManageAccountLogo()}
      </button>
    </h2>
    <div id="rank-proposal-table"></div>
  `;
}

export function RankProposalTable(
  ranks: RankProposal[],
  rankIndexes: string[],
  blockNumber: number,
  totalPages: number,
  currentPage: number
) {
  let rankProposalTRs = [];
  for (let i = 0; i < rankIndexes.length; i++) {
    if (rankIndexes[i] !== "0") {
      rankProposalTRs.push({ rank: ranks[i], index: rankIndexes[i] });
    }
  }
  console.log(rankProposalTRs);

  return html`
    <hr />
    <h5>New Rank</h5>
    <hr />
    <table class="light-shadow width-100Percent">
      <tr>
        <td><label>Address</label></td>
        <td><label>Repository</label></td>
        <td><label>Approve</label></td>
        <td><label>Reject</label></td>
        <td><label>Status</label></td>
      </tr>
      ${rankProposalTRs.map((r) =>
        rankProposalTR(r.rank, r.index, blockNumber)
      )}
    </table>
    <div>${getRankPagingButtons(totalPages, currentPage)}</div>
  `;
}

function rankProposalTR(
  rankProposal: RankProposal,
  index: string,
  blockNumer: number
) {
  return html`<tr>
      <td><hr /></td>
      <td><hr /></td>
      <td><hr /></td>
      <td><hr /></td>
      <td><hr /></td>
    </tr>
    <tr>
      <td>${getBlockie(rankProposal.creator, "50px", "")}</td>
      <td>
        <a
          class="labelButton"
          href="${rankProposal.repository}"
          target="_blank"
          rel="noopener"
          title="${rankProposal.repository}"
          >${WebAsset()}</a
        >
      </td>
      <td>
        <button
          class="labelButton rankProposalApproveButton"
          data-index="${index}"
        >
          ${ThumbsUp()}
        </button>
        ${rankProposal.approvals}
      </td>
      <td>
        <button
          class="labelButton rankProposalRejectButton"
          data-index="${index}"
        >
          ${ThumbsDown()}
        </button>
        <span>${rankProposal.rejections}</span>
      </td>
      <td>
        ${rankProposal.closed
          ? "Closed"
          : GetStatus(blockNumer, rankProposal.createdBlock)}
      </td>
    </tr>`;
}

export function SmartContractProposalsTable() {
  return html`    </h2>
    <h5>New smart contract proposals</h5>
    <hr />
    <table class="light-shadow">
      <tr>
        <td><label>Id</label></td>
        <td><label>Rank</label></td>
        <td><label>Category</label></td>
        <td><label>Compare</label></td>
        <td><label>Name</label></td>
        <td><label>Approve</label></td>
        <td><label>Reject</label></td>
      </tr>
      <tr>
        <td>${getBlockie("asf", "50px", "")}</td>
        <td>1</td>
        <td>Tokens</td>
        <td><button class="labelButton">Artifact</button></td>
        <td><button class="labelButton">HRC-20 token</button></td>
        <td><button class="labelButton">${ThumbsUp()}</button></td>
        <td><button class="labelButton">${ThumbsDown()}</button></td>
      </tr>
    </table>`;
}

export function RemovalProposalsTable(removalProposals: RemovalProposal[]) {
  return html` </table>
      <hr />
      <h5>Removal Request</h5>
      <hr />
      <table class="light-shadow">
        <tr>
          <td><label>From</label></td>
          <td><label>Id</label></td>
          <td><label>Discussion</label></td>
          <td><label>Name</label></td>
          <td><label>Approve</label></td>
          <td><label>Reject</label></td>
        </tr>
        ${RemovalRequestBuilder(removalProposals)}
      </table>
    </table>`;
}

export function RemovalRequestBuilder(removalProposals: RemovalProposal[]) {
  // TODO: Removal proposals need to fetch the transaction ID from the acceptable,
  // to populate the ID field blocky,the name etc

  return html`${removalProposals.map(
    (proposal: RemovalProposal) => html`<tr>
      <td>${getBlockie(proposal.creator, "50px", "")}</td>
      <td>${getBlockie("asf", "50px", "")}</td>
      <td><a href="${proposal.discussionUrl}" class="labelButton">Here</a></td>
      <td><button class="labelButton">HRC-20 token</button></td>
      <td><button class="labelButton">${ThumbsUp()}</button></td>
      <td><button class="labelButton">${ThumbsDown()}</button></td>
    </tr> `
  )}`;
}
