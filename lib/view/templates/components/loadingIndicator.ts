import { html } from "lit-html";

export const loadingIndicator = html`
  <style>
    .lds-dual-ring {
      display: inline-block;
      width: 80px;
      height: 80px;
      padding-right: 5px;
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
  </style>
  <div
    aria-label="loading indicator"
    id="loader"
    class="lds-dual-ring center"
  ></div>
`;
