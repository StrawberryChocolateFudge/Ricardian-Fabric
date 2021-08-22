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

export function getOnlySignerFromDataProp(page: HTMLElement): string {
  return page.dataset.onlysigner;
}

export function getPstContractIdFromDataProp(page: HTMLElement): string {
  return page.dataset.pstContractId;
}

export function getIsInstrumentFromDataProp(page: HTMLElement): boolean {
  return page.dataset.isInstrument === "true";
}
export function getInstrumentNameFromDataProp(page: HTMLElement): string {
  return page.dataset.instrumentName;
}

export function getInstrumentTickerFromDataProp(page: HTMLElement): string {
  return page.dataset.instrumentTicker;
}
export function getInstrumentSupplyFromDataProp(page: HTMLElement): string {
  return page.dataset.instrumentSupply;
}

export function getCanDeriveFromDataProp(page: HTMLElement): string {
  return page.dataset.canDerive;
}
export function getInstrumentContractIdFromDataProp(page: HTMLElement): string {
  return page.dataset.instrumentContractId;
}
export function getPdfTransactionIdFromDataProp(page: HTMLElement): string {
  return page.dataset.pdfTransactionId;
}
