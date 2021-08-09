import { html } from "lit-html";

export const getPriceTemplate = (
  price: string | number,
  fee: number | string
) => {
  if (price !== "NONE") {
    const formattedPrice = price === "NONE" ? "" : `${price} Ar`;
    return html` <tr>
        <td>
          <label>Price:</label>
        </td>
        <td>
          <div>${formattedPrice}</div>
        </td>
      </tr>
      <tr>
        <td>
          <label>Fee:</label>
        </td>
        <td>${fee} Ar</td>
      </tr>`;
  }
};

export const createdDateTemplate = (date: string) => {
  return html` <tr>
    <td>Created:</td>
    <td>${date}</td>
  </tr>`;
};

export const issuerTemplate = (address: string) => {
  return html`
    <tr>
      <td>Issuer:</td>
      <td>${address}</td>
    </tr>
  `;
};

export const expiryTemplate = (date: string) => html` <tr>
  <td>Expires:</td>
  <td>${date}</td>
</tr>`;

export const getParticipantFromTemplate = (paidFrom: string) => html`<tr>
  <td>Participant:</td>
  <td>${paidFrom}</td>
</tr>`;

export const parentUrl = (url: string) => html`
  <tr>
    <td>Accepted at</td>
    <td><a href="${url}">${url}</a></td>
  </tr>
`;
