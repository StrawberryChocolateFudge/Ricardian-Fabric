import { State } from "../../types";
import { getById } from "../utils";

export const attachFinancialInstrumetsSettingsActions = function (
  props: State
) {
  const back = getById("instrument-cancel") as HTMLButtonElement;
  const save = getById("instrument-save") as HTMLButtonElement;

  back.onclick = function () {
    getById("overlay").style.display = "none";
  };
  save.onclick = function () {
    getById("overlay").style.display = "none";
  };
};
