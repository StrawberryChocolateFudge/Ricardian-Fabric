import { html } from "lit-html";
import { ContractTypes, State } from "../../types";

export const CreateSummary = (props: State) => {
  const signer =
    props.contracttype === ContractTypes.create ? "Issuer" : "Participant";

  return html`
    <style>
      .button-row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      #no-button {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
      }
      #yes-button {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        background: black;
        color: white;
      }

      .details-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .auto-overflow {
        overflow: auto;
      }

      .centerText {
        text-align: center;
      }
      .width-100 {
        width: 100px;
      }
    </style>
    <h3 class="centerText">Are you sure?</h3>
    <div class="details-container">
      <label for="networkid"><strong>Network Id:</strong></label>
      <pre id="networkid">${props.stashedDetails.network}</pre>

      <label for="hash"><strong>Document Hash:</strong></label>
      <pre id="hash" class="auto-overflow">${props.stashedDetails.hash}</pre>

      <label for="signer"><strong>${signer}:</strong></label>
      <pre id="signer" class="auto-overflow">
${props.stashedDetails.signerAddress}</pre
      >
      <label for="signature"><strong>${signer} Signature:</strong></label>
      <pre id="signature" class="auto-overflow">
${props.stashedDetails.signature}</pre
      >
      <div class="button-row">
        <button id="no-button" class="width-100">No</button>
        <button class="width-100" id="yes-button">Yes</button>
      </div>
    </div>
  `;
};
