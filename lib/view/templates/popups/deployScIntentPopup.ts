import { html } from "lit-html";
import { helperTooltips } from "../components/helperTooltips";

export function deploySCIntentPopup() {
  return html` <style></style>
    <h2>Smart Contract Catalog</h2>
    <small>
      You can deploy a contract, compatible with Ricardian Fabric.
    </small>
    <div class="deploySCIntentContainer">
      <ul class="deploySCUL">
        <li id="HRC20-li" class="deploySCLI">
          <input id="HRC20-checkbox" type="checkbox" checked />ERC20
          ${helperTooltips("Tokens deployed are compatible with the standard.")}
        </li>
      </ul>
      <div class="SCIntent-button-row">
        <button class="backButton" id="SCIntentBackButton">Back</button>
        <hr />
        <button class="NextButton" id="SCIntentNextButton">Next</button>
      </div>
      <hr />
    </div>`;
}
