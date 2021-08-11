import { html } from "lit-html";

export const mainDep = (src: string) => html`
  <script src="${src}" id="main-script"></script>
`;
