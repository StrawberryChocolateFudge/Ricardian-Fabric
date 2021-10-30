//The contents of the ipfs data must be checked to make sure it is Ricardian Fabric.
const DOMParser = require("xmldom").DOMParser;

export enum Status {
  Success,
  Failure,
}

export type Tags = {
  network: string;
  issuer: string;
  contractType: string;
  participant: string;
  version: string;
};

export type VerifyOptions = {
  status: Status;
  tags: Tags;
  error: string;
};

export function verifyAndGetTags(data: Buffer): VerifyOptions {
  //This function verifies the data from IPFS is a valid Ricardian Fabric contract and returns the
  let tags: Tags = {
    network: "",
    issuer: "",
    contractType: "",
    participant: "",
    version: "",
  };
  let error = "Invalid contract";
  let status = Status.Success;
  try {
    const doc = new DOMParser().parseFromString(data.toString(), "text/html");
    const page: HTMLElement = doc.getElementById("page");
    tags = {
      network: getNetwork(page) ?? "",
      issuer: getIssuer(page) ?? "",
      contractType: getContractType(page) ?? "",
      participant: getParticipant(page) ?? "",
      version: getVersion(page) ?? "",
    };
  } catch (error) {
    status = Status.Failure;
  }

  return { status, tags, error };
}

function getContractType(page: HTMLElement) {
  return page.getAttribute("data-contracttype");
}
function getIssuer(page: HTMLElement) {
  return page.getAttribute("data-issuer");
}
function getParticipant(page: HTMLElement) {
  return page.getAttribute("data-participant");
}
function getVersion(page: HTMLElement) {
  return page.getAttribute("data-version");
}
function getNetwork(page: HTMLElement) {
  return page.getAttribute("data-network");
}