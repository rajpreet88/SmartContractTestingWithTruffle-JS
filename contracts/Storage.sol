// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract Storage{
    string public item;

    function setter(string memory _item) public {
        item = _item;
    }

    function getter() public view returns(string memory){
        return item;
    }

}