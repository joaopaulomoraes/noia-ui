import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = {
  variant?: 'outlined' | 'filled' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  bg?: string
  borderColor?: string
  children?: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant = "filled", size = "md", bg = "#fff", borderColor = "#000", children }: ButtonProps) => {
  return (
    <S.Wrapper variant={variant} size={size} bg={bg} borderColor={borderColor}>
      {children}
    </S.Wrapper>
  )
}

export default Button
