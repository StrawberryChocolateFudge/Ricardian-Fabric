import { dispatch_renderError } from "../dispatch/render";
import Arweave from "arweave";

const ARWAEVECONFIG = {
  host: "arweave.net",
  port: 443,
  protocol: "https",
};

export async function arConnect() {
  if (window.arweaveWallet === undefined) {
    //I don't have the wallet installed.
    dispatch_renderError("You must install arconnect!");
    window.open("https://arconnect.io");
  } else {
    await window.arweaveWallet.connect([
      "ACCESS_ADDRESS",
      "SIGNATURE",
      "SIGN_TRANSACTION",
      "ACCESS_ARWEAVE_CONFIG",
    ]);
  }
}

export async function createFileTransaction(
  type: string,
  data: any,
  version: string
) {
  const config = await window.arweaveWallet.getArweaveConfig();
  const arweave = Arweave.init(config);
  const owner = await window.arweaveWallet.getActiveAddress();
  const transaction = await arweave.createTransaction({ data, owner });
  transaction.addTag("Contract-Type", "File upload");
  transaction.addTag("Content-Type", type);
  transaction.addTag("App-Version", version);
  transaction.addTag("App-Name", "Ricardian Fabric");
  const signedTransaction = await window.arweaveWallet.sign(transaction);
  return {
    tx: signedTransaction,
    fee: arweave.ar.winstonToAr(signedTransaction.reward),
  };
}

export async function uploadFile(transaction: any, data: any) {
  const config = await window.arweaveWallet.getArweaveConfig();
  const arweave = Arweave.init(config);
  const posted = await arweave.transactions.post(transaction);
  return posted;
}

export async function createWallet() {
  const arweave = Arweave.init(ARWAEVECONFIG);
  const key = await arweave.wallets.generate();
  return key;
}

export async function getWalletAddress(key: any) {
  const arweave = Arweave.init(ARWAEVECONFIG);
  const address = await arweave.wallets.jwkToAddress(key);
  return address;
}

export async function getWalletBalance(address: string): Promise<string> {
  const arweave = Arweave.init(ARWAEVECONFIG);
  const balance = await arweave.wallets.getBalance(address);
  return arweave.ar.winstonToAr(balance);
}
