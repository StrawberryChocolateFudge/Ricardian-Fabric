import { html, TemplateResult } from "lit-html";
import { DashboardUIElement } from "../../../types";
import { helperTooltips } from "../components/helperTooltips";
import {
  AcceptedSmartContractLogo,
  AllProposalsLogo,
  CardLookingLogo,
  contractFeesLogo,
  CryptoVaultLogo,
  GoldBarsLogo,
  RateLogo,
  Rewardhand,
  StakingLogo,
  TokenPileLogo,
} from "../components/logos";

export const dashBoardElementsTitles: DashboardUIElement[] = [
  {
    title: "Ric Total Supply",
    id: "ric-total-supply",
    desc: "All the tokens were created and it's not possible to mint more.",
    logo: GoldBarsLogo(),
  },
  {
    title: "Locked in Vault",
    id: "ric-in-vault",
    desc: "The amount of RIC currently locked in the vault.",
    logo: CryptoVaultLogo(),
  },
  {
    title: "RIC for sale",
    id: "ric-left-for-sale",
    desc: "Join the community by purchasing the native token, Ric.",
    logo: CardLookingLogo(),
  },
  {
    title: "Token Sale Rate",
    id: "ric-sale-rate",
    desc: "The amount of RIC for 1 ONE.",
    logo: RateLogo(),
  },
  {
    title: "Contributor Rewards",
    id: "available-reward-amount",
    desc: "The rewards available for the catalogue contributors!",
    logo: Rewardhand(),
  },
  {
    title: "Available Contracts",
    id: "catalogue-contracts-amount",
    desc: "The amount of content in the smart contract catalogue",
    logo: AcceptedSmartContractLogo(),
  },
  {
    title: "Submitted Proposals",
    id: "smart-contract-proposals-amount",
    desc: "The amount of proposals submitted by contributors",
    logo: AllProposalsLogo(),
  },
  {
    title: "Contributor Stake",
    id: "total-staking-amount",
    desc: "The amount of RIC securing the catalogue.",
    logo: StakingLogo(),
  },
  {
    title: "ONE Fees",
    id: "fees-collected-amount",
    desc: "Total amount of Harmony ONE Fees collected by the catalog apps that were submitted by the contributors.",
    logo: contractFeesLogo(),
  },
  {
    title: "Tokens for Fees",
    id: "token-fees-collected-amount",
    desc: "Available tokens to use when collecting fees.",
    logo: TokenPileLogo(),
  },
];

export const DashboardPage = () => html`<h2>Dashboard</h2>
  <div class="dashboard-layout">
    ${dashBoardElementsTitles.map((elmnts) =>
      dashEl(elmnts.title, elmnts.id, elmnts.desc, elmnts.logo)
    )}
  </div>
  <hr />
  <div class="center"><h3>Permaweb uploads</h3></div>
  <table>
    <tr>
      <th>Link</th>
      <th>Type</th>
    </tr>
    <tbody id="permapinnedContracts-display"></tbody>
  </table> `;

// The dashboard elements will have a loading indicator at the id, then the value.
// It will side-effect like render it in an init function one by one as they fetch
export const dashEl = (
  title: string,
  id: string,
  tooltip: string,
  logo: TemplateResult
) => html`
  <div class="box rowSpacer">
    <div class="column">${logo}</div>
    <div class="column">
      <div class="box-title text-align-center">
        <label>${title}</label>
        ${helperTooltips(tooltip)}
      </div>
      <div
        id="${id}"
        class="unselectable text-align-center placeholder-item height50 "
      ></div>
    </div>
  </div>
`;

export const loadedValueEl = (loadedValue) => html` <h4>${loadedValue}</h4>`;
