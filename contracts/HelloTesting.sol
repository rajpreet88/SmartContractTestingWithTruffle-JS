// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract HelloTesting {

  function print() public pure returns(string memory){
    return "Hello Testing";
  }

  function printNum() public pure returns(uint){
    return 1;
  }
}
