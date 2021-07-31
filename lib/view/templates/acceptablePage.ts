import { html, render } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { fetchDependency } from "../../fetch";
import { AcceptablePageProps, InlineProps } from "../../types";
import {
  getArweaveDependencyUrl,
  getBundleSrcUrl,
  getCommunityJsDependencyUrl,
} from "../utils";

export const initialStringDom = `  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Ricardian Fabric</title>
    </head>
    <body>
    </body>
    </html>
    `;

export const acceptablePageLayout = (inlineProps: InlineProps, props: AcceptablePageProps) => html`
    <body>
      ${acceptablePage(props)}
    </body>
    ${arweaveDep(inlineProps.arweaveDeps.src, inlineProps.arweaveDeps.code)}
    ${communityJsDep(
      inlineProps.communityJsDep.src,
      inlineProps.communityJsDep.code
    )}
    ${mainDep(inlineProps.mainDep.src, inlineProps.mainDep.code)}
  </html>
`;

const arweaveDep = (src: string, code: string) => html`
  <script id="arweave-script" src="${src}">
    ${code}
  </script>
`;

const communityJsDep = (src: string, code: string) => html`
  <script id="community-script" src="${src}">
    ${code}
  </script>
`;

const mainDep = (src: string, code: string) => html`
  <script id="main-script" src="${src}">
    ${code}
  </script>
`;

const acceptablePage = (props: AcceptablePageProps) => html`
      <div id="page">
        <h1 class="ricardian-title">Ricardian Fabric</h1>
        <h3 class="ricardian-subtitle">Carefully read the contract bellow</h3>
        <textarea disabled rows="20" cols="50" id="contract-display">
        ${props.legalContract}
        </textarea>
        <hr />
        <div>Creator: <span>${props.creator}</span></div>
        <div>Transaction: <span>${props.transaction}</span></div>

        <div>Created date: <span>${props.createdDate}</span></div>
        <div>Price: <span>${props.price}</span></div>
        <hr />
        <label id="select-file-label" for="select-file-input">Wallet</label>
        <input id="select-file-input" type="file" />
        <div>Your balance: <span id="balance"></span></div>
        <button>Accept and Sign</button>
      </div>
  </html> `;


