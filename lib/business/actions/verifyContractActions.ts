import { getHash } from "../../crypto";
import {
  dispatch_renderError,
  dispatch_verificationState,
} from "../../dispatch/render";
import { fetchAcceptableContract } from "../../fetch";
import {
  ContractTypes,
  PageState,
  State,
  Status,
  VerificationState,
} from "../../types";
import { getmsgParams, recoverTypedSignatures } from "../../wallet/web3";
import { getById } from "../../view/utils";
import { dependencyDeployer } from "../../wallet/arweave";
import { getOwnerFromTxId } from "../../fetch/graphql";
import { dispatch_setPage } from "../../dispatch/stateChange";
import { BlockCountry } from "../countryBlock";

export function verifyContractPageTrigger(props: State) {
  const verify = getById("verify-contract-button");
  verify.onclick = function () {
    dispatch_setPage(PageState.VerifyContract);
  };
}

export function verifyContractActions(props: State) {
  const verifyProceed = getById("verify-proceed");

  const acceptableUrl = getById("acceptable-contract-url") as HTMLInputElement;

  verifyProceed.onclick = async function () {
    if (acceptableUrl.value === "") {
      dispatch_renderError("You need to specify the contract url!");
      dispatch_verificationState(VerificationState.failure);
      return;
    }

    let value = acceptableUrl.value;

    if (!value.includes("http")) {
      dispatch_renderError("Invalid url, must start with http");
      dispatch_verificationState(VerificationState.failure);

      return;
    }

    //If the url is specified , I need to fetch it.
    await verifyAcceptableContract(value, props.domParser);
  };
}

async function verifyAcceptableContract(url: string, domParser: DOMParser) {
  const fetchOptions = await fetchAcceptableContract(url);
  if (fetchOptions.status === Status.Failure) {
    dispatch_renderError("An error occured while fetching the url.");
    dispatch_verificationState(VerificationState.failure);

    return;
  }
  let html: Document;
  try {
    html = domParser.parseFromString(fetchOptions.data, "text/html");
  } catch (err) {
    dispatch_renderError(err.message);
    return;
  }

  const page = html.getElementById("page");
  if (page === null) {
    dispatch_renderError("Not a Ricardian Fabric contract.");
    dispatch_verificationState(VerificationState.failure);

    return;
  }
  if (page.dataset.contracttype !== ContractTypes.acceptable) {
    dispatch_renderError("Wrong contract type.");
    dispatch_verificationState(VerificationState.failure);

    return;
  }

  // I need to check how many script tags are included
  const scriptTags = html.getElementsByTagName("script");
  if (scriptTags.length !== 1) {
    dispatch_renderError("Detected extra scripts. DO NOT USE!");
    dispatch_verificationState(VerificationState.failure);
    return;
  }
  // I need to check the tx id of the dependency and verify it's from an official deployer!
  const txId = getArweaveTxIdFromSRC(scriptTags[0].src);
  if (!txId) {
    dispatch_renderError("Invalid dependency.");
    dispatch_verificationState(VerificationState.failure);
    return;
  }
  const ownerOptions = await getOwnerFromTxId(txId);
  if (ownerOptions.status !== Status.Success) {
    dispatch_renderError(ownerOptions.error);
    dispatch_verificationState(VerificationState.failure);
    return;
  }

  if (!dependencyDeployer.includes(ownerOptions.data)) {
    dispatch_renderError("Unknown dependency deployer.");
    dispatch_verificationState(VerificationState.failure);
    return;
  }

  // I need to recompute the hash now.
  const legalContract = html.getElementById("contract-display").innerHTML;
  const createdDate = page.dataset.created;
  const expires = page.dataset.expires;
  const redirectto = page.dataset.redirectto;
  const version = page.dataset.version;
  const issuer = page.dataset.issuer;
  const blockedCountries = JSON.parse(
    page.dataset.blockedcountries
  ) as BlockCountry[];
  const blockedAddresses = JSON.parse(page.dataset.blockedaddresses);
  const network = page.dataset.network;
  const smartContract = page.dataset.smartcontract;
  const ERC20 = page.dataset.erc20;

  const recomputedHash = await getHash({
    legalContract,
    createdDate,
    expires,
    redirectto,
    version,
    issuer,
    blockedCountries,
    network,
    smartContract,
    blockedAddresses,
    ERC20,
  });

  // I need to verify the issuer signature now!

  const msgParams = getmsgParams(network, smartContract, recomputedHash);

  const signature = page.dataset.issuersignature;

  const recovered = recoverTypedSignatures(msgParams, signature);

  // Check if the issuer address in the data prop and on the UI is the same as the recovered one!
  const issuerFromUI = html.getElementById("issuer-address").innerText;

  if (issuerFromUI.toLowerCase() !== recovered.toLowerCase()) {
    dispatch_renderError(
      "The issuer address on page does not match the signature"
    );
    dispatch_verificationState(VerificationState.failure);
    return;
  }
  if (issuer.toLowerCase() !== recovered.toLowerCase()) {
    dispatch_renderError(
      "The issuer address used in state does not match the signature"
    );
    dispatch_verificationState(VerificationState.failure);
    return;
  }

  dispatch_verificationState(VerificationState.success);
}

export function getArweaveTxIdFromSRC(src: string) {
  const split = src.split("arweave.net/");
  return split[1];
}
