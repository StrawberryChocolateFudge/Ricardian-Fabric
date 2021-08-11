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
      <a class="center" aria-label="Link copied to clipboard" href="${url}"
        >Link copied to clipboard</a
      >
    </div>`;
