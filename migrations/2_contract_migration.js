const JemToken = artifacts.require("JemToken.sol");

module.exports = function(deployer) {
  deployer.deploy(JemToken);
};

