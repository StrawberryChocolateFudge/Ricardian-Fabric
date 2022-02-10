import { html } from "lit-html";
import { loadingIndicator } from "../components/loadingIndicator";

export const contractDisplay = (contractId: string) => {
  return html`<div class="column">
      <h4>${contractId}</h4>
      <div class="center" id="contract-loading-slot">${loadingIndicator}</div>
      <div id="contract-display-slot"></div>
    </div>
    <hr />
    <div class="text-align-center">
      <div id="contract-display-back-button" class="labelButton ccc">Back</div>
    </div>
    <hr /> `;
};

export const VoteOnSmartContract = (
  accepted: boolean,
  contractIndex: string
) => {
  const isAccepted = () => {
    if (accepted) {
      return html`<div class="column">
        <label for="artifact-text-input">Artifact:</label>
        <textarea id="artifact-text-input"></textarea>
        <div class="wide-row">
          <button id="vote-back-button" class="labelButton">Back</button>
          <button id="vote-button" class="labelButton">Proceed</button>
        </div>
      </div>`;
    } else {
      return html`<div class="column">
          <label for="suspicious-checkbox"
            >Suspicious? Checking this can penalize the user, only mark it
            suspicious if you find the proposal to be malicious!</label
          >
          <input id="suspicious-checkbox" type="checkbox" />
          <div class="wide-row">
            <button id="vote-back-button" class="labelButton">Back</button>
            <button
              id="vote-button"
              data-contractIndex="${contractIndex}"
              class="labelButton"
            >
              Proceed
            </button>
          </div>
        </div>
        <hr /> `;
    }
  };

  const voteTitle = accepted ? "Approve" : "Reject";

  return html`<div class="column">
    <h4>${voteTitle} Contract</h4>
    <small
      >You need to build the project and copy the artifact to approve a
      contract.</small
    >
    ${isAccepted()}
  </div>`;
};
