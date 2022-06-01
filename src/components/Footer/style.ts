import styled from 'styled-components'
import { themeStyle } from '../../theme'

export const FooterComponent = styled.div`
  background-color: ${themeStyle.secondaryBlueColor};
  /* min-height: 200px; */
  width: 100%;
  margin-top: auto;
  padding-top: 36px;
`
export const FooterGroup = styled.div`
  display: flex;
`
export const FooterList = styled.ul`
  padding: 0;
  list-style: none;
  width: 25%;
`
export const FooterListHeader = styled.h4`
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1px;
`
export const FooterListElem = styled.li`
  padding: 12px 0px;
  & a,
  address {
    color: ${themeStyle.grayishBlue};
    font-style: normal;
  }
`
export const SocialLink = styled.span`
  margin-right: 15px;
  & a {
    margin-right: 15px;
  }
`
