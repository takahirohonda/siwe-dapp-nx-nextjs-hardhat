import { CHARACTERS_CONTRACT_ADDRESS } from '../../../../../const/const'
import { Button } from '@nextui-org/react'
import { useAccount, useReadContract, useWriteContract } from 'wagmi'
import { characterAbi } from './characterAbi'

export const Character = () => {
  const { data: hash, writeContract } = useWriteContract()
  const { address } = useAccount()
  const createNft = async () => {
    await writeContract({
      address: CHARACTERS_CONTRACT_ADDRESS,
      abi: characterAbi,
      functionName: 'createGameCharacter',
    })
  }

  const { data } = useReadContract({
    address: CHARACTERS_CONTRACT_ADDRESS,
    abi: characterAbi,
    functionName: 'getGameCharacter',
    account: address,
  })

  const { data: strength } = useReadContract({
    address: CHARACTERS_CONTRACT_ADDRESS,
    abi: characterAbi,
    functionName: 'getStrength',
    args: [data],
  })

  const { data: health } = useReadContract({
    address: CHARACTERS_CONTRACT_ADDRESS,
    abi: characterAbi,
    functionName: 'getHealth',
    args: [data],
  })

  const { data: dex } = useReadContract({
    address: CHARACTERS_CONTRACT_ADDRESS,
    abi: characterAbi,
    functionName: 'getDex',
    args: [data],
  })

  const { data: intellect } = useReadContract({
    address: CHARACTERS_CONTRACT_ADDRESS,
    abi: characterAbi,
    functionName: 'getIntellect',
    args: [data],
  })

  const { data: magic } = useReadContract({
    address: CHARACTERS_CONTRACT_ADDRESS,
    abi: characterAbi,
    functionName: 'getMagic',
    args: [data],
  })

  console.log(`checking count ${data}`)
  console.log(`checking count data type ${typeof data}`)

  return (
    <div className="flex gap-[16px]">
      <Button onPress={createNft}>Create & Mint you character NFT!</Button>
      <p>Your character: {data?.toString()}</p>
      <p>Strength: {strength?.toString()}</p>
      <p>Health: {health?.toString()}</p>
      <p>Dexterity: {dex?.toString()}</p>
      <p>Intellect: {intellect?.toString()}</p>
      <p>Magic: {magic?.toString()}</p>
    </div>
  )
}
