import { html } from "lit-html";
import { getBlockie } from "../components/getBlockies";
import { BackLogo, ThumbsDown, ThumbsUp, WebAsset } from "../components/logos";
import { getCategories } from "./catalogPage";

export function ReviewAndVote() {
  return html`
    <h2>Review and Vote</h2>
    <h5>New smart contract proposals</h5>
    <table class="light-shadow">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <label id="categories-label" for="select-category">Category:</label>
          </td>
          <td>${getCategories()}</td>
          <td><hr /></td>
          <td>
            <button class="labelButton">Search</button>
          </td>
          <td>
            <input id="search-input" type="text" placeholder="Search for..." />
          </td>
          <td>
            <label>Sort by date</label>
          </td>
          <td>
            <select>
              <option>Ascending</option>
              <option>Descending</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <table class="light-shadow">
      <tr>
        <td><label>Id</label></td>
        <td><label>Rank</label></td>
        <td><label>Category</label></td>
        <td><label>Compare</label></td>
        <td><label>Name</label></td>
        <td><label>Approve</label></td>
        <td><label>Reject</label></td>
      </tr>
      <tr>
        <td>${getBlockie("asf", "50px", "")}</td>
        <td>1</td>
        <td>Tokens</td>
        <td><button class="labelButton">Artifact</button></td>
        <td><button class="labelButton">HRC-20 token</button></td>
        <td><button class="labelButton">${ThumbsUp()}</button></td>
        <td><button class="labelButton">${ThumbsDown()}</button></td>
      </tr>
    </table>
    <hr />
    <h5>New Rank</h5>
    <table class="light-shadow">
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <label>Sort by date</label>
          </td>
          <td>
            <select>
              <option>Ascending</option>
              <option>Descending</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <table class="light-shadow">
      <tr>
        <td><label>Address</label></td>
        <td><label>Repository</label></td>
        <td><label>Approve</label></td>
        <td><label>Reject</label></td>
      </tr>
      <tr>
        <td>${getBlockie("reviewer address", "50px", "")}</td>
        <td>
          <a
            class="labelButton"
            href="https://github.com/StrawberryChocolateFudge/HRC20"
            target="_blank"
            rel="noopener"
            >${WebAsset()}</a
          >
        </td>
        <td><button class="labelButton">${ThumbsUp()}</button></td>
        <td><button class="labelButton">${ThumbsDown()}</button></td>
      </tr>
    </table>
    <hr />
    <h5>Removal Request</h5>
    <hr />
    <table class="light-shadow">
      <tr>
        <td><label>From</label></td>
        <td><label>Id</label></td>
        <td><label>Discussion</label></td>
        <td><label>Name</label></td>
        <td><label>Approve</label></td>
        <td><label>Reject</label></td>
      </tr>
      <tr>
        <td>${getBlockie("Reporter", "50px", "")}</td>
        <td>${getBlockie("asf", "50px", "")}</td>
        <td><a href="/" class="labelButton">Here</a></td>
        <td><button class="labelButton">HRC-20 token</button></td>
        <td><button class="labelButton">${ThumbsUp()}</button></td>
        <td><button class="labelButton">${ThumbsDown()}</button></td>
      </tr>
    </table>
    <div class="row">
      <button class="labelButton" id="reviewBack">${BackLogo()}Back</button>
    </div>
  `;
}
