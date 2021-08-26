import "./lib/state";
import "./lib/view";
import { getArweave, showBanner } from "./lib/business/bloc";
import "./lib/view/templates/acceptablePage";
(async function init() {
  showBanner();
  await getArweave();
})();
