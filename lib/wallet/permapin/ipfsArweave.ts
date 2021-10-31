import { HashWithIds, IPFSParams, Status } from "../../types";
import tou8 from "buffer-to-uint8array";
import { verifyAndGetTags } from "./verification";
import isIPFS from "is-ipfs";
import IpfsHttpClientLite from "ipfs-http-client-lite";
import { CID } from "multiformats";
import Arweave from "arweave";
const IPFS_KEY = "IPFS-Add";

//temporary so it doesnt conflict with different data structure
const IPFS_CONSTRAINT_KEY = "standard";
const IPFS_CONSTRAINT = "v0.1";

export async function addHash(
  hash: string,
  ipfsParams: IPFSParams
): Promise<HashWithIds> {
  let h = hash;
  if (!isIPFS.multihash(h) && !isIPFS.base32cid(h)) {
    return makeHashWithIds(h, "Invalid IPFS hash", Status.Failure);
  }
  // if the cid is V0, I convert it to V1
  if (isIPFS.multihash(h)) {
    const v0 = CID.parse(h);
    h = v0.toV1().toString();
  }
  const config = await window.arweaveWallet.getArweaveConfig();
  const arweave = Arweave.init(config);
  console.log(arweave);
  console.log(config);
  console.log(isIPFS.multihash(h));

  const arid = await getArIdFromHash(h, arweave);
  console.log(arid);

  if (arid === "M") {
    // means method not allowed was returned
    return makeHashWithIds(h, "Error: Method not allowed", Status.Failure);
  }

  if (arid !== null) {
    return makeHashWithIds(h, "It's already permapined!", Status.AlreadyExists);
  }

  const ipfs = IpfsHttpClientLite(ipfsParams);
  console.log("here");
  const data: Buffer = await ipfs.cat(h);
  console.log(data);
  const options = verifyAndGetTags(data);

  if (options.status === Status.Failure) {
    return makeHashWithIds(h, "Not Ricardian Fabric Contract", Status.Failure);
  }

  const tags = options.tags;
  console.log(tags);
  const owner = await window.arweaveWallet.getActiveAddress();
  let transaction = await arweave.createTransaction({
    data: tou8(data),
    owner,
  });
  transaction.addTag(IPFS_KEY, h);
  transaction.addTag(IPFS_CONSTRAINT_KEY, IPFS_CONSTRAINT);
  transaction.addTag("Issuer", tags.issuer);
  transaction.addTag("Network", tags.network);
  transaction.addTag("Contract-Type", tags.contractType);
  transaction.addTag("Participant", tags.participant);
  transaction.addTag("App-Version", tags.version);
  transaction.addTag("App-Name", "Ricardian Fabric");
  console.log(transaction);
  //fast blocks hack, this is left here from the arweave ipfs library impl
  const anchor_id = (await arweave.api.get("/tx_anchor")).data;
  //@ts-ignore
  transaction.last_tx = anchor_id;
  console.log(transaction);
  await window.arweaveWallet.sign(transaction);
  return makeHashWithIds(h, transaction.id, Status.Success);
  await arweave.transactions.post(transaction);
  return makeHashWithIds(h, transaction.id, Status.Success);
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
  console.log(x);
  if (x.length > 0) {
    return x[0];
  } else {
    return null;
  }
}
