import styled from 'styled-components'
import { themeStyle } from '../../../theme'

export const LessonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 18px;
  & div {
    width: 100%;
  }
`
export const LoadButton = styled.button`
  display: block;
  margin: 36px auto;
  padding: 16px 24px;
  border: none;
  outline: none;
  border-radius: ${themeStyle.borderRradius};
  cursor: pointer;
  &:hover {
    background-color: ${themeStyle.primaryBlueColor};
    color: ${themeStyle.white};
    transition: background-color 0.25s ease;
  }
`
