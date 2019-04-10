import styled from '../../styled-components'
import { getThemeColor } from '../../core/AscCoreUtils'

export type Props = {
  backgroundColor?: string
}

const StyledTopBar = styled.header<Props>`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 0;
  min-height: 54px;
  padding: 0 15px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || getThemeColor(theme, 'bright', 'main')}
  
  // ie11 fix
  &:after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`

export default StyledTopBar
