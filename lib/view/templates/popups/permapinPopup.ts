import { html } from "lit-html";
import { TIP, WinstonToAr } from "../../../wallet/arweave";
import { helperTooltips } from "../components/helperTooltips";

export const PermapinPopup = () => html`
  <h2>Permapin a Contract</h2>
  <small>You can permapin the IPFS content on Arweave to store it forever.</small>
  <small>Only content created with Ricardian Fabric is allowed.</small>
  <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><label for="CID-input-permapin">IPFS Content Identifier</label></td>
        <td>
          <input id="CID-input-permapin" type="text" />
        </td>
        <td>${helperTooltips("The IPFS content identifier, V0 or V1")}</td>
      </tr>
      <tr>
        <td><label for="walletPassword">Password:</label></td>
        <td>
          <input readonly onfocus="this.removeAttribute('readonly');" autocomplete="off" id="walletPassword"
            type="password" />
        </td>
        <td>${helperTooltips("The password of the key file")}</td>
      </tr>
      <!-- <tr>
          <td><label for="tipcheckbox">Send a tip:</label></td>
          <td>
            <input id="tipcheckbox" type="checkbox" checked />
          </td>
          <td>${helperTooltips(`Support us by sending a tip. ${TIP} Ar`)}</td>
        </tr> -->
      <tr>
        <td>
          <label id="terms-button" class="terms-button-label">I accept the terms.</label>
        </td>
        <td><input id="permapin-terms-checkbox" type="checkbox" /></td>
      </tr>
    </tbody>
  </table>
  <hr />
  <div class="wide-row">
    <button class="backButton" id="permapin-back">back</button>
    <button class="NextButton" id="permapin-proceed">Pin!</button>
  </div>
  <hr />
`;

export const PermapinSummaryPage = (arg: {
  permapinTx: any;
  sendTip: boolean;
  tipTx: any;
}) => {

  const getFee = () => {
    let reward = parseFloat(arg.permapinTx.tx.reward);
    if (arg.sendTip) {
      reward += parseFloat(arg.tipTx.reward);
      reward += parseFloat(arg.tipTx.quantity);
    }
    const rewardInAr = WinstonToAr(reward.toString());
    return html`<div>${rewardInAr} Ar</div>`;
  };

  return html`<h2>Permapin Summary</h2>
<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fee:</td>
      <td>${getFee()}</td>
    </tr>
  </tbody>
</table>
<div id="transaction-loading"></div>
<div class="wide-row">
  <button class="backButton" id="permapinPost-back">Back</button>
  <button class="NextButton" id="permapinPost-proceed">
    Post Transaction
  </button>
</div>
<hr />`;
};
