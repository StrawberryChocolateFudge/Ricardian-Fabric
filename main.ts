import "./lib/state";
import "./lib/view";
import { showBanner } from "./lib/business/bloc";
import "./lib/view/templates/acceptablePage";
import { dispatch_setInit, dispatch_setIPFS } from "./lib/dispatch/stateChange";
(async function init() {
  showBanner();
  dispatch_setInit();
})();
