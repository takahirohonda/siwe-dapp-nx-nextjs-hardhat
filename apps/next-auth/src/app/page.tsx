import clsx from 'clsx'
import { ConnectToWallet } from 'ui-components'

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-auto lg:w-[60%] flex text-center">
          <div className="flex flex-col">
            <h1
              className={clsx(`
              text-[72px]
              md:text-[90px]
              yellow-light-blue-gradient
              `)}
            >
              Pump and Duel
            </h1>
            <h2 className="text-secondary-text text-[24px] md:text-[36px]">
              Art is the sublimation of shitty experiences...
            </h2>
          </div>
        </div>
        <div
          className={clsx(`
            w-auto
            lg:w-[40%] 
            flex
            flex-col
            items-center 
            gap-[24px] 
            mt-[18px] 
            ml-[0px] 
            lg:ml-[16px]`)}
        >
          <h2 className="text-secondary-text text-[20px] md:text-[24px]">
            Imperfection is the fingerprint of your soul...
          </h2>
          <div>
            <ConnectToWallet />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
