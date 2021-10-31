import {
  dispatch_deploySCIntent,
  dispatch_renderError,
} from "../../dispatch/render";
import { switchNetwork, web3Injected } from "../../wallet/web3";
import { getById } from "../utils";
import MetaMaskOnboarding from "@metamask/onboarding";
import { Chains, SelectedWallet, State } from "../../types";
import { dispatch_setSelectedWallet } from "../../dispatch/stateChange";
import { arConnect } from "../../wallet/arweave";

export function networkSelectActions() {
  const switchnetworkToggle = getById(
    "network_checkbox_toggle"
  ) as HTMLInputElement;
  switchnetworkToggle.onclick = function () {
    if (!web3Injected()) {
      switchnetworkToggle.checked = false;
      dispatch_renderError("Found no injected web3, install metamask");
      const onboarding = new MetaMaskOnboarding();
      onboarding.startOnboarding();
      return;
    }
  };

  const ropsten = getById("ropsten-testnet");
  const bscTestnet = getById("bsc-testnet");
  const polygonTestnet = getById("polygon-testnet");
  const hmnyTestnetShard0 = getById("network-hmny-testnet-shard0");

  ropsten.onclick = async function () {
    await switchNetwork("Ropsten", 0, "Testnet");
  };
  bscTestnet.onclick = async function () {
    await switchNetwork("BSC", 0, "Testnet");
  };
  polygonTestnet.onclick = async function () {
    await switchNetwork("Polygon", 0, "Testnet");
  };
  hmnyTestnetShard0.onclick = async function () {
    await switchNetwork("Harmony", 0, "Testnet");
  };
}

export function addChainButtonListener(props: State) {
  const addChainButton = getById("addChainButton");
  addChainButton.onclick = async function () {
    const chains = {
      [Chains.Ropsten]: async () =>
        await switchNetwork("Ropsten", 0, "Testnet"),
      [Chains.bscTestnet]: async () => await switchNetwork("BSC", 0, "Testnet"),
      [Chains.polygonTestnet]: async () =>
        await switchNetwork("Polygon", 0, "Testnet"),
      [Chains.harmonyTestnetShard0]: async () =>
        await switchNetwork("Harmony", 0, "Testnet"),
    };
    await chains[props.network]();
  };
}

export function addDeployButtonListener(props: State) {
  const deployButton = getById("deploy-sc-button");

  deployButton.onclick = function () {
    dispatch_deploySCIntent(props);
  };
}

export function walletSelectListener() {
  const metamask = getById("metamask-logo-container");
  const arconnect = getById("arweave-logo-container");
  metamask.onclick = function () {
    if (metamask.dataset.disabled === "false") {
      dispatch_setSelectedWallet(SelectedWallet.metamask);
    }
  };

  arconnect.onclick = async function () {
    if (arconnect.dataset.disabled === "false") {
      dispatch_setSelectedWallet(SelectedWallet.arconnect);
    }

    //I can check if arconnect is installed if not then prompt to install it.
    await arConnect();
  };
}
