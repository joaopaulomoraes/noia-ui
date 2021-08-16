import { components } from '@noia-ui/theme'

/**
 *
 * @param name Component name
 * @returns styles
 */
const useStyle = (name: string, props: any = {}) => {
  const component = components[name]

  const baseStyle = component.baseStyle
  const variant = component.variants[props.variant]
  const size = component.sizes[props.size]

  return {
    ...baseStyle,
    ...variant,
    ...size
  }
}

export default useStyle
