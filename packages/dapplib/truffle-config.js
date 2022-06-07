require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember solid imitate private food taxi'; 
let testAccounts = [
"0x12f14818307b5bbf04950d071319ecb7888d887ad0c59d814e622812ffae1599",
"0x3362756aeea0635c75e542702114e2ac4faee9710c8d6b275b96db1a002aef57",
"0x57161265ff6c3fbf49ca811b72d2503c1afcc8516ccb55efca8f5377302b4278",
"0x637a1279c5c80c57b18f87d922dfaf4197a054e3904a3b32c342a969ca8d3ee9",
"0x55d6c3550bb42e342a94a082faae3b05b78574c76df5321642939aca7202f555",
"0x5f037d3183cbb38f27a598bb36660dc22495da08369bf009f3233176bb11168a",
"0xea479d63bc913e2654e45478a3949351b0b1e141f872347bf07f7d5b46d0cf4a",
"0x8469b185808c98aa87972b9e832a44896e26ab4efaa3ac32203210ca789ddd68",
"0xc5c708b087bdaa9cf99e39ec697b95ee0c6974eaafef6e771e13a6875a1dacbf",
"0x20bc4f6bdf5e5efb92c15beb481ce1fb2eb6a7d03b116eb0e203c023dc399a14"
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

