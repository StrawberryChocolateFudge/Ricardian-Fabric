import {
  createTransactionSend,
  FEE,
  getArweaveCall,
  getBalanceCall,
  getWalletAddr,
} from "../arweave/arweave";
import {
  dispatch_disableButton,
  dispatch_removeLoadingIndicator,
  dispatch_renderError,
  dispatch_renderLoadingIndicator,
  dispatch_renderTransaction,
} from "../dispatch/render";
import {
  dispatch_getArweave,
  dispatch_setBalance,
} from "../dispatch/stateChange";
import { AcceptablePageProps, State } from "../types";

import { getAcceptableContract, getFromUrl } from "../view/utils";
import { getAcceptablePage, getFulfilledPage } from "../view/vDom";

export async function getArweave() {
  const arweave = await getArweaveCall();
  dispatch_getArweave(arweave);
}

export async function getBalance(arweave: any, key: any) {
  const balance = await getBalanceCall(arweave, key);
  const address = await getWalletAddr(arweave, key);
  dispatch_setBalance({ balance, address });
}

export async function getCreatorWallet(arweave: any, key: any) {
  return await getWalletAddr(arweave, key);
}

export async function createAcceptableContract(args: {
  props: State;
  key: any;
  data: AcceptablePageProps;
}) {
  dispatch_renderLoadingIndicator("transaction-display");
  const page = await getAcceptablePage({
    ...args.data,
    arweaveDeps: {
      src: args.props.arweaveDependencyUrl,
    },
    mainDep: {
      src: args.props.bundleSrcUrl,
    },
    communityJsDep: {
      src: args.props.communityJsDependencyUrl,
    },
  });
  //TODO: handle not enough balance
  const result = await createTransactionSend(
    args.props.arweave,
    args.key,
    page
  );
  await getBalance(args.props.arweave, args.key);
  dispatch_disableButton(args.props);
  if (result.statusCode !== 200) {
    dispatch_removeLoadingIndicator("transaction-display");
    dispatch_renderError("An error occured when sending the transaction!");
  } else {
    dispatch_renderTransaction(result.path);
  }

  return result;
}

export async function acceptAndPayContract(data: {
  props: State;
  winston: number;
  key: any;
}) {
  dispatch_renderLoadingIndicator("transaction-display");
  dispatch_disableButton(data.props);
  const page = await getFulfilledPage({
    legalContract: getAcceptableContract(),
    creator: data.props.creatorAddress,
    parentUrl: getFromUrl(),
    fee: FEE,
    paidAmount: data.winston,
    paidTo: data.props.creatorAddress,
    paidFrom: await getWalletAddr(data.props.arweave, data.key),
    createdDate: new Date().toISOString(),
    domParser: data.props.domParser,
  });
  //TODO: style page!
  console.log(page);
  //TODO:
  // const result = await acceptTransactionPay({});

  //then I can redirect when I got the transaction id in the result
}

export async function acceptContract(arweave: any, key: any) {}
