---
to: packages/asc-ui/src/components/<%= parent %>/<%=name%>/<%=name%>.tsx
---
import React from 'react'
import <%=name%>Style, { Props } from './<%=name%>Style'

const <%=name%>: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({ children, ...otherProps }) => (
  <<%=name%>Style {...otherProps}>{children}</<%=name%>Style>
)

export default <%=name%>

