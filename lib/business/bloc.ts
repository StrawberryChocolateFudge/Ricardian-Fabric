import Transaction from "arweave/node/lib/transaction";
import {
  calculateFeeInAr,
  getArweaveCall,
  getBalanceCall,
  getAddressCall,
  transactionPost,
  createAcceptablePageTransaction,
  fulfilledTransactionCall,
} from "../arweave/arweave";
import {
  dispatch_disableButton,
  dispatch_redirectCounter,
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
import { hitWebhook } from "../fetch";
import { AcceptablePageProps, ContractTypes, State } from "../types";

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
export const DECOMISSIONDATE = "2022-01-01";

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

export async function createAcceptablePageContractTX(args: {
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

  const tx = await createAcceptablePageTransaction(
    args.props.arweave,
    args.key,
    page,
    args.data.version
  );
  dispatch_removeLoadingIndicator("transaction-display");

  return tx;
}

export async function createFulfilledContractTx(
  props: State,
  key: any
): Promise<Transaction> {
  dispatch_renderLoadingIndicator("transaction-display");
  dispatch_disableButton(props);
  const page = await fulfilledPage({ props, ar: "NONE", key });

  const tx = await fulfilledTransactionCall(
    props.arweave,
    key,
    page,
    props.version
  );
  dispatch_removeLoadingIndicator("transaction-display");
  return tx;
}

export async function postTransactionFromPage(
  props: State,
  tx: Transaction,
  key: any
) {
  dispatch_renderLoadingIndicator("transaction-display");

  const result = await transactionPost(props.arweave, tx);
  if (result.statusCode !== 200) {
    dispatch_removeLoadingIndicator("transaction-display");
    dispatch_renderError("An error occured when sending the transaction!");
  } else {
    dispatch_renderTransaction(result.path);

    adjustBalance(props, key, tx.reward);
    if (props.contracttype === ContractTypes.acceptable) {
      await handlePost(props, result.id);
    }
  }

  return result;
}

export async function isOnlySigner(props: State, key: any): Promise<boolean> {
  const onlySigner = props.onlySigner;
  if (onlySigner === "NONE") {
    return true;
  }
  const address = await getAddressCall(props.arweave, key);
  return onlySigner === address;
}

function adjustBalance(props: State, key: any, reward: string) {
  const balanceInWinston = props.arweave.ar.arToWinston(
    props.balance.toString()
  );
  const rewardInWinston = parseInt(reward);
  const balanceAsInt = parseInt(balanceInWinston);
  const newBalance = balanceAsInt - rewardInWinston;
  const newBalanceInAR = props.arweave.ar.winstonToAr(newBalance.toString());
  dispatch_setBalance({
    balance: parseFloat(newBalanceInAR),
    address: props.address,
  });
}

async function handlePost(props: State, id: string) {
  const url = props.postto;
  if (url === "NONE") {
    return;
  }
  const getURLWithId = (url: string, id: string) => {
    // If the url ends with /
    if (url.slice(-1) === "/") {
      return url + id;
    } else {
      return url + "/" + id;
    }
  };

  if (props.webhook) {
    await hitWebhook(getURLWithId(url, id), getSecret());
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
    logoSrc: props.logoSrc,
  });
}

export function showBanner() {
  const termsAccepted = getTermsAccepted();
  if (termsAccepted !== true) {
    dispatch_renderTerms();
  }
}

export function decomissioned() {
  const isDecomissioned = new Date() > new Date(DECOMISSIONDATE);
  if (isDecomissioned) {
    dispatch_renderError(
      "This app has been decomissioned. Check ricardianfabric.com for newer versions!"
    );
  }
}
