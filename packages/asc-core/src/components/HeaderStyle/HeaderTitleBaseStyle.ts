import styled from '../../styled-components'

const HeaderTitleBaseStyle = styled.div`
  & > h1 {
    display: flex;
    height: 100%;
    margin: 0;
  }

  & > h1 > span {
    display: inline-block;
  }

  & > h1 > span > a {
    color: #000;
    text-decoration: none;
  }
`

export default HeaderTitleBaseStyle
