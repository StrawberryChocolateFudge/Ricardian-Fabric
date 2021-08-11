import { html } from "lit-html";

export const getPriceTemplate = (
  price: string | number,
  fee: number | string
) => {
  if (price !== "NONE") {
    const formattedPrice = price === "NONE" ? "" : `${price} Ar`;
    return html` <tr>
        <td>
          <label aria-label="price label">Price:</label>
        </td>
        <td>
          <div aria-label="price">${formattedPrice}</div>
        </td>
      </tr>
      <tr>
        <td>
          <label aria-label="fee label">Fee:</label>
        </td>
        <td aria-label="fee">${fee} Ar</td>
      </tr>`;
  }
};

export const createdDateTemplate = (date: string) => {
  return html` <tr>
    <td aria-label="created date label">Created:</td>
    <td aria-label="created date">${date}</td>
  </tr>`;
};

export const issuerTemplate = (address: string) => {
  return html`
    <tr>
      <td aria-label="issuer label">Issuer:</td>
      <td aria-label="address">${address}</td>
    </tr>
  `;
};

export const expiryTemplate = (date: string) => html` <tr>
  <td aria-label="expires label">Expires:</td>
  <td aria-label="date">${date}</td>
</tr>`;

export const getParticipantFromTemplate = (paidFrom: string) => html`<tr>
  <td aria-label="participant label">Participant:</td>
  <td aria-label="participant">${paidFrom}</td>
</tr>`;

export const parentUrl = (url: string) => html`
  <tr>
    <td aria-label="accepted at url label">Accepted at</td>
    <td><a aria-label="accepted at url ${url}" href="${url}">${url}</a></td>
  </tr>
`;
