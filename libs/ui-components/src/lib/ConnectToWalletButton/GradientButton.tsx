'use client'
import clsx from 'clsx'

export type ButtonSize = 'large' | 'medium'

interface ButtonProps {
  children?: React.ReactNode
  size?: 'large' | 'medium'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const getButtonSizeStyle = (size: ButtonSize) => {
  const MEDIUM = 'py-[8px] px-[24px]'
  switch (size) {
    case 'large':
      return 'py-[16px] px-[38px]'
    case 'medium':
      return MEDIUM
    default:
      return MEDIUM
  }
}
export const GradientButton = ({
  size = 'medium',
  onClick,
  children,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        `
        text-white
        text-center
        rounded-full
        hover:brightness-90
        primary-button-gradient
        `,
        getButtonSizeStyle(size)
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
