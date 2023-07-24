require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/9Yb3n2vWZRQwYCfkPNwCo_oY7bGx5etv',
      accounts: ['d72d5f9ec4d7e78b5f77ad066b4fac2092416af551eb3b8a94717e8924680850'],
    },
  },
};