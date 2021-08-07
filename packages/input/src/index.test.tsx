import React from 'react'

import {render, screen} from '@testing-library/react'

import Input from '..'

describe('<Input />', () => {
  it('should render an input', () => {
    render(<Input placeholder="Type something..." />)

    expect(screen.getByPlaceholderText('Type something...'))
  })
})