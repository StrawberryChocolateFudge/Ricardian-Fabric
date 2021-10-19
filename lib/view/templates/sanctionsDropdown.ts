import { html } from "lit-html";

export const SanctionsDropdown = (expand: boolean) => html`
  <input type="checkbox" id="sanctions_checkbox_toggle" />
  <label
    id="sanctions_checkbox_label"
    class="sanctions_checkbox-label"
    for="sanctions_checkbox_toggle"
    >${expand ? "Click to Expand" : "Click to Collapse"}</label
  >
  <ul>
    <li>
      <input id="ofec_checkbox" type="checkbox" /><span class="sanctions-span"
        >OFEC sanctioned countries</span
      >
    </li>
    <li>
      <input id="eu-checkbox" type="checkbox" /><span class="sanctions-span"
        >EU sanctioned countries</span
      >
    </li>
    <li>
      <input id="un-checkbox" type="checkbox" /><span class="sanctions-span"
        >UN sanctioned countries</span
      >
    </li>
    <li>
      <input id="usa-checkbox" type="checkbox" /><span class="sanctions-span"
        >Block USA</span
      >
    </li>
    <li>
      <input id="newyork-checkbox" type="checkbox" /><span
        class="sanctions-span"
        >Block New York</span
      >
    </li>
  </ul>
`;
