import { html } from "lit-html";

export const SanctionsDropdown = (expand: boolean) => html`
  <input type="checkbox" id="sanctions_checkbox_toggle" />
  <label
    id="sanctions_checkbox_label"
    class="sanctions_checkbox-label"
    for="sanctions_checkbox_toggle"
    >Select Sanctions</label
  >
  <ul>
    <li>
      <input
        aria-label="ofec checkbox"
        id="ofec_checkbox"
        type="checkbox"
        checked
      /><span class="sanctions-span">OFEC sanctioned countries</span>
    </li>
    <li>
      <input
        aria-label="eu sanctions checkbox"
        id="eu-checkbox"
        type="checkbox"
        checked
      /><span class="sanctions-span">EU sanctioned countries</span>
    </li>
    <li>
      <input
        aria-label="UN sanctions checkbox"
        id="un-checkbox"
        type="checkbox"
        checked
      /><span class="sanctions-span">UN sanctioned countries</span>
    </li>
    <li>
      <input
        aria-label="Block USA checkbox"
        id="usa-checkbox"
        type="checkbox"
      /><span class="sanctions-span">Block USA</span>
    </li>
    <!-- <li>
      <input
        aria-label="block new york checkbox"
        id="newyork-checkbox"
        type="checkbox"
      /><span class="sanctions-span">Block New York</span>
    </li> -->
  </ul>
`;
