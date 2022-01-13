import Web3 from "web3";
import { getSimpleTermsAbi } from "../abi/SimpleTerms";
import { Contract } from "web3-eth-contract";

const SIGNUPADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export async function getSignupContract() {
  const web3 = new Web3(window.ethereum);
  return await new web3.eth.Contract(getSimpleTermsAbi(), SIGNUPADDRESS);
}

export async function getTerms(signup: Contract): Promise<string> {
  return await signup.methods.getTerms().call();
}

export async function acceptedTerms(
  signup: Contract,
  _address: string
): Promise<boolean> {
  return await signup.methods.acceptedTerms(_address).call();
}
