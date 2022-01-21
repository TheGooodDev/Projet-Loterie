const fs = require('fs')
var web3 = require('web3');

const contract = JSON.parse(fs.readFileSync('./build/contracts/MyToken.json', 'utf8'));

const web3Connect = new web3(window.ethereum)
ethereum.request({ method: 'eth_requestAccounts' });

const Lottery = new web3Connect.eth.Contract(contract.abi, "0x340B727C3206512F1E7A7719E98118E47Fe12ddf")


Lottery.events.transferCount({
    filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0
}, function(error, event){
    document.getElementById("count").innerHTML = event.returnValues.count;
    Lottery.methods.balanceOf("0x340B727C3206512F1E7A7719E98118E47Fe12ddf").call().then(res =>{
        document.getElementById("total-amount").innerHTML = (res/1000000000000000000).toString() + " AUR"
    }) })
.on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
});

Lottery.events.RollLoterie({
    filter: {myIndexedParam: [0,0], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 'latest'
}, function(error, event){ random(event.returnValues.AllTransfer); })
.on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
});



async function random(AllTransfer){
    let allname= [];
    let totalAmount = 0;
    AllTransfer.forEach(element => {

        totalAmount += parseInt(element.amount);
    });
    AllTransfer.forEach(element =>{
        for (let i = 0; i < (parseInt(element.amount) / totalAmount) * 100 ;i++){
            allname.push(element.sender);
        }
    })
    allname.forEach(element => {
        console.log(element)
    });
    console.log('w: ', window.ethereum.selectedAddress)

    console.log(allname[Math.floor(Math.random()*allname.length)])


    await Lottery.methods.transferToWinner(allname[Math.floor(Math.random()*allname.length)]).send({from: ethereum.selectedAddress})
    Lottery.methods.balanceOf("0x340B727C3206512F1E7A7719E98118E47Fe12ddf").call().then(res =>{
        document.getElementById("total-amount").innerHTML = (res/1000000000000000000).toString() + " AUR"
    })

}