import { html } from "lit-html";
import { AcceptablePageProps } from "../../../types";
import {
  createdDateTemplate,
  expiryTemplate,
  issuerTemplate,
} from "../components/components";
import { loadingIndicator } from "../components/loadingIndicator";

export const acceptablePageLayout = (props: AcceptablePageProps) => html`
  <style>
    body {
      background: radial-gradient(lightgrey 3px, transparent 4px),
        radial-gradient(lightgrey 3px, transparent 4px),
        linear-gradient(#fff 4px, transparent 0),
        linear-gradient(
          45deg,
          transparent 74px,
          transparent 75px,
          #a4a4a4 75px,
          #a4a4a4 76px,
          transparent 77px,
          transparent 109px
        ),
        linear-gradient(
          -45deg,
          transparent 75px,
          transparent 76px,
          #a4a4a4 76px,
          #a4a4a4 77px,
          transparent 78px,
          transparent 109px
        ),
        #fff;
      background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px,
        109px 109px;
      background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
    }
    .center {
      margin: 0 auto;
    }
    #page {
      margin: 0 auto;
      display: flex;
      max-width: 800px;
      min-width: 350px;
      height: 100%;
      flex-direction: column;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
      padding-bottom: 20px;
      padding-left: 20px;
      padding-right: 20px;
      background-color: white;
    }
    #contract-display {
      max-width: 800px;
    }
    .title {
      color: #f2f2f2;
    }
  </style>
  <body>
    ${acceptablePage(props)}}
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
    data-pstContractId="${props.pstContractId}"
    data-isInstrument="${props.isInstrument}"
    data-instrumentName="${props.instrumentName}"
    data-instrumentTicker="${props.instrumentTicker}"
    data-instrumentSupply="${props.instrumentSupply}"
    data-canDerive="${props.canDerive}"
    data-instrumentContractId="${props.instrumentContractId}"
    data-pdfTransactionId="${props.pdfTransactionId}"
    id="page"
  >
    <hr />
    <h5 aria-label="Carefully read the contract bellow" class="center">
      Carefully read the contract bellow
    </h5>
    <div class="center" id="contract-display"></div>
    <table class="center">
      <tr>
        <th></th>
        <th></th>
      </tr>
      ${issuerTemplate(props.creatorAddress)}
      ${createdDateTemplate(props.createdDate)} ${expiryTemplate(props.expires)}
      <tr id="balance" class="center"></tr>
    </table>
    <hr />
    <div id="action-container" class="center">${loadingIndicator}</div>
  </div>
`;
// <!-- ${getPriceTemplate(props.price, props.fee)} -->
