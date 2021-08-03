import { html } from "lit-html";

export const transactionUrl = (url: string) =>
  html`<div><a href="${url}">${url}</a></div>`;
