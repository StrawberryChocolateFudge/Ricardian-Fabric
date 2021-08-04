import { getById } from "../utils";

export const attachNeverExpiresClick = () => {
  const reset = getById("expires-reset");
  const date = getById("expires-input") as HTMLInputElement;
  date.valueAsDate = new Date();

  reset.onclick = function () {
    date.value = "";
  };
};
