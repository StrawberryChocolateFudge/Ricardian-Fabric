import { html } from "lit-html";

export const SummaryPage = () => html`
  <hr />
  <h2 class="center">Summary</h2>
  <table class="center">
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <th>Fees</th>
      <th></th>
    </tr>
  </table>
  <!-- <div
        aria-label="transaction-display-slot"
        class="center"
        id="transaction-display"
      ></div> -->
  <div class="button-row">
    <button class="marginRight-20" id="summaryPage-previous">Previous</button>
    <button
      class="center width-100"
      id="create-button"
      role="button"
      aria-label="Create"
      disabled
    >
      Create
    </button>
  </div>
`;

export const SummaryPageDetails = () => html``;

export const SummaryPageFees = () => html`
  <tr>
    <td>PDF</td>
    <td id="pdfFee"></td>
    <td></td>
  </tr>
  <tr>
    <td>Smart contract</td>
    <td id="smartFee"></td>
    <td></td>
  </tr>
  <tr>
    <td>Acceptable contract</td>
    <td id="pageFee"></td>
    <td></td>
  </tr>
`;
