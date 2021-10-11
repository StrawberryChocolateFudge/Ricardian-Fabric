import { IssuerHashedData } from "../types";

export async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);

  // hash the message
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray
    .map((b) => ("00" + b.toString(16)).slice(-2))
    .join("");
  return hashHex;
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
  ]);
}

export async function getHash(data: IssuerHashedData) {
  const ordered = orderStringsForHashing(data);
  return await sha256(ordered);
}
