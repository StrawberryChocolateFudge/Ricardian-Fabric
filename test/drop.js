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
    "1_Or59KjNF3E_hizBu3T9wfT6VaUzPdImZbDK0wIyEk",
    "10000000000"
  );
// 1_Or59KjNF3E_hizBu3T9wfT6VaUzPdImZbDK0wIyEk
// BEw9un5_wXlCB13Fs7fo9CxQwN2M-IHz1f_a9r7s_Iw
  console.log("mining...");
  await testWeave.mine();
})();
