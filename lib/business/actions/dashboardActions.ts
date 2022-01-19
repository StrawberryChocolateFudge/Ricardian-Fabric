import {
  dispatch_renderError,
  dispatch_renderLoadedValue,
  dispatch_renderPermapinnedDashboardData,
} from "../../dispatch/render";
import { getUploadedContracts } from "../../fetch/graphql";
import { State, Status } from "../../types";
import { getById } from "../../view/utils";
import {
  getAcceptedSmartContractIndex,
  getCatalogDAOContractWithWallet,
  getRankProposalIndex,
  getSmartContractProposalIndex,
} from "../../wallet/catalogDAO/contractCalls";
import {
  getAvailableReward,
  getDaoStakingContract,
  getTotalStaked,
} from "../../wallet/daoStaking/contractCalls";
import {
  getFeeDaoContract,
  getTokens,
  getTotalBalance,
} from "../../wallet/feeDao/contractCalls";
import { getRicContract, totalSupply } from "../../wallet/ric/contractCalls";
import {
  getCurrentRate,
  getRicSaleContract,
  getTokensSold,
  remainingTokens,
} from "../../wallet/ricSale/contractCalls";
import {
  getRicVaultContract,
  getTotalLocked,
} from "../../wallet/ricVault/contractCalls";
import { getAddress } from "../../wallet/web3";
import { OptionsBuilder } from "../utils";

