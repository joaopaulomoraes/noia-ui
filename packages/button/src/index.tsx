import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = {
  variant?: 'outlined' | 'filled' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  bg?: string
  borderColor?: string
  children?: React.ReactNode
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  variant = 'filled',
  size = 'md',
  bg = '#fff',
  borderColor = '#000',
  children,
  onClick
}: ButtonProps) => {
  return (
    <S.Wrapper
      onClick={onClick}
      variant={variant}
      size={size}
      bg={bg}
      borderColor={borderColor}
    >
      {children}
    </S.Wrapper>
  )
}

export default Button
