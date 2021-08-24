import { html } from "lit-html";
import { helperTooltips } from "./helperTooltips";

export const balanceTemplate = (balance: number) => html`
  <style>
    #balance {
      height: 50px;
    }
  </style>
  <tr>
    <td aria-label="your balance"></td>
    <td aria-label="Balance">${balance} Ar</td>
    <td>${helperTooltips("Your wallet's current balance.")}</td>
  </tr>
`;

export const addressTemplate = (address: string) => html`
  <style>
    #address {
      height: 50px;
    }
  </style>
  <tr>
    <td aria-label="wallet address"></td>
    <td aria-label="Address">${address}</td>
    <td>${helperTooltips("Your wallet's public address")}</td>
  </tr>
`;
