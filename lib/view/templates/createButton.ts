import { html } from "lit-html";

export const createButton = (disabled: boolean) => {
  if (disabled) {
    return html`
      <button
        class="center width-200 lightBlue-shadow"
        id="save-contract"
        role="button"
        aria-label="Create"
        disabled
      >
        Create
      </button>
    `;
  } else {
    return html`<button
      class="center width-200 lightBlue-shadow"
      id="save-contract"
      role="button"
      aria-label="Create"
    >
      Create
    </button>`;
  }
};
