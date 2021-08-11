import { html } from "lit-html";

export const balanceTemplate = (balance: number) => html`
  <td aria-label="your balance">Your Balance:</td>
  <td aria-label="Balance">${balance} Ar</td>
`;
