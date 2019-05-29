import styled, { css } from '@datapunt/asc-core'
import { readableColor } from 'polished'
import { svgFill, getColorFromTheme } from '../../utils'
import ButtonBaseStyle, {
  Props as ButtonBaseStyleProps,
} from './ButtonBaseStyle'

export type Props = ButtonBaseStyleProps

const ButtonStyle = styled(ButtonBaseStyle)<Props>`
  padding: 0 10px 0 10px;
  min-height: 38px;
  line-height: 1em;
  color: ${({ color, theme }) =>
    color
      ? readableColor(getColorFromTheme(theme, color))
      : getColorFromTheme(theme, 'primary')};
  ${({ theme, color }) =>
    !color &&
    css`
      border: 1px solid ${getColorFromTheme(theme, 'primary')};
    `}

  &:hover {
    ${({ theme, color }) =>
      !color &&
      css`
        outline: 1px solid ${getColorFromTheme(theme, 'primary')};
      `}
  }

  & > svg {
    width: 30px;
    height: 30px;
    ${({ theme }) => svgFill('tint', 'level1')({ theme })};
  }
`

export default ButtonStyle