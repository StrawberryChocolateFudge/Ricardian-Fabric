import { html } from "lit-html";
import { ManagementSwitch } from "../../components/managementSwitch";

export const ManagerRoutes = () => html`
  <hr />
  ${ManagementSwitch("Manage agreements")}
  <hr />
  <div class="routes-buttons-container">
    <button class="routes-buttons" id="topupButton"><h2>Top up</h2></button>
    <button class="routes-buttons" id="historyButton">
      <h2>History</h2>
    </button>
    <button class="routes-buttons" id="identityButton">
      <h2>Identity</h2>
    </button>
    <button class="routes-buttons" id="messagesButton">
      <h2>Messages</h2>
    </button>
    <button class="routes-buttons" id="nftManagerButton">
      <h2>NFT</h2>
    </button>
    <button class="routes-buttons" id="instrumentManagerButton" disabled>
      <h2>Instrument</h2>
    </button>
    <button class="routes-buttons" id="derivativesManagementButton" disabled>
      <h2>Derivatives</h2>
    </button>
    <button class="routes-buttons" id="governanceButton">
      <h2>Governance</h2>
    </button>
  </div>
      <button class="accountant-button" id="accountantPageButton" >Accountant</button>

`;
