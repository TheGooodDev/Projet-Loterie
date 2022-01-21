const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  deployer.deploy(MyToken,"0xaD38bC1A322a297D3596a6282e974d25F7957EF2","0xb3803B9eF8709613a2CbFA80CD49CdCca5d79559");
};
