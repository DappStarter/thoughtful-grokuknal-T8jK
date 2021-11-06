require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad guess nature suspect turn'; 
let testAccounts = [
"0x14957a711fd1a675f1d2472fa371b97f2236195250c5783ca35e16009cb218a1",
"0x429169de87350cf426bfc991e81cafec1cf9a095189b42cfab3a13ad4cf6d92f",
"0x7c7d6b38b4b92b049bd1e2382b9a2164c5fc70aaad09ab4a9708000806aeb61c",
"0xdb906e658f43319755882ae2ea3984c41dc652cca16aed0e11fb8568490545d2",
"0xfd986ef782d532af8dc4318078bd8bf5aca6ad8f5a4ea319df996acbcd9c1c11",
"0xf30ae72a41def8b9a2d941ef49bc29014295f4585662c97944d76388c88f2db4",
"0x095793ed79ce109c3cbeb4957c2663958286fcb91f6085dd28a240cb635073be",
"0xdfaa74b0ff7c2298301cf42b5afdced89a00cb1930691f1626eaa70a0e83d215",
"0x8eb1e4f9339b7e077ecc9f8c7ee918a6ddc3a53bc819e844250b3d415764cab0",
"0xa58429698bb7872138a9b0536c4c57a61a2f87a554c5a587d03292c6f611f909"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

