"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../src/index");
const ethers_1 = require("ethers");
const config = {
    solidity: {
        version: "0.8.9",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    networks: {
        hardhat: {
            accounts: [
                {
                    privateKey: "0xe1904817e407877ea09135933f39121aa68ed0d9729d301084c544204171d100",
                    balance: "100000000000000000000",
                },
            ],
        },
    },
    defaultNetwork: "hardhat",
    xdeploy: {
        contract: "ERC20Mock",
        constructorArgsPath: "./deploy-args.ts",
        salt: ethers_1.ethers.utils.id(Date.now().toString()),
        // Just a testing private key with some Goerli & Sepolia ether :-D - there is nothing to be gained however by stealing it ;-)
        signer: "0xe1904817e407877ea09135933f39121aa68ed0d9729d301084c544204171d100",
        networks: ["goerli", "sepolia"],
        // A free Infura API key :-D - there is nothing to be gained however by stealing it ;-)
        rpcUrls: [
            "https://goerli.infura.io/v3/a6a7e3934ce44d54a27a256079a3b8a2",
            "https://rpc.sepolia.org",
        ],
        gasLimit: 1.2 * 10 ** 6,
    },
};
exports.default = config;
//# sourceMappingURL=hardhat.config.js.map