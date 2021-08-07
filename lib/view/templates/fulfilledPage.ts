import { html } from "lit-html";
import { FulfilledPageProps } from "../../types";

export const fulfilledPageLayout = (props: FulfilledPageProps) => html`
  <body>
    ${fulfilledPage(props)}
  </body>
`;

export const fulfilledPage = (props: FulfilledPageProps) => html`
  <div
    data-contracttype="fulfilled"
    data-version="${props.version}"
    data-created="${props.createdDate}"
    data-creatorAddress="${props.creatorAddress}"
    data-price="${props.price}"
    data-expires="${props.expires}"
    data-postto="${props.post}"
    data-redirect="${props.redirect}"
    data-webhook="${props.webhook}"
    data-paidfrom="${props.paidFrom}"
    data-parentUrl="${props.parentUrl}"
    data-fee="${props.fee}"
    id="page"
  >
    <h1 class="ricardian-title">Ricardian Fabric</h1>
    <h3 class="ricardian-subtitle">Receipt</h3>
    <hr />
    <div class="price-input" id="price-input">Paid: <span></span></div>
    <div class="price-input" id="price-input"></div>
    <div class="price-input">etc..</div>
    <hr />
  </div>
`;
