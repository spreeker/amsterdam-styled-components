import styled, { css } from '@datapunt/asc-core'
import { themeColor, themeSpacing } from '../../utils'
import { outlineStyle } from '../../utils/themeUtils'

enum Variants {
  primary,
  secondary,
  tertiary,
}

export type Props = {
  variant?: keyof typeof Variants
  disabled?: boolean
  error?: boolean
  name?: string
  id: string
  defaultChecked?: boolean
  onChange?: Function
}

const getVariantColor = () => ({
  variant,
}: {
  variant?: keyof typeof Variants
}) => {
  switch (variant) {
    case 'primary':
      return css`
        ${themeColor('primary', 'main')};
      `

    case 'secondary':
      return css`
        ${themeColor('secondary', 'main')};
      `

    default:
      return css`
        ${themeColor('tint', 'level7')};
      `
  }
}

const RadioStyle = styled.input.attrs({
  type: 'radio',
})<Props>`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  opacity: 0;
`

export default RadioStyle

type StyleOnlyProps = {
  variant?: keyof typeof Variants
  checked?: boolean
  disabled?: boolean
  error?: boolean
  focus?: boolean
}

const RadioCircleStyle = styled.span<StyleOnlyProps>`
  width: ${themeSpacing(6)};
  height: ${themeSpacing(6)};
  color: ${themeColor('tint', 'level5')};
  border: 1px solid;
  border-radius: 50%;
  ${({ checked }) =>
    checked &&
    css`
      color: ${getVariantColor()};
      &::after {
        content: '';
        position: absolute;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        background-color: ${getVariantColor()};
      }
    `}

  ${({ error, checked, disabled, focus }) =>
    error &&
    !checked &&
    !disabled &&
    !focus &&
    css`
      border-width: 2px;
      color: red;
    `}
`

export { RadioCircleStyle }

const RadioWrapperStyle = styled.div<StyleOnlyProps & { focus: boolean }>`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  flex-shrink: 0; /* IE11 fix */
  padding: ${themeSpacing(1)};
  margin-bottom: 1px;
  margin-right: ${themeSpacing(2)};
  ${({ focus, theme }) =>
    focus &&
    css`
      ${RadioCircleStyle} {
        ${outlineStyle(theme, 2, 1)};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}
    
  ${({ checked, disabled, focus }) =>
    !checked &&
    !disabled && // IE11 fix. If an element is disabled, you can still hover on it on IE11.
    !focus && // don't override the outline if element is also focussed
    css`
      &:hover ${RadioCircleStyle} {
        border: 2px solid;
        color: ${getVariantColor()};
      }
    `}
`

export { RadioWrapperStyle }
