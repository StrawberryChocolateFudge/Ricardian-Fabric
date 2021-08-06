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
  </style>
  <body>
    ${acceptablePage(props)} ${arweaveDep(props.arweaveDeps.src)}
    ${communityJsDep(props.communityJsDep.src)} ${mainDep(props.mainDep.src)}
  </body>
`;

const getPrice = (price: string) => {
  if (price !== "NONE") {
    const formattedPrice = price === "NONE" ? "" : `${price} Ar`;
    return html` <tr>
        <td>
          <label>Price:</label>
        </td>
        <td>
          <div>${formattedPrice}</div>
        </td>
      </tr>
      <tr>
        <td>
          <label>Fee:</label>
        </td>
        <td>${FEE}</td>
      </tr>`;
  }
};

const createdDate = (date: string) => {
  return html` <tr>
    <td>Created:</td>
    <td>${date}</td>
  </tr>`;
};

const issuer = (address: string) => {
  return html`
    <tr>
      <td>Issuer:</td>
      <td>${address}</td>
    </tr>
  `;
};

const expiry = (date: string) => html` <tr>
  <td>Expires:</td>
  <td>${date}</td>
</tr>`;

const acceptablePage = (props: AcceptablePageProps) => html`
  <div
    data-redirect="${props.redirect}"
    data-webhook="${props.webhook}"
    data-expires="${props.expires}"
    data-created="${props.createdDate}"
    data-price="${props.price}"
    data-creatorAddress="${props.creatorAddress}"
    data-arweavedep="${props.arweaveDeps.src}"
    data-communityjsdep="${props.communityJsDep.src}"
    data-maindep="${props.mainDep.src}"
    data-postto="${props.post}"
    data-contracttype="acceptable"
    id="page"
  >
    <hr />
    <h1 class="center title">Ricardian Fabric</h1>
    <p class="center title" id="version">${props.version}</p>
    <hr />
    <h5 class="center">Carefully read the contract bellow</h5>
    <div class="center" disabled id="contract-display"></div>
    <table class="center">
      <tr>
        <th></th>
        <th></th>
      </tr>
      ${issuer(props.creatorAddress)} ${createdDate(props.createdDate)}
      ${expiry(props.expires)} ${getPrice(props.price)}
    </table>
    <hr />
    <div id="action-container" class="center">${loadingIndicator}</div>
  </div>
`;
