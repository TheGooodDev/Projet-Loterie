const fs = require('fs')
var web3 = require('web3');

const contract = JSON.parse(fs.readFileSync('./build/contracts/MyToken.json', 'utf8'));

const web3Connect = new web3(window.ethereum)
const Lottery = new web3Connect.eth.Contract(contract.abi, "0x2fB68b0e2C17A4d1bB3B428eCAD7Ee1157c58dce")


let options = {
    filter: {
        value: [],
    },
    fromBlock: 0
};

Lottery.events.transferCount(options)
    .on('data', event => console.log(event))
    .on('changed', changed => console.log(changed))
    .on('connected', str => console.log(str))