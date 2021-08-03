import {
  createTransactionSend,
  getArweaveCall,
  getBalanceCall,
  getWalletAddr,
} from "../arweave/arweave";
import {
  dispatch_getArweave,
  dispatch_setBalance,
} from "../dispatch/stateChange";
import { fetchDependency } from "../fetch";
import { AcceptablePageProps } from "../types";
import {
  removeLoadingIndicator,
  renderLoadingIndicator,
} from "../view/actions/renderLoadingIndicator";
import { renderTransaction } from "../view/actions/renderTransaction";
import createNewEditor from "../view/editor";
import {
  disableCreateButton,
  getArweaveDependencyUrl,
  getBundleSrcUrl,
  getCommunityJsDependencyUrl,
  renderError,
} from "../view/utils";
import { getAcceptablePage } from "../view/vDom";

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

export async function createAcceptableContract(
  arweave: any,
  key: any,
  data: AcceptablePageProps
) {
  renderLoadingIndicator("transaction-display");
  const arweaveDepUrl = getArweaveDependencyUrl();
  const communityJsDepUrl = getCommunityJsDependencyUrl();
  const bundleSrcUrl = getBundleSrcUrl();
  const page = await getAcceptablePage({
    ...data,
    arweaveDeps: {
      src: arweaveDepUrl,
    },
    mainDep: {
      src: bundleSrcUrl,
    },
    communityJsDep: {
      src: communityJsDepUrl,
    },
  });
  //TODO: handle not enough balance
  const result = await createTransactionSend(arweave, key, page);
  await getBalance(arweave, key);
  disableCreateButton();
  if (result.statusCode !== 200) {
    removeLoadingIndicator("transaction-display");
    renderError("An error occured when sending the transaction!");
  } else {
    renderTransaction(result.path);
  }

  return result;
}
