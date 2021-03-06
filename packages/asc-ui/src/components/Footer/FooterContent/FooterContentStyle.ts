import styled from '@datapunt/asc-core'
import { ShowHideTypes, showHide, themeColor } from '../../../utils'
import ParagraphStyle from '../../Paragraph/ParagraphStyle'

export interface Props extends ShowHideTypes {
  indent?: boolean
}

export default styled.div<Props>`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${({ indent }) => (indent ? '28px' : '0')};
  ${showHide}

  ${ParagraphStyle} {
    color: ${themeColor('tint', 'level1')};
  }
`
