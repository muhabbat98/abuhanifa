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
interface NavigationElemProps {
  isActive: boolean
}
export const NavigationElem = styled.li<NavigationElemProps>`
  display: inline-block;
  & a {
    font-size: ${themeStyle.normalFontSize};
    padding: ${themeStyle.normalPadding};
    color: ${({ isActive }) => (isActive ? themeStyle.black : themeStyle.gray)};
    border-radius: ${themeStyle.borderRradius};
    background-color: ${({ isActive }) => (isActive ? themeStyle.light : 'transparent')};
    font-weight: 500;
    line-height: 18px;
    display: flex;
    align-items: center;
  }
  & a img {
    filter: ${({ isActive }) =>
      isActive ? 'opacity(0.7)  drop-shadow(0 0 0 black)' : 'opacity(0.3)'};
  }
  & a:hover {
    background-color: ${themeStyle.light};
    padding: ${themeStyle.normalPadding};
    color: ${themeStyle.black};
    transition: background-color 0.3s ease;
    & img {
      filter: opacity(0.7) drop-shadow(0 0 0 black);
    }
  }
`
export const NavigationIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`

//                               ########################################### LOGIN CONTAINER #######################################################

export const LoginContainer = styled.div`
  display: flex;
  & > div {
    background-color: ${themeStyle.grayBackground};
    padding: 4px 8px;
    border-radius: ${themeStyle.borderRradius};
  }
`

export const LoginButton = styled.button`
  outline: none;
  border: none;
  border-radius: ${themeStyle.borderRradius};
  padding: ${themeStyle.normalPadding};
  font-size: ${themeStyle.normalFontSize};
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const LanguageContainer = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 1s ease;
`
export const LanguageButton = styled.button`
  outline: none;
  border: none;
  border-radius: ${themeStyle.borderRradius};
  padding: ${themeStyle.normalPadding};
  background-color: 'transparent';
`
interface FlagListProps {
  isActive: boolean
}
export const FlagList = styled.ul<FlagListProps>`
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  top: 100%;
  border-radius: ${themeStyle.borderRradius};
  background-color: ${themeStyle.light};
  box-shadow: 0px 4px 24px rgba(21, 26, 36, 0.1);
  transform: translateY(${({ isActive }) => (isActive ? '0' : '-16px')});
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  overflow: hidden;
  transition: all 0.2s ease;
`
export const FlagElement = styled.li`
  border-bottom: 1px solid ${themeStyle.grayBackground};
  margin: ${themeStyle.normalPadding};
  overflow: hidden;
  &:last-child {
    border-bottom: none;
  }
`
export const FlagButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  padding: ${themeStyle.normalPadding};
  display: flex;
  align-items: center;
  cursor: pointer;
`
interface LangTextProps {
  isMain: boolean
}
export const LangText = styled.p<LangTextProps>`
  font-size: 15px;
  line-height: 18px;
  color: ${themeStyle.black};
  text-transform: capitalize;
  padding: 0;
  margin: 0 8px;
  position: relative;
  &::after {
    content: '';
    display: ${({ isMain }) => (isMain ? 'inline-block' : 'none')};
    transform: rotate(45deg);
    height: 16px;
    width: 8px;
    border-bottom: 1px solid green;
    border-right: 1px solid green;
    position: absolute;
    right: -15px;
    top: -3px;
  }
`
export const Flag = styled.img`
  width: 22px;
  height: 16px;
`
