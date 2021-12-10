// I'm gonna add all the catalog dao functions here
import Web3 from "web3";
import { getCatalogDAOAbi } from "../abi/catalogDAOABI";
import { Contract } from "web3-eth-contract";
import {
  AcceptedSmartContractProposal,
  MyProposals,
  RankProposal,
  RemovalProposal,
  SmartContractProposal,
  Status,
} from "../../types";
import BN from "bn.js";
const CATALOGDAOADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // On local hardhat testnet
import { Options } from "../../types";



export async function getCatalogDAOContract() {
  const web3 = new Web3(window.ethereum);
  return await new web3.eth.Contract(getCatalogDAOAbi(), CATALOGDAOADDRESS);
}

// State setters

export async function proposeNewRank(
  catalogDAO: Contract,
  repository: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await catalogDAO.methods
    .proposeNewRank(repository)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function voteOnNewRank(
  catalogDAO: Contract,
  rankIndex: BN,
  accepted: boolean,
  from: string,
  onError: any,
  onReceipt: any
) {
  await catalogDAO.methods
    .voteOnNewRank(rankIndex, accepted)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function closeRankProposal(
  catalogDAO: Contract,
  rankIndex: BN,
  from: string,
  onError: any,
  onReceipt: any
) {
  await catalogDAO.methods
    .closeRankProposal(rankIndex)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function proposeNewSmartContract(
  catalogDAO: Contract,
  _arweaveTxId: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await catalogDAO.methods
    .proposeNewSmartContract(_arweaveTxId)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function voteOnNewSmartContract(
  catalogDAO: Contract,
  sCIndex: BN,
  accepted: boolean,
  from: string,
  onError: any,
  onReceipt: any
) {
  await catalogDAO.methods
    .voteOnNewSmartContract(sCIndex, accepted)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function closeSmartContractProposal(
  catalogDAO: Contract,
  sCIndex: BN,
  from: string,
  onError: any,
  onReceipt: any
) {
  await catalogDAO.methods
    .closeSmartContractProposal(sCIndex)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function proposeContractRemoval(
  catalogDAO: Contract,
  discussionUrl: string,
  acceptedSCIndex: BN,
  malicious: boolean,
  from: string,
  onError: any,
  onReceipt: any
) {
  await catalogDAO.methods
    .proposeContractRemoval(discussionUrl, acceptedSCIndex, malicious)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function voteOnRemoval(
  catalogDAO: Contract,
  removalIndex: BN,
  accepted: boolean,
  from: string,
  onError: any,
  onReceipt: any
) {
  await catalogDAO.methods
    .voteOnRemoval(removalIndex, accepted)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function closeRemovalProposal(
  catalogDAO: Contract,
  removalIndex: BN,
  from: string,
  onError: any,
  onReceipt: any
) {
  await catalogDAO.methods
    .closeRemovalProposal(removalIndex)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

// View functions

export async function getRank(
  catalogDAO: Contract,
  address: string
): Promise<number> {
  return await catalogDAO.methods.getRank(address).call();
}

export async function getRankProposalIndex(catalogDAO: Contract): Promise<BN> {
  return await catalogDAO.methods.getRankProposalIndex().call();
}

export async function getRankProposalsByIndex(
  catalogDAO,
  index: BN
): Promise<RankProposal> {
  return await catalogDAO.methods.getRankProposalsByIndex(index).call();
}

export async function votedAlreadyOnRank(
  catalogDAO: Contract,
  rankIndex: BN,
  _voter: string
): Promise<boolean> {
  return await catalogDAO.methods.votedAlreadyOnRank(rankIndex, _voter).call();
}

export async function getMyProposals(
  catalogDAO: Contract
): Promise<MyProposals> {
  return await catalogDAO.methods.getMyProposals();
}

export async function getSmartContractProposalIndex(
  catalogDAO: Contract
): Promise<BN> {
  return await catalogDAO.methods.getSmartContractProposalIndex().call();
}
export async function getSmartContractProposalsBYIndex(
  catalogDAO: Contract,
  index: BN
): Promise<SmartContractProposal> {
  return await catalogDAO.methods
    .getSmartContractProposalsByIndex(index)
    .call();
}

export async function votedAlreadyOnSmartContract(
  catalogDAO: Contract,
  sCIndex: BN,
  _voter: string
) {
  return await catalogDAO.methods
    .votedAlreadyOnSmartContract(sCIndex, _voter)
    .call();
}

export async function getAcceptedSmartContractIndex(
  catalogDAO: Contract
): Promise<BN> {
  return await catalogDAO.methods.getAcceptedSmartContractIndex().call();
}

export async function getAcceptedSCProposalsByIndex(
  catalogDAO: Contract,
  sCIndex: BN
): Promise<AcceptedSmartContractProposal> {
  return await catalogDAO.methods.getAcceptedSCProposalsByIndex(sCIndex).call();
}

export async function votedAlreadyOnRemoval(
  catalogDAO: Contract,
  removalIndex: BN,
  voter: string
): Promise<boolean> {
  return await catalogDAO.methods.votedAlreadyOnRemoval(removalIndex, voter);
}

export async function getRemovalProposalIndex(
  catalogDAO: Contract
): Promise<BN> {
  return await catalogDAO.methods.getRemovalProposalIndex().call();
}

export async function getRemovalProposalByIndex(
  catalogDAO: Contract,
  index: BN
): Promise<RemovalProposal> {
  return await catalogDAO.methods.getRemovalProposalByIndex(index).call();
}
