import { html, render } from "lit-html";
import { loadingIndicator } from "../templates/loadingIndicator";
import { getById } from "../utils";

export async function renderLoadingIndicator(to: string) {
  render(loadingIndicator, getById(to));
}

export async function removeLoadingIndicator(from: string) {
  render(html`<div></div>`, getById(from));
}
