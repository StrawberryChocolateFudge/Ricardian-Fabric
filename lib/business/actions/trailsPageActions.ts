import { Contract } from "web3-eth-contract";
import {
  dispatch_renderError,
  dispatch_renderTrailDataPage,
  dispatch_trailsDetails,
  dispath_trailsTabs,
} from "../../dispatch/render";
import { fetchTransactionBy } from "../../fetch";
import { getPublicTrail, getTags } from "../../fetch/graphql";
import {
  ArweaveDataDisplayContent,
  ArweaveDataPage,
  ArweaveNode,
  ContractTypes,
  Options,
  State,
  Status,
  TrailData,
  TrailDetails,
} from "../../types";
import { copyStringToClipboard, getById } from "../../view/utils";
import {
  add,
  blacklist,
  getBlackList,
  getTrailContent,
  getTrailDetails,
  getTrailsContract,
  newTrail,
} from "../../wallet/trails/contractCalls";
import { getAddress } from "../../wallet/web3";
import { getTotalPages, hasError, OptionsBuilder } from "../utils";

export async function trailsPageActions(props: State) {
  const createTabButton = getById("create-trail-tab");
  const searchTabButton = getById("search-trail-tab");
  const newTrailInputEl = getById("new-trail-input") as HTMLInputElement;
  const addTrailEl = getById("add-new-trail");
  const trailIdEl = getById("trail-id") as HTMLInputElement;
  const accessEl = getById("access-input") as HTMLInputElement;
  const searchTrail = getById("trail-find");
  const myAddressOptions = await OptionsBuilder(() => getAddress());

  if (hasError(myAddressOptions)) {
    return;
  }
  const addr = myAddressOptions.data;
  const trailsContractOptions = await OptionsBuilder(() => getTrailsContract());
  const trails = trailsContractOptions.data;

  if (hasError(trailsContractOptions)) {
    return;
  }
  dispath_trailsTabs(props, "search", trails, addr);

  createTabButton.onclick = function () {
    dispath_trailsTabs(props, "create", trails, addr);
  };
  searchTabButton.onclick = function () {
    dispath_trailsTabs(props, "search", trails, addr);
  };

  addTrailEl.onclick = async function () {
    if (newTrailInputEl.value === "") {
      dispatch_renderError("Trail name is missing");
      return;
    }
    const trailId = newTrailInputEl.value;

    const checkIfExistsOptions = await OptionsBuilder(() =>
      getTrailDetails(trails, trailId, addr)
    );

    if (hasError(checkIfExistsOptions)) {
      return;
    }
    const trailDetails = checkIfExistsOptions.data;

    if (trailDetails.initialized) {
      dispatch_renderError("Trail already exists!");
      return;
    }

    const onError = (err, receipt) => {
      dispatch_renderError(err.message);
      return;
    };
    const onReceipt = (err, receipt) => {
      dispath_trailsTabs(props, "search", trails, addr);
      trailIdEl.value = trailId;
      searchTrail.click();
      return;
    };

    const access = accessEl.checked ? "private" : "public";

    await newTrail(trails, trailId, access, addr, onError, onReceipt);
  };
  await searchButtonClicked(props, trails, addr);
}

export async function searchButtonClicked(
  props: State,
  trails: Contract,
  addr: string
) {
  const searchTrail = getById("trail-find");
  const trailIdEl = getById("trail-id") as HTMLInputElement;

  searchTrail.onclick = async function () {
    if (trailIdEl.value === "") {
      dispatch_renderError("Trail id missing");
      return;
    }
    const trailId = trailIdEl.value;

    const checkIfExistsOptions = await OptionsBuilder(() =>
      getTrailDetails(trails, trailId, addr)
    );

    if (hasError(checkIfExistsOptions)) {
      return;
    }
    let trailDetails: TrailDetails = checkIfExistsOptions.data;

    if (!trailDetails.initialized) {
      dispatch_renderError("The trail doesn't exist");
      return;
    }

    dispatch_trailsDetails(props, trailId, addr, trails, {
      initialized: trailDetails.initialized,
      access: trailDetails.access === "0" ? "private" : "public",
      creator: trailDetails.creator,
    });
  };
}

