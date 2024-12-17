import '@nomicfoundation/hardhat-toolbox'
import { ethers } from 'hardhat'

const deployCounterContract = async () => {
  const CounterContract = await ethers.getContractFactory('Counter')
  const counter = await CounterContract.deploy()
  const deploymentReceipt = await counter.deploymentTransaction()?.wait()
  console.log(
    `checking deploymentReceipt: ${JSON.stringify(deploymentReceipt)}`
  )
  console.log(`counter contract deployed to: ${counter.target}`)
  return counter
}

deployCounterContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
