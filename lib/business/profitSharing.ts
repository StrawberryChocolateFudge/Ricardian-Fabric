import {
  getAllPS,
  getArweavePSContractWithRPC,
} from "../wallet/arweavePS/contractCalls";
import { getAddress } from "../wallet/web3";
import { hasError, OptionsBuilder } from "./utils";

export async function getProfitSharingAddresses() {
  const arweavePsContractOptions = await OptionsBuilder(() =>
    getArweavePSContractWithRPC()
  );

  if (hasError(arweavePsContractOptions)) {
    return;
  }

  const pstContract = arweavePsContractOptions.data;

  const addressOptions = await OptionsBuilder(() => getAddress());

  if (hasError(addressOptions)) {
    return;
  }

  const getAllPSOptions = await OptionsBuilder(() =>
    getAllPS(pstContract, addressOptions.data)
  );

  if (hasError(getAllPSOptions)) {
    return;
  }

  const allPs = getAllPSOptions.data;
  const allPsLength = allPs.length === 0 ? 0 : allPs.length - 1;
  // generate 3 random numbers smaller than the length of the registered addresses
  const random = randomIntFromInterval(0, allPsLength);
  return allPs[random];
}

function randomIntFromInterval(min, max) {
  // generate a random number between min and max
  return Math.floor(Math.random() * (max - min + 1) + min);
}
