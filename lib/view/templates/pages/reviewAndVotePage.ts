import { html } from "lit-html";
import { RankProposal, RemovalProposal } from "../../../types";
import { VOTINGPERIODBLOCKS } from "../../../wallet/catalogDAO/contractCalls";
import { getBlockie } from "../components/getBlockies";
import {
  AddLogo,
  ManageAccountLogo,
  ThumbsDown,
  ThumbsUp,
  WebAsset,
} from "../components/logos";
import {
  getRankPagingButtons,
  GetStatus,
  getStatusCondition,
} from "./manageProposals";

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
        <td><label>Block</label></td>
      </tr>
      ${rankProposalTRs.map((r) =>
        rankProposalTR(r.rank, r.index, blockNumber)
      )}
    </table>
    <div>
      ${getRankPagingButtons(
        totalPages,
        currentPage,
        "rankPagePaginationButton"
      )}
    </div>
  `;
}

function rankProposalTR(
  rankProposal: RankProposal,
  index: string,
  blockNumer: number
) {
  const finished = getStatusCondition(blockNumer, rankProposal.createdBlock);
  let approvalCSS = "";
  let rejectionCSS = "";
  const approvals = parseInt(rankProposal.approvals);
  const rejections = parseInt(rankProposal.rejections);

  if (finished) {
    if (approvals < 10) {
      // If the approvals are less than 10, its rejected;
      rejectionCSS = "background-lightcoral";
    } else if (rejections > approvals) {
      rejectionCSS = "background-lightcoral";
    } else if (approvals > rejections) {
      approvalCSS = "background-lightgreen";
    }
  }
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
          class="labelButton rankProposalApproveButton ${approvalCSS}"
          data-index="${index}"
          title="${rankProposal.approvals}"
          ?disabled=${finished}
        >
          ${ThumbsUp()}
        </button>
      </td>
      <td>
        <button
          class="labelButton rankProposalRejectButton ${rejectionCSS}"
          data-index="${index}"
          title="${rankProposal.rejections}"
          ?disabled=${finished}
        >
          ${ThumbsDown()}
        </button>
      </td>
      <td>
        ${rankProposal.closed
          ? "Closed"
          : GetStatus(blockNumer, rankProposal.createdBlock)}
      </td>
      <td>
        <div
          title="${getExpiresElementTitle(
            rankProposal.createdBlock,
            blockNumer
          )}"
        >
          ${rankProposal.createdBlock}
        </div>
      </td>
    </tr>`;
}

function getExpiresElementTitle(createdBlock: string, blockNumber: number) {
  if (!getStatusCondition(blockNumber, createdBlock)) {
    return `Expires in ${
      parseInt(createdBlock) + VOTINGPERIODBLOCKS - blockNumber
    } blocks.`;
  } else {
    return "Expired";
  }
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
