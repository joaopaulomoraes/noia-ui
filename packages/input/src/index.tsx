import React from 'react'

import * as S from './styles'

export type InputProps = {
  placeholder?: string
  children?: React.ReactNode
}

const Input = ({ placeholder = "Type something..." }: InputProps) => (
  <S.Wrapper>
    <input placeholder={placeholder} />
  </S.Wrapper>
)

export default Input
