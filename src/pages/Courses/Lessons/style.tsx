import styled from 'styled-components'
import { themeStyle } from '../../../theme'
import Arrow from '../../../assets/img/Arrowup.svg'
import Lock from '../../../assets/img/lock.svg'
import Tick from '../../../assets/img/tick.svg'

export const LessonComponent = styled.div`
  padding: 37px 0px;
  background-color: ${themeStyle.light};
`

export const LessonContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`

export const VideoContainer = styled.div`
  width: 748px;
  height: 420px;
  border-radius: ${themeStyle.borderRradius};
  overflow: hidden;
  grid-row-start: 1;
  grid-row-end: 2;
`
export const LessonListContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
`
export const LessonsTextContainer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
`

//  #################################################   Lesson List ############################################
export const LessonHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
export const LessonHeader = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: ${themeStyle.black};
`
export const LessonName = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${themeStyle.gray};
`
export const LessonProgress = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`
export const LessonProgressHeader = styled.div``

interface LessonProgressPresentProps {
  persent: string
}
export const LessonProgressPresent = styled.span<LessonProgressPresentProps>`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin: 8px 0px;
  &::after {
    content: '${({ persent }) => persent}';
    color: ${themeStyle.gray};
    margin-left: 10px;
  }
`

export const LessonProgressBar = styled.div<LessonProgressPresentProps>`
  width: 100%;
  height: 6px;
  background-color: ${themeStyle.grayBackground};
  border-radius: ${themeStyle.borderRradius};
  overflow: hidden;
  &::before {
    content: '';
    width: ${({ persent }) => persent};
    height: 100%;
    background-color: ${themeStyle.primaryBlueColor};
    display: block;
  }
`
export const StepList = styled.ul`
  list-style: none;
  padding: 0;
`
export const StepElem = styled.li`
  border-top: 1px solid ${themeStyle.grayBackground};
`

interface StepButtonProps {
  isOpen: boolean
  isLocked: boolean
}
export const StepButton = styled.button<StepButtonProps>`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${themeStyle.gray};
  padding: 18px 10px;
  text-align: left;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    background: no-repeat center url(${({ isLocked }) => (isLocked ? Lock : Arrow)});
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    transform: ${({ isOpen, isLocked }) => (!isOpen && !isLocked ? 'rotate(180deg)' : 'rotate(0)')};
  }
`
export const LessonList = styled.ul`
  list-style: none;
  padding: 0;
`
interface LessonButtonProps {
  isOn?: boolean
  isDone?: boolean
}
export const LessonElem = styled.li<LessonButtonProps>`
  /* background-color: ${themeStyle.grayBackground}; */
  display: flex;
  align-items: center;
  border: ${({ isOn }) => (isOn ? '2px solid rgba(126, 132, 140, 0.36)' : 'none')};
  background-color: ${({ isOn }) => (isOn ? 'transparent' : themeStyle.grayBackground)};

  border-radius: ${themeStyle.borderRradius};
  margin: 4px 0px;
  padding: 25px;
  position: relative;
  &::after {
    content: '';
    background: no-repeat center url(${Tick});
    width: 22px;
    height: 18px;
    display: ${({ isDone }) => (isDone ? 'inline-block' : 'none')};
    position: absolute;
    right: 30px;
    /* margin-right: 14px; */
  }
  & button {
    font-weight: ${({ isOn }) => (isOn ? 'bold' : 'normal')};
  }
`

export const LessonButton = styled.button`
  max-width: 244px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  font-size: 18px;
  line-height: 22px;
  color: ${themeStyle.black};
  border-radius: ${themeStyle.borderRradius};
  position: relative;
`

// ############################################ LESSON TEXT ############################################

export const LessonTextHeader = styled.h2``
