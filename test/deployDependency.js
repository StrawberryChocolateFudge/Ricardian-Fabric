const Arweave = require("arweave");
const TestWeave = require("testweave-sdk");
const fs = require("fs");
(async function () {
  const arweave = await Arweave.init({
    host: "localhost",
    port: 1984,
    protocol: "http",
    timeout: 20000,
    logging: false,
  });

  const testWeave = await TestWeave.default.init(arweave);

  let data = fs.readFileSync(
    "/home/user/Development/web3/ricardian/dist/main.0d52e1b9.js",
    { encoding: "utf8" }
  );
  let transaction = await arweave.createTransaction(
    { data: data },
    testWeave.rootJWK
  );
  transaction.addTag("Content-Type", "text/javascript");
  await arweave.transactions.sign(transaction, testWeave.rootJWK);
  let uploader = await arweave.transactions.getUploader(transaction);

  while (!uploader.isComplete) {
    await uploader.uploadChunk();
    console.log(
      `${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`
    );
  }

  console.log("mining...");
  await testWeave.mine();
  console.log(`http://localhost:1984/tx/${transaction.id}/data.html`);
})();
