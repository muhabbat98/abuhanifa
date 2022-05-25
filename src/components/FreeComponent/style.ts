import styled from 'styled-components'
import { themeStyle } from '../../theme'

export const FreeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 18px;
  & > div:nth-child(6n-5),
  & > div:nth-child(6n-4) {
    grid-column: span 2;
  }
`
