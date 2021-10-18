import Web3 from "web3";
import { IssuerHashedData } from "../types";

export async function sha256(message) {
  const web3 = new Web3(window.ethereum);
  const encoded = web3.eth.abi.encodeParameters(["string"], [message]);
  const hash = web3.utils.sha3(encoded);
  return hash;
}

function concatStrings(data: Array<String>) {
  let res = "";
  data.forEach((d) => {
    res += d;
  });
  return res;
}

function orderStringsForHashing(data: IssuerHashedData) {
  return concatStrings([
    data.legalContract,
    data.createdDate,
    data.expires,
    data.redirectto,
    data.version,
    data.issuer,
    data.onlySigner,
    data.network,
    data.smartContract,
  ]);
}

export async function getHash(data: IssuerHashedData) {
  const ordered = orderStringsForHashing(data);
  return await sha256(ordered);
}
