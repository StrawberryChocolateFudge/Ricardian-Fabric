import "./lib/state";
import "./lib/view";
import { getArweave, showBanner } from "./lib/business/bloc";
// import "./lib/view/templates/acceptable/acceptablePage";
import "medium-editor/dist/css/themes/default.css";
import "medium-editor/dist/css/medium-editor.css";

(async function init() {
  showBanner();
  await getArweave();
})();
