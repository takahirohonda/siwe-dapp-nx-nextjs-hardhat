import '@nomicfoundation/hardhat-toolbox'
import { ethers } from 'hardhat'
import { GameLevel } from '../typechain-types'

const deployGameLevelContract = async () => {
  const GameLevelContract = await ethers.getContractFactory('GameLevel')
  const gameLevel = await GameLevelContract.deploy()
  await gameLevel.waitForDeployment()
  return gameLevel
}

const getPlayerLevel = async (counter: GameLevel) => {
  await counter.incrementPlayerLevel()
  console.log('Counter deployed with: ', await counter.getPlayerLevel())
}

deployGameLevelContract().then(getPlayerLevel)
