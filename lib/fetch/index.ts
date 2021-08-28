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
    // I don't need the response right now, just want to trigger a webhook
    // const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}

