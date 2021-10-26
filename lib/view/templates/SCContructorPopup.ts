import { html } from "lit-html";
import { DeploySC } from "../../types";
import { findConstructorParameters } from "../../wallet";
import { getHRC20Abi } from "../../wallet/abi/HRC20";

export function SCConstructorPopup(selected: DeploySC) {
  let constructorParams;
  if (selected === DeploySC.HRC20) {
    constructorParams = findConstructorParameters(getHRC20Abi());
  }

  const list = constructorParams.map((params) => {
    return html`<tr>
      <td>
        <label for="${params.name}-input"
          >${params.name} (${params.type})</label
        >
      </td>
      <td>
        <input id="${params.name}-input" type="$1" />
      </td>
    </tr>`;
  });

  return html`
    <h2>Deploy a smart contract</h2>
    <p>Contructor parameters:</p>
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${list}
      </tbody>
    </table>
    <small>Make sure you enter the correct details.</small>
    <small
      >Variables with uint256 type will be converted to Big Number
      automaticly.</small
    >
    <hr />
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><label for="logo-url-input">Logo url: (not required)</label></td>
          <td><input id="logo-url-input" /></td>
        </tr>
      </tbody>
    </table>

    <hr />
    <div>
      <button id="SCConstructBackButton" class="SCBackButton">Cancel</button>
      <button id="SCConstructCreateButton" class="SCNextButton">
        Create contract!
      </button>
    </div>
  `;
}
