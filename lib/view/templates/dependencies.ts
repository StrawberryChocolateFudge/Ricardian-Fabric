import { html } from "lit-html";

export const mainDep = (src: string) => html`
  <script type="application/javascript" id="main-script" src="${src}"></script>
`;
