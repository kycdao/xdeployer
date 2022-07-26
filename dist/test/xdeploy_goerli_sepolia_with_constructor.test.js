"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const chai_1 = require("chai");
const plugins_1 = require("hardhat/plugins");
describe("Plugin test xdeploy on Goerli and Sepolia with constructor", function () {
    describe("Hardhat Runtime Environment (HRE) extension", function () {
        (0, helpers_1.useEnvironment)("goerli-sepolia-project-with-constructor");
        it("calling xdeploy successfully", async function () {
            return this.hre.run("xdeploy");
        });
        it("should fail due to missing network arguments - version 1", async function () {
            this.hre.config.xdeploy.networks = [];
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "missing network arguments should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("Please provide at least one deployment network via the hardhat config.");
            });
        });
        it("should fail due to missing network arguments - version 2", async function () {
            this.hre.config.xdeploy.networks = undefined;
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "missing network arguments should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("Please provide at least one deployment network via the hardhat config.");
            });
        });
        it("should fail due to unsupported network argument", async function () {
            this.hre.config.xdeploy.networks = ["hardhat", "WAGMI"];
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "unsupported network arguments should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("You have tried to configure a network that this plugin does not yet support,");
            });
        });
        it("should fail due to unequal length of `networks` and `rpcUrls`", async function () {
            this.hre.config.xdeploy.networks = ["hardhat"];
            this.hre.config.xdeploy.rpcUrls = [
                "hardhat",
                "https://mainnet.infura.io/v3/506b137aa",
            ];
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "unequal length of `networks` and `rpcUrls` arguments should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("Please ensure that both parameters have the same length");
            });
        });
        it("should fail due to missing salt value - version 1", async function () {
            this.hre.config.xdeploy.salt = undefined;
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "missing salt value should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("Please provide an arbitrary value as salt.");
            });
        });
        it("should fail due to missing salt value - version 2", async function () {
            this.hre.config.xdeploy.salt = "";
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "missing salt value should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("Please provide an arbitrary value as salt.");
            });
        });
        it("should fail due to missing signer - version 1", async function () {
            this.hre.config.xdeploy.signer = undefined;
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "missing signer value should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("Please provide a signer private key.");
            });
        });
        it("should fail due to missing signer - version 2", async function () {
            this.hre.config.xdeploy.signer = "";
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "missing signer value should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("Please provide a signer private key.");
            });
        });
        it("should fail due to missing contract - version 1", async function () {
            this.hre.config.xdeploy.contract = undefined;
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "missing contract value should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("Please specify the contract name of the smart contract to be deployed.");
            });
        });
        it("should fail due to missing contract - version 2", async function () {
            this.hre.config.xdeploy.contract = "";
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "missing contract value should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("Please specify the contract name of the smart contract to be deployed.");
            });
        });
        it("should fail due to exceeding gasLimit", async function () {
            this.hre.config.xdeploy.gasLimit = 15.1 * 10 ** 6;
            return this.hre
                .run("xdeploy")
                .then(() => {
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "too high gasLimit should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("Please specify a lower gasLimit.");
            });
        });
        it("should fail due to existing bytecode", async function () {
            this.hre.config.xdeploy.salt = "wagmi";
            return this.hre
                .run("xdeploy")
                .then(() => {
                this.hre.run("xdeploy");
                chai_1.assert.fail("deployment request should fail");
            })
                .catch((reason) => {
                (0, chai_1.expect)(reason).to.be.an.instanceOf(plugins_1.NomicLabsHardhatPluginError, "existing bytecode should throw a plugin error");
                (0, chai_1.expect)(reason.message)
                    .to.be.a("string")
                    .and.include("The address of the contract you want to deploy already has existing bytecode");
            });
        });
    });
});
//# sourceMappingURL=xdeploy_goerli_sepolia_with_constructor.test.js.map