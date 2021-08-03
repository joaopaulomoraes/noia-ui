import styled, { css } from 'styled-components'

import { lighten } from 'polished'

import { ButtonProps } from './'

const sizes = {
  sm: '5px 10px',
  md: '10px 20px',
  lg: '15px 25px'
}

const variants = {
  outlined: css`
    background-color: transparent;
    border-width: 2px;
    border-style: solid;
  `,
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ variant, size, bg, borderColor }) => css`
    background-color: ${bg};
    padding: ${sizes[size!]};
    border-radius: 2rem;
    border-style: none;
    border-color: ${borderColor};
    cursor: pointer;

    transition: background-color 0.2s;

    ${variants[variant!]}

    &:hover {
      background-color: ${lighten('0.1', bg!)};
    }
  `}
`
