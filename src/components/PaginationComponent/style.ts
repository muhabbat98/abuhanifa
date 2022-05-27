import styled from 'styled-components'
import { themeStyle } from '../../theme'

export const PaginationComponent = styled.div``

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CourseName = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: ${themeStyle.black};
`
export const CourseController = styled.div`
  & > button:first-child {
    margin-right: 12px;
  }
  & > button:first-child img {
    transform: rotate(180deg);
  }
`
export const CourseBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  width: 36px;
  height: 36px;
  background-color: ${themeStyle.grayBackground};
  cursor: pointer;
`
