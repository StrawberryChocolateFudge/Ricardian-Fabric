import { html } from "lit-html";
import { State } from "../../types";
import { didExpire } from "../utils";

const showSecret = (props: State) => {
  //If it's posting to webhook, we can post a secret identifier
  if (props.webhook) {
    return html` <tr>
      <td>Secret:</td>
      <td><input id="secret-input" type="text" /></td>
    </tr>`;
  }
};

export const acceptButton = (props: State) => {
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
        ? html` <div class="center red" id="error-display">Expired</div> `
        : html` <table class="center">
              <tr>
                <th></th>
                <th></th>
              </tr>
              ${showSecret(props)}
              <tr>
                <td>
                  <label id="select-file-label" for="select-file-input"
                    >Wallet</label
                  >
                </td>
                <td>
                  <input id="select-file-input" type="file" />
                </td>
              </tr>
            </table>
            <hr />
            <div class="center red" id="error-display"></div>
            <div class="center" id="redirect-display"></div>
            <div class="center" id="transaction-display"></div>
            <button id="accept-button" class="center width-200" disabled>
              Accept and Sign
            </button>`}
    </div>`;
};
