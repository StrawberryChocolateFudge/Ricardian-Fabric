import { html } from "lit-html";
import { FulfilledPageProps } from "../../types";
import { mainDep } from "./dependencies";

export const fulfilledPageLayout = (props: FulfilledPageProps) => html`
  <body>
  </body>
`;

const fulfilledPage = (props: FulfilledPageProps) => html`
  <div data-contracttype="fulfilled" id="page">
    <h1 class="ricardian-title">Ricardian Fabric</h1>
    <h3 class="ricardian-subtitle">Receipt</h3>
    <hr />
    <textarea
      rows="20"
      cols="50"
      class="contract-display"
      id="contract-text"
      disabled
    >
${props.legalContract}
    </textarea
    >
    <hr />
    <div class="price-input" id="price-input">
      Paid: <span>${props.paid}</span>
    </div>
    <div class="price-input" id="price-input"></div>
    <div class="price-input">etc..</div>
    <hr />
  </div>
`;
