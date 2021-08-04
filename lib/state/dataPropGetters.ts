import { ContractTypes } from "../types";
import { getById } from "../view/utils";

export function getPostToDataProp(page: HTMLElement): string {
  return page.dataset.postto;
}

export function getCreatorAddressDataProp(page: HTMLElement): string {
  return page.dataset.creatoraddress;
}

export function getCurrentPageDataProp(page: HTMLElement) {
  const contractType = page.dataset.contracttype;

  return contractType as ContractTypes;
}

export function getPriceFromDataProp(page: HTMLElement): string {
  return page.dataset.price;
}

export function getCreatedDateFromDataProp(page: HTMLElement): string {
  return page.dataset.created;
}

export function getExpiresFromDataProp(page: HTMLElement): string {
  return page.dataset.expires;
}

export function getWebhookFromDataProp(page: HTMLElement): boolean {
  return page.dataset.webhook === "true";
}

export function getRedirectFromDataProp(page: HTMLElement): boolean {
  return page.dataset.redirect === "true";
}

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
