const {Blockchain, Transaction} = require('./blockchain');
const EC = require("elliptic").ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("d7c10545c8ae4a7a9f783eedfe8dd3d1e053c845d7c3db658468c7f8ae24c77e");
const myWalletAddress = myKey.getPublic("hex");

let catCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "blablabla", 10);
tx1.signTransaction(myKey);
catCoin.addTransaction(tx1);

catCoin.minePendingTransactions(myWalletAddress);

console.log(catCoin.getBalanceOfAddress(myWalletAddress))

console.log(catCoin.isChainValid());

console.log(catCoin.chain);