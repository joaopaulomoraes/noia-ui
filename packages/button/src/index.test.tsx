import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Button from '..'

describe('<Button />', () => {
  it('should render a button', () => {
    const { container } = render(<Button>hello</Button>)

    expect(screen.getByRole('button', { name: /hello/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a red button', () => {
    render(<Button bg="red">hello</Button>)

    screen.logTestingPlaygroundURL()

    expect(screen.getByRole('button', { name: /hello/i })).toHaveStyle('background-color: red')
  })

  it('should call onClick prop when clicked', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText(/click me/i))
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})