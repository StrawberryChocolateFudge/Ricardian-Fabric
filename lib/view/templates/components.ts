import { html } from "lit-html";
import { Chains } from "../../types";
import { HarmonyLogo } from "./networkdropdown";

export const getPriceTemplate = (
  price: string | number,
  fee: number | string
) => {
  if (price !== "NONE") {
    const formattedPrice = price === "NONE" ? "" : `${price} Ar`;
    return html` <tr>
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
  return html` <tr>
    <td aria-labelledby="created date label">
      <label for="createdDate"><label for="createdDate">Created:</label></label>
    </td>
    <td id="createdDate" aria-label="created date">${date}</td>
  </tr>`;
};

export const signedDateTemplate = (date: string) => {
  return html` <tr>
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
        <label for="issuer-address"
          ><label for="issuer-address">Issuer:</label></label
        >
      </td>
      <td id="issuer-address" aria-label="address">${address}</td>
      <td></td>
    </tr>
  `;
};

export const networkTemplate = (network: string, isFulfilled: boolean) => {
  const chains = {
    [Chains.HmnyMainnetShard0]: getChainButton(
      "Harmony",
      "Mainnet",
      "Shard 0",
      isFulfilled
    ),
    [Chains.HmnyMainnetShard1]: getChainButton(
      "Harmony",
      "Mainnet",
      "Shard 1",
      isFulfilled
    ),
    [Chains.HmnyMainnetShard2]: getChainButton(
      "Harmony",
      "Mainnet",
      "Shard 2",
      isFulfilled
    ),
    [Chains.HmnyMainnetShard3]: getChainButton(
      "Harmony",
      "Mainnet",
      "Shard 3",
      isFulfilled
    ),
    [Chains.HmnyTestnetShard0]: getChainButton(
      "Harmony",
      "Testnet",
      "Shard 0",
      isFulfilled
    ),
    [Chains.HmnyTestnetShard1]: getChainButton(
      "Harmony",
      "Testnet",
      "Shard 1",
      isFulfilled
    ),
    [Chains.HmnyTestnetShard2]: getChainButton(
      "Harmony",
      "Testnet",
      "Shard 2",
      isFulfilled
    ),
    [Chains.HmnyTestnetShard3]: getChainButton(
      "Harmony",
      "Testnet",
      "Shard 3",
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
  chain: string,
  net: string,
  shard: string,
  disabled: boolean
) {
  if (disabled) {
    return html`${HarmonyLogo()} ${chain} ${net} ${shard}`;
  } else {
    return html`<button class="network-button" id="addChainButton">
      ${HarmonyLogo()} ${chain} ${net} ${shard}
    </button>`;
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

export const expiryTemplate = (date: string) => html` <tr>
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
