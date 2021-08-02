import "./lib/state";
import "./lib/view";
import { getArweave } from "./lib/business/bloc";
import "./lib/view/templates/acceptablePage";
import "medium-editor/dist/css/themes/default.css";
import "medium-editor/dist/css/medium-editor.css";

(async function init() {
  await getArweave();
})();
