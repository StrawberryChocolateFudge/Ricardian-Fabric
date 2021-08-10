import { html } from "lit-html";
import { AcceptablePageProps } from "../../types";
import {
  createdDateTemplate,
  expiryTemplate,
  getPriceTemplate,
  issuerTemplate,
} from "./components";
import { mainDep } from "./dependencies";
import { loadingIndicator } from "./loadingIndicator";

export const acceptablePageLayout = (props: AcceptablePageProps) => html`
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
    ${acceptablePage(props)} ${mainDep(props.mainDep.src)}
  </body>
`;

const acceptablePage = (props: AcceptablePageProps) => html`
  <div
    data-contracttype="acceptable"
    data-version="${props.version}"
    data-created="${props.createdDate}"
    data-creatorAddress="${props.creatorAddress}"
    data-price="${props.price}"
    data-expires="${props.expires}"
    data-postto="${props.post}"
    data-redirect="${props.redirect}"
    data-webhook="${props.webhook}"
    data-maindep="${props.mainDep.src}"
    data-onlysigner="${props.onlySigner}"
    id="page"
  >
    <hr />
    <h1 class="center title">Ricardian Fabric</h1>
    <hr />
    <h5 class="center">Carefully read the contract bellow</h5>
    <div class="center" id="contract-display"></div>
    <table class="center">
      <tr>
        <th></th>
        <th></th>
      </tr>
      ${issuerTemplate(props.creatorAddress)}
      ${createdDateTemplate(props.createdDate)} ${expiryTemplate(props.expires)}
      ${getPriceTemplate(props.price, props.fee)}
    </table>
    <hr />
    <div id="action-container" class="center">${loadingIndicator}</div>
  </div>
`;
