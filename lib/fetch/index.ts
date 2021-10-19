import { PinOptions, Status } from "../types";


export async function permapin(CID: string, url: string): Promise<PinOptions> {
  try {
    const response = await fetch(url + "/" + CID, {
      method: "post",
      mode: "cors",
      cache: "no-cache",
    });

    if (response.status === 200) {
      return { status: Status.Success, error: "", result: response };
    } else {
      return {
        status: Status.Failure,
        error:
          "Couldn't permapin the link, visit the bridge to pin it manually.",
        result: response,
      };
    }
  } catch (error: any) {
    return {
      status: Status.Failure,
      error: `Couldn't permapin the link, visit the bridge to pin it manually.`,
      result: undefined,
    };
  }
}
