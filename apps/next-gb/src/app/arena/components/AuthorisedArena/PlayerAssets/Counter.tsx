import { watchContractEvent } from '@wagmi/core'
import { useEffect, useState } from 'react'
import { levelAbi } from './levelAbi'
import { config } from 'utils-wagmi'
import { COUNTER_CONTRACT_ADDRESS } from '../../../../../const/const'
import { Button } from '@nextui-org/react'
import { counterAbi } from './counterAbi'
import { useReadContract, useWriteContract } from 'wagmi'

export const Counter = () => {
  const { data: hash, writeContract } = useWriteContract()

  const incrementLevel = async () => {
    await writeContract({
      address: COUNTER_CONTRACT_ADDRESS,
      abi: counterAbi,
      functionName: 'count',
    })
  }

  const { data } = useReadContract({
    address: COUNTER_CONTRACT_ADDRESS,
    abi: counterAbi,
    functionName: 'getCounter',
  })

  console.log(`checking count ${data}`)
  console.log(`checking count data type ${typeof data}`)

  const [level, setLevel] = useState(0)

  useEffect(() => {
    const unwatch = watchContractEvent(config, {
      address: COUNTER_CONTRACT_ADDRESS,
      abi: levelAbi,
      eventName: 'IncrementCount',
      onLogs(logs) {
        console.log('New logs!', JSON.stringify(logs))
        // setLevel(logs[0]?.data)
      },
    })
    return () => unwatch()
  }, [])

  return (
    <div className="flex gap-[16px]">
      <Button onPress={incrementLevel}>Update Global State</Button>
      <p>Current global state: {data?.toString()}</p>
    </div>
  )
}
