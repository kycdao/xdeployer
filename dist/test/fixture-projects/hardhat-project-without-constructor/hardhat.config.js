"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../src/index");
const ethers_1 = require("ethers");
const config = {
    solidity: {
        version: "0.8.19",
        settings: {
            optimizer: {
                enabled: true,
                runs: 999999,
            },
        },
    },
    networks: {
        hardhat: {
            accounts: [
                {
                    privateKey: 
                    // If there is no `.env` entry, we use one of the standard accounts of the Hardhat network.
                    process.env.XDEPLOYER_TEST_ACCOUNT ||
                        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
                    balance: "100000000000000000000",
                },
            ],
            hardfork: "shanghai",
        },
    },
    defaultNetwork: "hardhat",
    xdeploy: {
        contract: "SimpleContract",
        salt: ethers_1.ethers.utils.id(Date.now().toString()),
        signer: process.env.XDEPLOYER_TEST_ACCOUNT,
        networks: ["hardhat"],
        rpcUrls: ["hardhat"],
        gasLimit: 1.2 * 10 ** 6,
    },
};
exports.default = config;
//# sourceMappingURL=hardhat.config.js.map