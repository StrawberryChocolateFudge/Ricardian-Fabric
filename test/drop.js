const Arweave = require("arweave");
const TestWeave = require("testweave-sdk");

(async function () {
  const arweave = await Arweave.init({
    host: "localhost",
    port: 1984,
    protocol: "http",
    timeout: 20000,
    logging: false,
  });

  const testWeave = await TestWeave.default.init(arweave);
  await testWeave.drop(
    "ENTER YOUR ADDRESS HERE",
    "10000000000"
  );
  console.log("mining...");
  await testWeave.mine();
})();
