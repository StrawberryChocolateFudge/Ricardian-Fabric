import TestWeave from "../../node_modules/testweave-sdk";
import { CreateTransaqctionResult } from "../types";
let testweave: TestWeave;

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

export async function getBalanceCall(arweave: any, key: any): Promise<number> {
  const address = await getAddressCall(arweave, key);
  const winston = await arweave.wallets.getBalance(address);
  return winston as number;
}

export async function createTransactionSend(
  arweave: any,
  key: any,
  page: string
): Promise<CreateTransaqctionResult> {
  const dataTransaction = await arweave.createTransaction(
    {
      data: page,
    },
    testweave.rootJWK
  );
  dataTransaction.addTag("Content-Type", "text/html");
  console.log(page);
  await arweave.transactions.sign(dataTransaction, testweave.rootJWK);
  const response: any = await arweave.transactions.post(dataTransaction);

  await arweave.transactions.post(dataTransaction);
  const statusAfterPost = await arweave.transactions.getStatus(
    dataTransaction.id
  );
  console.log(response.status);
  await testweave.mine();
  console.log(`http://localhost:1984/tx/${dataTransaction.id}/data.html`);
  await testweave.mine();
  await testweave.mine();
  await testweave.mine();
  await testweave.mine();
  await testweave.mine();

  return {
    statusCode: response.status,
    id: dataTransaction.id,
    path: `http://localhost:1984/tx/${dataTransaction.id}/data.html`,
  };
}
