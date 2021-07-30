import "../../../lib/state";
import "../../../lib/view";
import { getArweave } from "../../../lib/business/bloc";

(async function init() {
  await getArweave();
})();
