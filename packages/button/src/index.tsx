import React, { HTMLAttributes } from 'react'

import { SystemProps, x } from '@xstyled/styled-components'

import { useStyle } from '@noia-ui/system'

export type ButtonProps = {
  children?: React.ReactNode
  variant?: string
  size?: string
  isFullWidth?: boolean
} & HTMLAttributes<HTMLButtonElement> &
  SystemProps

const Button = React.forwardRef(({ isFullWidth, children, ...props }: ButtonProps, ref) => {
  const styles = useStyle('Button', { ...props })

  const buttonStyle = {
    ...styles,
    w: isFullWidth ? 'full' : 'auto'
  }

  return (
    <x.button ref={ref} {...buttonStyle} {...props}>
      {children}
    </x.button>
  )
})

export default Button
