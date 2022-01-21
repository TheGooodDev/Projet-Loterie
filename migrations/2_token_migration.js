const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  deployer.deploy(MyToken,"0xaD38bC1A322a297D3596a6282e974d25F7957EF2",
  "0xb3803B9eF8709613a2CbFA80CD49CdCca5d79559"
  , "0x5dd46c7F4BfEBb011C9dB9b2af0f2B52115B644F"
  , "0x47a78013de31C02FDC01feCbc4Bb0746d46868B9");
};
