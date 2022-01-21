const fs = require('fs')
var web3 = require('web3');

const contract = JSON.parse(fs.readFileSync('./build/contracts/MyToken.json', 'utf8'));
let count = 0
const web3Connect = new web3(window.ethereum)
const Lottery = new web3Connect.eth.Contract(contract.abi, "0x2fB68b0e2C17A4d1bB3B428eCAD7Ee1157c58dce")


let options = {
    filter: {
        value: [],
    },
    fromBlock: 0
};

document.getElementById("count").innerHTML = count;

Lottery.events.transferCount({
    filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0
}, function(error, event){
    count++;
    document.getElementById("count").innerHTML = count; })
.on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
});

Lottery.events.RollLoterie({
    filter: {myIndexedParam: [0,0], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0
}, function(error, event){ console.log(event.returnValues.sender, event.returnValues.amount); })
.on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
});