import {
  createTransactionSend,
  getArweaveCall,
  getBalanceCall,
} from "../arweave/arweave";
import { dispatch_getArweave } from "../dispatch/stateChange";

export async function getArweave() {
  const arweave = await getArweaveCall();
  dispatch_getArweave(arweave);
}

export async function getBalance(arweave: any, key: any): Promise<number> {
  const balance = getBalanceCall(arweave, key);
  return balance;
}

export async function createTransaction(
  arweave: any,
  key: any,
  legalContract: string
) {
  const result = await createTransactionSend(arweave, key, legalContract);
  return result;
}
