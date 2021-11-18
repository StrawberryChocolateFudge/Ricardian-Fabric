import { request } from 'graphql-request'
import { Options, Status } from '../types';

const ARWEAVEAPI = "https://arweave.net/graphql";


export async function getOwnerFromTxId(txId: string): Promise<Options> {
    const options: Options = { status: Status.Success, error: "", data: "" };

    const query = `query {
    transaction(id: "${txId}") {
       owner{
        address
      }
    }
}`

    const result = await request(ARWEAVEAPI, query).catch(err => {
        options.error = err.message;
        options.status = Status.Failure;
    });

    options.data = result.transaction.owner.address;
    return options
}