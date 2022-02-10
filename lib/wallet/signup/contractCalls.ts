import Web3 from "web3";
import { getSimpleTermsAbi } from "../abi/SimpleTerms";
import { Contract } from "web3-eth-contract";
import { metamask_web3, SIGNUPADDRESS } from "../web3";

export async function getSignupContract() {
  return await new metamask_web3.eth.Contract(
    getSimpleTermsAbi(),
    SIGNUPADDRESS
  );
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
