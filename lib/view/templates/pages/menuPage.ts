import { html } from "lit-html";
import { getBlockie } from "../components/getBlockies";
import {
  catalogLogo,
  GradingLogo,
  HandShakeLogo,
  TokenLogo,
  VoteLogo,
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
      class="lightSlateGray-shadow  labelButton"
      id="smart-contract-catalog-button"
      title="Catalogue"
    >
      ${catalogLogo()}
    </button>
  </div>

  <div class="text-align-center">
    <button
      title="Verify an acceptable contract"
      class="lightSlateGray-shadow  labelButton"
      id="verify-contract-button"
    >
      ${GradingLogo()}
    </button>
  </div>
  <div class="text-align-center">
    <button
      title="Review and Vote"
      class="lightSlateGray-shadow  labelButton"
      id="review-and-vote-button"
    >
      ${VoteLogo()}
    </button>
  </div>
`;
