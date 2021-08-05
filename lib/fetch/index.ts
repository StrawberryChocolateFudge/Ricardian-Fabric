import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export async function fetchDependency(url: string) {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

export async function hitWebhook(url: string, secret: string) {
  try {
    const response = await fetch(url, {
      method: "post",
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
