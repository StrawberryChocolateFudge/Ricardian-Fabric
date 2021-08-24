import { State } from "../../types";
import { setSmartContractInputFields } from "../render";
import { getPSTCheckboxEl, isInstrumentEl } from "../utils";

export const instrumentCheckboxListener = (props: State) => {
  const instrumentcheckbox = isInstrumentEl();
  const pstCheckbox = getPSTCheckboxEl();
  instrumentcheckbox.onchange = function () {
    setSmartContractInputFields(
      pstCheckbox.checked,
      instrumentcheckbox.checked
    );
  };

  pstCheckbox.onchange = function () {
    setSmartContractInputFields(
      pstCheckbox.checked,
      instrumentcheckbox.checked
    );
  };
};
