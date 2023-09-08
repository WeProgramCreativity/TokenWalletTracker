const SimpleWallet = artifacts.require("SimpleWallet");

module.exports = function (deployer) {
  deployer.deploy(SimpleWallet);
};
const wallet = await SimpleWallet.deployed();
await wallet.deposit({ value: web3.utils.toWei("1", "ether") });

await wallet.withdraw(web3.utils.toWei("0.5", "ether"));
