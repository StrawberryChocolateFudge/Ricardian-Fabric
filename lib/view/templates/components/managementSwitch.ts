import { html } from "lit-html";

export const ManagementSwitch = (title: string) => html`
  <div class="titleSliderRow">
    <label class="switch">
      <input type="checkbox" id="managementSwitch" />
      <span class="slider round"></span>
    </label>
    <h2 class="center">${title}</h2>
  </div>
`;
