import { ContractTypes } from "../types";
import { getById } from "../view/utils";

export function getRedirectDataProp(): string {
  const page = getById("page");
  return page.dataset.redirect;
}

export function getCreatorAddressDataProp(): string {
  const page = getById("page");
  return page.dataset.creatoraddress;
}

export function getCurrentPageDataProp() {
  const page = getById("page");
  const contractType = page.dataset.contracttype;

  return contractType as ContractTypes;
}

export function getPriceFromDataProp(): string {
  const page = getById("page");
  return page.dataset.price;
}

//Refactor these to state too!
export function getBundleSrcUrl(): string {
  const mainScript = getById("main-script") as HTMLScriptElement;
  return mainScript.src;
}

export function getArweaveDependencyUrl(): string {
  const arweaveScript = getById("arweave-script") as HTMLScriptElement;
  return arweaveScript.src;
}

export function getCommunityJsDependencyUrl(): string {
  const communityScript = getById("community-js-script") as HTMLScriptElement;
  return communityScript.src;
}
