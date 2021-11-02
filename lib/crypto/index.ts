import Web3 from "web3";
import { BlockCountry, IssuerHashedData } from "../types";

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

function getBlockCountryArrayStrings(block: BlockCountry[]): string {
  let res = "";
  block.forEach((b) => (res += b.toString()));
  return res;
}

function orderStringsForHashing(data: IssuerHashedData) {
  const blockedCountries = getBlockCountryArrayStrings(data.blockedCountries);
  return concatStrings([
    data.legalContract,
    data.createdDate,
    data.expires,
    data.redirectto,
    data.version,
    data.issuer,
    blockedCountries,
    data.network,
    data.smartContract,
  ]);
}

export async function getHash(data: IssuerHashedData) {
  const ordered = orderStringsForHashing(data);
  return await sha256(ordered);
}

async function encrypt(startblob: Blob, passwd: string) {
  let plaintextbytes = await startblob.arrayBuffer();
  plaintextbytes = new Uint8Array(plaintextbytes);
  const pbkdf2iterations = 10000;
  const passphrasebytes = new TextEncoder().encode(passwd);
  const pbkdf2salt = window.crypto.getRandomValues(new Uint8Array(8));
  const passphrasekey = await window.crypto.subtle
    .importKey("raw", passphrasebytes, { name: "PBKDF2" }, false, [
      "deriveBits",
    ])
    .catch((err) => {
      console.log(err);
    });

  let pbkdf2bytes = await window.crypto.subtle
    .deriveBits(
      {
        name: "PBKDF2",
        salt: pbkdf2salt,
        iterations: pbkdf2iterations,
        hash: "SHA-256",
      },
      passphrasekey as CryptoKey,
      384
    )
    .catch((err) => {
      console.log(err);
    });
  pbkdf2bytes = new Uint8Array(pbkdf2bytes as ArrayBuffer);
  const keybytes = pbkdf2bytes.slice(0, 32);
  const ivbytes = pbkdf2bytes.slice(32);

  const encryptionkey = await window.crypto.subtle.importKey(
    "raw",
    keybytes,
    { name: "AES-CBC", length: 256 },
    false,
    ["encrypt"]
  );

  let cipherBytes = await window.crypto.subtle
    .encrypt({ name: "AES-CBC", iv: ivbytes }, encryptionkey, plaintextbytes)
    .catch((err) => {
      console.error(err);
    });

  if (!cipherBytes) {
    return;
  }

  cipherBytes = new Uint8Array(cipherBytes);

  const resultBytes = new Uint8Array(cipherBytes.length + 16);
  resultBytes.set(new TextEncoder().encode("Salted__"));
  resultBytes.set(pbkdf2salt, 8);
  resultBytes.set(cipherBytes, 16);
  return resultBytes;
}

export async function encryptWallet(file: any, passwd: string) {
  const startblob = new Blob([JSON.stringify(file, null, 2)], {
    type: "application/json",
  });
  const encryptedBytes = await encrypt(startblob, passwd);
  const endblob = new Blob([encryptedBytes], { type: "application/download" });
  return endblob;
}

export async function decryptWallet(file: any, passwd: string) {
  const startblob = new Blob([JSON.stringify(file, null, 2)], {
    type: "application/json",
  });
  const decryptedBytes = await decrypt(startblob, passwd);

  const endblob = new Blob([decryptedBytes], { type: "application/download" });
  return endblob;
}

async function decrypt(startBlob: Blob, passwd: string) {
  let cipherbytes = await startBlob.arrayBuffer();
  const pbkdf2iterations = 10000;
  const passphrasebytes = new TextEncoder().encode(passwd);
  const pbkdf2salt = cipherbytes.slice(8, 16);
  const passphrasekey = await window.crypto.subtle
    .importKey("raw", passphrasebytes, { name: "PBKDF2" }, false, [
      "deriveBits",
    ])
    .catch((err) => {
      console.log(err);
    });

  let pbkdf2bytes = await window.crypto.subtle
    .deriveBits(
      {
        name: "PBKDF2",
        salt: pbkdf2salt,
        iterations: pbkdf2iterations,
        hash: "SHA-256",
      },
      passphrasekey as CryptoKey,
      384
    )
    .catch((err) => {
      console.log(err);
    });
  pbkdf2bytes = new Uint8Array(pbkdf2bytes as ArrayBuffer);

  const keybytes = pbkdf2bytes.slice(0, 32);
  const ivbytes = pbkdf2bytes.slice(32);
  cipherbytes = cipherbytes.slice(16);

  const decryptionKey = await window.crypto.subtle
    .importKey("raw", keybytes, { name: "AES-CBC", length: 256 }, false, [
      "decrypt",
    ])
    .catch((err) => {
      console.log(err);
    });
  let plaintextbytes = await window.crypto.subtle
    .decrypt(
      { name: "AES-CBC", iv: ivbytes },
      decryptionKey as CryptoKey,
      cipherbytes
    )
    .catch((err) => {
      console.log("THORS");
      console.log(err);
    });

  if (!plaintextbytes) {
    console.log("ERROR DECRYPTING FILE, PASSWORD MAY BE WRONG");
  }

  plaintextbytes = new Uint8Array(plaintextbytes);

  return plaintextbytes;
}
