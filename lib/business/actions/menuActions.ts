import { dispatch_setPage } from "../../dispatch/stateChange";
import { PageState, State } from "../../types";
import { getById } from "../../view/utils";

export async function menuActions(props: State) {
  const createPage = getById("create-contract-button");
  const smartContractButton = getById("smart-contract-catalog-button");
  const reviewAndVoteButton = getById("review-and-vote-button");
  const dashboardButton = getById("dashboard-button");
  const tokenSale = getById("tokensale-button");
  const vaultButton = getById("vault-button");
  const trailsButton = getById("trails-page-button");
  const rewardsButton = getById("fees-button");

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

  tokenSale.onclick = function () {
    dispatch_setPage(PageState.tokenSale);
  };

  vaultButton.onclick = function () {
    dispatch_setPage(PageState.vault);
  };

  trailsButton.onclick = function () {
    dispatch_setPage(PageState.trails);
  };

  rewardsButton.onclick = function () {
    dispatch_setPage(PageState.rewards);
  };
}
