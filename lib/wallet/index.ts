import Web3 from "web3";
import sigUtil from "@metamask/eth-sig-util";

export async function getIssuer(web3: Web3): Promise<string> {
  const accounts = await web3.eth.getAccounts();

  return accounts[0];
}

export async  function getNetwork(web3: Web3): Promise<number> {
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
    function (err, result) {
      if (result.error) {
        onError(result.error.message);
      } else {
        onSuccess(result.result);
      }
    }
  );
}

export function web3Injected(): boolean {
  if (window.ethereum) {
    return true;
  } else {
    return false;
  }
}
