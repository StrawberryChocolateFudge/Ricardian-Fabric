import { html } from "lit-html";

export const arweaveDep = (src: string) => html`
  <script src=${src} id="arweave-script"></script>
`;

export const communityJsDep = (src: string) => html`
  <script src="${src}" id="community-script"></script>
`;

export const mainDep = (src: string) => html`
  <script src="${src}" id="main-script"></script>
`;
