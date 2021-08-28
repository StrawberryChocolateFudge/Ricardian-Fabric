// import TestWeave from "../../node_modules/testweave-sdk";
import { CreateTransactionResult } from "../types";
import Arweave from "arweave";
import Transaction from "arweave/node/lib/transaction";

const FEE = 5; // This is 0.5 when calculated
// let testweave: TestWeave;
const HOST = "arweave.net"
export function calculateFeeInWinston(arweave: Arweave, price: string): number {
  const winston = arweave.ar.arToWinston(price);
  return (parseInt(winston) / 1000) * FEE;
}

export function calculateFeeInAr(arweave: Arweave, price: string) {
  const winston = calculateFeeInWinston(arweave, price);
  return arweave.ar.winstonToAr(winston.toString());
}

export async function getArweaveCall() {
  //@ts-ignore
  const arweave = await Arweave.init({
    host: HOST, // Hostname or IP address for a Arweave host
    port: 443, // Port
    protocol: "https", // Network protocol http or https
    timeout: 20000, // Network request timeouts in milliseconds
    logging: false, // Enable network request logging
  });

  // @ts-ignore
  // testweave = await TestWeave.init(arweave);

  // await getInfoCall(arweave);
  return arweave;
}

export async function getInfoCall(arweave: Arweave) {
  arweave.network.getInfo().then(console.log);
}

export async function getAddressCall(
  arweave: Arweave,
  key: any
): Promise<string> {
  return await arweave.wallets.jwkToAddress(key);
}

export async function getBalanceCall(
  arweave: Arweave,
  key: any
): Promise<number> {
  const address = await getAddressCall(arweave, key);
  const winston = await arweave.wallets.getBalance(address);
  return parseFloat(arweave.ar.winstonToAr(winston));
}

export async function createAcceptablePageTransaction(
  arweave: Arweave,
  key: any,
  page: string,
  version: string
): Promise<Transaction> {
  const dataTransaction = await arweave.createTransaction(
    {
      data: page,
    },
    key
  );
  dataTransaction.addTag("Content-Type", "text/html");
  dataTransaction.addTag("App-Name", "Ricardian Fabric");
  dataTransaction.addTag("App-Version", version);
  await arweave.transactions.sign(dataTransaction, key);
  return dataTransaction;
}

export async function fulfilledTransactionCall(
  arweave: Arweave,
  key: any,
  page: string,
  version: string
): Promise<Transaction> {
  const dataTransaction = await arweave.createTransaction(
    {
      data: page,
    },
    key
  );
  dataTransaction.addTag("Content-Type", "text/html");
  dataTransaction.addTag("App-Name", "Ricardian Fabric");
  dataTransaction.addTag("App-Version", version);
  await arweave.transactions.sign(dataTransaction, key);
  return dataTransaction;
}

export async function transactionPost(
  arweave: Arweave,
  tx: Transaction
): Promise<CreateTransactionResult> {
  const response: any = await arweave.transactions.post(tx);
  return {
    statusCode: response.status,
    id: tx.id,
    path: `https://${HOST}/${tx.id}/data.html`,
  };
}
