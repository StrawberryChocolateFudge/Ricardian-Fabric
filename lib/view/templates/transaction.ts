import { html } from "lit-html";

export const transactionUrl = (url: string) =>
  html` <style>
      .transaction-layout {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    </style>

    <div class="transaction-layout">
      <p>Copied to clipboard!</p>
      <a href="${url}">${url}</a>
    </div>`;
