import { html } from "lit-html";
import { getBlockie } from "../components/getBlockies";
import {
  AgreementLogo,
  catalogLogo,
  Dashboard2,
  VerificationLogo,
  VotingLogo,
} from "../components/logos";

export const MenuPage = (blockieData: string) => html`
  <hr />
  <div class="text-align-center">${getBlockie(blockieData, "50px", "")}</div>

  <hr />
  <div class="text-align-center">
    <button
      class="lightSlateGray-shadow  labelButton"
      id="dashboard-button"
      title="Dashboard"
    >
      ${Dashboard2()}
    </button>
  </div>
  <div class="text-align-center">
    <button
      class="lightSlateGray-shadow  labelButton"
      id="create-contract-button"
      title="Create a Ricardian contract"
    >
      ${AgreementLogo()}
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
      ${VerificationLogo()}
    </button>
  </div>
  <div class="text-align-center">
    <button
      title="DAO"
      class="lightSlateGray-shadow  labelButton"
      id="review-and-vote-button"
    >
      ${VotingLogo()}
    </button>
  </div>
`;
