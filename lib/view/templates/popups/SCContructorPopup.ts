import { html } from "lit-html";
import { DeploySC } from "../../../types";
import { findConstructorParameters } from "../../../wallet/web3";
import { getHRC20Abi } from "../../../wallet/abi/HRC20";
import { BackLogo } from "../components/logos";

export function SCConstructorPopup(selected: DeploySC) {
  let constructorParams;
  if (selected === DeploySC.HRC20) {
    constructorParams = findConstructorParameters(getHRC20Abi());
  }

  const getTypeFromType = (type: string) => {
    let checkedType = type;

    if (type.includes("int")) {
      checkedType = "number";
    }
    if (type.includes("fixed")) {
      checkedType = "number";
    }
    // In case it's address payable...
    if (type.includes("address")) {
      checkedType = "address";
    }

    if (type.includes("byte")) {
      checkedType = "byte";
    }

    switch (checkedType) {
      case "bool":
        return "checkbox";
        break;
      case "string":
        return "text";
        break;
      case "number":
        return "number";
        break;
      case "address":
        return "text";
        break;
      case "byte":
        return "text";
        break;
      default:
        return "text";
        break;
    }
  };

  const list = constructorParams.map((params) => {
    return html`<tr>
  <td>
    <label for="${params.name}-input">${params.name} (${params.type})</label>
  </td>
  <td>
    <input id="${params.name}-input" type="${getTypeFromType(params.type)}" />
  </td>
  <td></td>
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${list}
      </tbody>
    </table>
    <small>Make sure you enter the correct details.This is non-reversible.</small>
    <hr />
    <div class="row">
      <label for="agree-to-deploy-sc">I agree to the terms.</label>
      <input id="agree-to-deploy-sc" aria-label="Agree to deploy checkbox" type="checkbox" />
    </div>
    <hr />
    <div>
      <button id="SCConstructBackButton" class="backButton">${BackLogo()} Cancel</button>
      <button id="SCConstructCreateButton" class="NextButton">
        Create contract!
      </button>
    </div>
    <hr />
  `;
}
