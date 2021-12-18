import { html } from "lit-html";

export function WrongNetworkPopup() {
  return html`<hr />
    <h5>Wrong network</h5>
    <p>You need to switch to Harmony shard 0</p>
    <div class="text-align-center">
      <button id="switch-to-harmony" class="labelButton">Switch</button>
    </div>
    <hr /> `;
}
