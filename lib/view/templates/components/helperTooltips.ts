import { html } from "lit-html";

export const helperTooltips = (message: string) => html`
  <style>
    .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black;
      cursor: pointer;
      margin-left: 10px;
    }
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;

      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      top: -5px;
      right: 105%;
    }

    .tooltip:hover .tooltiptext {
      visibility: visible;
    }
  </style>

  <div class="tooltip">
    ?
    <span aria-label="tooltip helptext" class="tooltiptext">${message}</span>
  </div>
`;
