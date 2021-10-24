import { html } from "lit-html";
import { AcceptablePageProps } from "../../types";
import {
  createdDateTemplate,
  expiryTemplate,
  issuerTemplate,
  networkTemplate,
  onlySignerTemplate,
} from "./components";
import { mainDep } from "./dependencies";
import { loadingIndicator } from "./loadingIndicator";

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
      margin-top: 10px;
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

    .ac-locaton {
      color: red;
      display: flex;
      flex-direction: column;
    }
    .accept-button-label {
      font-size: 0.8rem;
      color: grey;
    }
    #error-display {
      visibility: hidden; /* Hidden by default. Visible on click */
      min-width: 250px; /* Set a default minimum width */
      background-color: #333; /* Black background color */
      color: #fff; /* White text color */
      text-align: center; /* Centered text */
      border-radius: 2px; /* Rounded borders */
      padding-top: 16px;
      padding-bottom: 16px;
      position: fixed; /* Sit on top of the screen */
      z-index: 1; /* Add a z-index if needed */
      left: 0; /*Center the snackbar */
      bottom: 30px; /*30px from the bottom */
    }

    /* Show the snackbar when clicking on a button (class added with JavaScript) */
    #error-display.show {
      visibility: visible; /* Show the snackbar */
      /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
      -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
      animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }
    .network-button {
      background-color: #f2f2f2;
      border: none;
      font-size: 16px;
      padding: 10px;
      cursor: pointer;
    }

    .network-button:hover {
      background-color: white;
    }

    /* Animations to fade the snackbar in and out */
    @-webkit-keyframes fadein {
      from {
        bottom: 0;
        opacity: 0;
      }
      to {
        bottom: 30px;
        opacity: 1;
      }
    }

    @keyframes fadein {
      from {
        bottom: 0;
        opacity: 0;
      }
      to {
        bottom: 30px;
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeout {
      from {
        bottom: 30px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }

    @keyframes fadeout {
      from {
        bottom: 30px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
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
    data-expires="${props.expires}"
    data-redirectto="${props.redirectto}"
    data-maindep="${props.mainDep.src}"
    data-blockedcountries="${JSON.stringify(props.blockedCountries)}"
    data-network="${props.network}"
    data-hash="${props.hash}"
    data-issuer="${props.issuer}"
    data-issuersignature="${props.issuerSignature}"
    data-smartcontract="${props.smartContract}"
    id="page"
  >
    <div class="center" id="contract-display"></div>
    <table id="display-table" class="center">
      <tr>
        <th></th>
        <th></th>
      </tr>
      ${createdDateTemplate(props.createdDate)} ${expiryTemplate(props.expires)}
      ${networkTemplate(props.network)} ${issuerTemplate(props.issuer)}
    </table>
    <div class="center red" id="error-display"></div>
    <div class="center" id="redirect-display"></div>
    <div class="center" id="transaction-display"></div>
    <div id="action-container" class="center">${loadingIndicator}</div>
  </div>
`;
