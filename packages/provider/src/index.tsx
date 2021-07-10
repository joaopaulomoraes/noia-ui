import React from 'react'

import { ThemeProvider as StyledProvider } from 'styled-components'

import CssReset from '@noia-ui/css-reset'
import defaultTheme from '@noia-ui/theme'

type ProviderProps = {
  theme?: Record<string, any>
  resetCSS?: boolean
  children?: React.ReactNode
}

const ThemeProvider = ({
  theme = defaultTheme,
  resetCSS = true,
  children
}: ProviderProps) => (
  <StyledProvider theme={theme}>
    {resetCSS && <CssReset />}

    {children}
  </StyledProvider>
)

export default ThemeProvider
