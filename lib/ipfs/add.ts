import { CID, create } from "ipfs-http-client";
import { IPFSParams } from "../types";
import { concat as uint8ArrayConcat } from 'uint8arrays/concat'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'
import all from 'it-all'

export async function IPFS_Add(
  content: string,
  params: IPFSParams
): Promise<CID> {
  const client = create(params);
  const { cid } = await client.add(content);
  return cid;
}

export async function IPFS_CAT(cid: string, params: IPFSParams): Promise<string> {
  const client = create(params);
  const data = uint8ArrayConcat(await all(client.cat(cid)))
  return uint8ArrayToString(data);
}