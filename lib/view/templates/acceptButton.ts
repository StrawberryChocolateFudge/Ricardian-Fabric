import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";

export const acceptButton = () => {
  const outter = {
    display: "flex",
    flexDirection: "column",
  };
//   const button = {
// 	  width: ""
//   }
  return html` <div style=${styleMap(outter)}>
    <label id="select-file-label" for="select-file-input">Wallet</label>
    <input id="select-file-input" type="file" />
    <hr />
    <button>Accept and Sign</button>
  </div>`;
};
