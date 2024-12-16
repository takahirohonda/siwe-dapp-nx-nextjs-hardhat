import '@nomicfoundation/hardhat-toolbox'
import { ethers } from 'hardhat'
import { GameCharacters } from '../typechain-types'

const deployGameCharactersContract = async () => {
  const GameCharactersContract = await ethers.getContractFactory(
    'GameCharacters'
  )
  const gameCharacters = await GameCharactersContract.deploy()
  await gameCharacters.waitForDeployment()
  return gameCharacters
}

const getGameCharacterAndLevel = async (
  gameCharactersContract: GameCharacters
) => {
  await gameCharactersContract.incrementPlayerLevel()
  console.log(
    'Counter deployed with: ',
    await gameCharactersContract.getPlayerLevel()
  )
  await gameCharactersContract.createGameCharacter()
  console.log(
    'Counter deployed with: ',
    await gameCharactersContract.getGameCharacter()
  )
}

deployGameCharactersContract().then(getGameCharacterAndLevel)
