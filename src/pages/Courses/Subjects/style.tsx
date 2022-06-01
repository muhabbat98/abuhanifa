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

export const PageController = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`
export const PageButton = styled.button`
  border: transparent;
  background-color: transparent;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  & img {
    transform: rotate(180deg);
    margin-right: 6px;
  }
`
export const CurrentPage = styled.span`
  color: ${themeStyle.gray};
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  &::before {
    content: '';
    border-left: 1px solid ${themeStyle.gray};
    transform: skewX(-15deg);
    margin-right: 5px;
  }
`
