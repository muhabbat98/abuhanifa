import styled from 'styled-components'
import { themeStyle } from '../../theme'

export const LessonCartComponent = styled.div`
  width: calc(33.3% - 10px);
  padding: 24px;
  box-sizing: border-box;
  background-color: ${themeStyle.white};
  border: 1px solid rgba(126, 132, 140, 0.12);
  border-radius: ${themeStyle.borderRradius};
`
export const CartImg = styled.div`
  height: 200px;
  border-radius: ${themeStyle.borderRradius};
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
interface LessonNameProps {
  cost?: string
}
// export const LessonCost = styled.div``
export const LessonName = styled.h4<LessonNameProps>`
  margin: 30px 0px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: ${themeStyle.black};
  max-width: 300px;
  &::before {
    content: '${({ cost }) => (cost ? cost : 'BEPUL')}';
    color: ${({ cost }) => (cost ? themeStyle.primaryBlueColor : themeStyle.yellow)};
    display: block;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 12px;
  }
`
