import { State } from "../../types";
import { isInstrumentEl, setSmartContractInputFields } from "../utils";

export const instrumentCheckboxListener = (props: State) => {
  const instrumentcheckbox = isInstrumentEl();

  instrumentcheckbox.onchange = function () {
    setSmartContractInputFields(instrumentcheckbox.checked);
  };
};
