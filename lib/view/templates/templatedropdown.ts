import { html } from "lit-html";

export const TemplateDropdown = () => html`
  <input
    type="checkbox"
    id="template_checkbox_toggle"
    class="dropdown_checkbox_toggle"
    aria-label="Import templates"
  />
  <label
    class="labelButton dropdown_checkbox_label"
    id="template_checkbox_label"
    for="template_checkbox_toggle"
    aria-labelledby="Import templates label"
    >Templates</label
  >
  <ul>
    <li>
      <button id="import-docx-trigger" class="dropdown-button">
        Import from file
      </button>
    </li>
  </ul>
`;
