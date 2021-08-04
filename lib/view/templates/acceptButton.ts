import { html } from "lit-html";
import { State } from "../../types";

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
    </style>
    <div class="outter">
      ${expired
        ? html` <div class="center red" id="error-display">Expired</div> `
        : html` <label id="select-file-label" for="select-file-input"
              >Wallet</label
            >
            <input id="select-file-input" type="file" />
            <div id="balance" class="center"></div>
            <div class="center red" id="error-display"></div>
            <div class="center" id="transaction-display"></div>
            <button id="accept-button" class="center width-200" disabled>
              Accept and Sign
            </button>`}
    </div>`;
};

function didExpire(expires: string): boolean {
  if (expires === "NEVER") {
    return false;
  } else {
    const now = new Date().getTime();
    const expiryDate = new Date(expires).getTime();
    return now > expiryDate;
  }
}
