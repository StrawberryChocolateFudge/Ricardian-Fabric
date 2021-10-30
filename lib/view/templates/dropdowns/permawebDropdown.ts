import { html } from "lit-html";

export const PermawebDropdown = () => html`
  <input
    type="checkbox"
    id="permaweb_checkbox_toggle"
    class="dropdown_checkbox_toggle"
  />
  <label
    class="labelButton dropdown_checkbox_label lightCoral-shadow"
    id="permaweb_checkbox_label"
    for="permaweb_checkbox_toggle"
    >Permaweb</label
  >
  <ul>
    <li>
      <button id="upload-popup-button" class="dropdown-button">
        Upload File
      </button>
    </li>
    <li>
      <button id="permapin-popup-button" class="dropdown-button">
        Permapin
      </button>
    </li>
    <li>
      <button id="history-popup-button" class="dropdown-button">History</button>
    </li>
  </ul>
`;
