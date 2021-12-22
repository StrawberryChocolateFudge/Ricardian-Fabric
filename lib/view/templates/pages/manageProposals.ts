import { html } from "lit-html";
import {
  FetchedProposals,
  PaginatedProposals,
  RankProposal,
} from "../../../types";
import { VOTINGPERIODBLOCKS } from "../../../wallet/catalogDAO/contractCalls";

export function ManageProposals() {
  return html`<h2>My Proposals</h2>

    <div id="my-proposals-container"></div> `;
}

export function MyProposalsContent(
  paginatedProposals: PaginatedProposals,
  fetchedProposals: FetchedProposals,
  blockNumber: number
) {
  const ranks = fetchedProposals.rank;
  const rankIndexes = fetchedProposals.rankIndexes;

  return html`${RankProposalTable(
    ranks,
    rankIndexes,
    blockNumber,
    paginatedProposals.rank.totalPages,
    paginatedProposals.rank.currentPage
  )}`;
}

function RankProposalTable(
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
    <h5>Rank proposals</h5>
    <hr />
    <table class="light-shadow width-100Percent">
      <tr>
        <td><label>Repository</label></td>
        <td><label>Approvals</label></td>
        <td><label>Rejections</label></td>
        <td><label>Period</label></td>
        <td><label>Close</label></td>
      </tr>
      ${rankProposalTRs.map((r: { rank: RankProposal; index: string }) =>
        rankProposalTR(r.rank, r.index, blockNumber)
      )}
    </table>
    <div>${getRankPagingButtons(totalPages, currentPage)}</div>
  `;
}

export function getRankPagingButtons(totalPages: number, currentPage: number) {
  let pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      html`<button
        data-rankpage="${i}"
        class="labelButton ${currentPage === i ? "light-shadow" : null}"
      >
        ${i}
      </button>`
    );
  }

  if (pageButtons.length === 1) {
    return null;
  }

  return pageButtons.map((res) => res);
}

export function getRankProposals() {}

function rankProposalTR(
  rankProposal: RankProposal,
  proposalIndex: string,
  blockNumber: number
) {
  // For the button, I use a css selector instead of Id, so  I can select all in the screen at once.
  return html`<tr>
    <td>
      <a href="${rankProposal.repository}" target="_blank" rel="noopener"
        >Here</a
      >
    </td>
    <td>${rankProposal.approvals}</td>
    <td>${rankProposal.rejections}</td>
    ${GetStatus(blockNumber, rankProposal.createdBlock)}
    <td>
      ${rankProposal.closed
        ? html`<p>Closed</p>`
        : html` <button
            data-proposalindex=${proposalIndex}
            class="labelButton rankProposalButtonId"
          >
            Close
          </button>`}
    </td>
  </tr>`;
}

export function GetStatus(blockNumber: number, createdBlock: string) {
  return html`
    <td>
      ${blockNumber > parseInt(createdBlock) + VOTINGPERIODBLOCKS
        ? html`Finished`
        : html`Open`}
    </td>
  `;
}
