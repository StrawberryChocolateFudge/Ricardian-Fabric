import { dispatch_setPage } from "../../dispatch/stateChange";
import { PageState, State } from "../../types";
import { getById } from "../../view/utils";
import { verifyContractPopupTrigger } from "./verifyContractActions";

export function menuActions(props: State) {
  verifyContractPopupTrigger(props);
  const createPage = getById("create-contract-button");
  const smartContractButton = getById("smart-contract-catalog-button");
  const reviewAndVoteButton = getById("review-and-vote-button");
  const dashboardButton = getById("dashboard-button");

  dashboardButton.onclick = function () {
    dispatch_setPage(PageState.Dashboard);
  };

  createPage.onclick = function () {
    dispatch_setPage(PageState.CreateRicardian);
  };

  smartContractButton.onclick = function () {
    dispatch_setPage(PageState.Catalog);
  };

  reviewAndVoteButton.onclick = function () {
    dispatch_setPage(PageState.ReviewAndVote);
  };
}
