import '@nomicfoundation/hardhat-toolbox'
import { ethers } from 'hardhat'
import { GameLevel } from '../typechain-types'

const deployGameLevelContract = async () => {
  const GameLevelContract = await ethers.getContractFactory('GameLevel')
  const gameLevel = await GameLevelContract.deploy()
  const deploymentReceipt = await gameLevel.deploymentTransaction()?.wait()
  console.log(
    `checking deploymentReceipt: ${JSON.stringify(deploymentReceipt)}`
  )
  console.log(`GameLevel contract deployed to: ${gameLevel.target}`)
  return gameLevel
}

const getPlayerLevel = async (counter: GameLevel) => {
  await counter.incrementPlayerLevel()
  console.log('Counter deployed with: ', await counter.getPlayerLevel())
}

deployGameLevelContract().then(getPlayerLevel)
