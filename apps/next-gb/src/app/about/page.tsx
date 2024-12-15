import clsx from 'clsx'

export const AboutPage = () => {
  return (
    <div>
      <h1
        className={clsx(`
              text-[48px]
              md:text-[90px]
              yellow-light-blue-gradient
              `)}
      >
        About
      </h1>
      <h2 className="yellow-red-gradient text-[24px] md:text-[36px]">
        Art is the sublimation of shitty experiences...
      </h2>
    </div>
  )
}

export default AboutPage
