import { dispatch_managerSwitch } from "../../../dispatch/stateChange";
import { ManagementSlider, State } from "../../../types";
import { getById } from "../../utils";

export function managerSwitch(props: State) {
  const slider = getById("managementSwitch") as HTMLInputElement;

  const initialState = props.managementSlider;

  if (initialState === ManagementSlider.ON) {
    slider.checked = true;
  } else {
    slider.checked = false;
  }

  slider.onclick = function () {
    const to = slider.checked ? ManagementSlider.ON : ManagementSlider.OFF;
    dispatch_managerSwitch(to);
  };
}
