import { html } from "lit-html";
import { FulfilledPageProps } from "../../types";
import {
  getParticipantFromTemplate,
  issuerTemplate,
  parentUrl,
  signedDateTemplate,
} from "./components";
import { Logo } from "./logo";

export const fulfilledPageLayout = (props: FulfilledPageProps) => html`
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
    data-expires="${props.expires}"
    data-redirectto="${props.redirectto}"
    data-parentUrl="${props.parentUrl}"
    data-network="${props.network}"
    data-hash="${props.hash}"
    data-issuer="${props.issuer}"
    data-issuersignature="${props.issuerSignature}"
    data-participant="${props.participant}"
    data-participantsignature="${props.participantSignature}"
    data-smartcontract="${props.smartcontract}"
    id="page"
  >
    <div class="center" id="contract-display"></div>
    <table id="display-table" class="center">
      <tr>
        <th></th>
        <th></th>
        <th></th>
        ${issuerTemplate(props.issuer)}
        ${getParticipantFromTemplate(props.participant)}
        ${signedDateTemplate(props.createdDate)} 
        ${parentUrl(props.parentUrl)}
      </tr>
    </table>
    <hr />
  </div>
`;
