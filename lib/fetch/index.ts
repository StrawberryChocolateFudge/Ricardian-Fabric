import { Options, PinOptions, Status } from "../types";

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

export async function fetchGeoCodingCSV(): Promise<Options> {
  const result: Options = { status: Status.Success, error: "", data: {} };
  try {
    const response = await fetch(
      "https://arweave.net/Wl0lmZU2A1D60EqMePwX77PpFpTEIMUdKGSBM-uGlto",
      { method: "get" }
    );
    result.data = await response.text();
  } catch (error: any) {
    result.status = Status.Failure;
    result.error = error.message;
  }
  return result;
}
