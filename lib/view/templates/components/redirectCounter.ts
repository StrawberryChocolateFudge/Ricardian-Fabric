import { html } from "lit-html";

export const redirectCounter = (count: number) =>
  html`<p>Redirecting in ${count}</p>`;

export const redirectButton = html`
<style>
  #redirect-button{
    font-size:larger;
  }
</style>
<button class="NextButton" id="redirect-button">
  Click here to redirect
</button>
<hr />`;
