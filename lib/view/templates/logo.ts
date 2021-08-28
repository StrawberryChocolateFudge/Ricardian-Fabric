import { html } from "lit-html";

export const Logo = (src: string) => html`
  <div id="logo-placeholder" class="imgRow">
    <img
      id="fabric-logo"
      height="100px"
      src="${src}"
      class="center"
      alt="Ricardian fabric logo"
    />
  </div>
`;
