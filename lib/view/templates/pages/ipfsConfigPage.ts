import { html } from "lit-html";
import { State } from "../../../types";
import { helperTooltips } from "../components/helperTooltips";

export const IpfsConfigPage = (props: State) => html`
  <h3>Configure IPFS</h3>
  <h5>FOR ADVANCED USERS ONLY!</h5>
  <small
    >Misconfiguring IPFS will break the application.
    <a
      href="https://docs.ipfs.io/concepts/ipfs-gateway/#gateway-types"
      target="_blank"
      rel="noopener"
      >Docs!</a
    >
    Make sure you understand how it works. The changes here are only available
    per session, however acceptable contracts created with modified ipfs config
    will use it permanently.</small
  >
  <table>
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td><label for="ipfs-host">Host url</label></td>
      <td>
        <input
          value="${props.ipfs.host}"
          id="ipfs-host"
          type="text"
          placeholder="ipfs.infura.io"
        />
      </td>
      <td>${helperTooltips("The url of the ipfs node")}</td>
    </tr>
    <tr>
      <td><label>Subdomain resolution </label></td>
      <td>
        <input
          id="ipfs-subdoman-resolution"
          type="text"
          value="${props.ipfs.v2Url}"
          placeholder="ipfs.infura-ipfs.io"
        />
      </td>
      <td>${helperTooltips("The url as used for subdomain resolution")}</td>
    </tr>
    <tr>
      <td><label for="ipfs-port">Port:</label></td>
      <td>
        <input
          value="${props.ipfs.port}"
          id="ipfs-port"
          type="number"
          placeholder="5001"
        />
      </td>
      <td>${helperTooltips("The exposed ports to connect to.")}</td>
    </tr>
    <tr>
      <td><label for="ipfs-protocol">Protocol:</label></td>
      <td>
        <input
          value="${props.ipfs.protocol}"
          id="ipfs-protocol"
          type="text"
          placeholder="https"
        />
      </td>
      <td>
        ${helperTooltips(
          "The protocol used to access the ipfs node. https recommended!"
        )}
      </td>
    </tr>
  </table>
  <div class="text-align-center">
    <button id="apply-ipfs-config-changes" class="labelButton">
      Apply Changes
    </button>
  </div>
`;
