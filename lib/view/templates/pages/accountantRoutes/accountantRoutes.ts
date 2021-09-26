import { html } from "lit-html";

export const AccountantRoutes = () => html`
  <hr />
  <div class="routes-buttons-container">
    <button class="routes-buttons" id="topupButton"><h2>KYC</h2></button>
    <button class="routes-buttons" id="historyButton">
      <h2>Fees</h2>
    </button>
    <button class="routes-buttons" id="identityButton">
      <h2>Resale</h2>
    </button>
    <button class="routes-buttons" id="messagesButton">
      <h2>Trade</h2>
    </button>
  </div>
  <div class="button-row">
    <button class="marginRight-20" id="accountant-back">back</button>
    <button class="marginLeft-20" id="accountant-save">Save</button>
  </div>
`;
