import styled from 'styled-components'
import { backgroundColor, themeStyle } from '../../theme'

export const MainNavbarComponent = styled.div`
  background-color: ${backgroundColor};
  padding: ${themeStyle.paddingNavbar};
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${themeStyle.grayBackground};
  padding: 4px 8px;
  border-radius: ${themeStyle.borderRradius};
`
export const AbuHanifaLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 6px;
`
export const NameContainer = styled.div`
  color: ${themeStyle.secondaryBlueColor};
`
export const NameAbuHanifa = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`
export const AddAbuHanifa = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  opacity: 0.48;
`
// ################################################################           NAVIGATION    TSX        ################################################################

export const NavigationContainer = styled.div`
  /* display: flex;
  align-items: center; */
  background: ${themeStyle.grayBackground};
  padding: 3px;
  border-radius: ${themeStyle.borderRradius};
`
export const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
export const NavigationElem = styled.li`
  display: inline-block;
  & a {
    font-size: ${themeStyle.normalFontSize};
    padding: ${themeStyle.normalPadding};
    color: ${themeStyle.gray};
    border-radius: ${themeStyle.borderRradius};
    font-weight: 500;
    line-height: 18px;
    display: flex;
    align-items: center;
  }
  & a:first-child img {
    filter: opacity(0.3);
  }
  & a:hover {
    background-color: ${themeStyle.light};
    padding: ${themeStyle.normalPadding};
    color: ${themeStyle.black};
    transition: background-color 0.3s ease;
    & img {
      filter: opacity(0.5) drop-shadow(0 0 0 black);
    }
  }
`
export const NavigationIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 6px;
  & :first-child() {
    filter: opacity(0.5);
  }
`
