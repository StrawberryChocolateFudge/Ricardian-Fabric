import { html } from "lit-html";
import { accountLogo, arweaveLogo, pinLogo, uploadLogo } from "../components/logos";

export const PermawebDropdown = () => html`
  <input type="checkbox" id="permaweb_checkbox_toggle" class="dropdown_checkbox_toggle" />
  <label class="labelButton dropdown_checkbox_label lightCoral-shadow" id="permaweb_checkbox_label"
    for="permaweb_checkbox_toggle">${arweaveLogo()} Permaweb</label>
  <ul>
    <li>
      <button id="Account-popup-button" class="dropdown-button">
        <small>${accountLogo()} Account</small>
      </button>
    </li>
    <li>
      <button id="upload-popup-button" class="dropdown-button">
        <small>${uploadLogo()} Upload File (Coming soon)</small>
      </button>
    </li>
    <li>
      <button id="permapin-popup-button" class="dropdown-button">
        <small>${pinLogo()} Permapin</small>
      </button>
    </li>
  </ul>
`;

