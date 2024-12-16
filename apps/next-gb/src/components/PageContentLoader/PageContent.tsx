import { Spinner } from '@nextui-org/react'
import clsx from 'clsx'
import { CubeLoadingSpinner } from '@mdhnpm/react-cube-loading-spinner'

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
        {/* somehow this renders too slow... */}
        {/* <CubeLoadingSpinner
          mainColor="#ebff38"
          secondaryColor="#3dd6f5"
          spinnerInnerHeight={12}
        /> */}
      </div>
    </main>
  )
}
