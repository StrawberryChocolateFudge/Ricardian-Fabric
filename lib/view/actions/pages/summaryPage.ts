import { createTransactionsWithPDF } from "../../../business/bloc";
import { dispatch_setCreatePages } from "../../../dispatch/stateChange";
import {
  CreatedTransactions,
  CreatePages,
  FileType,
  State,
} from "../../../types";
import { getById, readFile } from "../../utils";

export function summaryPage(props: State) {
  let txs: CreatedTransactions;

  const pdfFileList = props.pdfPage.PDF as FileList;

  //I unlock the create button from here
  if (pdfFileList?.length === 1 && pdfFileList[0].type === "application/pdf") {
    //TODO: Get tx-s to get fees
    const proceed = async (data: any) => {
      txs = await createTransactionsWithPDF(props, data, true);
      console.log("TXS");
      console.log(txs);

      //TODO: Refactor this to render dispatch and handle reward on undefineds!!
      getById("pdfFee").textContent = txs.pdfTransaction.reward;
      getById("smartFee").textContent = txs.instrumentContractTx.reward;
      getById("pageFee").textContent = txs.pageTransaction.reward;
    };

    readFile(pdfFileList, proceed, FileType.pdf);
    //Has pdf, I get the transactions in the proceed callback
  } else {
    //DOn't have pdf so I can just create the other transactions
  }

  const prevButton = getById("summaryPage-previous");
  const create = getById("create-button");

  prevButton.onclick = function () {
    dispatch_setCreatePages(CreatePages.Networking);
  };

  create.onclick = function () {
    console.log("save etc");
  };
}
