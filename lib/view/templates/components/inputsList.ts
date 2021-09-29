import { html } from "lit-html";
export const InputsList = (available: Array<string>) => {
  return html`
    <td></td>
    <td>
      <ul id="inputs-list">
        ${getList(available)}
      </ul>
    </td>
    <td></td>
  `;
};

function getList(inputs: Array<string>) {
  return html`${inputs.map(
    (inp) => html` <li name=${inp} id="input-li-${inp}">
      <div>${inp}<button id="remove-input-${inp}" name="${inp}">X</button></div>
    </li>`
  )}`;
}
