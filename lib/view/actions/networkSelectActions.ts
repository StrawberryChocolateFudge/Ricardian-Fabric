import { dispatch_renderError } from "../../dispatch/render";
import { switchNetwork, web3Injected } from "../../wallet";
import { getById } from "../utils";
import MetaMaskOnboarding from "@metamask/onboarding";
import { State } from "../../types";

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

  const testnetShard0 = getById("network-hmny-testnet-shard0");
  const testnetShard1 = getById("network-hmny-testnet-shard1");
  const testnetShard2 = getById("network-hmny-testnet-shard2");
  const testnetShard3 = getById("network-hmny-testnet-shard3");

  const mainnetShard0 = getById("network-hmny-mainnet-shard0");
  const mainnetShard1 = getById("network-hmny-mainnet-shard1");
  const mainnetShard2 = getById("network-hmny-mainnet-shard2");
  const mainnetShard3 = getById("network-hmny-mainnet-shard3");

  testnetShard0.onclick = async function () {
    await switchNetwork("Harmony", 0, "Testnet");
  };
  testnetShard1.onclick = async function () {
    await switchNetwork("Harmony", 1, "Testnet");
  };
  testnetShard2.onclick = async function () {
    await switchNetwork("Harmony", 2, "Testnet");
  };
  testnetShard3.onclick = async function () {
    await switchNetwork("Harmony", 3, "Testnet");
  };
  mainnetShard0.onclick = async function () {
    await switchNetwork("Harmony", 0, "Mainnet");
  };
  mainnetShard1.onclick = async function () {
    await switchNetwork("Harmony", 1, "Mainnet");
  };
  mainnetShard2.onclick = async function () {
    await switchNetwork("Harmony", 2, "Mainnet");
  };
  mainnetShard3.onclick = async function () {
    await switchNetwork("Harmony", 3, "Mainnet");
  };
}

export function addChainButtonListener(props :State){
  const addChainButton = getById("addChainButton");
  addChainButton.onclick = async function(){
       await switchNetwork("Harmony", 0, "Testnet");

  }
}