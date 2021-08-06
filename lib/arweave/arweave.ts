import TestWeave from "../../node_modules/testweave-sdk";
import { CreateTransactionResult } from "../types";

const FEE = 5; // This is 0.5 when calculated
export const TESTADDRESS = "1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY";
let testweave: TestWeave;

export function calculateFeeInWinston(arweave: any, price: number): number {
  const winston = arweave.ar.arToWinston(price);
  return (winston / 1000) * FEE;
}

export function calculateFeeInAr(arweave: any, price: number) {
  const winston = calculateFeeInWinston(arweave, price);
  return arweave.ar.winstonToAr(winston);
}

export async function getArweaveCall() {
  //@ts-ignore
  const arweave = await Arweave.init({
    host: "127.0.0.1",
    port: 1984,
    protocol: "http",
    timeout: 20000,
    logging: false,
  });

  testweave = await TestWeave.init(arweave);

  await getInfoCall(arweave);
  return arweave;
}

export async function getInfoCall(arweave: any) {
  arweave.network.getInfo().then(console.log);
}

export async function getAddressCall(arweave: any, key: any): Promise<string> {
  return await arweave.wallets.jwkToAddress(key);
}

export async function getWalletAddr(arweave: any, key: any): Promise<string> {
  const address = await arweave.wallets.jwkToAddress(testweave.rootJWK);
  return address;
}

export async function getBalanceCall(arweave: any, key: any): Promise<number> {
  const address = await getAddressCall(arweave, testweave.rootJWK);
  const winston = await arweave.wallets.getBalance(address);
  return arweave.ar.winstonToAr(winston) as number;
}

export async function createTransactionSend(
  arweave: any,
  key: any,
  page: string
): Promise<CreateTransactionResult> {
  const dataTransaction = await arweave.createTransaction(
    {
      data: page,
    },
    testweave.rootJWK
  );
  dataTransaction.addTag("Content-Type", "text/html");
  await arweave.transactions.sign(dataTransaction, testweave.rootJWK);
  const response: any = await arweave.transactions.post(dataTransaction);

  await arweave.transactions.post(dataTransaction);
  await testweave.mine();
  return {
    statusCode: response.status,
    id: dataTransaction.id,
    path: `http://localhost:1984/tx/${dataTransaction.id}/data.html`,
  };
}

export async function profitShare(arweave: any, key: any, price: number) {
  const fee = calculateFeeInWinston(arweave, price);
  console.log(fee);
}

export async function acceptTransactionPay(arg: {
  arweave: any;
  key: any;
  page: string;
  target: string;
  quantity: number;
}) {
  const arweave = arg.arweave;
  const dataTransaction = await arweave.createTransaction(
    {
      data: arg.page,
      target: TESTADDRESS,
      quantity: arweave.ar.arToWinston(arg.quantity),
    },
    testweave.rootJWK
  );
  dataTransaction.addTag("Content-Type", "text/html");
  await arweave.transactions.sign(dataTransaction, testweave.rootJWK);
  const response: any = await arweave.transactions.post(dataTransaction);

  await profitShare(arg.arweave, arg.key, arg.quantity);
  await testweave.mine();

  return {
    statusCode: response.status,
    id: dataTransaction.id,
    path: `http://localhost:1984/tx/${dataTransaction.id}/data.html`,
  };
}

export async function acceptTransactionFree(arg: {
  arweave: any;
  key: any;
  page: any;
}) {
  const arweave = arg.arweave;
  const dataTransaction = await arweave.createTransaction(
    {
      data: arg.page,
    },
    testweave.rootJWK
  );
  dataTransaction.addTag("Content-Type", "text/html");
  await arweave.transactions.sign(dataTransaction, testweave.rootJWK);
  const response: any = await arweave.transactions.post(dataTransaction);
  await testweave.mine();

  return {
    statusCode: response.status,
    id: dataTransaction.id,
    path: `http://localhost:1984/tx/${dataTransaction.id}/data.html`,
  };
}
