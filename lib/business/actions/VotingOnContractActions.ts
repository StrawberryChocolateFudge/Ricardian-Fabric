import { sha256 } from "../../crypto";
import { dispatch_renderError } from "../../dispatch/render";
import {
  dispatch_setPage,
  dispatch_setPopupState,
} from "../../dispatch/stateChange";
import { fetchTransactionBy } from "../../fetch";
import { getTags } from "../../fetch/graphql";
import { PageState, PopupState, ProposalFormat, State } from "../../types";
import { getById } from "../../view/utils";
import { getDecodedTagsFromTX } from "../../wallet/arweave";
import {
  getCatalogDAOContractWithWallet,
  voteOnNewSmartContract,
} from "../../wallet/catalogDAO/contractCalls";
import { getError } from "../../wallet/errors";
import { getAddress } from "../../wallet/web3";
import { hasError, OptionsBuilder } from "../utils";
import { checkForProposalTag } from "./contractDisplayActions";

export async function votingOnContractActions(
  props: State,
  accepted: boolean,
  contractIndex: string,
  arweaveTxId: string,
  refresh: CallableFunction
) {
  const backButton = getById("vote-back-button") as HTMLButtonElement;
  const proceedButton = getById("vote-button") as HTMLButtonElement;

  backButton.onclick = function () {
    dispatch_setPopupState(PopupState.NONE);
  };
  const onError = (error, receipt) => {
    dispatch_renderError(getError(error.message));
  };
  const onReceipt = (receipt) => {
    dispatch_setPopupState(PopupState.NONE);
    dispatch_setPage(PageState.ReviewAndVote);
  };

  const catalogDAO = await getCatalogDAOContractWithWallet();
  const myAddressOptions = await OptionsBuilder(() => getAddress());
  if (hasError(myAddressOptions)) {
    return;
  }
  proceedButton.onclick = async function () {
    if (accepted) {
      const artifactEl = getById("artifact-text-input") as HTMLInputElement;

      const tags = await getDecodedTagsFromTX(arweaveTxId);

      if (tags.length === 0) {
        dispatch_renderError("Invalid proposal! Transaction not found.");
        return;
      }

      // then I download the contract transaction
      const transactionOptions = await OptionsBuilder(() =>
        fetchTransactionBy<ProposalFormat>(arweaveTxId)
      );

      if (hasError(transactionOptions)) {
        dispatch_renderError("Invalid proposal. Missing contract data.");
        return;
      }
      const proposal: ProposalFormat = transactionOptions.data;

      if (proposal.artifact === undefined) {
        dispatch_renderError("Invalid  proposal. Missing artifact.");
        return;
      }
      // hash the proposal artifact and the uploaded one
      const proposalArtifactHash = await sha256(
        JSON.stringify(proposal.artifact)
      );
      const artifactElHash = await sha256(
        JSON.stringify(JSON.parse(artifactEl.value))
      );
      if (proposalArtifactHash !== artifactElHash) {
        dispatch_renderError("The artifact's don't match!");
        return;
      }
      // Vote yes if they match

      await voteOnNewSmartContract(
        catalogDAO,
        contractIndex,
        true,
        false,
        myAddressOptions.data,
        onError,
        onReceipt
      );

      refresh();
    } else {
      const suspiciousEl = getById("suspicious-checkbox") as HTMLInputElement;
      await voteOnNewSmartContract(
        catalogDAO,
        contractIndex,
        false,
        suspiciousEl.checked,
        myAddressOptions.data,
        onError,
        onReceipt
      );
      refresh();
    }
  };
}
