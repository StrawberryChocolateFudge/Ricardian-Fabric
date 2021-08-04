import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";

export const acceptButton = () => {
  return html` <style>
      .outter {
        display: flex;
        flex-direction: column;
      }
      .red {
        color: red;
      }
    </style>
    <div class="outter">
      <label id="select-file-label" for="select-file-input">Wallet</label>
      <input id="select-file-input" type="file" />
      <div id="balance" class="center"></div>
      <div class="center red" id="error-display"></div>
      <div class="center" id="transaction-display"></div>
      <button id="accept-button" class="center width-200" disabled>
        Accept and Sign
      </button>
    </div>`;
};
