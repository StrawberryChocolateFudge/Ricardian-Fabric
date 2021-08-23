import Transaction from "arweave/node/lib/transaction";
import {
  acceptTransactionFree,
  acceptTransactionPay,
  calculateFeeInAr,
  createTransactionSend,
  getArweaveCall,
  getBalanceCall,
  getAddressCall,
  createTransactionForFee,
  createTransactionPost,
} from "../arweave/arweave";
import {
  dispatch_disableButton,
  dispatch_redirectCounter,
  dispatch_removeAcceptedButton,
  dispatch_removeLoadingIndicator,
  dispatch_renderError,
  dispatch_renderLoadingIndicator,
  dispatch_renderTerms,
  dispatch_renderTransaction,
} from "../dispatch/render";
import {
  dispatch_getArweave,
  dispatch_setBalance,
} from "../dispatch/stateChange";
import { fetchDependency, hitWebhook } from "../fetch";
import { AcceptablePageProps, State } from "../types";

import {
  getAcceptableContract,
  getFromUrl,
  getSecret,
  getTermsAccepted,
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
  const address = await getAddressCall(arweave, key);
  dispatch_setBalance({ balance, address });
}

export async function getCreatorWallet(arweave: any, key: any) {
  return await getAddressCall(arweave, key);
}

export async function createAcceptableContractTX(args: {
  props: State;
  key: any;
  data: AcceptablePageProps;
}) {
  dispatch_renderLoadingIndicator("transaction-display");
  const src = args.props.bundleSrcUrl;
  const code = "";
  const page = await getAcceptablePageFromVDOM({
    ...args.data,
    mainDep: {
      src,
      code,
    },
  });

  const tx = await createTransactionForFee(
    args.props.arweave,
    args.key,
    page,
    args.data.version
  );
  dispatch_removeLoadingIndicator("transaction-display");

  return tx;
}

export async function postTransactionFromCreatePage(
  props: State,
  tx: Transaction,
  key: any
) {
  dispatch_renderLoadingIndicator("transaction-display");

  const result = await createTransactionPost(props.arweave, tx);
  await getBalance(props.arweave, key);
  if (result.statusCode !== 200) {
    dispatch_removeLoadingIndicator("transaction-display");
    dispatch_renderError("An error occured when sending the transaction!");
  } else {
    dispatch_renderTransaction(result.path);
  }

  return result;
}

export async function createAcceptableContract(args: {
  props: State;
  key: any;
  data: AcceptablePageProps;
}) {
  dispatch_disableButton(args.props);
  dispatch_renderLoadingIndicator("transaction-display");
  const src = args.props.bundleSrcUrl;
  const code = await fetchDependency(src);
  const page = await getAcceptablePageFromVDOM({
    ...args.data,
    mainDep: {
      src,
      code,
    },
  });
  //TODO: handle not enough balance
  const result = await createTransactionSend(
    args.props.arweave,
    args.key,
    page,
    args.data.version
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
  ar: string;
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
    await handlePost(props, result.id);
    await getBalance(props.arweave, data.key);
    dispatch_renderTransaction(result.path);
  }
  //then I can redirect when I got the transaction id in the result
}

export async function acceptContract(props: State, key: any) {
  dispatch_renderLoadingIndicator("transaction-display");
  dispatch_disableButton(props);
  const page = await fulfilledPage({ props, ar: "NONE", key });

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
    await getBalance(props.arweave, key);
    dispatch_renderTransaction(result.path);
    dispatch_removeAcceptedButton(props);
  }
}

export async function isOnlySigner(props: State, key: any): Promise<boolean> {
  const onlySigner = props.onlySigner;
  if (onlySigner === "NONE") {
    return true;
  } else {
    const address = await getAddressCall(props.arweave, key);
    if (onlySigner === address) {
      return true;
    } else {
      return false;
    }
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

async function fulfilledPage(data: { props: State; ar: string; key: any }) {
  const props = data.props;
  const fee = calculateFeeInAr(data.props.arweave, data.ar);
  return await getFulfilledPagefromVDOM({
    version: props.version,
    createdDate: new Date().toISOString(),
    creatorAddress: props.creatorAddress,
    legalContract: getAcceptableContract(),
    parentUrl: getFromUrl(),
    fee,
    price: data.ar,
    paidFrom: await getAddressCall(props.arweave, data.key),
    domParser: props.domParser,
    expires: props.expires,
    post: props.postto,
    webhook: props.webhook,
    redirect: props.redirect,
  });
}

export function showBanner() {
  const termsAccepted = getTermsAccepted();
  if (termsAccepted !== true) {
    dispatch_renderTerms();
  }
}
