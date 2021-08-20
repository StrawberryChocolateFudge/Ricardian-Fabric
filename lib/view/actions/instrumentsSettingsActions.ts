import { State } from "../../types";
import { getById } from "../utils";

//TODO: THIS CAN BE REMOVED!!
export const instrumetsSettingsActions = function (props: State) {
  const back = getById("instrument-cancel") as HTMLButtonElement;
  const save = getById("instrument-save") as HTMLButtonElement;

  back.onclick = function () {
    getById("overlay").style.display = "none";
  };

  save.onclick = function () {
    const nameEl = getById("instrument-name-input") as HTMLInputElement;
    const tickerEl = getById("instrument-ticker-input") as HTMLInputElement;
    const supplyEl = getById("instrument-supply-input") as HTMLInputElement;
    const canDeriveEl = getById("instrument-derive-input") as HTMLInputElement;

    // dispatch_instrumentSettings({
    //   name: nameEl.value,
    //   ticker: tickerEl.value,
    //   supply: supplyEl.value,
    //   canDerive: canDeriveEl.value,
    // });
    getById("overlay").style.display = "none";
  };
};
