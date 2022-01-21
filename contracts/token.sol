// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    address _tokenOwner;
    address _bank;

    uint count;
 

    struct lotterie{
        address sender;
        uint256 amount;
    }

    lotterie[] choicerandom;

    event transferCount(address sender, uint amount);

    constructor(address owner, address bank) ERC20("Loterie", "AUR") {
        _tokenOwner = owner;
        _bank = bank;
        _mint(_tokenOwner, 1000000000000000000000);
    }

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        uint tax = (amount * 10) /100;
        _transfer(_msgSender(),_tokenOwner,tax/2);
        _transfer(_msgSender(),_bank,tax/2);
        _transfer(_msgSender(), recipient, amount - tax);
        emit transferCount(_msgSender(),amount);
        return true;
    }

    //Lotterie.approve(_bank, 1000000000000000000000000000000000)

    function transferToWinner(address winner)public{
        require(_msgSender()== _tokenOwner);
        uint amount = balanceOf(_bank);
        transferFrom(_bank, winner, amount);
    }

}