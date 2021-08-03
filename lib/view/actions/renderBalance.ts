import { render } from "lit-html";
import { balanceTemplate } from "../templates/balance";
import { getById } from "../utils";

export async function renderbalance(balance: number) {
  const balanceEl = getById("balance");
  render(balanceTemplate(balance), balanceEl);
}
