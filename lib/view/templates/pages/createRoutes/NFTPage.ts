import { html } from "lit-html";

export const NFTPage = () => html`
  <h2 class="center">NFT</h2>
  <hr />
  <table aria-label="nft field table" class="center">
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td>
        <label aria-labelledby="Allow nft minting">Allow NFT minting</label>
      </td>
      <td>
        <input
          aria-label="allow minting of NFT"
          name="allowNFT"
          id="allowNFT-Checkbox"
          type="checkbox"
        />
      </td>
      <td>
        <span id="allowNFT-tooltip"></span>
      </td>
    </tr>
    <tr>
      <td><label aria-labelledby="Nft name input">Title:</label></td>
      <td><input aria-label="nft name input" id="nft-name" type="text" /></td>
      <td><span id="nft-name-tooltip"></span></td>
    </tr>
    <tr>
      <td><label aria-labelledby="Nft name input">Name:</label></td>
      <td><input aria-label="nft name input" id="nft-name" type="text" /></td>
      <td><span id="nft-name-tooltip"></span></td>
    </tr>
    <tr>
      <td><label aria-labelledby="Nft name input">Description:</label></td>
      <td><input aria-label="nft name input" id="nft-name" type="text" /></td>
      <td><span id="nft-name-tooltip"></span></td>
    </tr>
    <tr>
      <td><label aria-labelledby="Nft ticker input">Ticker:</label></td>
      <td>
        <input aria-label="nft ticker input" id="nft-ticker" type="text" />
      </td>
      <td><span id="nft-ticker-tooltip"></span></td>
    </tr>
  </table>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div class="button-row">
    <button class="marginRight-20" id="nftpage-cancel">Cancel</button>
    <button class="marginLeft-20" id="nftpage-save">Save</button>
  </div>
`;
