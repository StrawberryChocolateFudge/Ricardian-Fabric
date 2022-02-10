import Web3 from "web3";
import { getDaoStakingABI } from "../abi/daoStakingABI";
import { Contract } from "web3-eth-contract";
import { Staker } from "../../types";
import { DAOSTAKINGADDRESS, metamask_web3 } from "../web3";

export async function getDaoStakingContract() {
  return await new metamask_web3.eth.Contract(
    getDaoStakingABI(),
    DAOSTAKINGADDRESS
  );
}

// State setters

export async function stake(
  daoStaking: Contract,
  from: string,
  onError: any,
  onReceipt: any
) {
  await daoStaking.methods
    .stake()
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function unStake(
  daoStaking: Contract,
  from: string,
  onError: any,
  onReceipt: any
) {
  await daoStaking.methods
    .unStake()
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function claimReward(
  daoStaking: Contract,
  forProposal: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await daoStaking.methods
    .claimReward(forProposal)
    .call({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

// view functions

export async function getStakingBlocks(
  daoStaking: Contract,
  from: string
): Promise<string> {
  return await daoStaking.methods.getStakingBlocks().call({ from });
}

export async function getStaker(
  daoStaking: Contract,
  address: string,
  from: string
): Promise<Staker> {
  return await daoStaking.methods.getStaker(address).call({ from });
}

export async function getActualReward(
  daoStaking: Contract,
  hasFrontend: boolean,
  hasFees: boolean,
  from: string
): Promise<string> {
  const actualReward = await daoStaking.methods
    .getActualReward(hasFrontend, hasFees)
    .call({ from });

  return Web3.utils.fromWei(actualReward);
}

export async function isStaking(
  daoStaking: Contract,
  address: string,
  from: string
): Promise<boolean> {
  return await daoStaking.methods.isStaking(address).call({ from });
}

export async function getStakeDateFor(
  daoStaking: Contract,
  address: string,
  from: string
): Promise<string> {
  return await daoStaking.methods.getStakeDateFor(address).call({ from });
}

export async function getTotalStaked(
  daoStaking: Contract,
  from: string
): Promise<string> {
  const totalStaked = await daoStaking.methods.getTotalStaked().call({ from });

  return Web3.utils.fromWei(totalStaked);
}

export async function getAvailableReward(
  daoStaking: Contract,
  from: string
): Promise<string> {
  const availableReward = await daoStaking.methods
    .getAvailableReward()
    .call({ from });

  return Web3.utils.fromWei(availableReward);
}

export async function getDetails(
  daoStaking: Contract,
  from: string
): Promise<[string, string, string]> {
  return await daoStaking.methods.getDetails().call({ from });
}
