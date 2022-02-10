import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { Token, TokenProposal } from "../../types";
import { getFeeDaoAbi } from "../abi/feeDaoABI";
import { FEEDAOADDRESS, metamask_web3 } from "../web3";

export async function getFeeDaoContract(): Promise<Contract> {
  return await new metamask_web3.eth.Contract(getFeeDaoAbi(), FEEDAOADDRESS);
}

export async function proposeNewToken(
  feeDao: Contract,
  token: string,
  discussionUrl: string,
  name: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await feeDao.methods
    .proposeNewToken(token, discussionUrl, name)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function voteOnToken(
  feeDao: Contract,
  index: string,
  accepted: boolean,
  from: string,
  onError: any,
  onReceipt: any
) {
  await feeDao.methods
    .voteOnToken(index, accepted)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}
export async function closeTokenProposal(
  feeDao: Contract,
  index: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await feeDao.methods
    .closeTokenProposal(index)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function expressOpinion(
  feeDao: Contract,
  tokenArrIndex: string,
  likedIt: boolean,
  from: string,
  onError: any,
  onReceipt: any
) {
  await feeDao.methods
    .expressOpinion(tokenArrIndex, likedIt)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function withdrawETH(
  feeDao: Contract,
  amount: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await feeDao.methods
    .withdrawETH(amount)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function withdrawOne(
  feeDao: Contract,
  amount: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await feeDao.methods
    .withdrawOne(amount)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function withdrawThree(
  feeDao: Contract,
  first: string,
  second: string,
  third: string,
  amount: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await feeDao.methods
    .withdrawThree(first, second, third, amount)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function getProposals(
  feeDao: Contract,
  from: string
): Promise<TokenProposal[]> {
  return await feeDao.methods.getProposals().call({ from });
}

export async function votedAlready(
  feeDao: Contract,
  index: string,
  voter: string,
  from: string
): Promise<Boolean> {
  return await feeDao.methods.votedAlready(index, voter).call({ from });
}

export async function getTokens(
  feeDao: Contract,
  from: string
): Promise<Token[]> {
  return await feeDao.methods.getTokens().call({ from });
}

export async function calculateETHWithdraw(
  feeDao: Contract,
  amount: string,
  from: string
): Promise<string> {
  const withdraw = await feeDao.methods
    .calculateETHWithdraw(amount)
    .call({ from });

  return Web3.utils.fromWei(withdraw);
}

export async function calculateWithdraw(
  feeDao: Contract,
  withdrawFrom: string,
  amount: string,
  from: string
): Promise<string> {
  return await feeDao.methods
    .calculateWithdraw(withdrawFrom, amount)
    .call({ from });
}

export async function getCurrentbalance(
  feeDao: Contract,
  from: string
): Promise<string> {
  const balance = await feeDao.methods.getCurrentBalance().call({ from });
  return Web3.utils.fromWei(balance);
}

export async function getTotalBalance(
  feeDao: Contract,
  from: string
): Promise<string> {
  const balance = await feeDao.methods.getTotalBalance().call({ from });
  return Web3.utils.fromWei(balance);
}

export async function viewSpentBalanceOf(
  feeDao: Contract,
  token: string,
  from: string
): Promise<string> {
  const balance = await feeDao.methods.viewSpentBalanceOf(token).call({ from });
  return Web3.utils.fromWei(balance);
}