export async function fetchAllTrailDetails(
  props: State,
  trailId,
  trails: Contract,
  trailDetails: TrailDetails,
  caller: string,
  creatorCalls: boolean
) {
  const privateAddTx = getById("private-add-txid") as HTMLButtonElement;
  const refreshBtn = getById("refresh-button");
  refreshBtn.onclick = function () {
    dispatch_trailsDetails(props, trailId, caller, trails, trailDetails);
  };

  privateAddTx.onclick = async function () {
    const addInput = getById("add-tx-input") as HTMLInputElement;
    if (addInput.value.length !== 43) {
      dispatch_renderError("Invalid arweave transaction id");
      return;
    }

    const onError = (error: any, receipt: any) => {
      dispatch_renderError("An error occured while saving the trail");
    };
    const onReceipt = (receipt: any) => {
      addInput.value = "";
      // Dispatch a rerender for the trail details!
      dispatch_trailsDetails(props, trailId, caller, trails, trailDetails);
    };
    await add(trails, trailId, addInput.value, caller, onError, onReceipt);
  };

  const blacklistOptions = await OptionsBuilder(() =>
    getBlackList(trails, trailId, caller)
  );

  if (hasError(blacklistOptions)) {
    return;
  }

  //Compare the public data with the blacklist
  const blacklist: Array<string> = blacklistOptions.data;

  let trailContent;

  if (trailDetails.access === "private") {
    const trailContentOptions = await OptionsBuilder(() =>
      getTrailContent(trails, trailId, caller)
    );

    if (hasError(trailContentOptions)) {
      return;
    }
    trailContent = filterAddedTrailsWithBlackList(
      trailContentOptions.data,
      blacklist
    );
  } else if (trailDetails.access === "public") {
    const publicTrailOptions = await getPublicTrail(trailId);

    if (hasError(publicTrailOptions)) {
      return;
    }
    const edges: Array<{ node: ArweaveNode }> =
      publicTrailOptions.data.transactions.edges;
    trailContent = filterEdgesWithBlacklist(edges, blacklist);
  }

  trailDataPagePaginated(
    props,
    creatorCalls,
    trailContent,
    1,
    trailDetails,
    caller,
    trails,
    trailId
  );
}

async function trailDataPagePaginated(
  props: State,
  creatorCalls: boolean,
  trailContent: string[],
  currentPageIndex: number,
  trailDetails: TrailDetails,
  caller: string,
  trails: Contract,
  trailId: string
) {
  const dataPage = await getPage(
    trailContent,
    currentPageIndex,
    trailDetails.access
  );

  dispatch_renderTrailDataPage(
    props,
    dataPage,
    creatorCalls,
    caller,
    trails,
    trailId,
    trailDetails
  );
}

async function getPage(
  txIds: Array<string>,
  currentPage: number,
  access: string
) {
  const PageSize = 5; // 5 comments on a page
  const currentDataToFetch = getCurrentContentToFetch(
    currentPage,
    txIds,
    PageSize
  );

  const fetchedData = await fetchDataOptions(currentDataToFetch);

  const dataPage: ArweaveDataPage = {
    totalPages: getTotalPages(txIds.length, PageSize),
    totalTxIds: txIds,
    currentPage,
    currentContent: fetchedData,
  };

  return dataPage;
}

async function fetchDataOptions(currentDataToFetch: Array<string>) {
  let correctedData: ArweaveDataDisplayContent[] = [];
  for (let i = 0; i < currentDataToFetch.length; i++) {
    const res = await OptionsBuilder(() =>
      fetchTransactionBy<TrailData>(currentDataToFetch[i])
    );
    if (res.status === Status.Failure) {
      correctedData.push({
        txId: currentDataToFetch[i],
        hadError: true,
        comment: "",
        linkedTransaction: "",
        created: "",
        metadisplay: "",
        linkedContractType: "",
      });
    } else {
      const data: TrailData = res.data;

      // Fetch details about the linked transaction

      const tagOptions = await getTags(data.linkedTransaction);

      const [metadisplay, linkedContractType] = await getMetaDisplay(
        tagOptions,
        data.linkedTransaction
      );
      correctedData.push({
        txId: currentDataToFetch[i],
        hadError: false,
        comment: data.comment,
        linkedTransaction: data.linkedTransaction,
        created: data.created,
        metadisplay,
        linkedContractType,
      });
    }
  }
  return correctedData;
}

async function getMetaDisplay(
  tagOptions: Options<any>,
  linkedTransaction: string
) {
  let metadisplay = "";
  let linkedContractType = "";
  if (tagOptions.status === Status.Success) {
    const edges = tagOptions.data.transactions.edges;
    if (edges.length > 0) {
      const tags = edges[0].node.tags;
      const [contractType, contentType] = getDetailsFromTags(tags);
      // If this is a comment, then I fetch what it's replying to...
      // Else I will display the contentType
      linkedContractType = contractType;
      if (contractType === ContractTypes.trail) {
        const replyToOptions = await OptionsBuilder(() =>
          fetchTransactionBy<TrailData>(linkedTransaction)
        );
        if (replyToOptions.status === Status.Success) {
          const data: TrailData = replyToOptions.data;
          metadisplay = data.comment;
          //If the transaction links a comment, I don't render the linked transaction
        }
      } else {
        metadisplay = contentType;
      }
    }
  }

  return [metadisplay, linkedContractType];
}

