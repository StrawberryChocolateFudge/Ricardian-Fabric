import { html } from "lit-html";
import { getBlockie } from "../components/getBlockies";
import {
  catalogLogo,
  GradingLogo,
  HandShakeLogo,
  TokenLogo,
} from "../components/logos";

export const MenuPage = (blockieData: string) => html`
  <hr />
  <div class="text-align-center">${getBlockie(blockieData, "50px", "")}</div>

  <hr />
  <div class="text-align-center">
    <button
      class="lightSlateGray-shadow  labelButton"
      id="create-contract-button"
      title="Create a Ricardian contract"
    >
      ${HandShakeLogo()}
    </button>
  </div>

  <div class="text-align-center">
    <button
      class="lightGreenish-shadow  labelButton"
      id="smart-contract-catalog-button"
      title="Smart contract catalog"
    >
      ${catalogLogo()}
    </button>
  </div>

  <div class="text-align-center">
    <button
      title="Staking an Profit-Sharing"
      class="labelButton lightGreenish-shadow"
      id="staking-button"
    >
      ${TokenLogo()}
    </button>
  </div>

  <div class="text-align-center">
    <button
      title="Verify an acceptable contract"
      class="labelButton"
      id="verify-contract-button"
    >
      ${GradingLogo()}
    </button>
  </div>
`;
