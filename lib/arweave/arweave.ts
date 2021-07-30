export async function getArweaveCall() {
  //@ts-ignore
  const arweave = await Arweave.init({
    host: "127.0.0.1",
    port: 1984,
    protocol: "http",
  });
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
  console.log(address);
  const winston = await arweave.wallets.getBalance(address);
  return winston as number;
}

export async function createTransactionSend(
  arweave: any,
  key: any,
  legalContract: string
): Promise<{ transaction: string; id: string; statusCode: number }> {
  //TODO: DATA!
  const transaction = await arweave.createTransaction(
    {
      data: `<html><head><meta charset="UTF-8"><title></title></head><body>${legalContract}</body></html>`,
    },
    key
  );

  await arweave.transactions.sign(transaction, key);
  const response: any = await arweave.transactions.post(transaction);

  return {
    statusCode: response.status,
    transaction: transaction.last_tx,
    id: transaction.id,
  };
}
