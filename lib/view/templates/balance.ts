import { html } from "lit-html";

export const balanceTemplate = (balance: number) => html`
  <td>Your Balance:</td>
  <td>${balance} Ar</td>
`;
