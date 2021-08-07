import React, { ButtonHTMLAttributes, CSSProperties } from 'react'

import * as S from './styles'

export type ButtonProps = {
  variant?: 'outlined' | 'filled' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  bg?: string
  borderColor?: string
  children?: React.ReactNode
  onClick?: () => void
  style?: CSSProperties
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  variant = 'filled',
  size = 'md',
  bg = '#fff',
  borderColor = '#000',
  children,
  onClick,
  style
}: ButtonProps) => {
  return (
    <S.Wrapper
      style={style}
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
