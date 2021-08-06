import {
  acceptTransactionFree,
  acceptTransactionPay,
  createTransactionSend,
  FEE,
  getArweaveCall,
  getBalanceCall,
  getWalletAddr,
} from "../arweave/arweave";
import {
  dispatch_disableButton,
  dispatch_redirectCounter,
  dispatch_removeLoadingIndicator,
  dispatch_renderError,
  dispatch_renderLoadingIndicator,
  dispatch_renderTransaction,
} from "../dispatch/render";
import {
  dispatch_getArweave,
  dispatch_setBalance,
} from "../dispatch/stateChange";
import { hitWebhook } from "../fetch";
import { AcceptablePageProps, State } from "../types";

import {
  getAcceptableContract,
  getFromUrl,
  getSecret,
  redirect,
} from "../view/utils";
import {
  getAcceptablePageFromVDOM,
  getFulfilledPagefromVDOM,
} from "../view/vDom";

const REDIRECT_TIMEOUT = 1000;

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
  dispatch_disableButton(args.props);
  dispatch_renderLoadingIndicator("transaction-display");
  const page = await getAcceptablePageFromVDOM({
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
  ar: number;
  key: any;
}) {
  const props = data.props;

  dispatch_disableButton(props);
  dispatch_renderLoadingIndicator("transaction-display");
  const page = await fulfilledPage(data);
  const result = await acceptTransactionPay({
    arweave: data.props.arweave,
    key: data.key,
    page,
    target: props.creatorAddress,
    quantity: data.ar,
  });

  if (result.statusCode !== 200) {
    dispatch_removeLoadingIndicator("transaction-display");
    dispatch_renderError("An error occured when sending the transaction!");
  } else {
    dispatch_renderTransaction(result.path);
  }
  //then I can redirect when I got the transaction id in the result
  await handlePost(props, result.id);
}

export async function acceptContract(props: State, key: any) {
  dispatch_renderLoadingIndicator("transaction-display");
  dispatch_disableButton(props);
  const page = await fulfilledPage({ props, ar: 0, key });

  const result = await acceptTransactionFree({
    arweave: props.arweave,
    key,
    page,
  });

  if (result.statusCode !== 200) {
    dispatch_removeLoadingIndicator("transaction-display");
    dispatch_renderError("An error occured when sending the transaction!");
  } else {
    await handlePost(props, result.id);
    dispatch_renderTransaction(result.path);
  }
}

async function handlePost(props: State, id: string) {
  const url = props.postto;
  if (url === "NONE") {
    return;
  }
  const getURLWithId = (url: string, id: string) => {
    return url + "/" + id;
  };

  if (props.webhook) {
    hitWebhook(getURLWithId(url, id), getSecret());
  } else if (props.redirect) {
    // I show a countback and redirect
    let counter = 1;
    dispatch_redirectCounter(counter);
    const interval = setInterval(function () {
      counter++;
      dispatch_redirectCounter(counter);
      if (counter === 5) {
        clearInterval(interval);
        redirect(getURLWithId(url, id));
      }
    }, REDIRECT_TIMEOUT);
  }
}

async function fulfilledPage(data: { props: State; ar: number; key: any }) {
  const props = data.props;

  return await getFulfilledPagefromVDOM({
    legalContract: getAcceptableContract(),
    creator: props.creatorAddress,
    parentUrl: getFromUrl(),
    fee: FEE,
    paidAmount: data.ar,
    paidTo: props.creatorAddress,
    paidFrom: await getWalletAddr(props.arweave, data.key),
    createdDate: new Date().toISOString(),
    domParser: props.domParser,
  });
}
