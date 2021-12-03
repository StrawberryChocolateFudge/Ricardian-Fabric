import { dispatch_setPage } from "../../dispatch/stateChange";
import { PageState, State } from "../../types";
import { getById } from "../../view/utils";

export function reviewAndVotePageActions(props: State) {
  const backButton = getById("reviewBack");

  backButton.onclick = function () {
    dispatch_setPage(PageState.Catalog);
  };
}
