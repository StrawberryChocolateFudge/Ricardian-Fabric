import { html } from "lit-html";
import { getBlockie } from "./components/getBlockies";

export const MenuPage = () => html`
<hr />
<div class="center">${getBlockie(window.location.href, "100px")}</div>
<hr />
<table class="center">
    <tr>
        <th></th>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td><button class="labelButton lightSlateGray-shadow" id="create-contract-button">Create a Ricardian
                Contract</button></td>
        <td> <button class="labelButton" id="smart-contract-catalog-button">Smart Contract Catalog</button>
        </td>
        <td> <button class="labelButton" id="verify-contract-button">Verify an acceptable Contract</button>
        </td>
    </tr>
</table>

`