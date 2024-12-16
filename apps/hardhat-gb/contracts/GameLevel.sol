// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "hardhat/console.sol";

contract GameLevel {
  mapping(address => uint) public ownerToGameLevel;

  event IncrementLevel(uint level);

  function incrementPlayerLevel() public {
    ownerToGameLevel[msg.sender]++;
    emit IncrementLevel(ownerToGameLevel[msg.sender]);
  }
  
  function getPlayerLevel() public view returns (uint) {
    return ownerToGameLevel[msg.sender];
  }
}
