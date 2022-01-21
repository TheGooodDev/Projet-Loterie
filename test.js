const path = require('path')
const fs = require('fs')
var web3 = require('web3');

const express = require('express');
const router = express.Router();
const app = express();
const cors = require("cors");

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,'public')));



const contract = JSON.parse(fs.readFileSync('./build/contracts/MyToken.json', 'utf8'));

const webConnect = new web3(window.ethereum)
const Lottery = new web3Connect.eth.Contract(contract.abi, "0x2fB68b0e2C17A4d1bB3B428eCAD7Ee1157c58dce")

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});



app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});