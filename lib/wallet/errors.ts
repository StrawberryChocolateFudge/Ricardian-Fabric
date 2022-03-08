export function getError(msg: string) {
  let error = "";

  for (let i = 901; i <= 961; i++) {
    if (msg.includes(i.toString())) {
      error = errors[i];
    }
  }
  if (error === "") {
    error = "An error occured!";
  }

  return error;
}

const errors = {
  901: "Only the deployer can call this.",
  902: "Invalid terms.",
  903: "You must accept the terms first.",
  910: "You need 0 rank to get new rank.",
  911: "You need more rank to vote.",
  912: "You voted already.",
  913: "The voting period is over.",
  914: "Wrong proposal.",
  915: "The voting is not over.",
  916: "You can't vote on your own removal.",
  917: "The proposal is already closed.",
  918: "You need to wait for your pending rank proposal before you can add a new one.",
  919: "Sender needs to stake",
  920: "Only the staking contract can call this",
  921: "Profit sharing was not on",
  922: "You can't stake twice",
  923: "Invalid balance",
  924: "Your stake is still locked",
  925: "Only the catalog dao can call this",
  926: "Target needs to stake",
  927: "Not enough reward",
  929: "Rank too low",
  930: "Wrong proposal",
  931: "Reward already claimed",
  932: "Not enough tokens",
  933: "You already voted",
  934: "Not enough balance",
  935: "Locked!",
  936: "Not Enough tokens to withdraw from",
  937: "Only owner",
  938: "You expressed your opinion already!",
  939: "Not an accepted address",
  940: "Only feedao can call this",
  941: "Wrong vault",
  942: "Still locked",
  943: "It's released already",
  944: "You have a pending proposal already.",
  945: "Not rejected",
  946: "Not enough suspicion",
  947: "Already penalized",
  948: "zero address",
  949: "Wei amount is zero",
  950: "Maximum purchase amount is exceeded",
  951: "Can't purchase twice from the same Rate",
  952: "Updated contract is not removed",
  953: "You don't get payed for updated proposals",
  954: "Only daoStaking can call this",
  955: "Tokensale is over",
  956: "Invalid trail id",
  957: "The trail doesn't exist",
  958: "Only the creator can modify trails",
  959: "Invalid data",
  960: "Invalid access property",
  961: "You can only update your own contracts",
  962: "That trail already exists",
};
