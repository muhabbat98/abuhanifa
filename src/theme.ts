import styled from 'styled-components'
import theme from 'styled-theming'
export const backgroundColor = theme('mode', {
  light: '#FCFCFCE5',
  dark: '#000',
})

export const Container = styled.div`
  min-width: 1080px;
  margin: 0 auto;
`
