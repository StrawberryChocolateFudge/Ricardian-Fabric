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

export const expiryTemplate = (date: string) => html` <tr>
  <td aria-labelledby="expires label">Expires:</td>
  <td aria-label="date">${date}</td>
  <td></td>
</tr>`;

export const getParticipantFromTemplate = (paidFrom: string) => html`<tr>
  <td aria-labelledby="participant label">Participant:</td>
  <td aria-label="participant">${paidFrom}</td>
  <td></td>
</tr>`;

export const parentUrl = (url: string) => html`
  <tr>
    <td aria-labelledby="accepted at url label">Parent:</td>
    <td><a aria-label="accepted at url ${url}" href="${url}">${url}</a></td>
    <td></td>
  </tr>
`;
