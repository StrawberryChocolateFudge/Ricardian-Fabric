import {
  dispatch_DisableSCInputs,
  dispatch_EnableSCInputs,
  dispatch_renderError,
  dispatch_SCDeploySelected,
  dispatch_setDeployedSCAddress,
} from "../../dispatch/render";
import { DeploySC, ERC20Params, PopupState } from "../../types";
import {
  deployContract,
  findConstructorParameters,
  getAddress,
  prepareType,
  requestAccounts,
  web3Injected,
} from "../../wallet/web3";
import { getHRC20Abi, getHRC20Bytecode } from "../../wallet/abi/HRC20";
import { getById } from "../utils";
import MetaMaskOnboarding from "@metamask/onboarding";
import {
  dispatch_setERC20,
  dispatch_setPopupState,
} from "../../dispatch/stateChange";

export function deploySCActions() {
  const hrc20 = getById("HRC20-checkbox") as HTMLInputElement;
  const hrc20Li = getById("HRC20-li");
  const backbutton = getById("SCIntentBackButton") as HTMLButtonElement;
  const nextButton = getById("SCIntentNextButton") as HTMLButtonElement;

  hrc20.onchange = function () {
    if (!hrc20.checked) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  };

  hrc20Li.onclick = function () {
    hrc20.checked = !hrc20.checked;
  };

  backbutton.onclick = function () {
    dispatch_setPopupState(PopupState.NONE);
  };

  nextButton.onclick = function () {
    if (hrc20.checked) {
      dispatch_SCDeploySelected(DeploySC.HRC20);
    }
  };
}

export function constructSCActions(selected: DeploySC) {
  let abi;
  let bytecode;
  if (selected === DeploySC.HRC20) {
    abi = getHRC20Abi();
    bytecode = getHRC20Bytecode();
  }

  const constructorParams = findConstructorParameters(getHRC20Abi());

  const constructorElements = {};

  //I need to get the inputElements based on the params.
  constructorParams.forEach((param) => {
    const el = getById(`${param.name}-input`) as HTMLInputElement;

    // Under the param name I store the element and the param itself
    constructorElements[param.name] = { param, el };
  });

  const backbutton = getById("SCConstructBackButton");
  const nextButton = getById("SCConstructCreateButton");
  const logoUrl = getById("logo-url-input") as HTMLInputElement;
  const acceptTerms = getById("agree-to-deploy-sc") as HTMLInputElement;
  backbutton.onclick = function () {
    dispatch_setPopupState(PopupState.NONE);
  };

  nextButton.onclick = async function () {
    // I need to do metamask onboarding if its not installed
    if (!web3Injected()) {
      dispatch_renderError("Found no injected web3, install metamask");
      const onboarding = new MetaMaskOnboarding();
      onboarding.startOnboarding();
      return;
    }
    await requestAccounts();

    const empty = inputsEmpty(constructorElements, constructorParams);
    if (empty) {
      dispatch_renderError("You must fill out the empty fields");
      return;
    }

    if (acceptTerms.checked === false) {
      dispatch_renderError("You must accept the terms");
      return;
    }

    dispatch_DisableSCInputs(constructorParams);

    const preparedArgs = prepareArguments(
      constructorElements,
      constructorParams
    );

    const address = await getAddress();

    const onError = (err) => {
      dispatch_renderError(err.message);
      dispatch_EnableSCInputs(constructorParams);
    };

    const onReceipt = async (receipt) => {
      const erc20Params = getERC20Params(
        constructorElements,
        receipt.contractAddress,
        logoUrl.value
      );
      dispatch_setDeployedSCAddress(receipt.contractAddress);
      dispatch_setERC20(erc20Params);
      dispatch_setPopupState(PopupState.NONE);
    };

    await deployContract(
      abi,
      bytecode,
      address,
      preparedArgs,
      onError,
      onReceipt
    );
  };
}

export function inputsEmpty(constructorElements, params): boolean {
  let empty = false;

  params.forEach((par) => {
    const element = constructorElements[par.name].el as HTMLInputElement;
    if (element.value === "") {
      empty = true;
    }
  });

  return empty;
}

export function prepareArguments(constructorElements, params) {
  const preparedArgs = [];
  params.forEach((par) => {
    const type = constructorElements[par.name].param.type;
    const value = constructorElements[par.name].el.value;

    preparedArgs.push(prepareType(type, value));
  });
  return preparedArgs;
}

function getERC20Params(constructorElements, contractAddress, imageUrl) {
  const erc20: ERC20Params = {
    name: constructorElements["tokenName"].el.value,
    symbol: constructorElements["tokenSymbol"].el.value,
    address: contractAddress,
    decimals: constructorElements["_decimals"].el.value,
    image: imageUrl,
  };
  return erc20;
}
