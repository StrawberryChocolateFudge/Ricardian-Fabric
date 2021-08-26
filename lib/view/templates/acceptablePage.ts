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
import { Logo } from "./logo";

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
      font-family: Arial, Helvetica, sans-serif;
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
    .imgRow {
      display: flex;
      flex-direction: row;
    }
    .drop-zone {
      margin: 0 auto;
      max-width: 200px;
      min-width: 200px;
      height: 200px;
      padding: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: "Quicksand", sans-serif;
      font-weight: 500;
      font-size: 20px;
      cursor: pointer;
      color: #cccccc;
      border: 4px dashed #cccccc;
      border-radius: 10px;
    }
    .drop-zone--over {
      border-style: solid;
    }
    .drop-zone__input {
      display: none;
    }
    #display-table {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
    }

    #display-table tr {
      background-color: #f2f2f2;
    }

    #display-table tr:hover {
      background-color: white;
    }

    #display-table th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: white;
      color: white;
    }
    #secret-input {
      cursor: text;
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
    ${Logo(props.logoSrc)}
    <hr />
    <h5 aria-label="Carefully read the contract bellow" class="center">
      Carefully read the contract bellow.
    </h5>
    <div class="center" id="contract-display"></div>
    <table id="display-table" class="center">
      <tr>
        <th></th>
        <th></th>
      </tr>
      ${issuerTemplate(props.creatorAddress)}
      ${createdDateTemplate(props.createdDate)} ${expiryTemplate(props.expires)}
      ${getPriceTemplate(props.price, props.fee)}
    </table>
    <table id="address" class="center"></table>
    <table id="balance" class="center"></table>

    <div id="action-container" class="center">${loadingIndicator}</div>
  </div>
`;
