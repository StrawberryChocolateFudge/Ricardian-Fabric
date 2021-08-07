export async function hitWebhook(url: string, secret: string) {
  // The backend must handle cross origin requests for this to work!
  try {
    const response = await fetch(url, {
      method: "post",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret,
      }),
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTransactionData() {
  //TODO: This is probably a graph QL query!!
  // I want to fetch the transaction URL of the current page
  // to determine the on the acceptable contract page
  // that the issuer is the same in the website as in the transaction!
  // I probably call the graphQL endpoint so I can extract the tags added to the transaction
  // If I compare the tags of the transaction with the current id, I can determine if somebody manipulated the data props in HTML!
  // I might just migrate all the data props to tags if this works, but I prefer to keep them so the data is extractable without running the javascript by a third party client
}
