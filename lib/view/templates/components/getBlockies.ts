import makeBlockie from "ethereum-blockies-base64";
import { html } from "lit-html";

export const getBlockie = (data: string, width: string, className: string) => {
  return html`<img
    src="${makeBlockie(data)}"
    width="${width}"
    class="${className}"
    title="${data}"
  />`;
};
