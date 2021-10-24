import Web3 from "web3";

import { recoverTypedSignature } from "eth-sig-util";
import { ECDSASignature, fromRpcSig, toChecksumAddress } from "ethereumjs-util";
import { getAgreementAbi } from "./abi/Agreement";
import { ContractTypes, Options, Status } from "../types";
export async function requestAccounts() {
  //TODO: refactor to request
  await window.ethereum.send("eth_requestAccounts");
}

export async function getAddress(): Promise<string> {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();

  return accounts[0];
}

export async function getNetwork(): Promise<number> {
  const hex = window.ethereum.chainId;
  return Number(hex);
}

export async function signHash(
  hash: string,
  from: string,
  networkId: string,
  smartContract: string,
  onSuccess: CallableFunction,
  onError: CallableFunction,
  contractType: ContractTypes,
  url: string | undefined
) {
  const msgParams = getmsgParams(
    networkId,
    "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
    hash,
    url,
    contractType
  );
  console.log(msgParams);
  await window.ethereum.sendAsync(
    {
      method: "eth_signTypedData_v3",
      params: [from, JSON.stringify(msgParams)],
    },
    async function (err, result) {
      if (result.error) {
        onError(result.error.message);
      } else {
        const recovered = await recoverTypedSignatures(
          msgParams,
          result.result
        );
        console.log(recovered + "       recovered");
        if (compareAddresses(from, recovered)) {
          console.log(getSigParams(result.result));

          await onSuccess(result.result);
        } else {
          await onError("Signature verification failed.");
        }
      }
    }
  );
}

function getmsgParams(
  networkId: string,
  smartContract: string,
  hash: string,
  url: string | undefined,
  contractType: ContractTypes
) {
  const valueOnlyDOC = [{ name: "value", type: "string" }];
  const withUrlDOC = [
    { name: "value", type: "string" },
    { name: "url", type: "string" },
  ];

  const doc = contractType === ContractTypes.create ? valueOnlyDOC : withUrlDOC;

  const valueOnlyMSG = { value: hash };
  const withUrlMSG = { value: hash, url: url };

  const message =
    contractType === ContractTypes.create ? valueOnlyMSG : withUrlMSG;

  return {
    domain: {
      chainId: networkId,
      name: "Ricardian Fabric",
      verifyingContract: smartContract,
      version: "1",
    },
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
      doc,
    },
    primaryType: "doc",
    message,
  };
}

export async function recoverTypedSignatures(msgParams, signature) {
  const recovered = await recoverTypedSignature({
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
  if (window.ethereum.send) {
    return true;
  } else {
    return false;
  }
}

export function getSigParams(sig: string): ECDSASignature {
  return fromRpcSig(sig);
}

// I'm using web3 in the below function because it throws errors nice for this validation.
export async function canUseContract(
  address: string,
  issuer: string
): Promise<boolean> {
  let success = true;
  const web3 = new Web3(window.ethereum);
  try {
    const agreementContract = await new web3.eth.Contract(
      getAgreementAbi(),
      address
    );

    //If accepted terms is false, means I can use
    const resul = await agreementContract.methods.acceptedTerms(issuer).call();
  } catch (err) {
    success = false;
  }

  return success;
}

// A function to get a boolean, if I can agree to the contract or not
export async function canAgree(
  contractAddress: string,
  signerAddress: string
): Promise<boolean> {
  try {
    const web3 = new Web3(window.ethereum);

    const contract = new web3.eth.Contract(getAgreementAbi(), contractAddress);

    const alreadyAccepted = await contract.methods
      .acceptedTerms(signerAddress)
      .call();

    return !alreadyAccepted;
  } catch (err) {
    console.log(err);
    console.log("error occured");
  }
  return false;
}

// I need a function to add a new agreement to a compatible smart contract
// Pass in the document hash,issuer,signature,network
export async function setTerms(arg: {
  url: string;
  hash: string;
  contractAddress: string;
  signerAddress: string;
}): Promise<Options> {
  const options: Options = {
    error: "",
    status: Status.Success,
    data: {},
  };
  try {
    const web3 = new Web3(window.ethereum);

    const contract = new web3.eth.Contract(
      getAgreementAbi(),
      arg.contractAddress
    );

    const resp = await contract.methods
      .setTerms(arg.url, arg.hash)
      .send({ from: arg.signerAddress });

    options.data = resp;
  } catch (err) {
    options.status = Status.Failure;
    options.error = err.message;
  }

  return options;
}

//I need to call an Accept function on a smart contract
// Pass in the document,
export async function acceptAgreement(arg: {
  url: string;
  hash: string;
  contractAddress: string;
  signature: string;
  signerAddress: string;
}): Promise<Options> {
  const options: Options = {
    error: "",
    status: Status.Success,
    data: {},
  };
  try {
    const web3 = new Web3(window.ethereum);

    const contract = new web3.eth.Contract(
      getAgreementAbi(),
      arg.contractAddress
    );

    const sigParams = getSigParams(arg.signature);

    const result = await contract.methods
      .recoverSignature(arg.hash, sigParams.v, sigParams.r, sigParams.s)
      .call();

    const sifg = await recoverTypedSignatures(arg.hash, arg.signature);
    const resp = await contract.methods
      .accept(arg.url, arg.hash, sigParams.v, sigParams.r, sigParams.s)
      .send({ from: arg.signerAddress });
  } catch (err) {
    options.status = Status.Failure;
    options.error = err.message;
  }

  return options;
}

export async function switchNetwork(
  network: "Harmony",
  shard: number,
  type: "Mainnet" | "Testnet"
) {
  if (network === "Harmony") {
    await switchToHarmony(shard, type);
  }
}

export async function switchToHarmony(
  shard: number,
  type: "Mainnet" | "Testnet"
) {
  const chainName =
    type === "Mainnet"
      ? "Harmony Mainnet Shard " + shard
      : "Harmony Testnet Shard " + shard;
  let chainId = type === "Mainnet" ? 1666600000 : 1666700000;

  // Calculate the shard
  chainId += shard;
  const hexchainId = "0x" + Number(chainId).toString(16);
  const blockExplorerUrls =
    type === "Mainnet"
      ? ["https://explorer.harmony.one/#/"]
      : ["https://explorer.pops.one/#/"];

  const rpcUrls = getHarmonyRPCURLS(shard, type);

  const switched = await switch_to_Chain(hexchainId);
  console.log(switched);
  if (!switched) {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x" + Number(chainId).toString(16),
          chainName,
          nativeCurrency: {
            name: "ONE",
            symbol: "ONE",
            decimals: 18,
          },
          rpcUrls,
          blockExplorerUrls,
        },
      ],
    });
  }
}

async function switch_to_Chain(chainId: string) {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
    return true;
  } catch (err) {
    return false;
  }
}

function getHarmonyRPCURLS(shard: number, type: "Mainnet" | "Testnet") {
  if (type === "Mainnet") {
    switch (shard) {
      case 0:
        return ["https://api.harmony.one"];
      case 1:
        return ["https://s1.api.harmony.one"];
      case 2:
        return ["https://s2.api.harmony.one"];
      case 3:
        return ["https://s3.api.harmony.one"];
      default:
        break;
    }
  } else if (type === "Testnet") {
    switch (shard) {
      case 0:
        return ["https://api.s0.b.hmny.io"];
      case 1:
        return ["https://api.s1.b.hmny.io"];
      case 2:
        return ["https://api.s2.b.hmny.io"];
      case 3:
        return ["https://api.s3.b.hmny.io"];
      default:
        break;
    }
  }
}

