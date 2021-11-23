import { html } from "lit-html";
import { BSCLogo, EthLogo, HarmonyLogo, networkLogo, PolygonLogo } from "../components/logos";

export const NetworkDropdown = () => html`
  <input type="checkbox" id="network_checkbox_toggle" class="dropdown_checkbox_toggle" />
  <label class="labelButton dropdown_checkbox_label lightBlue-shadow" id="network_checkbox_label"
    for="network_checkbox_toggle">
    ${networkLogo()} Network
  </label>
  <ul>
    <li>
      <button id="network-hmny-testnet-shard0" class="dropdown-button">
        ${HarmonyLogo()} <small>Harmony Testnet Shard 0</small>
      </button>
    </li>
    <li>
      <button id="ropsten-testnet" class="dropdown-button">
        ${EthLogo()} <small>Ropsten Testnet</small>
      </button>
    </li>
    <li>
      <button id="bsc-testnet" class="dropdown-button">
        ${BSCLogo()} <small>BSC Testnet</small>
      </button>
    </li>
    <li>
      <button id="polygon-testnet" class="dropdown-button">
        ${PolygonLogo()} <small>Polygon Testnet</small>
      </button>
    </li>
  
    <li>
      <hr />
    </li>
  </ul>
`;

