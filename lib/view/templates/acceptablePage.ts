import { html } from "lit-html";
import { FEE } from "../../arweave/arweave";
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

    .width-200 {
      width: 200px;
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

const getPrice = (price: string) => {
  if (price !== "NONE") {
    const formattedPrice = price === "NONE" ? "" : `${price} Ar`;
    return html`
      <div class="row center">
        <div class="column width-100">
          <label for="center">Price </label>
        </div>
        <div class="column width-100">
          <div class="center">
            <span>${formattedPrice}</span>
          </div>
        </div>
      </div>
      <div class="row center">
        <div class="column width-100">
          <label for="center">Fee: </label>
        </div>
        <div class="column width-100">
          <div class="center">
            <span>${FEE}</span>
          </div>
        </div>
      </div>
    `;
  }
};

const createdDate = (date: string) => {
  return html` <div class="center">${date}</div> `;
};

const creator = (address: string) => {
  return html`
    <label class="center">Issuer</label>
    <div class="center"><span>${address}</span></div>
  `;
};

const acceptablePage = (props: AcceptablePageProps) => html`
<style>
.address{
  overflow: scroll;
}

</style>
      <div data-price="${props.price}"  data-creatorAddress="${
  props.creatorAddress
}" data-arweavedep="${props.arweaveDeps.src}"  data-communityjsdep="${
  props.communityJsDep.src
}"  data-maindep="${props.mainDep.src}" data-redirect="${
  props.redirect
}" data-contracttype="acceptable" id="page">
      <hr>  
      <h1 class="center title">Ricardian Fabric</h1>
      <hr> 
      <h5 class="center">Carefully read the contract bellow</h5>
        <div class="center" disabled id="contract-display"></div>
        ${creator(props.creatorAddress)}
        ${createdDate(props.createdDate)}
        <hr/>
        ${getPrice(props.price)}
         <hr/>
        <div id="action-container" class="center">
        ${loadingIndicator}
        </div>
      </div>
  </html> `;
