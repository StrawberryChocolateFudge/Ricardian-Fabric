import { html } from "lit-html";

const termsAndConditions = () => html`
  <p>THIS IS A TESTNET VERSION OF RICADIAN FABRIC!</p>
  <p>The network you use is determined by your metamask config. Please use a testnet.</p>
  <p>Arweave is not on testnet. Any funsd you spend or files you upload will charge real Ar.</p>
  <p>Ricardian Fabric is provided "as is", without warranty of any kind.</p>
  <p>Documents created with it may be applicable by law.</p>
  <p>
    Any information entered will be publicly available permanently so it is
    highly discouraged to use any personal information.
  </p>
  <p>You shall not enter any sensitive information.</p>
  <p>
    By clicking I agree, you agree you will not bring suit against the creator of
    Ricardian Fabric for any reason.
  </p>
  <p>
    The creator is entirely free from any liability, including financial
    responsibility for any damages caused.
  </p>
  <p>
    You agree that you will not upload any information that damages intellectual
    property or violates anyone's rights or brings harm to others.
  </p>
  <p>
    You agree to stay compliant with your local laws related to data protection
    and crypto.
  </p>
  <p>
    The issuer is solely responsible for any agreements conducted through this
    application.
  </p>
  <p>
    The deployed websites are owned by the issuer and the participant and not by
    the creators of Ricardian Fabric.
  </p>
  <p>Any financial activity conducted through this application is the responsibility of the user.</p>
  <p>Ricardian Fabric is not responsible for any financial loss related caused by bugs or other reasons.</p>
  
`;

export const termsLayout = () => html` <style>
    #terms-accept-button {
      background-color: black;
      color: white;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      padding: 5px;
      margin-bottom: 20px;
    }
  </style>
  <h2>Terms and conditions</h2>
  <div id="terms-container">${termsAndConditions()}</div>
  <div id="terms-button-container">
    <button
      aria-label="I agree to the terms and conditions"
      id="terms-accept-button"
    >
      I agree to the terms and conditions!
    </button>
    
  </div>`;
