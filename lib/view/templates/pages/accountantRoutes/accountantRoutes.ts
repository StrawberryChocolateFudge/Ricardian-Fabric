import { html } from "lit-html";

export const AccountantRoutes = () => html`
  <hr />
  <div class="routes-buttons-container">
    <button class="routes-buttons" id="kycButton"><h2>KYC</h2></button>
    <button class="routes-buttons" id="feesButton">
      <h2>Fees</h2>
    </button>
    <button class="routes-buttons" id="resaleButton">
      <h2>Resale</h2>
    </button>
    <button class="routes-buttons" id="TradeButton">
      <h2>Trade</h2>
    </button>
  </div>
  <div class="button-row">
    <button class="marginRight-20" id="accountant-back">back</button>
    <button class="marginLeft-20" id="accounting-save">Start</button>
  </div>
`;
