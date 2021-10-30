import { dispatch_renderError } from "../dispatch/render";
import Arweave from "arweave";

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

export async function createFileTransaction(type: string, data: any) {
  const config = await window.arweaveWallet.getArweaveConfig();
  const arweave = Arweave.init(config);
  const owner = await window.arweaveWallet.getActiveAddress();
  const transaction = await arweave.createTransaction({ data, owner });
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