export async function dashboardActions(props: State) {
  const ricTotalSupplyEl = getById("ric-total-supply");
  const ricLeftEl = getById("ric-left-for-sale");
  const ricSaleRateEl = getById("ric-sale-rate");
  const ricLockedInVaultEl = getById("ric-in-vault");
  const availableRewardEl = getById("available-reward-amount");
  const availableContractsEl = getById("catalogue-contracts-amount");
  const submittedProposalsEl = getById("smart-contract-proposals-amount");
  const contributorStakeEl = getById("total-staking-amount");
  const HarmonyFeesCollectedEl = getById("fees-collected-amount");
  const tokenFeesCollectedEl = getById("token-fees-collected-amount");

  const addressOptions = await OptionsBuilder(() => getAddress());

  if (addressOptions.status === Status.Failure) {
    dispatch_renderError(addressOptions.error);
    return;
  }
  const address = addressOptions.data;

  const ricOptions = await OptionsBuilder(() => getRicContract());

  if (ricOptions.status === Status.Failure) {
    dispatch_renderError(ricOptions.error);
    return;
  }

  const totalSupplyOptions = await OptionsBuilder(() =>
    totalSupply(ricOptions.data, address)
  );

  if (totalSupplyOptions.status === Status.Failure) {
    dispatch_renderError(totalSupplyOptions.error);
    return;
  }

  const totalSupplyVal = totalSupplyOptions.data;

  dispatch_renderLoadedValue(props, totalSupplyVal + " RIC", ricTotalSupplyEl);

  const ricsaleOptions = await OptionsBuilder(() => getRicSaleContract());
  if (ricsaleOptions.status === Status.Failure) {
    dispatch_renderError(ricsaleOptions.error);
    return;
  }
  const ricsale = ricsaleOptions.data;
  const ricLeftOptions = await OptionsBuilder(() =>
    remainingTokens(ricsale, address)
  );

  if (ricLeftOptions.status === Status.Failure) {
    dispatch_renderError(ricLeftOptions.error);
    return;
  }
  const ricLeft = ricLeftOptions.data;
  let tokensSoldOptions = await OptionsBuilder(() =>
    getTokensSold(ricsale, address)
  );
  if (tokensSoldOptions.status === Status.Failure) {
    dispatch_renderError(tokensSoldOptions.error);
    return;
  }
  const tokensSold = tokensSoldOptions.data;
  // tokensSold = ricLeft; // uncomment to see the sale finished UI, redeclare tokensSold with let;

  if (tokensSold === "40000000") {
    dispatch_renderLoadedValue(props, "Sale finished", ricLeftEl);
  } else {
    dispatch_renderLoadedValue(props, ricLeft + " RIC", ricLeftEl);
  }

  const ricRateOptions = await OptionsBuilder(() =>
    getCurrentRate(ricsale, tokensSold, address)
  );

  if (ricRateOptions.status === Status.Failure) {
    dispatch_renderError(ricRateOptions.error);
    return;
  }

  const ricRate = ricRateOptions.data;

  if (tokensSold === "40000000") {
    dispatch_renderLoadedValue(props, "Sale finished", ricSaleRateEl);
  } else {
    dispatch_renderLoadedValue(props, ricRate + " RIC/ONE", ricSaleRateEl);
  }

  const vaultOptions = await OptionsBuilder(() => getRicVaultContract());

  if (vaultOptions.status === Status.Failure) {
    dispatch_renderError(vaultOptions.error);
    return;
  }
  const vault = vaultOptions.data;

  const totalLockedOptions = await OptionsBuilder(() =>
    getTotalLocked(vault, address)
  );

  if (totalLockedOptions.status === Status.Failure) {
    dispatch_renderError(totalLockedOptions.error);
    return;
  }
  const totalLocked = totalLockedOptions.data;

  dispatch_renderLoadedValue(props, totalLocked + " RIC", ricLockedInVaultEl);

  const daoStakingOptions = await OptionsBuilder(() => getDaoStakingContract());
  if (daoStakingOptions.status === Status.Failure) {
    dispatch_renderError(daoStakingOptions.error);
    return;
  }
  const daoStaking = daoStakingOptions.data;
  const availableRewardOptions = await OptionsBuilder(() =>
    getAvailableReward(daoStaking, address)
  );

  if (availableRewardOptions.status === Status.Failure) {
    dispatch_renderError(availableRewardOptions.error);
    return;
  }

  const availableReward = availableRewardOptions.data;

  dispatch_renderLoadedValue(
    props,
    availableReward + " RIC",
    availableRewardEl
  );

  const catalogDAOOptions = await OptionsBuilder(() =>
    getCatalogDAOContractWithWallet()
  );

  if (catalogDAOOptions.status === Status.Failure) {
    dispatch_renderError(catalogDAOOptions.error);
    return;
  }
  const catalogDAO = catalogDAOOptions.data;

  const acceptedContractsOptions = await OptionsBuilder(() =>
    getAcceptedSmartContractIndex(catalogDAO, address)
  );

  if (acceptedContractsOptions.status === Status.Failure) {
    dispatch_renderError(acceptedContractsOptions.error);
    return;
  }

  const acceptedContracts = acceptedContractsOptions.data;

  dispatch_renderLoadedValue(props, acceptedContracts, availableContractsEl);

  const rankProposalsOptions = await OptionsBuilder(() =>
    getRankProposalIndex(catalogDAO, address)
  );

  if (rankProposalsOptions.status === Status.Failure) {
    dispatch_renderError(rankProposalsOptions.error);
    return;
  }
  const rankProposals = rankProposalsOptions.data;

  const smartContractProposalsOptions = await OptionsBuilder(() =>
    getSmartContractProposalIndex(catalogDAO, address)
  );

  if (smartContractProposalsOptions.status === Status.Failure) {
    dispatch_renderError(smartContractProposalsOptions.error);
    return;
  }

  const smartContractProposals = smartContractProposalsOptions.data;

  dispatch_renderLoadedValue(
    props,
    parseInt(rankProposals) + parseInt(smartContractProposals),
    submittedProposalsEl
  );

  const contributorStakeOptions = await OptionsBuilder(() =>
    getTotalStaked(daoStaking, address)
  );

  if (contributorStakeOptions.status === Status.Failure) {
    dispatch_renderError(contributorStakeOptions.error);
    return;
  }

  const contributorStake = contributorStakeOptions.data;

  dispatch_renderLoadedValue(
    props,
    contributorStake + " RIC",
    contributorStakeEl
  );

  const feeDaoOptions = await OptionsBuilder(() => getFeeDaoContract());

  if (feeDaoOptions.status === Status.Failure) {
    dispatch_renderError(feeDaoOptions.error);
    return;
  }

  const feeDao = feeDaoOptions.data;

  const feesOptions = await OptionsBuilder(() =>
    getTotalBalance(feeDao, address)
  );

  if (feesOptions.status === Status.Failure) {
    dispatch_renderError(feeDaoOptions.error);
    return;
  }

  const fees = feesOptions.data;

  dispatch_renderLoadedValue(props, fees + " ONE", HarmonyFeesCollectedEl);

  const tokensOptions = await OptionsBuilder(() => getTokens(feeDao, address));

  if (tokensOptions.status === Status.Failure) {
    dispatch_renderError(tokensOptions.error);
    return;
  }

  const tokens = tokensOptions.data;

  dispatch_renderLoadedValue(
    props,
    tokens.length + " Tokens",
    tokenFeesCollectedEl
  );

  const uploadsOptions = await getUploadedContracts();
  const last5Permapins = filterUploadOptions(uploadsOptions.data);
  dispatch_renderPermapinnedDashboardData(props, last5Permapins);
}

function filterUploadOptions(data: any) {
  const edges = data.transactions.edges;
  let result: Array<any>[5] = [];
  for (let i = 0; i < edges.length; i++) {
    if (tagsContainContractType(edges[i].node.tags)) {
      if (result.length <= 5) {
        result.push(edges[i].node);
      }
    }
  }
  return result;
}

function tagsContainContractType(tags: Array<{ name: string; value: string }>) {
  let containsAcceptable = false;

  for (let i = 0; i < tags.length; i++) {
    if (tags[i].name === "Contract-Type" && tags[i].value === "acceptable") {
      containsAcceptable = true;
    }
  }
  return containsAcceptable;
}
