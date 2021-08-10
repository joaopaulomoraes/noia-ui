const baseStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  h: 10,
  color: 'white',
  outline: 'none',
  border: true,
  borderRadius: true,
  transition: true,
  cursor: 'pointer',
  px: 7
}

const variants = {
  solid: {
    bg: 'blue-500'
  },
  outline: {
    bg: 'transparent',
    color: 'blue-500',
    borderColor: 'blue-500'
  }
}

const sizes = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: 'lg',
    px: 6
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: 'default',
    px: 4
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: 'sm',
    px: 3
  }
}

const defaultProps = {
  size: 'md'
}

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps
}
