import { html } from "lit-html";
import { ConnectWalletLogo, MetamaskLogo } from "../components/logos";

export const ConnectWalletPage = () =>
  html`
    <div class="center height200">
      <button
        id="connectWalletButton"
        class="labelButton width-200 marginTop-50 unselectable light-shadow"
      >
        <h4>Connect your wallet</h4>
        <hr />
        ${MetamaskLogo()}
      </button>
    </div>
  `;
