import {
  dispatch_renderError,
  dispatch_renderSCProposalDisplayPage,
  dispatch_teardownContractDisplayPage,
} from "../../dispatch/render";
import { dispatch_setPopupState } from "../../dispatch/stateChange";
import { fetchTransactionBy } from "../../fetch";
import { getTags } from "../../fetch/graphql";
import { PopupState, ProposalFormat, State } from "../../types";
import { getById } from "../../view/utils";
import { hasError, OptionsBuilder } from "../utils";
import { convertToHTMLFromArrayBuffer } from "./onDocFileDropped";

export async function contractDisplayActions(props: State, contractId: string) {
  const backButton = getById("contract-display-back-button");
  backButton.onclick = async function () {
    dispatch_teardownContractDisplayPage();
    dispatch_setPopupState(PopupState.NONE);
  };
  const getTagsOptions = await getTags(contractId);

  if (hasError(getTagsOptions)) {
    dispatch_renderError("An error occured");
    return;
  }

  const edges = getTagsOptions.data.transactions.edges;

  if (edges.length === 0) {
    dispatch_renderError("Invalid proposal!");
    return;
  }
  if (!checkForProposalTag(edges[0])) {
    dispatch_renderError("Invalid proposal!");
  }

  // then I download the contract transaction
  const transactionOptions = await OptionsBuilder(() =>
    fetchTransactionBy<ProposalFormat>(contractId)
  );

  if (hasError(transactionOptions)) {
    dispatch_renderError("Invalid proposal!");
    return;
  }

  const proposal: ProposalFormat = transactionOptions.data;

  if (proposal.name === undefined) {
    dispatch_renderError("Invalid proposal!");
    return;
  }

  const getTerms = (terms: string) => {
    dispatch_renderSCProposalDisplayPage(props, contractId, proposal, terms);
  };

  convertToHTMLFromArrayBuffer(proposal.terms, getTerms);
}

export function checkForProposalTag(edge) {
  const tags = edge.node.tags;
  let hasTag = false;
  for (let i = 0; i < tags.length; i++) {
    const tag: { name: string; value: string } = tags[i];
    if (tag.name === "Contract-Type") {
      if (tag.value === "Proposal") {
        hasTag = true;
      }
    }
  }
  return hasTag;
}
