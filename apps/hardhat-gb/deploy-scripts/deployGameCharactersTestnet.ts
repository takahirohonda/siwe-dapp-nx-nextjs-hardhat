import '@nomicfoundation/hardhat-toolbox'
import { ethers } from 'hardhat'

const deployGameCharactersContract = async () => {
  const GameCharactersContract = await ethers.getContractFactory(
    'GameCharacters'
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
}

deployGameCharactersContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
