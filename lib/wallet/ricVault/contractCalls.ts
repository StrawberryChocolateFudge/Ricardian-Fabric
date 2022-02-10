import { Contract } from "web3-eth-contract";
import Web3 from "web3";
import { getRicVaultAbi } from "../abi/ricVaultABI";
import { LockedTokens } from "../../types";
import { metamask_web3, RICVAULTADDRESS } from "../web3";

export async function getRicVaultContract() {
  return await new metamask_web3.eth.Contract(
    getRicVaultAbi(),
    RICVAULTADDRESS
  );
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
    .lockFunds(period, Web3.utils.toWei(amount))
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function release(
  ricVault: Contract,
  atIndex: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await ricVault.methods
    .release(atIndex)
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
): Promise<LockedTokens> {
  const vaultContent = await ricVault.methods
    .getVaultContent(forAddress, atIndex)
    .call({ from });

  return {
    ...vaultContent,
    lockedAmount: Web3.utils.fromWei(vaultContent.lockedAmount),
  };
}
