import { Character } from './PlayerAssets/Character'
import { Counter } from './PlayerAssets/Counter'
import { Level } from './PlayerAssets/Level'

export const PlayerAssets = () => {
  return (
    <div className="flex gap-[16px]">
      <Level />
      <Counter />
      <Character />
    </div>
  )
}
