import { html } from "lit-html";
import { Menu, MenuOpen } from "./logos";

export function SideBar() {
  return html` <div id="sidebar" class="collapsed">
      <div class="text-align-center">
        <button id="toggleClose" title="Close sidebar" class="labelButton">
          ${Menu()}
        </button>
      </div>
      <div id="menuItems"></div>
    </div>
    <div id="content">
      <button
        disabled
        id="toggleOpen"
        title="Toggle sidebar"
        class="labelButton position-fixed"
      >
        ${MenuOpen()}
      </button>
    </div>`;
}
