// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "hardhat/console.sol";

contract GameCharacters {

  // at the moment, I can hae 4 max characters 
  // because I used 2 bits to represent the character type...
  enum CharacterType { Magician, Archer, Warrior, Slacker }

  // Mapping to store the integer value corresponding to each enum
  mapping(uint => CharacterType) public characterTypeByIndex;

   // Event to emit when a game character is created
    event GameCharacterCreated(
        address indexed owner,
        CharacterType characterType,
        uint strength,
        uint health,
        uint dexterity,
        uint intellect,
        uint magic,
        uint gameCharacter
    );

  constructor() {
      // Initialize the mapping with the enum values
      characterTypeByIndex[0] = CharacterType.Magician;
      characterTypeByIndex[1] = CharacterType.Archer;
      characterTypeByIndex[2] = CharacterType.Warrior;
      characterTypeByIndex[3] = CharacterType.Slacker;
  }

  mapping(address => uint) public ownerToGameCharacter;
  mapping (address => uint) ownerCharacterCount;
  mapping(address => uint) public ownerToGameLevel;

  event IncrementLevel(uint level);

  function incrementPlayerLevel() public {
    ownerToGameLevel[msg.sender]++;
    emit IncrementLevel(ownerToGameLevel[msg.sender]);
  }

  function getPlayerLevel() public view returns (uint) {
    return ownerToGameLevel[msg.sender];
  }
  function getRandomCharacterType() public view returns (CharacterType) {
    // Generate a random index between 0 and 4 based on block data
    uint randomIndex = uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, msg.sender))) % 5;

    // Retrieve the character type using the random index
    return characterTypeByIndex[randomIndex];
}

  function getClassByIndex(uint index) public view returns (CharacterType) {
        return characterTypeByIndex[index];
    }
  function generateRandom() public virtual view returns (uint) {
    return uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp)));
  }

  function getGameCharacter() public view returns (uint) {
    return ownerToGameCharacter[msg.sender];
  }

  function getStrength (uint hero) public pure returns (uint) {
    return (hero >> 2) & 0x1F;
  }

  function getHealth (uint hero) public pure returns (uint) {
    return (hero >> 7) & 0x1F;
  }

  function getDex (uint hero) public pure returns (uint) {
    return (hero >> 12) & 0x1F;
  }

    function getIntellect (uint hero) public pure returns (uint) {
    return (hero >> 17) & 0x1F;
  }

    function getMagic (uint hero) public pure returns (uint) {
    return (hero >> 22) & 0x1F;
  }

  function createGameCharacter() public payable {
    require(msg.value >= 0.005 ether, 'You need at least 0.005 ether to create a hero');
 
    // The player can only create a character if they don't already have one
    if (ownerCharacterCount[msg.sender] > 0) {
      return;
    }
    // stats are strength, health, dexterity, intellect, magic
    uint[] memory stats = new uint[](5);

    // They represent the left shift
    stats[0] = 2; // preserves first 2 bytes for the character type and create strength
    stats[1] = 7; // preserves strength and create health -> first 5 bytes
    stats[2] = 12; // preserves health and create dexterity -> second 5 bytes
    stats[3] = 17; // preserves dexterity and create intellect -> 3rd 5 byts
    stats[4] = 22; // preserves intellect and create magic-> 3rd 5 byts

    uint len = 5;
    // casting gameCharacter to uint, 00, 01, 10, 11, (become bits)
    uint gameCharacter = uint(getRandomCharacterType()); 

    do {
      // 1st loop: modulo of 5 will give us 0, 1, 2, 3, 4
      uint pos = generateRandom() % len;

      // 1st loop: modulo of 19 give us 0 ~ 18 random number
      uint value = generateRandom() % (13 + len) + 1;

      // 1st loop, say gameCharacter is 00. and value is 2 (10). Pos = 1
      // 0000 00 | 10 -> 10 0000000 
      gameCharacter |= value << stats[pos];
      len--;
      // stats[1] = stats[4] (22) This eliminates the original 7 shift 
      // and add the possible 22 shift for the next bit
      // this is for the condition: the stats are randomly picked and their amplitude is randomly determined according to the following:
      stats[pos] = stats[len];

    } while (len > 0);

    ownerCharacterCount[msg.sender]++;
    ownerToGameCharacter[msg.sender] = gameCharacter;

    // Extract individual stats from the game character
    uint strength = (gameCharacter >> 2) & 0x1F;
    uint health = (gameCharacter >> 7) & 0x1F;
    uint dexterity = (gameCharacter >> 12) & 0x1F;
    uint intellect = (gameCharacter >> 17) & 0x1F;
    uint magic = (gameCharacter >> 22) & 0x1F;

    // Emit the GameCharacterCreated event with detailed stats
    emit GameCharacterCreated(
        msg.sender,
        CharacterType(gameCharacter & 0x3),
        strength,
        health,
        dexterity,
        intellect,
        magic,
        gameCharacter
    );
  }
}