function getDetailsFromTags(
  tags: Array<{ name: string; value: string }>
): [string, string] {
  let contractType = "";
  let contentType = "";

  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    if (tag.name === "Contract-Type") {
      contractType = tag.value;
    }
    if (tag.name === "Content-Type") {
      contentType = tag.value;
    }
  }

  return [contractType, contentType];
}

function getCurrentContentToFetch(
  currentPage: number,
  totalTxIds: Array<string>,
  pageSize: number
) {
  let currentDataTofetch = [];
  for (let i = 0; i < totalTxIds.length; i++) {
    if (getTotalPages(i + 1, pageSize) === currentPage) {
      currentDataTofetch.push(totalTxIds[i]);
    }
  }
  return currentDataTofetch;
}

function filterEdgesWithBlacklist(
  edges: Array<{ node: ArweaveNode }>,
  blacklist: Array<string>
): Array<string> {
  // I sort the ids of the edges into a list
  let edgeIds: Array<string> = [];
  for (let i = 0; i < edges.length; i++) {
    const id = edges[i].node.id;
    if (!blacklist.includes(id)) {
      edgeIds.push(id);
    }
  }
  return edgeIds;
}

function filterAddedTrailsWithBlackList(
  added: Array<string>,
  blacklist: Array<string>
) {
  let results: Array<string> = [];
  for (let i = 0; i < added.length; i++) {
    const a = added[i];
    if (!blacklist.includes(a)) {
      results.push(a);
    }
  }
  return results;
}

export function trailDetailsActions(
  props,
  trails: Contract,
  trailId: string,
  creatorCalls: boolean,
  caller: string,
  trailDetails: TrailDetails,
  dataPage: ArweaveDataPage
) {
  const blacklistButtons = document.getElementsByClassName("blacklist-button");
  const copyButtons = document.getElementsByClassName("copy-txid-buttons");
  const paginationButtons = document.getElementsByClassName(
    "trail-paging-buttons"
  );

  for (let i = 0; i < paginationButtons.length; i++) {
    const btn = paginationButtons[i] as HTMLButtonElement;
    const pageIndex = parseInt(btn.dataset.trailpage);
    btn.onclick = async function () {
      await trailDataPagePaginated(
        props,
        creatorCalls,
        dataPage.totalTxIds,
        pageIndex,
        trailDetails,
        caller,
        trails,
        trailId
      );
    };
  }

  const pageLeftButton = getById("trail-page-left");
  const pageRightButton = getById("trail-page-right");
  const lastPageButton = getById("trail-last-page");
  const firstPageButton = getById("trail-first-page");

  pageLeftButton.onclick = async function () {
    const index = parseInt(pageLeftButton.dataset.trailpage);
    if (index > 1) {
      await trailDataPagePaginated(
        props,
        creatorCalls,
        dataPage.totalTxIds,
        index - 1,
        trailDetails,
        caller,
        trails,
        trailId
      );
    }
  };

  pageRightButton.onclick = async function () {
    const index = parseInt(pageRightButton.dataset.trailpage);
    const total = parseInt(pageRightButton.dataset.totalpages);
    if (index < total) {
      await trailDataPagePaginated(
        props,
        creatorCalls,
        dataPage.totalTxIds,
        index + 1,
        trailDetails,
        caller,
        trails,
        trailId
      );
    }
  };

  lastPageButton.onclick = async function () {
    const index = parseInt(lastPageButton.dataset.trailpage);
    const total = parseInt(lastPageButton.dataset.totalpages);

    if (index < total) {
      await trailDataPagePaginated(
        props,
        creatorCalls,
        dataPage.totalTxIds,
        total,
        trailDetails,
        caller,
        trails,
        trailId
      );
    }
  };

  firstPageButton.onclick = async function () {
    const index = parseInt(firstPageButton.dataset.trailpage);
    if (index > 1) {
      await trailDataPagePaginated(
        props,
        creatorCalls,
        dataPage.totalTxIds,
        1,
        trailDetails,
        caller,
        trails,
        trailId
      );
    }
  };

  for (let i = 0; i < blacklistButtons.length; i++) {
    const btn = blacklistButtons[i] as HTMLButtonElement;
    const txId = btn.dataset.txid;
    btn.onclick = async function () {
      const onError = (error: any, receipt: any) => {
        dispatch_renderError(error.message);
      };
      const onReceipt = (receipt: any) => {
        // DISPATCH TO REFETCH THE WHOLE FROM PAGE 1
        dispatch_trailsDetails(props, trailId, caller, trails, trailDetails);
      };
      const addrOpt = await OptionsBuilder(() => getAddress());
      if (hasError(addrOpt)) {
        return;
      }
      await blacklist(trails, trailId, txId, addrOpt.data, onError, onReceipt);
    };
  }

  for (let i = 0; i < copyButtons.length; i++) {
    const btn = copyButtons[i] as HTMLButtonElement;
    const txId = btn.dataset.txid;
    btn.onclick = function () {
      copyStringToClipboard(txId);
    };
  }
}
