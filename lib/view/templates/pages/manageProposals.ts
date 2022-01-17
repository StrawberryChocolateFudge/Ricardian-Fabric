import { html, nothing } from "lit-html";
import {
  FetchedProposals,
  PaginatedProposals,
  RankProposal,
} from "../../../types";
import { VOTINGPERIODBLOCKS } from "../../../wallet/catalogDAO/contractCalls";
import {
  ChevronLeftBlack,
  ChevronRightBlack,
  WebAsset,
} from "../components/logos";

export function ManageProposals() {
  return html`<h2 class="fabric">My Proposals</h2>

    <div id="my-rank-proposals-container"></div> `;
}

export function MyProposalsContent(
  paginatedProposals: PaginatedProposals,
  fetchedProposals: FetchedProposals,
  blockNumber: number
) {
  const ranks = fetchedProposals.rank;
  const rankIndexes = fetchedProposals.rankIndexes;

  return html`${MyRankProposalTable(
    ranks,
    rankIndexes,
    blockNumber,
    paginatedProposals.rank.totalPages,
    paginatedProposals.rank.currentPage
  )}`;
}

export function MyRankProposalTable(
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
        <td><label>Created</label></td>
      </tr>
      ${rankProposalTRs.map((r: { rank: RankProposal; index: string }) =>
        rankProposalTR(r.rank, r.index, blockNumber)
      )}
    </table>
    <div>
      ${getRankPagingButtons(totalPages, currentPage, "myRankPaginationButton")}
    </div>
  `;
}

const getPageButtonStartPoint = (totalPages: number, currentPage: number) => {
  if (totalPages <= 3) {
    return 1;
  } else {
    if (currentPage > 1) {
      if (currentPage === totalPages) {
        return currentPage - 2;
      }
      return currentPage - 1;
    } else {
      return 1;
    }
  }
};

const getPageButtonEndPoint = (totalPages: number, currentPage: number) => {
  if (totalPages <= 3) {
    return totalPages;
  } else {
    if (currentPage === 1) {
      return 3;
    } else {
      if (currentPage + 1 < totalPages) {
        return currentPage + 1;
      } else if (currentPage + 2 < totalPages) {
        return currentPage + 2;
      } else {
        return totalPages;
      }
    }
  }
};

export function getRankPagingButtons(
  totalPages: number,
  currentPage: number,
  cssselector: string
) {
  let pageButtons = [];
  const start = getPageButtonStartPoint(totalPages, currentPage);
  const end = getPageButtonEndPoint(totalPages, currentPage);

  for (let i = start; i <= end; i++) {
    pageButtons.push(
      html`<button
        data-rankpage="${i}"
        class="${cssselector} labelButton ${currentPage === i
          ? "light-shadow"
          : null}"
      >
        ${i}
      </button>`
    );
  }

  if (pageButtons.length === 1) {
    return null;
  }

  return html`<button
      id="rank-page-left"
      data-rankpage="${currentPage}"
      data-totalpages="${totalPages}"
      class="labelButton ${currentPage === 1
        ? "background-ccc cursor-notallowed"
        : nothing}"
    >
      ${ChevronLeftBlack()}</button
    >${pageButtons.map((res) => res)}<button
      id="rank-page-right"
      data-rankpage="${currentPage}"
      data-totalpages="${totalPages}"
      class="labelButton ${currentPage === totalPages
        ? "background-ccc cursor-notallowed"
        : nothing}"
    >
      ${ChevronRightBlack()}
    </button>`;
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
      <a
        class="labelButton"
        href="${rankProposal.repository}"
        target="_blank"
        rel="noopener"
        title="${rankProposal.repository}"
        >${WebAsset()}</a
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
            ?disabled=${!getStatusCondition(
              blockNumber,
              rankProposal.createdBlock
            )}
          >
            Close
          </button>`}
    </td>
    <td>${rankProposal.createdBlock}</td>
  </tr>`;
}

export function GetStatus(blockNumber: number, createdBlock: string) {
  return html`
    <td>
      ${getStatusCondition(blockNumber, createdBlock)
        ? html`Finished`
        : html`Open`}
    </td>
  `;
}

export function getStatusCondition(
  blockNumber: number,
  createdBlock: string
): boolean {
  return blockNumber > parseInt(createdBlock) + VOTINGPERIODBLOCKS;
}
