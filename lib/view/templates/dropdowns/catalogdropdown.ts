import { html } from "lit-html";

export const CatalogDropdown = () => html`
  <input
    type="checkbox"
    id="catalog_checkbox_toggle"
    class="dropdown_checkbox_toggle"
  />
  <label
    class="labelButton dropdown_checkbox_label lightGreenish-shadow"
    for="catalog_checkbox_toggle"
    >Catalog</label
  >
  <ul>
    <li>
      <button id="smart-contracts-button" class="dropdown-button">
        <small>Smart Contracts</small>
      </button>
    </li>
    <li>
      <button id="view-proposals-button" class="dropdown-button">
        <small>Proposals</small>
      </button>
    </li>
    <li>
      <button id="create-proposal-button" class="dropdown-button">
        <small>Create proposal</small>
      </button>
    </li>
  </ul>
`;
