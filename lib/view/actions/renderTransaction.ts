import { render } from "lit-html";
import { transactionUrl } from "../templates/transaction";
import { getById } from "../utils";

export async function renderTransaction(url: string) {
  render(transactionUrl(url), getById("transaction-display"));
}
