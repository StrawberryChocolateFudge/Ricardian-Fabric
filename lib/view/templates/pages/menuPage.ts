import { html } from "lit-html";
import { getBlockie } from "../components/getBlockies";

export const MenuPage = (blockieData: string) => html`
  <hr />
  ${getBlockie(blockieData, "50px", "")}
  <hr />
  <div>
    <div class="routes-buttons-container">
      <button
        class="lightSlateGray-shadow routes-buttons"
        id="create-contract-button"
      >
        Create a Ricardian Contract
      </button>
      <button
        class="lightGreenish-shadow routes-buttons"
        id="smart-contract-catalog-button"
      >
        Smart Contract Catalog
      </button>
    </div>
    <div class="routes-buttons-container">
      <button class="routes-buttons" id="staking-button">
        Staking and Profit-Sharing
      </button>

      <button class="routes-buttons" id="verify-contract-button">
        Verify an Acceptable Contract
      </button>
    </div>
  </div>
`;
