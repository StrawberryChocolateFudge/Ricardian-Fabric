import "./lib/state";
import "./lib/view";
import { getArweave } from "./lib/business/bloc";
import "./lib/view/templates/acceptablePage";
(async function init() {
  await getArweave();
})();
