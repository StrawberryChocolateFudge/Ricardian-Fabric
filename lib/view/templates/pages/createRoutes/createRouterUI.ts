import { html } from "lit-html";
import { ManagementSwitch } from "../../components/managementSwitch";

export const CreateRouterUI = () => html`
  <hr />
  ${ManagementSwitch("Conduct agreements on Arweave")}
  <hr />
  <div class="routes-buttons-container">
    <button class="routes-buttons" id="walletButton"><h2>Wallet</h2></button>
    <button class="routes-buttons" id="semanticsButton">
      <h2>Semantics</h2>
    </button>
    <button class="routes-buttons" id="pdfButton"><h2>PDF</h2></button>
    <button class="routes-buttons" id="signerButton"><h2>Signer</h2></button>
    <button class="routes-buttons" id="paymentsButton">
      <h2>Payments</h2>
    </button>
    <button class="routes-buttons" id="networkingButton">
      <h2>Networking</h2>
    </button>
    <button class="routes-buttons" id="nftButton"><h2>NFT</h2></button>
    <button class="routes-buttons" id="inputsButton"><h2>Inputs</h2></button>
    <button class="routes-buttons" id="instrumentButton" >
      <h2>Instrument</h2>
    </button>
  </div>
  <hr />
  <table aria-label="expires container table" class="center">
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td>
        <label aria-labelledby="expires label" for="center">Expires :</label>
      </td>
      <td>
        <input
          aria-label="expires date input"
          name="expires"
          id="expires-input"
          type="date"
        />
        <button
          aria-label="never expires button"
          name="never"
          id="expires-reset"
        >
          Never
        </button>
      </td>
      <td><span id="expires-tooltip"></span></td>
    </tr>
  </table>
  <hr/>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
    <button class="center" id="create-button">Create</button>
`;
