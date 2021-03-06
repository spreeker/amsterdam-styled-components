import * as React from 'react'
import HeaderStyle, { Props as HeaderStyleProps } from './HeaderStyle'
import HeaderWrapperStyle, {
  Props as HeaderWrapperProps,
} from './HeaderWrapperStyle'
import HeaderLogoText from './HeaderLogoText'
import HeaderNavigation from './HeaderNavigation'
import HeaderLinks from './HeaderLinks'
import { CustomCssPropsType } from '../../utils'

type Props = {
  homeLink: string
  title?: string
  navigation?: React.ReactNode
  links?: React.ReactNode
} & HeaderWrapperProps &
  HeaderStyleProps &
  CustomCssPropsType &
  React.HTMLAttributes<HTMLDivElement>

const Header: React.FC<Props> = ({
  css,
  title,
  homeLink,
  fullWidth,
  tall,
  navigation,
  links,
  ...otherProps
}) => (
  <HeaderWrapperStyle {...{ css, tall }} id="header">
    <HeaderStyle {...{ fullWidth, ...otherProps }}>
      <HeaderLogoText {...{ tall, title, homeLink }} />
      <HeaderNavigation>{navigation}</HeaderNavigation>
      <HeaderLinks>{links}</HeaderLinks>
    </HeaderStyle>
  </HeaderWrapperStyle>
)

Header.defaultProps = {
  tall: false,
  fullWidth: true,
}

export default Header
