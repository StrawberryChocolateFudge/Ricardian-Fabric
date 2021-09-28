import { html } from "lit-html";
export const CountriesList = (available: Array<string>) => {
  return html`
    <td></td>
    <td>
      <ul id="countries-list">
        ${getList(available)}
      </ul>
    </td>
    <td></td>
  `;
};

function getList(available: Array<string>) {
  return html`${available.map(
    (country) => html` <li name=${country} id="country-li-${country}">
      <div>${country}<button id="remove-country-${country}" name="${country}">X</button></div>
    </li>`
  )}`;
}
