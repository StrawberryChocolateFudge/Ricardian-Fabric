import { dispatch_renderLoadedValue } from "../../dispatch/render";
import { getUploadedContracts } from "../../fetch/graphql";
import { State } from "../../types";
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

  const address = await getAddress();

  const ric = await getRicContract();

  const totalSupplyVal = await totalSupply(ric, address);

  dispatch_renderLoadedValue(props, totalSupplyVal + " RIC", ricTotalSupplyEl);

  const ricsale = await getRicSaleContract();
  const ricLeft = await remainingTokens(ricsale, address);

  let tokensSold = await getTokensSold(ricsale, address);

  // tokensSold = ricLeft; // uncomment to see the sale finished UI, redeclare tokensSold with let;

  if (tokensSold === "40000000") {
    dispatch_renderLoadedValue(props, "Sale finished", ricLeftEl);
  } else {
    dispatch_renderLoadedValue(props, ricLeft + " RIC", ricLeftEl);
  }

  const ricRate = await getCurrentRate(ricsale, tokensSold, address);

  if (tokensSold === "40000000") {
    dispatch_renderLoadedValue(props, "Sale finished", ricSaleRateEl);
  } else {
    dispatch_renderLoadedValue(props, ricRate + " RIC/ONE", ricSaleRateEl);
  }

  const vault = await getRicVaultContract();

  const totalLocked = await getTotalLocked(vault, address);

  dispatch_renderLoadedValue(props, totalLocked + " RIC", ricLockedInVaultEl);

  const daoStaking = await getDaoStakingContract();
  const availableReward = await getAvailableReward(daoStaking, address);

  dispatch_renderLoadedValue(
    props,
    availableReward + " RIC",
    availableRewardEl
  );

  const catalogDAO = await getCatalogDAOContractWithWallet();

  const acceptedContracts = await getAcceptedSmartContractIndex(
    catalogDAO,
    address
  );

  dispatch_renderLoadedValue(props, acceptedContracts, availableContractsEl);

  const rankProposals = await getRankProposalIndex(catalogDAO, address);
  const smartContractProposals = await getSmartContractProposalIndex(
    catalogDAO,
    address
  );

  dispatch_renderLoadedValue(
    props,
    parseInt(rankProposals) + parseInt(smartContractProposals),
    submittedProposalsEl
  );

  const contributorStake = await getTotalStaked(daoStaking, address);

  dispatch_renderLoadedValue(props, contributorStake, contributorStakeEl);

  const feeDao = await getFeeDaoContract();
  const fees = await getTotalBalance(feeDao, address);

  dispatch_renderLoadedValue(props, fees + " ONE", HarmonyFeesCollectedEl);

  const tokens = await getTokens(feeDao, address);
  dispatch_renderLoadedValue(
    props,
    tokens.length + " Tokens",
    tokenFeesCollectedEl
  );

  const uploadsOptions = await getUploadedContracts();
  // TODO:
  console.log(uploadsOptions);
}
