import styled from 'styled-components'

export const FreeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(25% - 14px));
  margin: 32px 0px;
  grid-gap: 18px;
  box-sizing: border-box;
  & > div:nth-child(6n-5),
  & > div:nth-child(6n-4) {
    grid-column: span 2;
  }
`
