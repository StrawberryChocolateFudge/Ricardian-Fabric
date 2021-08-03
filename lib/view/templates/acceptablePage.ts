import { html } from "lit-html";
import { AcceptablePageProps } from "../../types";
import { arweaveDep, communityJsDep, mainDep } from "./dependencies";
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

    .row {
      display: flex;
      flex-direction: row;
    }

    .column {
      display: flex;
      flex-direction: column;
    }

    .width-100 {
      width: 100px;
    }

    .paddingLeft-50 {
      padding-left: 50px;
    }

    .paddingLeft-10 {
      padding-left: 10px;
    }
  </style>
  <body>
    ${acceptablePage(props)} ${arweaveDep(props.arweaveDeps.src)}
    ${communityJsDep(props.communityJsDep.src)} ${mainDep(props.mainDep.src)}
  </body>
`;

const acceptablePage = (props: AcceptablePageProps) => html`

      <div data-creatorAddress="${props.creatorWallet}" data-arweavedep="${
  props.arweaveDeps.src
}"  data-communityjsdep="${props.communityJsDep.src}"  data-maindep="${
  props.mainDep.src
}" data-redirect="${props.redirect}" data-contracttype="acceptable" id="page">
            <hr>  
      <h1 class="center title">Ricardian Fabric</h1>
      <hr> 
      <h5 class="center">Carefully read the contract bellow</h5>
        <div class="center" disabled id="contract-display"></div>
        <hr />
        <div class="center"><span>${props.createdDate}</span></div>
        <div class="center">Price: <span>${props.price}</span>${
  props.price === "NONE" ? "" : " Ar"
}</div>
        <hr />
        <div id="action-container" class="center">
          ${loadingIndicator}
        </div>
      </div>
    
  </html> `;
