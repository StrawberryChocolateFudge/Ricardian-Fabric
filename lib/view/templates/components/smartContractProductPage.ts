import { html } from "lit-html";
import { ProposalFormat } from "../../../types";
import { getBlockie } from "./getBlockies";

export function smartContractProductPage(
  arweaveTxId: string,
  proposal: ProposalFormat,
  preview: boolean
) {
  return html`
    <div class="row width-100Percent">
      <div class="column width-70Percent">
        <label>Category:</label>
        <small>${proposal.category}</small>
      </div>

      <div class="column width-30Percent text-align-center">
        <label>Network:</label>
        <small>${proposal.network}</small>
      </div>
    </div>
    <div class="row">
      <div id="termsContent" class="column width-70Percent"></div>
      <div class="display-block width-30Percent">
        <hr />
        <div class="text-align-center">
          ${getBlockie(arweaveTxId, "40px", "")}
        </div>
        <hr />
        ${preview
          ? null
          : html` <div class="text-align-center">
              <button class="labelButton" disabled=${preview}>Deploy</button>
            </div>`}
        <hr />
        <div class="text-align-center column">
          <label>Name:</label>
          <small>${proposal.name}</small>
        </div>
        <div class="text-align-center column">
          <label>Description:</label>
          <small>${proposal.description}</small>
        </div>
        <hr />

        <div class="text-align-center column">
          ${proposal.simpleterms
            ? html` <label>Implements Simple terms</label> `
            : null}
        </div>
        <hr />
        <div class="text-align-center">
          <a href="${proposal.git}" target="_blank" rel="noopener">Github</a>
        </div>
        ${proposal.frontEnd !== ""
          ? html` <div class="text-align-center column">
              <a href="${proposal.frontEnd}" target="_blank" rel="noopener"
                >Front End</a
              >
            </div>`
          : null}
        ${preview
          ? null
          : html` <div class="text-align-center">
              <button class="labelButton">Remove</button>
            </div>`}
      </div>
    </div>
    <hr />
    <hr />
    <hr />
  `;
}
