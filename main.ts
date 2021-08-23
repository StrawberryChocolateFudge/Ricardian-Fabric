import "./lib/state";
import "./lib/view";
import { getArweave, showBanner } from "./lib/business/bloc";
import "./lib/view/templates/acceptablePage";
import { getById } from "./lib/view/utils";
(async function init() {
  console.log(getById("main-script"));

  showBanner();
  await getArweave();
})();
