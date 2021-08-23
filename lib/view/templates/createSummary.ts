import { html } from "lit-html";

export const CreateSummary = (fee: string) => {
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
    </style>
    <div class="center">
      <p class="center">Are you sure?</p>
      <p>Transaction Fee: <span>${fee}</span>Ar</p>
      <div class="button-row">
        <button id="no-button">No</button> <button id="yes-button">Yes</button>
      </div>
    </div>
  `;
};
