import { Contract } from "web3-eth-contract";
import Web3 from "web3";
import { getRicSaleAbi } from "../abi/ricSaleABI";

const RICSALEADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; // On local hardhat testnet

export async function getRicSaleContract() {
  const web3 = new Web3(window.ethereum);
  return await new web3.eth.Contract(getRicSaleAbi(), RICSALEADDRESS);
}

export async function buyTokens(
  ricsale: Contract,
  weiAmount: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await ricsale.methods
    .buyTokens()
    .send({ from, value: weiAmount })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function token(ricsale: Contract): Promise<string> {
  return await ricsale.methods.token().call();
}

export async function wallet(ricsale: Contract): Promise<string> {
  return await ricsale.methods.wallet().call();
}

export async function weiRaised(ricsale: Contract): Promise<string> {
  return await ricsale.methods.weiRaised().call();
}

export async function remainingTokens(ricsale: Contract): Promise<string> {
  return await ricsale.methods.remainingTokens().call();
}

export async function getCurrentRate(
  ricsale: Contract,
  tokensSold: string
): Promise<string> {
  return await ricsale.methods.getCurrentRate(tokensSold).call();
}
