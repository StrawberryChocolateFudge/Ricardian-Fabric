import Transaction from "arweave/node/lib/transaction";
import { simulateCreateContractFromSource } from "smartweave";
import {
  instrumentContractSrc,
  instrumentState,
} from "../contracts/instrument";
import { State } from "../types";

export async function getSimulatedContractTX(arg: {
  props: State;
  name: string;
  creator: string;
  supply: number;
  canDerive: number;
  initialPrice: number;
  ticker: string;
}): Promise<Transaction> {
  const initContractState = instrumentState({
    name: arg.name,
    creator: arg.creator,
    supply: arg.supply,
    canDerive: arg.canDerive,
    initialPrice: arg.initialPrice,
    ticker: arg.ticker,
  });

  return await simulateCreateContractFromSource(
    //@ts-ignore
    props.arweave,
    arg.props.walletPage.key,
    initContractState,
    instrumentContractSrc
  );
}

export function handleExpiresType(props: State): string {
  const expiresData = props.agreementPage.selectedDate;
  let expires = "";
  if (typeof expiresData !== "string") {
    const expiresDate = expiresData as Date;
    expires = expiresDate.toISOString();
  } else {
    expires = expiresData;
  }
  return expires;
}

export function handlePSTContractId(props: State): string {
  return props.instrumentPageData.willProfitShare
    ? props.instrumentPageData.pstContractId
    : "NONE";
}

export function handleInstrumentTxId(
  instrumentContractTx: Transaction
): string {
  return instrumentContractTx ? instrumentContractTx.id : "NONE";
}
