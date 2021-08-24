import { simulateCreateContractFromSource } from "smartweave";
import {
  acceptTransactionFree,
  acceptTransactionPay,
  calculateFeeInAr,
  getArweaveCall,
  getBalanceCall,
  getAddressCall,
  createPDFTransaction,
  createPageTransaction,
} from "../arweave/arweave";
import {
  instrumentContractSrc,
  instrumentState,
} from "../contracts/instrument";
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
import { fetchDependency, hitWebhook } from "../fetch";
import { AcceptablePageProps, CreatedTransactions, State } from "../types";

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
import {
  getSimulatedContractTX,
  handleExpiresType,
  handleInstrumentTxId,
  handlePSTContractId,
} from "./utils";

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

export async function createTransactionsWithPDF(
  props: State,
  pdfData: string,
  toGetFee: boolean
): Promise<CreatedTransactions> {
  const instrumentName = props.instrumentPageData.name,
    instrumentTicker = props.instrumentPageData.ticker,
    instrumentSupply = props.instrumentPageData.supply,
    canDerive = props.instrumentPageData.canDerive,
    isInstrument = props.instrumentPageData.isInstrument,
    creator = props.walletPage.address,
    price = props.agreementPage.price;

  let instrumentContractTx;

  if (toGetFee && isInstrument) {
    // const initContractState = instrumentState({
    //   name: instrumentName,
    //   creator,
    //   supply: instrumentSupply,
    //   canDerive,
    //   initialPrice: parseInt(price),
    //   ticker: instrumentTicker,
    // });

    // instrumentContractTx = await simulateCreateContractFromSource(
    //   //@ts-ignore
    //   props.arweave,
    //   props.walletPage.key,
    //   initContractState,
    //   instrumentContractSrc
    // );
    instrumentContractTx = await getSimulatedContractTX({
      props,
      name: instrumentName,
      creator,
      supply: instrumentSupply,
      canDerive,
      initialPrice: parseInt(price),
      ticker: instrumentTicker,
    });
  }

  console.log("instrumentTransaction");
  console.log(instrumentContractTx);
  //TODO: Determine if PDF is used in transaction!!
  //TODO: REFACTOR SO THIS FUNCTION IS NOT ONLY FOR PDF TRANSACTIONS!!
  const pdfTransaction = await createPDFTransaction(
    props.arweave,
    pdfData,
    props.walletPage.key
  );
  console.log("pdf transaction");
  console.log(pdfTransaction);

  // Expires can be string or date so I need to handle that!
  // const expiresData = props.agreementPage.selectedDate;
  // let expires = "";
  // if (typeof expiresData !== "string") {
  //   const expiresDate = expiresData as Date;
  //   expires = expiresDate.toISOString();
  // } else {
  //   expires = expiresData;
  // }
  let expires = handleExpiresType(props);

  // const pstContractId = props.instrumentPageData.willProfitShare
  //   ? props.instrumentPageData.pstContractId
  //   : "NONE";

  const pstContractId = handlePSTContractId(props);

  // const instrumentContractId = instrumentContractTx
  //   ? instrumentContractTx.id
  //   : "NONE";
  const instrumentContractId = handleInstrumentTxId(instrumentContractTx);

  const data: AcceptablePageProps = {
    domParser: props.domParser,
    createdDate: new Date().toISOString(),
    legalContract: props.agreementPage.content,
    price,
    onlySigner: props.agreementPage.onlySigner,
    expires,
    pdfTransactionId: pdfTransaction.id,
    version: props.version,
    creatorAddress: creator,
    post: props.networkingPage.postto,
    redirect: props.networkingPage.redirect,
    webhook: props.networkingPage.webhook,
    pstContractId,
    isInstrument,
    instrumentName,
    instrumentTicker,
    instrumentSupply,
    canDerive,
    instrumentContractId,
  };

  const page = await createAcceptableContractPage(props, data);
  const pageTransaction = await createPageTransaction({
    arweave: props.arweave,
    key: props.walletPage.key,
    page,
    version: props.version,
  });

  console.log("page transaction");
  console.log(pageTransaction);
  return { pdfTransaction, instrumentContractTx, pageTransaction };
}

export async function createAcceptableContractPage(
  props: State,
  data: AcceptablePageProps
): Promise<string> {
  const src = props.bundleSrcUrl;
  const code = await fetchDependency(src);

  const page = await getAcceptablePageFromVDOM({
    ...data,
    mainDep: {
      src,
      code,
    },
  });

  return page;
}

export async function createAcceptableContract(args: {
  props: State;
  key: any;
  data: AcceptablePageProps;
}) {
  dispatch_disableButton(args.props);
  dispatch_renderLoadingIndicator("transaction-display");

  //IF needed, deploy the smart contract
  // add the contract ID to the page!
  // const page = await getAcceptablePageFromVDOM({
  //   ...args.data,
  //   mainDep: {
  //     src: args.props.bundleSrcUrl,
  //   },
  // });

  //TODO: handle not enough balance
  // const result = await createTransactionSend(
  //   args.props.arweave,
  //   args.key,
  //   page,
  //   args.data.version
  // );
  // await getBalance(args.props.arweave, args.key);
  // if (result.statusCode !== 200) {
  //   dispatch_removeLoadingIndicator("transaction-display");
  //   dispatch_renderError("An error occured when sending the transaction!");
  // } else {
  //   dispatch_renderTransaction(result.path);
  // }

  //  return result;
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
