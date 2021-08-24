import { html } from "lit-html";
import { State } from "../../types";
import { didExpire } from "../utils";
import { helperTooltips } from "./helperTooltips";

const showSecret = (props: State) => {
  //If it's posting to webhook, we can post a secret identifier
  if (props.webhook) {
    return html` <tr>
      <td aria-label="secret-label">Secret:</td>
      <td>
        <input aria-label="secret-input-label" id="secret-input" type="text" />
      </td>
      <td>
        ${helperTooltips(
          "A preshared secret, to find out more, ask the issuer!"
        )}
      </td>
    </tr>`;
  }
};

export const acceptTools = (props: State) => {
  //Determine if expires is in the past or never
  const expired = didExpire(props.expires);

  return html` <style>
      .outter {
        display: flex;
        flex-direction: column;
      }
      .red {
        color: red;
      }
      #accept-button {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
      }
    </style>
    <div class="outter">
      ${expired
        ? html`
            <div
              aria-label="contract expired"
              class="center red"
              id="error-display"
            >
              Expired
            </div>
          `
        : html` <table class="center">
              <tr>
                <th></th>
                <th></th>
              </tr>
              ${showSecret(props)}
            </table>
            <hr />
            <div id="wallet-dropzone" class="drop-zone">
              <span id="drop-prompt" class="drop-zone__prompt"
                >Drop Your wallet here or click to select it</span
              >
              <input
                type="file"
                name="wallet"
                id="wallet-input"
                class="drop-zone__input"
              />
            </div>
            <hr />
            <div
              aria-label="error-display-slot"
              class="center red"
              id="error-display"
            ></div>
            <div
              aria-label="transaction-display-slot"
              class="center"
              id="transaction-display"
            ></div>
            <div class="center red" id="error-display"></div>
            <div class="center" id="redirect-display"></div>
            <div class="center" id="transaction-display"></div>
            <div class="center" id="button-slot"></div>`}
    </div>`;
};

export const AcceptButton = () => html`
  <button
    aria-label="Accept and Sign"
    name="sign"
    id="accept-button"
    class="center width-200"
    disabled
  >
    Accept
  </button>
`;
