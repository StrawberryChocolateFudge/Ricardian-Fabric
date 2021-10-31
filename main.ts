import "./lib/state";
import "./lib/view";
import "./lib/view/templates/acceptablePage";
import { dispatch_setInit } from "./lib/dispatch/stateChange";
(async function init() {
  dispatch_setInit();
})();
