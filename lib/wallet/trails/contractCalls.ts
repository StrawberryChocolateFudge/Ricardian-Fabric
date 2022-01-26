import { Contract } from "web3-eth-contract";
import Web3 from "web3";
import { TrailsABI } from "../abi/TrailsABI";
import { TRAILSADDRESS } from "../web3";
import { TrailDetails } from "../../types";

export async function getTrailsContract() {
  const web3 = new Web3(window.ethereum);
  return await new web3.eth.Contract(TrailsABI(), TRAILSADDRESS);
}

export async function newTrail(
  trails: Contract,
  trailId: string,
  access: "private" | "public",
  from: string,
  onError: any,
  onReceipt: any
) {
  let acc = access === "private" ? 0 : 1;
  await trails.methods
    .newTrail(trailId, acc)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function add(
  trails: Contract,
  trailId: string,
  data: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await trails.methods
    .add(trailId, data)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function remove(
  trails: Contract,
  trailId: string,
  contentIndex: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await trails.methods
    .remove(trailId, contentIndex)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function blacklist(
  trails: Contract,
  trailId: string,
  data: string,
  from: string,
  onError: any,
  onReceipt: any
) {
  await trails.methods
    .add(trailId, data)
    .send({ from })
    .on("error", onError)
    .on("receipt", onReceipt);
}

export async function getBlackList(
  trail: Contract,
  trailId: string,
  from: string
): Promise<Array<string>> {
  return await trail.methods.getBlackList(trailId).call({ from });
}

export async function getTrailDetails(
  trail: Contract,
  trailId: string,
  from: string
): Promise<TrailDetails> {
  return await trail.methods.getTrailDetails(trailId).call({ from });
}

export async function getTrailContent(
  trail: Contract,
  trailId: string,
  contentIndex: string,
  from: string
): Promise<string> {
  return await trail.methods
    .getTrailContent(trailId, contentIndex)
    .call({ from });
}

export async function getTrailPaginated(
  trail: Contract,
  trailId: string,
  first: string,
  second: string,
  third: string,
  fourth: string,
  fifth: string,
  from: string
) {
  return await trail.methods
    .getTrailPaginated(trailId, first, second, third, fourth, fifth)
    .call({ from });
}
