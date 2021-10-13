import { html } from "lit-html";
import { ContractTypes, State } from "../../types";

export const transactionUrl = (props: State, url: string) => {
  return html`
    <style>
      .transaction-layout {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      #deploy-again-button {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        background: black;
        color: white;
      }
    </style>

    <div class="transaction-layout">
      <a class="center" aria-label="Link copied to clipboard" href="${url}"
        >Link copied to clipboard</a
      >
      ${props.contracttype === ContractTypes.create
        ? html`
            <hr />
            <button id="deploy-again-button">Again</button>
          `
        : null}
    </div>
  `;
};
