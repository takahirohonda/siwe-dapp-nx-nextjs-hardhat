import { Spinner } from '@nextui-org/react'
import clsx from 'clsx'

export const PageContentLoader = () => {
  return (
    <main
      className={clsx(`
            flex
            flex-col
            items-center
            justify-center     
            flex-grow
          `)}
    >
      <div className="flex flex-col lg:flex-row">
        <Spinner color="danger" size="lg" />
      </div>
    </main>
  )
}
