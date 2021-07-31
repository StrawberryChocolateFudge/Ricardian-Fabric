import { ContractTypes } from "../types";

export function getById(id: string): HTMLElement {
  const el = document.getElementById(id);

  if (el === null) {
    return document.createElement("div");
  } else {
    return el;
  }
}

export function getCurrentPage() {
  const page = getById("page");
  const contractType = page.dataset.contracttype;

  return contractType as ContractTypes;
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

export function readFile(files: FileList, getKey: CallableFunction) {
  const reader = new FileReader();

  reader.onload = function (e: ProgressEvent) {
    const key = getKeyFromFile(e);
    getKey(key);
  };

  reader.onerror = function (e) {
    console.log(e);
    //TODO: validation error
  };

  reader.readAsText(files[0], "UFT-8");
}

export function getKeyFromFile(fileEvent: ProgressEvent) {
  try {
    const fileReader: FileReader = fileEvent.target as FileReader;
    const key = JSON.parse(fileReader.result as string);
    return key;
  } catch (e) {
    // TODO: validation error
  }
}
