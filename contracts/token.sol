// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    address _tokenOwner;
    uint count = 0;
 

    struct Loterie{
        address sender;
        uint256 amount;
    }

    Loterie[] choicerandom;

    event transferCount(uint count);
    event RollLoterie(Loterie[] AllTransfer);

    constructor(address owner, address add1, address add2, address add3) ERC20("Loterie", "AUR") {
        _tokenOwner = owner;
        _mint(_tokenOwner, 1000000000000000000000);
        _mint(add1, 3000000000000000000000);
        _mint(add2, 3000000000000000000000);
        _mint(add3, 3000000000000000000000);
    }

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        uint tax = (amount * 10) /100;

        _transfer(_msgSender(),_tokenOwner,tax/2);
        _transfer(_msgSender(),address(this),tax/2);
        _transfer(_msgSender(), recipient, (amount - tax));
        count++;
        choicerandom.push(Loterie(_msgSender(),amount));
        emit transferCount(count);
        checkLotterieLength();
        return true;
    }

    function transferToWinner(address winner) public {
        uint amount = balanceOf(address(this));
        _transfer(address(this),winner, amount);
    }

    function checkLotterieLength() public{
        if (choicerandom.length >= 3){
            emit RollLoterie(choicerandom);
            count = 0;
            delete choicerandom;
        }
    }

}