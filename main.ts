import "./lib/state";
import "./lib/view";
import { decomissioned, getArweave, showBanner } from "./lib/business/bloc";
import "./lib/view/templates/acceptablePage";
(async function init() {
  showBanner();
  decomissioned();
  await getArweave();
})();
