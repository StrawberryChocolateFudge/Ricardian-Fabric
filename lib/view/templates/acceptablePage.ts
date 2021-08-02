import { html } from "lit-html";
import { AcceptablePageProps } from "../../types";
import { arweaveDep, communityJsDep, mainDep } from "./dependencies";
import { classMap } from "lit-html/directives/class-map.js";

export const acceptablePageLayout = (props: AcceptablePageProps) => html`
  <style>
    .lds-dual-ring {
      display: inline-block;
      width: 80px;
      height: 80px;
    }
    .lds-dual-ring:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #cef;
      border-color: #cef transparent #cef transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
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

const acceptablePage = (props: AcceptablePageProps) => html`

      <div data-arweavedep="${props.arweaveDeps.src}"  data-communityjsdep="${props.communityJsDep.src}"  data-maindep="${props.mainDep.src}" data-redirect="${props.redirect}" data-contracttype="acceptable" id="page">
            <hr>  
      <h1 class="center title">Ricardian Fabric</h1>
      <hr> 
      <h5 class="center">Carefully read the contract bellow</h5>
        <div class="center" disabled id="contract-display"></div>
        <hr />
        <div class="center"><span>${props.createdDate}</span></div>
        <div class="center">Price: <span>${props.price}</span> Ar</div>
        <hr />
        <div id="action-container" class="center">
          <div id="loader" class="lds-dual-ring center"></div>
        </div>
      </div>
    
  </html> `;
