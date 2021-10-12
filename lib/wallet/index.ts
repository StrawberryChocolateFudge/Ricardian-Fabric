import Web3 from "web3";
import { recoverTypedSignatureLegacy } from "eth-sig-util";
import { toChecksumAddress } from "ethereumjs-util";

export async function requestAccounts() {
  //TODO: refactor to request
  await window.ethereum.send("eth_requestAccounts");
}

export async function switchToHarmony() {
  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x6357D2E0",
        chainName: "Harmony Testnet",
        nativeCurrency: {
          name: "ONE",
          symbol: "ONE",
          decimals: 18,
        },
        rpcUrls: ["https://api.s0.b.hmny.io"],
        blockExplorerUrls: ["https://explorer.pops.one/#/"],
      },
    ],
  });
}

export async function getAddress(web3: Web3): Promise<string> {
  const accounts = await web3.eth.getAccounts();

  return accounts[0];
}

export async function getNetwork(web3: Web3): Promise<number> {
  return await web3.eth.getChainId();
}

export async function signHash(
  hash: string,
  web3: Web3,
  signer: string,
  onSuccess: CallableFunction,
  onError: CallableFunction
) {
  const msgParams = [{ type: "string", name: "Document Hash", value: hash }];

  //@ts-ignore
  await web3.currentProvider.sendAsync(
    {
      method: "eth_signTypedData",
      params: [msgParams, signer],
      from: signer,
    },
    async function (err, result) {
      if (result.error) {
        onError(result.error.message);
      } else {
        const recovered = await recoverTypedSignature(msgParams, result.result);
        if (compareAddresses(signer, recovered)) {
          await onSuccess(result.result);
        } else {
          await onError("Signature verification failed.");
        }
      }
    }
  );
}

export async function recoverTypedSignature(msgParams, signature) {
  const recovered = await recoverTypedSignatureLegacy({
    data: msgParams,
    sig: signature,
  });
  return recovered;
}

export function compareAddresses(signer: any, recovered: any): boolean {
  // The recovered is an object during runtime
  if (toChecksumAddress(recovered) === toChecksumAddress(signer)) {
    return true;
  } else {
    return false;
  }
}

export function web3Injected(): boolean {
  if (window.ethereum) {
    return true;
  } else {
    return false;
  }
}

// I need a function to add a new agreement to a compatible smart contract
// Pass in the document hash,issuer,signature,network
export function newAgreement() {}

//I need to call an Accept function on a smart contract
// Pass in the document,
export function acceptAgreement() {}

// A function to get a boolean, if I can agree to the contract or not
export function canAgree() {}
