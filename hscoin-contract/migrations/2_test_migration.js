const TestToken = artifacts.require("./Hscoin");

module.exports = function(deployer) {
    deployer.deploy(TestToken);
};
