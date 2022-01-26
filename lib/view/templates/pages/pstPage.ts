import { html } from "lit-html";
import { helperTooltips } from "../components/helperTooltips";
import { SignContract } from "../components/logos";

export const PSTPage = () => html`<h3>Ar rewards</h3>
  <h5>
    You can register to receive rewards to your Arweve address. Each time a
    transaction is sent with Ricardian Fabric, a random address is rewarded with
    the fee.
  </h5>
  <hr />
  <div class="center column">
    <div>
      <label>Current address:</label>
      <div class="overflow-auto">
        <label id="currentPSTAddress"></label>
      </div>
    </div>
  </div>
  <div class="center">
    <div class="box">
      <div class="column">
        <div class="row">
          <label for="add-arweave-address-input">Arweave Address</label>
          ${helperTooltips(
            "Paste here the arweave address you want to use to receive rewards."
          )}
        </div>
        <div class="row">
          <input type="text" id="add-arweave-address-input" />
          <button
            id="add-arweave-address-button"
            class="labelButton width-100 center"
          >
            ${SignContract()}
          </button>
        </div>
      </div>
    </div>
  </div> `;
