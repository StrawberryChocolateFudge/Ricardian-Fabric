import { Contract } from "web3-eth-contract";
import Web3 from "web3";
import { getRicVaultAbi } from "../abi/ricVaultABI";
import { LockedTokens } from "../../types";

const RICVAULTADDRESS = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";

export async function getRicVaultContract() {
  const web3 = new Web3(window.ethereum);
  return await new web3.eth.Contract(getRicVaultAbi(), RICVAULTADDRESS);
}

export async function lockFunds(
  ricVault: Contract,
  period: string,
  amount: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await ricVault.methods
    .lockFunds(period, amount)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function getTotalLocked(
  ricVault: Contract,
  from: string
): Promise<string> {
  const totalLocked = await ricVault.methods.getTotalLocked().call({ from });

  return Web3.utils.fromWei(totalLocked);
}

export async function getLockIndex(
  ricVault: Contract,
  forAddress: string,
  from: string
): Promise<string> {
  return await ricVault.methods.getLockIndex(forAddress).call({ from });
}

export async function getVaultContent(
  ricVault: Contract,
  forAddress: string,
  atIndex: string,
  from: string
): Promise<LockedTokens[]> {
  return await ricVault.methods
    .getVaultContent(forAddress, atIndex)
    .call({ from });
}
