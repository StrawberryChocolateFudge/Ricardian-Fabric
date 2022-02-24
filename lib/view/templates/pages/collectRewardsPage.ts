import { html } from "lit-html";
import { TokenWithBalance } from "../../../types";
import { getBlockie } from "../components/getBlockies";
import { HarmonyLogoSizeable } from "../components/logos";

export const CollectRewardsPage = () => html`<h3>Collect Rewards</h3>
  <small
    >Fees from deployed smart contracts accumulate in the Fee Dao
    contract.</small
  >
  <small>You can withdraw some in exchange for locking up Ric.</small>

  <div id="feeTokenRow" class="tokenRow placeholder-item"></div>
  <hr />
  <div id="feeTokenActionsDisplay" class="tokenRow">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div> `;

export function TokenRow(tokens: Array<TokenWithBalance>) {
  return tokens.map((t) => renderTokens(t.name, t.address, t.balance));
}

function renderTokens(
  tokenName: string,
  tokenAddress: string,
  balance: string
) {
  return html`
    <div
      data-name="${tokenName}"
      data-address="${tokenAddress}"
      data-balance="${balance}"
      class="box width-100 cursor-pointer hoverccc feeTokenDisplayButton"
    >
      <hr />
      <div class="text-align-center">
        ${tokenName === "ONE"
          ? HarmonyLogoSizeable("50px")
          : getBlockie(tokenAddress, "50px", "")}
      </div>
      <div class="text-align-center">
        <small>${balance} ${tokenName}</small>
      </div>
    </div>
  `;
}

export function rewardTokenWithdrawElement(token: {
  name: string;
  address: string;
  balance: string;
}) {
  return html`<div class="center">
    <table class="box width-200">
      <tr>
        <th></th>
        <th></th>
      </tr>
    </table>
  </div>`;
}
