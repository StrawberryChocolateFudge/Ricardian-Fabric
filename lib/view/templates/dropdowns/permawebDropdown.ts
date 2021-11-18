import { html } from "lit-html";

export const PermawebDropdown = () => html`
  <input type="checkbox" id="permaweb_checkbox_toggle" class="dropdown_checkbox_toggle" />
  <label class="labelButton dropdown_checkbox_label lightCoral-shadow" id="permaweb_checkbox_label"
    for="permaweb_checkbox_toggle">Permaweb</label>
  <ul>
    <li>
      <button id="Account-popup-button" class="dropdown-button">
        <small>Account</small>
      </button>
    </li>
    <li>
      <button id="upload-popup-button" class="dropdown-button">
        <small>Upload File (Coming soon)</small>
      </button>
    </li>
    <li>
      <button id="permapin-popup-button" class="dropdown-button">
        <small>Permapin</small>
      </button>
    </li>
  </ul>
`;
