import '@nomicfoundation/hardhat-toolbox'
import { ethers } from 'hardhat'

const deployGameLevelContract = async () => {
  const GameLevelContract = await ethers.getContractFactory('GameLevel')
  const gameLevel = await GameLevelContract.deploy()
  const deploymentReceipt = await gameLevel.deploymentTransaction()?.wait()
  console.log(
    `checking deploymentReceipt: ${JSON.stringify(deploymentReceipt)}`
  )
  console.log(`GameLevel contract deployed to: ${gameLevel.target}`)
}

deployGameLevelContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
