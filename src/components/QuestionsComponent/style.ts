import styled from 'styled-components'
import { themeStyle } from '../../theme'

export const QuestionComponent = styled.div`
  background-color: ${themeStyle.secondaryBlueColor};
  color: ${themeStyle.light};
  padding: 96px 0px;
`

export const QuestionHeaderPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const QuestionHeader = styled.h2`
  max-width: 340px;
  font-weight: 700;
  font-size: 42px;
  line-height: 54px;
`
interface QuestionTextProps {
  isActive?: boolean
}
export const QuestionText = styled.p<QuestionTextProps>`
  max-width: 535px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: ${themeStyle.light};
  opacity: 0.64;
  transition: all 0.5s ease;
  overflow: hidden;
  max-height: ${({ isActive }) => (isActive ? '200px' : '0px')};
`
export const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & li:nth-child(2n) {
    margin-left: 60px;
  }
  & li:nth-child(2n-1) {
    margin-right: 60px;
  }
`

export const QuestionListElement = styled.li`
  width: calc(50% - 60px);
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`

export const ListHeader = styled.h3`
  padding: 32px 0px;
`
// ######################################################################### PROCESS #########################################################################

export const ProcessComponent = styled.div`
  background-color: ${themeStyle.primaryBlueColor};
  padding: 64px 48px;
  border-radius: ${themeStyle.biggerRradius};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 72px;
`
export const ProcessText = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  max-width: 488px;
  & span {
    font-weight: bold;
  }
`

export const ProcessButton = styled.button`
  outline: none;
  border: none;
  border-radius: ${themeStyle.borderRradius};
  background-color: #fed14c;
  padding: ${themeStyle.buttonPadding};
  cursor: pointer;
`
