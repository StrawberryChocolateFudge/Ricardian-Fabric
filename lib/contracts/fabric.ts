// the fabric contract stores ids of instrument contracts for easy fetching
// It contains the whitelist that can add verified users

// verifiedIssuer is :
// {address : {name,recruiter}}
// recruiter is just a verified address
// fees will be distributed to the recruiters
// only whitelisted addresses can add verified users
// only verified users can create instruments!
// Participans are everyone who is holding instruments or derivatives

export const fabricState = (whitelist: Array<string>) => `
"instruments": {}
"whitelist": ${whitelist},
"verifiedIssuer":{},
"verifiedRecruiter":{},
`;

export async function handle(state, action) {
  const input = action.input;
  const caller = action.caller;
  const instruments = state.instruments;
  const whitelist = state.whitelist;
  const verified = state.verified;
  if (input.function === "whitelist") {
  }
  if (input.function === "removeFromWhitelist") {
  }
  if (input.function === "addRecruiter") {
  }
  if (input.function === "addIssuer") {
  }
  if (input.function === "addInstrument") {
  }
  if (input.function === "isVerifiedIssuer") {
  }
  if (input.function === "isRecruiter") {
  }
  if (input.function === "getIssuerInstruments") {
  }
}
