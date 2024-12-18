import '@nomicfoundation/hardhat-toolbox'
import { ethers } from 'hardhat'
import { GameCharacters } from '../typechain-types'

const deployGameCharactersContract = async () => {
  const GameCharactersContract = await ethers.getContractFactory(
    'GameCharactersNonPayable'
  )
  const gameCharacters = await GameCharactersContract.deploy()

  // Wait for the deployment transaction to be mined
  const deploymentReceipt = await gameCharacters.deploymentTransaction()?.wait()

  console.log(
    `checking deploymentReceipt: ${JSON.stringify(deploymentReceipt)}`
  )
  // Access the deployed contract's address
  const deployedAddress = gameCharacters.target // ethers v6 uses `target` instead of `address`

  console.log(`GameCharacters contract deployed to: ${deployedAddress}`)
  return gameCharacters
}

const getGameCharacterAndLevel = async (
  gameCharactersContract: GameCharacters
) => {
  await gameCharactersContract.incrementPlayerLevel()
  console.log(
    'GameCharacters contract deployed and player level is: ',
    await gameCharactersContract.getPlayerLevel()
  )

  await gameCharactersContract.createGameCharacter()
  console.log(
    'Game character is: ',
    await gameCharactersContract.getGameCharacter()
  )
}

deployGameCharactersContract().then(getGameCharacterAndLevel)
