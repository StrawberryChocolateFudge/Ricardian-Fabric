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

export function getVersionFromDataProp(page: HTMLElement): string {
  return page.dataset.version;
}

export function getBundleSrcUrl(): string {
  const mainScript = getById("main-script") as HTMLScriptElement;
  return mainScript.src;
}

export function getImgSrcUrl(): string {
  const img = getById("fabric-logo") as HTMLScriptElement;
  return img.src;
}

export function getOnlySignerFromDataProp(page: HTMLElement): string {
  return page.dataset.onlysigner;
}

export function getSourceFromDataProp(page: HTMLElement): string {
  return page.dataset.dependency;
}

export function getLogoSrcFromDataProp(page: HTMLElement): string {
  return page.dataset.logosrc;
}
