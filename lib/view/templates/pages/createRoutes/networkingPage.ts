import { html } from "lit-html";

export const NetworkingPage = () => html`
  <h2 class="center">Networking</h2>
  <hr />
  <table aria-label="input field container table" class="center">
    <tr>
      <th>Integrate an external service</th>
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
      </td>
      <td>
        <input
          aria-label="webhook checkbox"
          id="webhook-checkbox"
          type="checkbox"
        />
      </td>
      <td>
        <span id="webhook-tooltip"></span>
      </td>
    </tr>
    <tr>
      <td>
        <label aria-labelledby="redirect-checkbox-label" for="redirect-checkbox"
          >Redirect:</label
        >
      </td>
      <td>
        <input
          aria-label="redirect checkbox"
          id="redirect-checkbox"
          type="checkbox"
        />
      </td>
      <td>
        <span id="redirect-tooltip"></span>
      </td>
    </tr>
    <tr>
      <th>Get a Notification via Arweave</th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td>
        <label
          aria-labelledby="weavemail-checkbox-label"
          for="weavemail-checkbox"
          >Weavemail:</label
        >
      </td>
      <td>
        <input
          aria-label="weavemail checkbox"
          id="weavemail-checkbox"
          type="checkbox"
        />
      </td>
      <td><span id="weavemail-tooltip"></span></td>
    </tr>
  </table>
  <div
    aria-label="error-display-slot"
    class="center red"
    id="error-display"
  ></div>
  <div class="button-row">
    <button class="marginRight-20 cancel-button" id="NetworkingPage-previous">
      Cancel
    </button>
    <button class="marginLeft-20 save-button" id="NetworkingPage-next">
      Save
    </button>
  </div>
`;
