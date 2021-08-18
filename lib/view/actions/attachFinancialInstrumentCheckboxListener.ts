import { dispatch_renderInstrumentSettings } from "../../dispatch/render";
import { State } from "../../types";
import { getById } from "../utils";

export const attachFinancialInstrumentCheckboxListener = (props: State) => {
  const instrumentcheckbox = getById(
    "is-financial-instrument"
  ) as HTMLInputElement;
  const pstContractInput = getById("pstContractId") as HTMLInputElement;
  instrumentcheckbox.onchange = function () {
    if (instrumentcheckbox.checked) {
      pstContractInput.disabled = true;
      dispatch_renderInstrumentSettings(props);
    } else {
      pstContractInput.disabled = false;
    }
  };
};
