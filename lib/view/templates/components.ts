import { html } from "lit-html";

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
    <td aria-labelledby="created date label">Created:</td>
    <td aria-label="created date">${date}</td>
  </tr>`;
};

export const signedDateTemplate = (date: string) => {
  return html` <tr>
    <td aria-labelledby="signed date label">Signed on:</td>
    <td aria-label="signed date">${date}</td>
  </tr>`;
};

export const issuerTemplate = (address: string) => {
  return html`
    <tr>
      <td aria-labelledby="issuer label">Issuer:</td>
      <td aria-label="address">${address}</td>
      <td></td>
    </tr>
  `;
};

export const networkTemplate = (network: string) => {
  return html`<tr>
    <td aria-labelledby="Network Id label">Network:</td>
    <td aria-label="network id">${network}</td>
    <td></td>
  </tr>`;
};

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

export const issuerSignatureTemplate = (signature: string) => {
  return html`<tr>
    <td aria-labelledby="issuer signature label">Issuer signature</td>
    <td aria-label="issuer Signature ">${signature}</td>
    <td></td>
  </tr>`;
};

export const expiryTemplate = (date: string) => html` <tr>
  <td aria-labelledby="expires label">Expires:</td>
  <td aria-label="date">${date}</td>
  <td></td>
</tr>`;

export const getParticipantFromTemplate = (participant: string) => html`<tr>
  <td aria-labelledby="participant label">Participant:</td>
  <td aria-label="participant">${participant}</td>
  <td></td>
</tr>`;

export const parentUrl = (url: string) => html`
  <tr>
    <td aria-labelledby="accepted at url label">Parent:</td>
    <td><a aria-label="accepted at url ${url}" href="${url}">${url}</a></td>
    <td></td>
  </tr>
`;
