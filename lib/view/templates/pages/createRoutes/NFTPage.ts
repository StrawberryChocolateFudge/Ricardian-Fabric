import { html } from "lit-html";

export const NFTPage = () => html`
  <h2 class="center">NFT</h2>
  <hr />
  <h5 class="center">
    Allow your customers to create a non-fungible token from the agreement
  </h5>
  <table aria-label="nft field table" class="center">
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td>
        <label for="allowNFT-checkbox" aria-labelledby="Allow nft minting"
          >Allow NFT minting</label
        >
      </td>
      <td>
        <input
          aria-label="allow minting of NFT"
          name="allowNFT"
          id="allowNFT-checkbox"
          type="checkbox"
        />
      </td>
      <td>
        <span id="allowNFT-tooltip"></span>
      </td>
    </tr>
    <tr>
      <td>
        <label for="nft-title" aria-labelledby="Nft name input">Title:</label>
      </td>
      <td><input aria-label="nft name input" id="nft-title" type="text"/></td>
      <td><span id="nft-name-tooltip"></span></td>
    </tr>
    <tr>
      <td>
        <label for="nft-name" aria-labelledby="Nft name input">Name:</label>
      </td>
      <td><input aria-label="nft name input" id="nft-name" type="text" /></td>
      <td><span id="nft-name-tooltip"></span></td>
    </tr>
     <tr>
      <td>
        <label for="nft-ticker" aria-labelledby="Nft ticker input"
          >Ticker:</label
        >
      </td>
      <td>
        <input aria-label="nft ticker input" id="nft-ticker" type="text" />
      </td>
      <td><span id="nft-ticker-tooltip"></span></td>
    </tr>
    <tr>
      <td>
        <label for="nft-description" aria-labelledby="Nft name input"
          >Description:</label
        >
      </td>
      <td>
        <textarea aria-label="nft name input" id="nft-description" type="text" ></textarea>
      </td>
      <td><span id="nft-name-tooltip"></span></td>
    </tr>
   
  </table>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div class="button-row">
    <button class="marginRight-20 cancel-button" id="nftpage-cancel">
      Cancel
    </button>
    <button class="marginLeft-20 save-button" id="nftpage-save">Save</button>
  </div>
`;
