import { PinOptions, PinStatus } from "../types";

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

export async function permapin(CID: string, url: string): Promise<PinOptions> {
  try {
    const response = await fetch(url + CID, {
      method: "post",
      mode: "cors",
      cache: "no-cache",
    });

    if (response.status === 200) {
      return { status: PinStatus.Success, error: "", result: response };
    } else {
      return {
        status: PinStatus.Failure,
        error: "Couldn't permapin the file",
        result: response,
      };
    }
  } catch (error: any) {
    return { status: PinStatus.Failure, error, result: undefined };
  }
}
