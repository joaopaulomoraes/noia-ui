import React from 'react'

import {
  ThemeProvider as StyledProvider,
  Preflight
} from '@xstyled/styled-components'

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
    {resetCSS && <Preflight />}

    {children}
  </StyledProvider>
)

export default ThemeProvider
