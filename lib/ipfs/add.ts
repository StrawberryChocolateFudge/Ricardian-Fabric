import { CID, create, IPFSHTTPClient } from "ipfs-http-client";
import { IPFSParams } from "../types";

export async function IPFS_Add(
  content: string,
  params: IPFSParams
): Promise<CID> {
  const client = create(params);
  const { cid } = await client.add(content);
  return cid;
}
