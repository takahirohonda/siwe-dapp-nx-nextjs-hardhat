'use client'
import clsx from 'clsx'

export type ButtonSize = 'large' | 'medium'

interface ButtonProps {
  children?: React.ReactNode
  size?: 'large' | 'medium'
  type?: 'button' | 'submit' | 'reset'
  variant: 'primary' | 'secondary'
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

const getButtonVariantStyle = (variant: 'primary' | 'secondary') => {
  switch (variant) {
    case 'primary':
      return 'primary-button-gradient'
    case 'secondary':
      return 'red-purple-button-gradient'
    default:
      return 'primary-button-gradient'
  }
}

export const GradientButton = ({
  size = 'medium',
  onClick,
  children,
  type = 'button',
  variant,
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
        getButtonVariantStyle(variant),
        getButtonSizeStyle(size)
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
