import {
  dispatch_initInstrumentsPage,
  dispatch_removeError,
  dispatch_renderError,
} from "../../../../dispatch/render";
import {
  dispatch_instrumentPageData,
  dispatch_setCreatePages,
} from "../../../../dispatch/stateChange";
import { CreatePages, State } from "../../../../types";
import {
  getById,
  getInstrumentCanDerive,
  getInstrumentFields,
  getInstrumentName,
  getInstrumentSupply,
  getInstrumentTicker,
  getIsInstrument,
} from "../../../utils";

export function instrumentPage(props: State) {
  dispatch_initInstrumentsPage(props);
  const prevButton = getById("instrumentPage-cancel");
  const nextButton = getById("instrumentPage-save");
  const isInstrumentCheckbox = getById("is-crypto-instrument");

  isInstrumentCheckbox.onchange = function () {
    const [_, nameEl, tickerEl, supplyEl, canDeriveEl] = getInstrumentFields();
    const isInstrument = getIsInstrument();

    nameEl.disabled = !isInstrument;
    tickerEl.disabled = !isInstrument;
    supplyEl.disabled = !isInstrument;
    canDeriveEl.disabled = !isInstrument;
  };

  prevButton.onclick = function (e: Event) {
    dispatch_setCreatePages(CreatePages.Routes);
  };

  nextButton.onclick = function (e: Event) {
    dispatch_removeError();
    const isInstrument = getIsInstrument();
    const name = getInstrumentName();
    const ticker = getInstrumentTicker();
    const instrumentSupply = getInstrumentSupply();
    const instrumentCanDerive = getInstrumentCanDerive();
    const supply = parseInt(instrumentSupply);
    const canDerive = parseInt(instrumentCanDerive);

    if (isInstrument) {
      if (name === "") {
        dispatch_renderError("Instrument name is not specified");
        return;
      }

      if (ticker === "") {
        dispatch_renderError("Ticker is not specified");
        return;
      }
      if (isNaN(supply)) {
        dispatch_renderError("Invalid supply, must be a valid integer");
        return;
      }

      if (supply < 1) {
        dispatch_renderError("The minimum supply is 1");
        return;
      }

      if (isNaN(canDerive)) {
        dispatch_renderError("Invalid derive amount, must be a valid integer");
        return;
      }
    }

    dispatch_instrumentPageData({
      isInstrument,
      name,
      ticker,
      canDerive,
      supply,
    });
    dispatch_setCreatePages(CreatePages.Routes);
  };
}
