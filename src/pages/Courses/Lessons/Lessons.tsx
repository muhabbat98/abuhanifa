import React from 'react'
import { useParams } from 'react-router-dom'
import { Video } from '../../../assets/img/Video'
import PdfComponent from '../../../components/PdfComponent'
import { Container, themeStyle } from '../../../theme'
import {
  LessonButton,
  LessonComponent,
  LessonContainer,
  LessonElem,
  LessonHeader,
  LessonHeaderContainer,
  LessonList,
  LessonListContainer,
  LessonName,
  LessonProgress,
  LessonProgressBar,
  LessonProgressHeader,
  LessonProgressPresent,
  LessonsTextContainer,
  LessonTextHeader,
  StepButton,
  StepElem,
  StepList,
  VideoContainer,
} from './style'

export const Lessons = () => {
  const { subjectId } = useParams()
  console.log(subjectId)
  return (
    <LessonComponent>
      <Container>
        <LessonContainer>
          <VideoContainer>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/D1UbKZA742g'
              title='Abu hanifa '
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </VideoContainer>
          <LessonListContainer>
            <LessonHeaderContainer>
              <LessonHeader>Kurs tarkibi</LessonHeader>
              <LessonName>Aqoid</LessonName>
            </LessonHeaderContainer>
            <LessonProgress>
              <LessonProgressHeader>Progress</LessonProgressHeader>
              <LessonProgressPresent persent='(28%)'>9/30</LessonProgressPresent>
            </LessonProgress>
            <LessonProgressBar persent='28%' />
            <StepList>
              <StepElem>
                <StepButton isOpen={true} isLocked={false}>
                  Aqoid ilmi: 1-bosqich
                </StepButton>
                <LessonList>
                  <LessonElem isDone={true} isOn={false}>
                    <span style={{ marginRight: '14px' }}>
                      <Video fill={themeStyle.secondaryBlueColor} />
                    </span>
                    <LessonButton>1. Shahodat kalimasiga tarif</LessonButton>
                  </LessonElem>
                  <LessonElem isDone={false} isOn={true}>
                    <span style={{ marginRight: '14px' }}>
                      <Video fill={themeStyle.primaryBlueColor} />
                    </span>
                    <LessonButton>2. Shahodat kalimasining tarif</LessonButton>
                  </LessonElem>
                  <LessonElem isDone={false} isOn={false}>
                    <span style={{ marginRight: '14px' }}>
                      <Video fill={themeStyle.secondaryBlueColor} />
                    </span>
                    <LessonButton>3. Shahodat kalimasiga taa gfsadhad</LessonButton>
                  </LessonElem>
                </LessonList>
              </StepElem>
              <StepElem>
                <StepButton isOpen={false} isLocked={true}>
                  Aqoid ilmi: 2-bosqich
                </StepButton>
              </StepElem>
              <StepElem>
                <StepButton isOpen={false} isLocked={false}>
                  Aqoid ilmi: 3-bosqich
                </StepButton>
              </StepElem>
            </StepList>
          </LessonListContainer>
          <LessonsTextContainer>
            <LessonTextHeader>Tavhidga chaqirishning fazilatlari va usul-yo‘llari</LessonTextHeader>
            <PdfComponent />
          </LessonsTextContainer>
        </LessonContainer>
      </Container>
    </LessonComponent>
  )
}
