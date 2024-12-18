# Checking Characters contract locally...

Non payable

checking deploymentReceipt: {"\_type":"TransactionReceipt","blockHash":"0x86471e5a3e3d65216aa64d75394b5f95ab149ef7f820fc508bdf1c455a7f3919","blockNumber":17,"contractAddress":"0x9A676e781A523b5d0C0e43731313A708CB607508","cumulativeGasUsed":"904715","from":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","gasPrice":"1108776502","blobGasUsed":null,"blobGasPrice":null,"gasUsed":"904715","hash":"0x7927f2120067bceb8f0e12af37306fab2a04c3df90132072c3dd694ad9192520","index":0,"logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","status":1,"to":null}
GameCharacters contract deployed to: 0x9A676e781A523b5d0C0e43731313A708CB607508
GameCharacters contract deployed and player level is: 1n
Game character is: 60838448n

Deployed successfully locally...

checking deploymentReceipt: {"\_type":"TransactionReceipt","blockHash":"0xda15207250b855a5eb1a544583b15ac561aa5ef8ff2a1fdceedee0578083c74b","blockNumber":6,"contractAddress":"0x5FC8d32690cc91D4c39d9d3abcBD16989F875707","cumulativeGasUsed":"991766","from":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","gasPrice":"579402280","blobGasUsed":null,"blobGasPrice":null,"gasUsed":"991766","hash":"0x381adbf5a39303f3403f73979d1e9ae01ae89d633f6debc16b551e12a78189c9","index":0,"logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","status":1,"to":null}
GameCharacters contract deployed to: 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
GameCharacters contract deployed and player level is: 1n
Game character is: 50890283n

For parsing ether

```tsx
import { useAccount, useContractWrite } from 'wagmi'
import { characterAbi } from './characterAbi'
import { useCallback } from 'react'

const CHARACTERS_CONTRACT_ADDRESS = '0xYourContractAddressHere'

export const Character = () => {
  const { address } = useAccount()

  // Configure the write contract hook
  const { data: hash, write } = useContractWrite({
    address: CHARACTERS_CONTRACT_ADDRESS,
    abi: characterAbi,
    functionName: 'createGameCharacter',
  })

  const createNft = useCallback(async () => {
    try {
      // Call the write function with the required value
      await write({
        overrides: {
          value: BigInt(ethers.parseEther('0.005')), // Send 0.005 ether
        },
      })
      console.log('Transaction sent:', hash)
    } catch (error) {
      console.error('Error creating NFT:', error)
    }
  }, [write, hash])

  return (
    <div>
      <button onClick={createNft} disabled={!address}>
        Create NFT
      </button>
    </div>
  )
```
