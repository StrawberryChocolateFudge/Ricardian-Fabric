// the fabric contract stores ids of instrument contracts for easy fetching
// It contains the whitelist that can add verified users

// issuer is {address : {name,recruiter,blocked,instruments}}

// recruiter is just a verified address
// fees will be distributed to the recruiters
// only whitelisted addresses can add verified users
// only verified users can create instruments!

//TODO: verified individuals! for verified as human.
//TODO: verified investors!

// {admins: [], issuers: {}, partners: {}, investors: {}, users: {}}

export const fabricState = (whitelist: Array<string>) => `
"whitelist": ${whitelist},
"verifiedIssuers":{},
"verifiedRecruiters":[]
`;

export const FabricContract = `
export async function handle(state, action) {
  const input = action.input;
  const caller = action.caller;
  const whitelist = state.whitelist;
  const verifiedIssuers = state.verifiedIssuers;
  const verifiedRecruiters = state.verifiedRecruiters;

  if (input.function === "whitelist") {
    // Adds a whitelisted wallet address
    // These are administrator addresses
    const newAddress = input.newAddress;

    if (typeof newAddress !== "string") {
      throw new ContractError("Must specify new address");
    }
    if (newAddress.length !== 43) {
      throw new ContractError("Addresses must be 43 characters");
    }
    if (!whitelist.includes(caller)) {
      throw new ContractError("The caller must be whitelisted already");
    }

    if (whitelist.includes(newAddress)) {
      throw new ContractError("The address is already whitelisted");
    }

    whitelist.push(newAddress);

    return { state };
  }
  if (input.function === "removeFromWhitelist") {
    const removeAddress = input.removeAddress;
    if (typeof removeAddress !== "string") {
      throw new ContractError("Must specify address");
    }
    if (removeAddress.length !== 43) {
      throw new ContractError("Addresses must be 43 characters");
    }
    if (!whitelist.includes(caller)) {
      throw new ContractError("The caller must be whitelisted already");
    }

    if (!whitelist.includes(removeAddress)) {
      throw new ContractError("The address is not included in the whitelist");
    }

    const index = whitelist.indexOf(removeAddress);
    whitelist.splice(index, 1);

    return { state };
  }
  if (input.function === "addRecruiter") {
    const recruiterAddress = input.recruiterAddress;

    if (typeof recruiterAddress !== "string") {
      throw new ContractError("Must specify address");
    }

    if (recruiterAddress.length !== 43) {
      throw new ContractError("Addresses must be 43 characters");
    }
    if (!whitelist.includes(caller)) {
      throw new ContractError("The caller must be whitelisted");
    }

    if (verifiedRecruiters.includes(recruiterAddress)) {
      throw new ContractError("The recruiter already signed up");
    }

    verifiedRecruiters.push(recruiterAddress);

    return { state };
  }

  if (input.function === "moderateRecruiter") {
    const recruiterAddress = input.recruiterAddress;

    if (typeof recruiterAddress !== "string") {
      throw new ContractError("Must specify address");
    }

    if (recruiterAddress.length !== 43) {
      throw new ContractError("Addresses must be 43 characters");
    }
    if (!whitelist.includes(caller)) {
      throw new ContractError("The caller must be whitelisted");
    }

    if (!verifiedRecruiters.includes(recruiterAddress)) {
      throw new ContractError("The recruiter is not signed up");
    }

    const index = verifiedRecruiters.indexOf(recruiterAddress);
    verifiedRecruiters.splice(index, 1);

    return { state };
  }
  if (input.function === "addIssuer") {
    // issuer is {address : {companyname,recruiter,blocked,instruments}}

    const issuerAddress = input.issuerAddress;
    const recruiter = input.recruiter;
    const companyname = input.companyname;
    if (!whitelist.includes(caller)) {
      throw new ContractError("The caller must be whitelisted");
    }
    if (typeof issuerAddress !== "string") {
      throw new ContractError("Must specify valid issuer address");
    }
    if (typeof companyname !== "string") {
      throw new ContractError("Must specify valid issuer company name");
    }
    if (typeof recruiter !== "string") {
      throw new ContractError("Must specify valid recruiter address");
    }
    if (issuerAddress.length !== 43 || recruiter.length !== 43) {
      throw new ContractError("Addresses must be 43 characters");
    }
    if (!verifiedRecruiters.includes(recruiter)) {
      throw new ContractError("Recruiter address is not verified");
    }

    verifiedIssuers[issuerAddress] = {
      companyname,
      recruiter,
      blocked: false,
      instruments: [],
    };

    return { state };
  }

  if (input.function === "blockIssuer") {
    const issuerAddress = input.issuerAddress;

    if (!whitelist.includes(caller)) {
      throw new ContractError("The caller must be whitelisted");
    }
    if (typeof issuerAddress !== "string") {
      throw new ContractError("Must specify valid issuer address");
    }
    if (issuerAddress.length !== 43) {
      throw new ContractError("Addresses must be 43 characters");
    }

    verifiedIssuers[issuerAddress].blocked = true;
    return { state };
  }
  if (input.function === "addCreateInstrument") {
    const createInstrumentTxId = input.createInstrumentTxId;
    const contractId = input.contractId;
    if (!verifiedIssuers[caller]) {
      throw new ContractError("You are not a verified issuer!");
    }
    if (verifiedIssuers[caller].blocked) {
      throw new ContractError("You are blocked from issuing more instruments!");
    }
    if (typeof createInstrumentTxId !== "string") {
      throw new ContractError("Invalid instrumentTxId!");
    }
    if (typeof contractId !== "string") {
      throw new ContractError("Invalid contractId!");
    }

    if (!verifiedIssuers[caller].instruments) {
      verifiedIssuers[caller].instruments = [];
    }
    //I add the create form's transaction id to the verifiedIssuer
    verifiedIssuers[caller].instruments.push({
      createInstrumentTxId,
      contractId,
    });

    return { state };
  }
  if (input.function === "isVerifiedIssuer") {
    const issuerAddress = input.issuerAddress;
    if (typeof issuerAddress !== "string") {
      throw new ContractError("Issuer address must be specified");
    }
    const verified = verifiedIssuers.includes(issuerAddress);
    return { result: { verified } };
  }
  if (input.function === "isRecruiter") {
    const recruiterAddress = input.recruiterAddress;

    if (typeof recruiterAddress !== "string") {
      throw new ContractError("Recruiter address must be specified");
    }
    const verified = verifiedRecruiters.includes(recruiterAddress);
    return { result: { verified } };
  }
  if (input.function === "getIssuer") {
    const issuerAddress = input.issuerAddress;

    if (typeof issuerAddress !== "string") {
      throw new ContractError("Issuer address must be specified");
    }
    const issuer = verifiedIssuers[issuerAddress];
    return { result: { issuer } };
  }

  throw new ContractError('No function supplied or function not recognised');
}`;
