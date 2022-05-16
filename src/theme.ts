import styled from 'styled-components'
import theme from 'styled-theming'
export const backgroundColor = theme('mode', {
  light: '#FCFCFCE5',
  dark: '#000',
})

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  & a {
    text-decoration: none;
  }
`
export const themeStyle = {
  secondaryBlueColor: '#094062',
  gray: '#7E848C',
  grayBackground: 'rgba(126, 132, 140, 0.14)',
  borderRradius: '12px',
  mainFamily: `${'Inter'}, sans-serif`,
  paddingNavbar: '14px 0px',
  normalFontSize: '15px',
  normalPadding: '10px',
  light: '#FCFCFC',
  black: 'rgba(26, 29, 31, 1)',
}
