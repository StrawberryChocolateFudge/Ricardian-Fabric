import {
  dispatch_renderError,
  dispatch_renderPSArweaveAddress,
} from "../../dispatch/render";
import { State } from "../../types";
import { getById } from "../../view/utils";
import {
  getArweavePSContract,
  getPS,
  setPS,
} from "../../wallet/arweavePS/contractCalls";
import { getAddress } from "../../wallet/web3";
import { hasError, OptionsBuilder } from "../utils";

export async function pstPageActions(props: State) {
  // I need to fetch the current address, if there is none, display that
  const addButton = getById("add-arweave-address-button");

  const addressOptions = await OptionsBuilder(() => getAddress());

  if (hasError(addressOptions)) {
    return;
  }

  const arweavePSOptions = await OptionsBuilder(() => getArweavePSContract());
  if (hasError(arweavePSOptions)) {
    return;
  }
  const PSContract = arweavePSOptions.data;

  const MYPSOptions = await OptionsBuilder(() =>
    getPS(PSContract, addressOptions.data, addressOptions.data)
  );

  if (hasError(MYPSOptions)) {
    return;
  }
  const myPS = MYPSOptions.data.to;
  dispatch_renderPSArweaveAddress(props, myPS);

  addButton.onclick = async function () {
    const addressInputEl = getById(
      "add-arweave-address-input"
    ) as HTMLInputElement;

    if (addressInputEl.value.length !== 43) {
      dispatch_renderError("Invalid Arweave address");
      return;
    }

    const onError = (error, receipt) => {
      dispatch_renderError(error.message);
    };
    const onReceipt = (receipt) => {
      console.log(receipt);
      const address = receipt.events.SetPS.returnValues._to;
      dispatch_renderPSArweaveAddress(props, address);
    };

    await setPS(
      PSContract,
      addressInputEl.value,
      addressOptions.data,
      onError,
      onReceipt
    );
  };
}
