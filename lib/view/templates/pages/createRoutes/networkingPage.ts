import { html } from "lit-html";

export const NetworkingPage = () => html`
  <h2 class="center">Networking</h2>
  <hr />
  <table aria-label="input field container table" class="center">
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td>
        <label aria-labelledby="post to label">Post to:</label>
      </td>
      <td>
        <input
          aria-label="post to input"
          name="postto"
          id="postto-input"
          type="url"
        />
      </td>
      <td><span id="postTo-tooltip"></span></td>
    </tr>
    <tr>
      <td>
        <label aria-labelledby="webhook checkbox label" for="webhook-checkbox"
          >Webhook:</label
        >
        <input
          aria-label="webhook-checkbox"
          id="webhook-checkbox"
          type="checkbox"
        />
      </td>
      <td>
        <label aria-labelledby="redirect-checkbox-label" for="redirect-checkbox"
          >Redirect:</label
        >
        <input
          aria-label="redirect-checkbox"
          id="redirect-checkbox"
          type="checkbox"
        />
      </td>
      <td>
        <span id="webhook-tooltip"></span>
      </td>
    </tr>
  </table>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div class="button-row">
    <button class="marginRight-20" id="NetworkingPage-previous">
      Cancel
    </button>
    <button class="marginLeft-20" id="NetworkingPage-next">Save</button>
  </div>
`;
