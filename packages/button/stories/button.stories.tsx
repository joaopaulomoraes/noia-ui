import React from 'react'

import Button from '../src'

export default {
  title: 'Button'
}

export const Default = () => (
  <>
    <Button borderColor="#fb62f6" variant="outlined" size="lg" bg="#fb62f6">Button</Button>
    <Button style={{backgroundColor: '#fb62f6'}} size="md">Button</Button>
    <Button size="sm" bg="#fb62f6">Button</Button>
  </>
)
