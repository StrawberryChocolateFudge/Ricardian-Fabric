import { html } from "lit-html";
import { DeploySC } from "../../types";
import { findConstructorParameters } from "../../wallet";
import { getHRC20Abi } from "../../wallet/abi/HRC20";
import { helperTooltips } from "./helperTooltips";

export function SCConstructorPopup(selected: DeploySC) {
  let constructorParams;
  if (selected === DeploySC.HRC20) {
    constructorParams = findConstructorParameters(getHRC20Abi());
  }

  const getLabelFromParamName = (name: string) => {
    switch (name) {
      case "tokenName":
        return "Token name:";
        break;
      case "tokenSymbol":
        return "Token Symbol:";
        break;
      case "initialSupply":
        return "Initial Supply:";
        break;
      case "_decimals":
        return "Decimals:";
        break;
      default:
        break;
    }
  };

  const getTypeFromName = (name: string) => {
    switch (name) {
      case "tokenName":
        return "text";
        break;
      case "tokenSymbol":
        return "text";
        break;
      case "initialSupply":
        return "number";
        break;
      case "_decimals":
        return "number";
        break;
      default:
        break;
    }
  };

  const getTooltipFromName = (name: string) => {
    switch (name) {
      case "tokenName":
        return "The name of the token. ";
        break;
      case "tokenSymbol":
        return "The symbol of the token.";
        break;
      case "initialSupply":
        return "The amount of tokens minted to the creator's address on contract creation.";
        break;
      case "_decimals":
        return "Token decimals. Recommended is 18.";
        break;
      default:
        break;
    }
  };

  const list = constructorParams.map((params) => {
    return html`<tr>
      <td>
        <label for="${params.name}-input"
          >${getLabelFromParamName(params.name)}</label
        >
      </td>
      <td>
        <input
          id="${params.name}-input"
          type="${getTypeFromName(params.name)}"
        />
      </td>
      <td>${helperTooltips(getTooltipFromName(params.name))}</td>
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
    <small
      >Make sure you enter the correct details.This is non-reversible.</small
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
          <td><label for="logo-url-input">Logo url:</label></td>
          <td><input id="logo-url-input" type="text" /></td>
          <td>
            ${helperTooltips(
              "Not required. The url of the logo will be used when it adds the tokens to the wallet."
            )}
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div class="row">
      <label for="agree-to-deploy-sc">I agree to the terms.</label>
      <input
        id="agree-to-deploy-sc"
        aria-label="Agree to deploy checkbox"
        type="checkbox"
      />
    </div>
    <hr />
    <div>
      <button id="SCConstructBackButton" class="SCBackButton">Cancel</button>
      <button id="SCConstructCreateButton" class="SCNextButton">
        Create contract!
      </button>
    </div>
    <hr />
  `;
}
