import { dispatch_setPage } from "../../dispatch/stateChange";
import { PageState, State } from "../../types";
import { getById } from "../../view/utils";

export function reviewAndVotePageActions(props: State) {
  const createProposalButton = getById("create-proposal-button");
  createProposalButton.onclick = function () {
    dispatch_setPage(PageState.Proposals);
  };

}
