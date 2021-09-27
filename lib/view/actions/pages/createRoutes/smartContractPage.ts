import {
  dispatch_initSmartContractPage,
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
  getInstrumentName,
  getInstrumentSupply,
  getInstrumentTicker,
  getIsInstrument,
  getProfitSharingContractId,
  isPSTUser,
} from "../../../utils";

export function smartContractPage(props: State) {
  dispatch_initSmartContractPage(props);
  const prevButton = getById("SmartContractPage-previous");
  const nextButton = getById("SmartContractPage-next");

  prevButton.onclick = function (e: Event) {
    dispatch_setCreatePages(CreatePages.AddWallet);
  };

  nextButton.onclick = function (e: Event) {
    dispatch_removeError();
    const pstContractId = getProfitSharingContractId();
    const willProfitShare = isPSTUser();
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

    if (willProfitShare) {
      if (pstContractId === "") {
        dispatch_renderError("You must specify a contract id");
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
    dispatch_setCreatePages(CreatePages.Networking);
  };
}
