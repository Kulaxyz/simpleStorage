require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
    networks: {
      rinkeby: {
        url: process.env.RINKEBY_RPC_URL,
        accounts: [process.env.RINKEBY_PRIVATE_KEY]
      },
      localhost: {
        url: "http://127.0.0.1:8545",
      },
      hardhat: {}
    },
  solidity: "0.8.7"
};
