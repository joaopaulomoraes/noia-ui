import styled, { css } from "styled-components";

import { lighten } from 'polished'

import {ButtonProps} from './'

export const Wrapper = styled.button<ButtonProps>`
  ${({ bg }) => css`
    background-color: ${bg};
    padding: 10px 20px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${lighten('0.1', bg)};
    }
  `}
`