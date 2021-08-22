import { html } from "lit-html";

export const balanceTemplate = (balance: number) => html`
  <style>
    #balance {
      height: 50px;
    }
  </style>
  <td aria-label="your balance">Wallet Balance:</td>
  <td aria-label="Balance">${balance} Ar</td>
`;

export const addressTemplate = (address: string) => html`
  <style>
    #address {
      height: 50px;
    }
  </style>
  <td aria-label="wallet address">Address:</td>
  <td aria-label="Address">${address}</td>
`;
