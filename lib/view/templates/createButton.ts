import { html } from "lit-html";

export const createButton = (disabled: boolean) => {
  console.log(disabled)
  if (disabled) {
    return html`
      <button
        class="center width-100"
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
      class="center width-100"
      id="save-contract"
      role="button"
      aria-label="Create"
    >
      Create
    </button>`;
  }
};
