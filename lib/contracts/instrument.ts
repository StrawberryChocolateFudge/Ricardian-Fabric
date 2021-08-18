// This is the financial instruments contract

// The owners object is
// {ownerAddress : [instrumentTxIds] }

// The resale object is
// {instrumentTxId : {ownerAddress,price}}

// The trade object is
// {ownerAddress : {quantity,rate}}

// the balances object is a typical pst balance

// TODO: on Derivatives transfer, credit the creator and the community with a fee
// TODO: on transfer and accept trade, I need to send some dividends to the creator!

export const instrumentState = (
  name: string,
  creator: string,
  supply: number,
  initialPrice: number,
  id: string,
  canDerive: number, //This will specify how many derivatives can be created for trade from the instrument,
  ticker: string
) => `
{
	"name" : "${name}",
  "ticker":${ticker}",
  "creator": "${creator}",
  "id" : "${id}",
  "instrument":{
	  "initialPrice": "${initialPrice}",
	  "supply": ${supply},
	  "sold": 0,
    "owners": {},
	  "resale":{},
    "canDerive:${canDerive},
    "derivativeSupply":0
  },
  "balances":{},
  "trade":{}
}`;

export const instrumentContract = `

export async function handle(state, action) {
  const input = action.input;
  const caller = action.caller;
  const balances = state.balances;
  const trade = state.trade;
  const instrument = state.instrument;

  const calculateCreatorDividends = function (price: number) {
    // A 0.2 percent dividend is payed back to the creator
    const dividend = price / 2000;
    const newPrice = price - dividend;

    return { newPrice, dividend };
  };

  if (input.function === "stock") {
    const inStock = instrument.supply - instrument.sold;

    return { result: { inStock } };
  }

  if (input.function === "balance") {
    const target = input.target;
    const ticker = state.ticker;

    if (typeof target !== "string") {
      throw new ContractError("Must specificy target to get balance for");
    }

    if (typeof balances[target] !== "number") {
      throw new ContractError("Cannnot get balance, target does not exist");
    }

    return { result: { target, ticker, balance: balances[target] } };
  }

  if (input.function === "instrumentMarket") {
    return { result: { resale: instrument.resale } };
  }

  if (input.function === "onResale") {
    const instrumentTxId = input.instrumentTxId;

    if (!instrumentTxId) {
      throw new ContractError("Instrument tx id must be specified");
    }

    const onResale = instrument.resale[instrumentTxId];

    return { result: { onResale } };
  }

  if (input.function === "availableTrades") {
    return { result: { trades: state.trade } };
  }

  if (input.function === "initialsale") {
    // Initial sale for financial instruments
    const to = input.to;
    const instrumentTxId = input.instrumentTxId;
    const target = await SmartWeave.transaction.target;
    const quantity = await SmartWeave.transaction.quantity;

    if (typeof to !== "string") {
      throw new ContractError("Must specificy to ");
    }

    if (target !== state.creator) {
      throw new ContractError("Wrong payment target");
    }

    if (quantity !== instrument.initialPrice) {
      throw new ContractError("Invalid price");
    }

    if (!to || caller === to) {
      throw new ContractError("Invalid To field");
    }

    if (instrument.sold === instrument.supply) {
      throw new ContractError("All instruments have already sold!");
    }

    if (!instrument.owners[to]) {
      instrument.owners[to] = [];
    }

    instrument.owners[to].push(instrumentTxId);

    instrument.sold++;

    return { state };
  }

  if (input.function === "instrumentTransfer") {
    //Instrument transfer
    const target = input.target;
    const instrumentTxId = input.instrumentTxId;

    if (!instrumentTxId) {
      throw new ContractError("Instrument tx id must be specified");
    }

    if (!target || caller === target) {
      throw new ContractError("Invalid Recepient");
    }
    if (typeof target !== "string") {
      throw new ContractError("Target must be string");
    }

    if (!instrument.owners[caller].includes(instrumentTxId)) {
      throw new ContractError("The caller doesn't own the instrument");
    }

    if (instrument.resale[instrumentTxId]) {
      throw new ContractError(
        "Instrument is offered for resale,cancel it first"
      );
    }

    if (!instrument.owners[target]) {
      instrument.owners[target] = [];
    }
    //Remove from the caller and add to the target
    const index = instrument.owners[caller].indexOf(instrumentTxId);
    instrument.owners[caller].splice(index, 1);
    instrument.owners[target].push(instrumentTxId);

    return { state };
  }

  if (input.function === "resale") {
    // Somebody who owns a contract can mark it for resale with a price
    const price = input.price;
    const instrumentTxId = input.instrumentTxId;

    if (typeof price !== "number") {
      throw new ContractError("Pride must be a number");
    }

    if (!instrumentTxId) {
      throw new ContractError("Instrument tx id must be specified");
    }

    if (!instrument.owners[caller].includes(instrumentTxId)) {
      throw new ContractError("The caller doesn't own the instrument");
    }

    //It cannot be offered for resale twice
    if (instrument.resale[instrumentTxId]) {
      throw new ContractError("Instrument is already offered for resale");
    }

    instrument.resale[instrumentTxId] = { ownerAddress: caller, price };

    return { state };
  }

  if (input.function === "cancelResale") {
    // Resale intent can be cancelled
    const instrumentTxId = input.instrumentTxId;

    if (!instrumentTxId) {
      throw new ContractError("Instrument tx id must be specified");
    }

    if (instrument.resale[instrumentTxId].ownerAddress !== caller) {
      throw new ContractError("Instrument doesn't exist");
    }

    instrument.resale[instrumentTxId] = undefined;

    return { state };
  }

  if (input.function === "purchase") {
    const target = await SmartWeave.transaction.target;
    const quantity = await SmartWeave.transaction.quantity;
    // Contracts in resale can be purchased
    const instrumentTxId = input.instrumentTxId;

    if (!instrumentTxId) {
      throw new ContractError("Instrument tx id must be specified");
    }

    if (instrument.owners[caller].includes(instrumentTxId)) {
      throw new ContractError("You cannot buy our own instruments");
    }

    if (!instrument.resale[instrumentTxId]) {
      throw new ContractError("Instrument must be available for resale");
    }

    if (target !== instrument.resale[instrumentTxId].ownerAddress) {
      throw new ContractError("The target must be the owner of the instrument");
    }

    if (quantity !== instrument.resale[instrumentTxId].price) {
      throw new ContractError("The quantity must match the price");
    }

    // Remove instrument from resale
    const previousOwner = instrument.resale[instrumentTxId].ownerAddress;
    instrument.resale[instrumentTxId] = undefined;

    // Remove instrument from previous owner
    const index = instrument.owners[previousOwner].indexOf(instrumentTxId);
    instrument.owners[previousOwner].splice(index, 1);

    // Add instrument to new owner
    instrument.owners[target].push(instrumentTxId);

    return { state };
  }

  if (input.function === "burnInstrument") {
    // Instruments can be burned
    const instrumentTxId = input.instrumentTxId;

    if (!instrumentTxId) {
      throw new ContractError("Instrument tx id must be specified");
    }

    if (!instrument.owners[caller].includes(instrumentTxId)) {
      throw new ContractError("The caller doesn't own the instrument");
    }

    if (instrument.resale[instrumentTxId]) {
      throw new ContractError(
        "Instrument is offered for resale,cancel it first"
      );
    }

    const index = instrument.owners[caller].indexOf(instrumentTxId);
    instrument.owners[caller].splice(index, 1);

    instrument.supply -= 1;

    return { state };
  }

  if (input.function === "derive") {
    const instrumentTxId = input.instrumentTxId;
    // This should burn the original instrument and create the derivative PST
    if (!instrumentTxId) {
      throw new ContractError("Instrument tx id must be specified");
    }

    if (!instrument.owners[caller].includes(instrumentTxId)) {
      throw new ContractError("The caller doesn't own the instrument");
    }

    if (instrument.resale[instrumentTxId]) {
      throw new ContractError(
        "Instrument is offered for resale,cancel it first"
      );
    }

    if (!Number.isInteger(instrument.canDerive)) {
      throw new ContractError("You cannot create a derivative");
    }

    if (instrument.canDerive <= 0) {
      throw new ContractError("You cannot create a derivative");
    }
    // To derive a PST, I need to remove it from the owner and credit his balance
    const index = instrument.owners[caller].indexOf(instrumentTxId);
    instrument.owners[caller].slice(index, 1);

    if (!balances[caller]) {
      balances[caller] = 0;
    }

    balances[caller] += instrument.canDerive;
    instrument.derivativeSupply += instrument.canDerive;
    return { state };
  }

  if (input.function === "transfer") {
    const target = input.target;
    const qty = input.qty;

    if (!Number.isInteger(qty)) {
      throw new ContractError('Invalid value for "qty". Must be an integer');
    }

    if (!target) {
      throw new ContractError("No target specified");
    }

    if (typeof target !== "string") {
      throw new ContractError("Target must be a string");
    }

    if (qty <= 0 || caller === target) {
      throw new ContractError("Invalid token transfer");
    }

    if (balances[caller] < qty) {
      throw new ContractError(
        'Caller balance not high enough to send token(s)!''
      );
    }

    // create the balances for the target if it not exists
    if (!balances[target]) {
      balances[target] = 0;
    }
    // Lower the token balance of the caller
    balances[caller] -= qty;

    // I calculate the fee that gets sent to the creator
    const withDividends = calculateCreatorDividends(qty);

    if (target in balances) {
      // Wallet already exists in state, add new tokens
      balances[target] += withDividends.newPrice;
    } else {
      // Wallet is new, set starting balance
      balances[target] = withDividends.newPrice;
    }

    // Pay the creator some dividends!
    if (!balances[state.creator]) {
      balances[state.creator] = 0;
    }

    if (state.creator in balances) {
      // Wallet already exists in state, add new tokens
      balances[state.creator] += withDividends.dividend;
    } else {
      // Wallet is new, set starting balance
      balances[state.creator] = withDividends.dividend;
    }

    return { state };
  }

  if (input.function === "burnDerivative") {
    const qty = input.qty;

    if (!Number.isInteger(qty)) {
      throw new ContractError('Invalid value for "qty". Must be an integer');
    }

    if (qty <= 0) {
      throw new ContractError("Invalid burn amount");
    }

    if (balances[caller] < qty) {
      throw new ContractError(
        'Caller balance not high enough to burn token(s)!'
      );
    }

    balances[caller] -= qty;
    instrument.derivativeSupply -= qty;

    return { state };
  }

  if (input.function === "initiateTrade") {
    const qty = input.qty;
    const rate = input.rate;
    // Calling this function multiple times should also readjust price

    if (!Number.isInteger(rate)) {
      throw new ContractError('Invalid value for "price". Must be an integer');
    }
    if (!Number.isInteger(qty)) {
      throw new ContractError('Invalid value for "qty". Must be an integer');
    }
    if (rate <= 0) {
      throw new ContractError("Invalid trade price");
    }
    // You can have 0 quantity if you only want to  just readjust price
    if (qty < 0) {
      throw new ContractError("Invalid trade qty");
    }

    if (balances[caller] < qty) {
      throw new ContractError("You don't have enough balance!");
    }

    // create the trade balance if it don't exist

    if (!trade[caller]) {
      trade[caller] = { quantity: 0, rate: 0 };
    }

    //Lower the balance of the caller and add to the trade
    balances[caller] -= qty;

    if (caller in trade) {
      // If trade already has balance
      trade[caller].quantity += qty;
      trade[caller].rate = rate;
    } else {
      // New trade balance
      trade[caller].quantity = qty;
      trade[caller].rate = rate;
    }

    return { state };
  }

  if (input.function === "cancelTrade") {
    // Cancel trade can be used to readjust the quantity for sale
    const qty = input.qty;

    if (!Number.isInteger(qty)) {
      throw new ContractError('Invalid value for "qty". Must be an integer');
    }

    if (qty <= 0) {
      throw new ContractError("Invalid  qty");
    }

    if (trade[caller].quantity < qty) {
      throw new ContractError("You don't have enough trade balance!");
    }

    // Lower the trade balance of the caller
    trade[caller].quantity -= qty;
    // Add it back to the balance of the caller
    balances[caller] += qty;

    if (trade[caller].quantity === 0) {
      // if the quantity went to zero, I set the price to zero too
      trade[caller].rate = 0;
    }
    return { state };
  }

  if (input.function === "acceptTrade") {
    const amountToBuy = input.amountToBuy;
    const target = await SmartWeave.transaction.target;
    const payedQuantity = await SmartWeave.transaction.quantity;

    if (!Number.isInteger(amountToBuy)) {
      throw new ContractError(
        'Invalid value for "amountToBuy". Must be an integer'
      );
    }

    if (trade[target].quantity < amountToBuy) {
      throw new ContractError("trade doesn't contain enough balance");
    }

    if (amountToBuy * trade[target].rate !== payedQuantity) {
      throw new ContractError("Rate doesn't match payed quantity");
    }

    // If the rate matched payed quantity
    // I reduce the trade balance
    trade[target].quantity -= amountToBuy;

    if (!balances[caller]) {
      balances[caller] = 0;
    }

    if (!balances[state.creator]) {
      balances[state.creator] = 0;
    }

    // I send the creator some dividends too!
    const withDividends = calculateCreatorDividends(amountToBuy);
    // And I add to the buyers balance

    if (caller in balances) {
      // Wallet already exists in state, add new tokens
      balances[caller] += withDividends.newPrice;
    } else {
      // Wallet is new, set starting balance
      balances[caller] = withDividends.newPrice;
    }

    if (state.creator in balances) {
      // Wallet already exists in state, add new tokens
      balances[state.creator] += withDividends.dividend;
    } else {
      // Wallet is new, set starting balance
      balances[state.creator] = withDividends.dividend;
    }
    return { state };
  }

  throw new ContractError(
    'No function supplied or function not recognised.'
  );
}

 `;
