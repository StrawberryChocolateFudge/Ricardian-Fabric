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

      #signature {
        max-width: 600px;
        overflow: scroll;
      }

      .centerText {
        text-align: center;
      }
    </style>
    <h3 class="centerText">Are you sure?</h3>
    <hr />
    <div class="details-container centerText">
      <label for="networkid"><strong>Network Id:</strong></label>
      <p id="networkid">${props.stashedDetails.network}</p>

      <label for="hash"><strong>Document Hash:</strong></label>
      <p id="hash">${props.stashedDetails.hash}</p>

      <label for="signer"><strong>${signer}:</strong></label>
      <p id="signer">${props.stashedDetails.signerAddress}</p>

      <label for="signature"><strong>${signer} Signature:</strong></label>
      <p id="signature">${props.stashedDetails.signature}</p>

      <div class="button-row">
        <button id="no-button">No</button> <button id="yes-button">Yes</button>
      </div>
    </div>
  `;
};
