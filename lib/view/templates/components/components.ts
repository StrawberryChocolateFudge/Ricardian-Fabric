import { html } from "lit-html";
import { Chains } from "../../../types";
import { BSCLogo, EthLogo, HarmonyLogo, PolygonLogo } from "./logos";

export const getPriceTemplate = (
  price: string | number,
  fee: number | string
) => {
  if (price !== "NONE") {
    const formattedPrice = price === "NONE" ? "" : `${price} Ar`;
    return html`<tr>
  <td>
    <label aria-labelledby="price label">Price:</label>
  </td>
  <td>
    <div aria-label="price">${formattedPrice}</div>
  </td>
</tr>
<tr>
  <td>
    <label aria-labelledby="fee label">Fee:</label>
  </td>
  <td aria-label="fee">${fee} Ar</td>
</tr>`;
  }
};

export const createdDateTemplate = (date: string) => {
  return html`<tr>
  <td aria-labelledby="created date label">
    <label for="createdDate"><label for="createdDate">Created:</label></label>
  </td>
  <td id="createdDate" aria-label="created date">${date}</td>
</tr>`;
};

export const signedDateTemplate = (date: string) => {
  return html`<tr>
  <td aria-labelledby="signed date label">
    <label for="signed-date">Signed on:</label>
  </td>
  <td id="signed-date" aria-label="signed date">${date}</td>
</tr>`;
};

export const issuerTemplate = (address: string) => {
  return html`
    <tr>
      <td aria-labelledby="issuer label">
        <label for="issuer-address"><label for="issuer-address">Issuer:</label></label>
      </td>
      <td id="issuer-address" aria-label="address">${address}</td>
      <td></td>
    </tr>
  `;
};

export const networkTemplate = (network: string, isFulfilled: boolean) => {
  const chains = {
    [Chains.Ropsten]: getChainButton(Chains.Ropsten, "Ropsten", "Testnet", "", isFulfilled),
    [Chains.bscTestnet]: getChainButton(Chains.bscTestnet, "BSC", "Testnet", "", isFulfilled),
    [Chains.polygonTestnet]: getChainButton(Chains.polygonTestnet,
      "Polygon",
      "Testnet",
      "",
      isFulfilled
    ),
    [Chains.harmonyTestnetShard0]: getChainButton(Chains.harmonyTestnetShard0,
      "Harmony",
      "Testnet",
      "Shard 0",
      isFulfilled
    ),
  };

  const networkEl = chains[network];

  return html`<tr>
  <td aria-labelledby="Network Id label">
    <label for="network-id">Network:</label>
  </td>
  <td id="network-id" aria-label="network id">
    ${networkEl === undefined ? network : networkEl}
  </td>
  <td></td>
</tr>`;
};

export function getChainButton(
  chains: Chains,
  chainName: string,
  net: string,
  shard: string,
  disabled: boolean
) {
  if (disabled) {
    return html`${getChainLogo(chains)} ${chainName} ${net} ${shard}`;
  } else {
    return html`<button class="network-button" id="addChainButton">${getChainLogo(chains)} ${chainName} ${net} ${shard}
</button>`;
  }
}

export function getChainLogo(chain: Chains) {
  switch (chain) {
    case Chains.Ropsten:
      return EthLogo();
    case Chains.harmonyTestnetShard0:
      return HarmonyLogo();
    case Chains.bscTestnet:
      return BSCLogo();
    case Chains.polygonTestnet:
      return PolygonLogo();
    default:
      break;
  }
}

export const onlySignerTemplate = (onlySigner: string) => {
  if (onlySigner !== "NONE") {
    return html`<tr>
  <td aria-labelledby="only signer label">Only Signer:</td>
  <td aria-label="only signer address">${onlySigner}</td>
  <td></td>
</tr>`;
  }
};

export const hashTemplate = (hash: string) => {
  return html`<tr>
  <td aria-labelledby="Hash label">Hash</td>
  <td aria-label="Hash">${hash}</td>
  <td></td>
</tr>`;
};

export const expiryTemplate = (date: string) => html`<tr>
  <td aria-labelledby="expires label">
    <label for="expiresDate">Expires:</label>
  </td>
  <td id="expiresDate" aria-label="date">${date}</td>
  <td></td>
</tr>`;

export const getParticipantFromTemplate = (participant: string) => html`<tr>
  <td aria-labelledby="participant label">
    <label for="participant">Participant:</label>
  </td>
  <td id="participant" aria-label="participant">${participant}</td>
  <td></td>
</tr>`;

export const parentUrl = (url: string) => html`
  <tr>
    <td aria-labelledby="accepted at url label">
      <label for="parent-url">Parent:</label>
    </td>
    <td id="parent-url">
      <a aria-label="accepted at url ${url}" href="${url}">${url}</a>
    </td>
    <td></td>
  </tr>
`;
