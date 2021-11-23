import { html } from "lit-html";
import { ContractTypes, State } from "../../../types";
import { EditAgainLogo } from "./logos";

export const transactionUrl = (props: State, url: string) => {
  return html`
    <style>
      .transaction-layout {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .permapin-button {
        border-radius: 20px;
        border: none;
        cursor: pointer;
        background: black;
        color: white;
        max-width: 200px;
        margin: 0 auto;
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;
      }
      .permapin-button:hover{
          background-color: #ccc;
          transform: scale(1.01);
      }
      .transaction-button-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .deploy-again {
        cursor: pointer;
        background-color: #f2f2f2;
        border-radius: 20px;
        padding: 5px;
        color: black !important;
        border: none;
      }
      .deploy-again:hover{
        background-color: #ccc;
        transform: scale(1.01);
      }
    </style>

    <div class="transaction-layout">
      <a class="center" aria-label="Link copied to clipboard" href="${url}" target="_blank" rel="noopener"
        >Link copied to clipboard</a
      >
      <hr />
      <div class="transaction-button-row">
        ${props.contracttype === ContractTypes.create
      ? html`
              <button id="permapin-deployed-button" class="permapin-button">
                Permapin to Arweave!
              </button>
            `
      : null}
        ${props.contracttype === ContractTypes.create
      ? html`
              <hr />
              <button class="deploy-again" id="deploy-again-button">
                ${EditAgainLogo()}Edit page again
              </button>
            `
      : null}
      </div>
      <hr />
    </div>
  `;
};

export const TxId = (txId: string) =>
  html`<hr />
<small>It might take a few minutes for the transaction to be mined.</small>
<hr />
<div class="text-align-center">
  <a href="https://viewblock.io/arweave/tx/${txId}" class="transaction-layout">Check it here.</a>
</div>
<hr />`;
