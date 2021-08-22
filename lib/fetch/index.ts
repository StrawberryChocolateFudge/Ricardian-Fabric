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

export async function fetchDependency(url: string) {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}
