import { html } from "lit-html";

export function deploySCIntentPopup() {
  return html` <style></style>
    <h2>Deploy a smart contract</h2>
    <small>
      You can deploy a contract, compatible with Ricardian Fabric.
    </small>
    <div class="deploySCIntentContainer">
      <ul class="deploySCList">
        <li><input id="HRC20-checkbox" type="checkbox" checked /> HRC20</li>
      </ul>
      <div class="SCIntent-button-row">
        <button class="SCBackButton" id="SCIntentBackButton">Back</button>
        <hr />
        <button class="SCNextButton" id="SCIntentNextButton">Next</button>
      </div>
      <hr />
    </div>`;
}
