import { debug } from "arweave/node/lib/merkle";
import { html, nothing } from "lit-html";
import {
  AcceptedSmartContractProposal,
  FetchedProposals,
  PaginatedProposals,
  RankProposal,
  SmartContractProposal,
} from "../../../types";
import { VOTINGPERIODBLOCKS } from "../../../wallet/catalogDAO/contractCalls";
import { getBlockie } from "../components/getBlockies";
import {
  ChevronLeftBlack,
  ChevronRightBlack,
  WebAsset,
} from "../components/logos";
import {
  getPageButtonEndPoint,
  getPageButtonStartPoint,
} from "../components/paginations";

export function ManageProposals() {
  return html`<h2>My Proposals</h2>

    <div id="my-rank-proposals-container"></div>
    <hr />
    <div id="my-smart-contract-proposals-container"></div>
    <hr />
    <div id="my-accepted-contracts-container"></div> `;
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

export function MyAcceptedSmartContratctProposalsTable(
  acceptableContracts: AcceptedSmartContractProposal[],
  indexes: string[],
  blockNumber: number,
  totalPages: number,
  currentPage: number
) {
  let acceptedProposals = [];
  // attaching the indexes

  for (let i = 0; i < indexes.length; i++) {
    if (indexes[i] !== "0") {
      acceptedProposals.push({
        smartContract: acceptableContracts[i],
        index: indexes[i],
      });
    }
  }
  return html`<hr />
    <h5>Accepted Proposals</h5>
    <hr />
    <table class="light-shadow width-100Percent">
      <tr>
        <td><label>Index</label></td>
        <td>
          <label>Contract</label>
        </td>
        <td><label>Active</label></td>
        <td><label>Likes</label></td>
        <td><label>Dislikes</label></td>
        <td></td>
      </tr>
      ${acceptedProposals.map(
        (r: { smartContract: AcceptedSmartContractProposal; index: string }) =>
          acceptedSmartContractProposalTR(r.smartContract, r.index, blockNumber)
      )}
    </table>
    <div>
      ${getSmartContractPagingButtons(
        totalPages,
        currentPage,
        "myAcceptedSmartContractPaginationButton",
        "acceptedcontract"
      )}
    </div> `;
}

export function MySmartContractProposalTable(
  smartContracts: SmartContractProposal[],
  indexes: string[],
  blockNumber: number,
  totalPages: number,
  currentPage: number
) {
  let smartContractProposals = [];
  // attaching the indexes
  for (let i = 0; i < indexes.length; i++) {
    if (indexes[i] !== "0") {
      smartContractProposals.push({
        smartContract: smartContracts[i],
        index: indexes[i],
      });
    }
  }

  return html`<hr />
    <h5>Smart Contract Proposals</h5>
    <hr />
    <table class="light-shadow width-100Percent">
      <tr>
        <td><label>Index</label></td>
        <td>
          <label>Contract</label>
        </td>
        <td><label>Front end</label></td>
        <td><label>Fees</label></td>
        <td><label>Update</label></td>
        <td><label>Approvals</label></td>
        <td><label>Rejections</label></td>
        <td><label>Period</label></td>
        <td><label>Close</label></td>
        <td><label>Created</label></td>
      </tr>
      ${smartContractProposals.map(
        (r: { smartContract: SmartContractProposal; index: string }) =>
          smartContractProposalTR(r.smartContract, r.index, blockNumber)
      )}
    </table>
    <div>
      ${getSmartContractPagingButtons(
        totalPages,
        currentPage,
        "mySmartContractPaginationButton",
        "smartcontract"
      )}
    </div>`;
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
        <td><label>Index</label></td>
        <td><label>Link</label></td>
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

export function getRankPagingButtons(
  totalPages: number,
  currentPage: number,
  cssselector: string
) {
  const pageButtons = getPageButtons(
    totalPages,
    currentPage,
    cssselector,
    "rank"
  );
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

function getPageButtons(
  totalPages: number,
  currentPage: number,
  cssselector: string,
  pageName: string
): Array<any> {
  let pageButtons = [];
  const start = getPageButtonStartPoint(totalPages, currentPage);
  const end = getPageButtonEndPoint(totalPages, currentPage);

  const getPageButtons = (i) => {
    switch (pageName) {
      case "rank":
        return html`<button
          data-rankpage="${i}"
          class="${cssselector} labelButton ${currentPage === i
            ? "light-shadow"
            : null}"
        >
          ${i}
        </button>`;
      case "smartcontract":
        return html`<button
          data-smartcontractpage="${i}"
          class="${cssselector} labelButton ${currentPage === i
            ? "light-shadow"
            : null}"
        >
          ${i}
        </button>`;
      default:
        return html``;
    }
  };

  for (let i = start; i <= end; i++) {
    pageButtons.push(getPageButtons(i));
  }
  return pageButtons;
}

export function getSmartContractPagingButtons(
  totalPages: number,
  currentPage: number,
  cssselector: string,
  name: string
) {
  const pageButtons = getPageButtons(
    totalPages,
    currentPage,
    cssselector,
    name
  );

  if (pageButtons.length === 1) {
    return null;
  }

  return html`<button
      id="${name}-page-left"
      data-smartcontractpage="${currentPage}"
      data-totalpages="${totalPages}"
      class="labelButton ${currentPage === 1
        ? "background-ccc cursor-notallowed"
        : nothing}"
    >
      ${ChevronLeftBlack()}</button
    >${pageButtons.map((res) => res)}<button
      id="${name}-page-right"
      data-smartcontractpage="${currentPage}"
      data-totalpages="${totalPages}"
      class="labelButton ${currentPage === totalPages
        ? "background-ccc cursor-notallowed"
        : nothing}"
    >
      ${ChevronRightBlack()}
    </button>`;
}

function rankProposalTR(
  rankProposal: RankProposal,
  proposalIndex: string,
  blockNumber: number
) {
  // For the button, I use a css selector instead of Id, so  I can select all in the screen at once.
  return html`<tr>
    <td><label>${proposalIndex}</label></td>
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

function acceptedSmartContractProposalTR(
  acceptedProp: AcceptedSmartContractProposal,
  index: string,
  blockNumber: number
) {
  return html` <tr>
    <td><label>${index}</label></td>
    <td>
      <button
        class="border-none cursor-pointer contract-page-popup"
        data-arweavetx="${acceptedProp.arweaveTxId}"
        title="Uploaded Proposal Details"
      >
        ${getBlockie(acceptedProp.arweaveTxId, "50px", "")}
      </button>
    </td>
    <td>
      ${acceptedProp.removed
        ? html`<label>REMOVED</label>`
        : html`<button
            class="labelButton contract-remove-button"
            data-index="${index}"
            title="Remove the smart contract"
          >
            Remove
          </button>`}
    </td>
    <td><label>${acceptedProp.likes}</label></td>
    <td><label>${acceptedProp.dislikes}</label></td>
    <td>
      <button
        class="labelButton contract-claim-reward-button"
        data-index="${index}"
        title="Claim the reward!"
      >
        Claim Reward!
      </button>
    </td>
  </tr>`;
}

function smartContractProposalTR(
  smartContractProposal: SmartContractProposal,
  proposalIndex: string,
  blockNumber: number
) {
  return html`<tr>
    <td><label>${proposalIndex}</label></td>
    <td>
      <button
        class="border-none cursor-pointer contract-page-popup"
        data-arweavetx="${smartContractProposal.arweaveTxId}"
        title="Uploaded proposal details"
      >
        ${getBlockie(smartContractProposal.arweaveTxId, "50px", "")}
      </button>
    </td>
    <td><label>${smartContractProposal.hasFrontend ? "YES" : "NO"}</label></td>
    <td><label>${smartContractProposal.hasFees ? "YES" : "NO"}</label></td>
    <td>
      <label
        title="${smartContractProposal.isUpdate
          ? "Update of accepted contract number " +
            smartContractProposal.updateOf
          : "Not an update"}"
        >${smartContractProposal.isUpdate
          ? smartContractProposal.updateOf
          : "NO"}</label
      >
    </td>
    <td>${smartContractProposal.approvals}</td>
    <td>${smartContractProposal.rejections}</td>
    ${GetStatus(blockNumber, smartContractProposal.createdBlock)}
    <td>
      ${smartContractProposal.closed || smartContractProposal.penalized
        ? html`<p>Closed</p>`
        : html`<button
            data-proposalindex="${proposalIndex}"
            class="labelButton smartContractProposalButtonId"
            ?disabled=${!getStatusCondition(
              blockNumber,
              smartContractProposal.createdBlock
            )}
          >
            Close
          </button>`}
    </td>
    <td>${smartContractProposal.createdBlock}</td>
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
