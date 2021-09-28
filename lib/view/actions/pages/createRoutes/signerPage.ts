import { goToCreateRoutes } from "../../../../dispatch/dispatch";
import {
  dispatch_initSignerPage,
  dispatch_renderCountries,
  dispatch_renderError,
} from "../../../../dispatch/render";
import { dispatch_setSignerPageData } from "../../../../dispatch/stateChange";
import { State } from "../../../../types";
import { getAvailableCountries, getById, getOnlySigner } from "../../../utils";

export function signerPage(props: State) {
  dispatch_initSignerPage(props);

  const cancelButton = getById("signer-cancel");
  const nextButton = getById("signer-save");
  const countryToAddEl = getById("country-to-add") as HTMLSelectElement;
  const addSelectedCountryEl = getById("add-country-item");

  const countries: Array<string> = props.signerPage.availableCountries.slice();

  addSelectedCountryEl.onclick = function () {
    const country = countryToAddEl.value;

    if (country === "") {
      return;
    }
    if (countries.includes(country)) {
      return;
    }
    countries.push(country);
    dispatchCountryListRenders(countries);
  };

  cancelButton.onclick = function () {
    goToCreateRoutes();
  };

  nextButton.onclick = function () {
    const onlySigner = getOnlySigner();
    if (onlySigner !== "NONE" && onlySigner.length !== 43) {
      // the lengths of the address must be 43
      dispatch_renderError("Only signer address is invalid");
      return;
    }

    const availableCountries = getAvailableCountries();
    dispatch_setSignerPageData({ onlySigner, availableCountries });
    goToCreateRoutes();
  };
}

export function attachListenersToRemoveCountryButtons(available: Array<string>) {
  available.forEach((country) => {
    const currentEl = getById(`remove-country-${country}`);
    currentEl.onclick = function (ev: any) {
      const index = available.indexOf(ev.target.name);
      available.splice(index, 1);
      dispatchCountryListRenders(available);
    };
  });
}

export function dispatchCountryListRenders(countries: Array<string>) {
  dispatch_renderCountries(countries);
  attachListenersToRemoveCountryButtons(countries);
}
