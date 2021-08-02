import {
  createTransactionSend,
  getArweaveCall,
  getBalanceCall,
} from "../arweave/arweave";
import {
  dispatch_getArweave,
} from "../dispatch/stateChange";
import { fetchDependency } from "../fetch";
import { AcceptablePageProps } from "../types";
import createNewEditor from "../view/editor";
import {
  getArweaveDependencyUrl,
  getBundleSrcUrl,
  getCommunityJsDependencyUrl,
} from "../view/utils";
import { getAcceptablePage } from "../view/vDom";

export async function getArweave() {
  const arweave = await getArweaveCall();
  dispatch_getArweave(arweave);
}

export async function getBalance(arweave: any, key: any): Promise<number> {
  const balance = getBalanceCall(arweave, key);
  return balance;
}

export async function createAcceptableContract(
  arweave: any,
  key: any,
  data: AcceptablePageProps
) {
  const arweaveDepUrl = getArweaveDependencyUrl();
  const communityJsDepUrl = getCommunityJsDependencyUrl();
  const bundleSrcUrl = getBundleSrcUrl();
  const arweaveDepCode = await fetchDependency(arweaveDepUrl);
  const communityJsDepCode = await fetchDependency(communityJsDepUrl);
  const bundleDepCode = await fetchDependency(bundleSrcUrl);
  console.log(data.legalContract);
  const page = await getAcceptablePage({
    ...data,
    arweaveDeps: {
      src: arweaveDepUrl,
      code: arweaveDepCode,
    },
    mainDep: {
      src: bundleSrcUrl,
      code: bundleDepCode,
    },
    communityJsDep: {
      src: communityJsDepUrl,
      code: communityJsDepCode,
    },
  });
  const result = await createTransactionSend(arweave, key, page);
  return result;
}
