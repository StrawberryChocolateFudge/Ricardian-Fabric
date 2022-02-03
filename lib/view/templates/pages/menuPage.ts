import { html } from "lit-html";
import { getBlockie } from "../components/getBlockies";
import {
  AgreementLogo,
  catalogLogo,
  Dashboard2,
  RewardsPageIcon,
  TokenSaleLogo,
  TrailsLogo,
  VaultLogo,
  VotingLogo,
} from "../components/logos";

export const MenuPage = (blockieData: string) => html`
  <hr />
  <div class="text-align-center">${getBlockie(blockieData, "50px", "")}</div>
  <div class="text-align-center">
    <a id="terms-link" target="_blank" rel="noopener">Terms</a>
  </div>
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
      title="Trails"
      class="lightSlateGray-shadow labelButton"
      id="trails-page-button"
    >
      ${TrailsLogo()}
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
    <div class="text-align-enter">
      <button
        title="Token Sale"
        class="lightSlateGray-shadow labelButton"
        id="tokensale-button"
      >
        ${TokenSaleLogo()}
      </button>
    </div>
    <div class="text-align-center">
      <button
        title="Fees"
        class="lightSlateGray-shadow labelButton"
        id="fees-button"
      >
        ${RewardsPageIcon()}
      </button>
    </div>
    <div class="text-align-center">
      <button
        title="Vault"
        class="lightSlateGray-shadow labelButton"
        id="vault-button"
      >
        ${VaultLogo()}
      </button>
    </div>
  </div>
`;
