import { Options, StateProperties, Status } from "../types";

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

export async function fetchAcceptableContract(url: string): Promise<Options> {
  const result: Options = { status: Status.Success, error: "", data: {} };

  try {
    const response = await fetch(url, { method: "get" });
    result.data = await response.text();
  } catch (error: any) {
    result.status = Status.Failure;
    result.error = error.message;
  }
  return result;
}
