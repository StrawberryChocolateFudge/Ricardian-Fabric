import { html } from "lit-html";
import { ContractTypes, PageState } from "../../../types";
import {
  accountLogo,
  arweaveLogo,
  BallotLogo,
  pinLogo,
  SaveLogo,
  uploadLogo,
} from "../components/logos";

export const PermawebDropdown = (
  contractType: ContractTypes,
  page: PageState
) => html`
  <input
    type="checkbox"
    id="permaweb_checkbox_toggle"
    class="dropdown_checkbox_toggle"
  />
  <button
    class="labelButton dropdown_checkbox_label lightCoral-shadow"
    id="permaweb_checkbox_button"
    for="permaweb_checkbox_toggle"
  >
    ${arweaveLogo()} Permaweb
  </button>
  <ul>
    <li>
      <button id="Account-popup-button" class="dropdown-button">
        <small>${accountLogo()} Account</small>
      </button>
    </li>

    ${contractType === ContractTypes.create
      ? html` <li>
          <button id="upload-popup-button" class="dropdown-button">
            <small>${uploadLogo()} Upload File</small>
          </button>
        </li>`
      : null}
    ${contractType === ContractTypes.create
      ? html`${page === PageState.CreateRicardian
          ? html`<li>
                <button id="permapin-popup-button" class="dropdown-button">
                  <small>${pinLogo()} Permapin</small>
                </button>
              </li>
              <li>
                <button id="upload-currentpage-button" class="dropdown-button">
                  <small>${SaveLogo()} Save page</small>
                </button>
              </li> `
          : html`
              <li>
                <button class="dropdown-button" id="upload-proposal-button">
                  <small>${BallotLogo()} Upload proposal</small>
                </button>
              </li>
            `}`
      : html`<li>
          <button id="permapin-popup-button" class="dropdown-button">
            <small>${pinLogo()} Permapin</small>
          </button>
        </li>`}
  </ul>
`;
