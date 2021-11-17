import {
  HashWithIds,
  HashWithTransaction,
  IPFSParams,
  Status,
} from "../../types";
import tou8 from "buffer-to-uint8array";
import { verifyAndGetTags } from "./verification";
import isIPFS from "is-ipfs";
import IpfsHttpClientLite from "ipfs-http-client-lite";
import { CID } from "multiformats";
import Arweave from "arweave";
import { ARWAEVECONFIG } from "../arweave";
const IPFS_KEY = "IPFS-Add";

//temporary so it doesnt conflict with different data structure
const IPFS_CONSTRAINT_KEY = "standard";
const IPFS_CONSTRAINT = "v0.1";

export async function addHash(
  hash: string,
  ipfsParams: IPFSParams,
  key: any
): Promise<HashWithIds | HashWithTransaction> {
  let h = hash;
  if (!isIPFS.multihash(h) && !isIPFS.base32cid(h)) {
    return makeHashWithIds(h, "Invalid IPFS hash", Status.Failure);
  }
  // if the cid is V0, I convert it to V1
  if (isIPFS.multihash(h)) {
    const v0 = CID.parse(h);
    h = v0.toV1().toString();
  }
  const arweave = Arweave.init(ARWAEVECONFIG);
//TODO:arql dont work on testnet
   const arid = await getArIdFromHash(h, arweave);
  
  if (arid === "M") {
    // means method not allowed was returned
    return makeHashWithIds(h, "Error: Method not allowed", Status.Failure);
  }

  if (arid !== null) {
    return makeHashWithIds(h, "It's already permapined!", Status.AlreadyExists);
  }

  const ipfs = IpfsHttpClientLite(ipfsParams);
  const data: Buffer = await ipfs.cat(h);
  const options = verifyAndGetTags(data);

  if (options.status === Status.Failure) {
    return makeHashWithIds(h, "Not Ricardian Fabric Contract", Status.Failure);
  }

  const tags = options.tags;
  let transaction = await arweave.createTransaction(
    {
      data: tou8(data),
    },
    key
  );
  transaction.addTag(IPFS_KEY, h);
  transaction.addTag(IPFS_CONSTRAINT_KEY, IPFS_CONSTRAINT);
  transaction.addTag("Issuer", tags.issuer);
  transaction.addTag("Network", tags.network);
  transaction.addTag("Contract-Type", tags.contractType);
  transaction.addTag("Participant", tags.participant);
  transaction.addTag("App-Version", tags.version);
  transaction.addTag("App-Name", "Ricardian Fabric");
  //fast blocks hack, this is left here from the arweave ipfs library impl
  const anchor_id = (await arweave.api.get("/tx_anchor")).data;
  //@ts-ignore
  transaction.last_tx = anchor_id;
  await arweave.transactions.sign(transaction, key);
  return {
    hash: h,
    tx: transaction,
    status: Status.Success,
  } as HashWithTransaction;
}

const makeHashWithIds = (
  hash: string,
  message: string,
  status: Status
): HashWithIds => {
  return { hash, message, status };
};

async function getArIdFromHash(
  hash: string,
  arweave: Arweave
): Promise<string> {
  const x = await arweave.arql({
    op: "and",
    expr1: {
      op: "equals",
      expr1: IPFS_KEY,
      expr2: hash,
    },
    expr2: {
      op: "equals",
      expr1: IPFS_CONSTRAINT_KEY,
      expr2: IPFS_CONSTRAINT,
    },
  });
  if (x.length > 0) {
    return x[0];
  } else {
    return null;
  }
}
