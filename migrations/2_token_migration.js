const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  deployer.deploy(MyToken,"0xB504074493855FB50321a4f215A55FC5Ebfa63ca","0x99350952AAE89fc4A57E0f6A5D80901847d6f4Da");
};
