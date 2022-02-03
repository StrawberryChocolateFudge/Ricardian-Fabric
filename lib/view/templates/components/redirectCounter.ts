import { html } from "lit-html";
import { RedirectIcon } from "./logos";

export const redirectCounter = (count: number) =>
  html`<p>Redirecting in ${count}</p>`;

export const redirectButton = html` <style>
    #redirect-button {
      font-size: larger;
    }
  </style>
  <button class="labelButton" id="redirect-button">
    ${RedirectIcon()} Click here to redirect
  </button>
  <hr />`;
