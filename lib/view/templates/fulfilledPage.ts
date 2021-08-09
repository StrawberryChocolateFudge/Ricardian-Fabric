import { html } from "lit-html";
import { FulfilledPageProps } from "../../types";
import {
  createdDateTemplate,
  expiryTemplate,
  getParticipantFromTemplate,
  getPriceTemplate,
  issuerTemplate,
} from "./components";

export const fulfilledPageLayout = (props: FulfilledPageProps) => html`
  <style>
    .center {
      margin: 0 auto;
    }
    #page {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
    }
    #contract-display {
      max-width: 800px;
    }
    .title {
      color: #f2f2f2;
    }
  </style>

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
    <h1 class="center title">Ricardian Fabric</h1>
    <p class="center title" id="version">${props.version}</p>
    <hr />
    <h5 class="center">Contract</h5>
    <div class="center" id="contract-display"></div>
    <table class="center">
      <tr>
        <th></th>
        <th></th>
        ${issuerTemplate(props.creatorAddress)}
        ${getParticipantFromTemplate(props.paidFrom)}
        ${createdDateTemplate(props.createdDate)}
        ${expiryTemplate(props.expires)}
        ${getPriceTemplate(props.price, props.fee)}
      </tr>
    </table>
    <hr />
  </div>
`;
