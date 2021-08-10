import React from 'react'

import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '../src'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Example button',
    variant: 'solid',
    size: 'md',
    isFullWidth: true
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <Button variant="solid" {...args} />
)
