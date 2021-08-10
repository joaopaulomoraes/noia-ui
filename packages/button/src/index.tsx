import React, { HTMLAttributes } from 'react'

import { SystemProps, x } from '@xstyled/styled-components'

import { theme } from '@noia-ui/theme'

export type ButtonProps = {
  children?: React.ReactNode
  variant?: string
  size?: string
  isFullWidth?: boolean
} & HTMLAttributes<HTMLButtonElement> &
  SystemProps

const buttonStyles = theme.components.Button

const Button = ({
  variant = 'solid',
  size = 'md',
  isFullWidth,
  children,
  ...props
}: ButtonProps) => {
  const { variants } = buttonStyles

  const { sizes } = buttonStyles

  const baseStyle = {
    ...buttonStyles.baseStyle,
    w: isFullWidth ? 'full' : 'auto'
  }

  return (
    <x.button {...baseStyle} {...sizes[size]} {...variants[variant]} {...props}>
      {children}
    </x.button>
  )
}

export default Button
