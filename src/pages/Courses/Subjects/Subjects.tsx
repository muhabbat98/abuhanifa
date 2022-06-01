import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SubjectCard from '../../../components/SubjectCard'
import { Container } from '../../../theme'
import { CoursesComponent, CoursesHeader } from '../style'
import { CurrentPage, LessonsContainer, LoadButton, PageButton, PageController } from './style'
import Arrow from '../../../assets/img/arrow-right.svg'
export const Subjects = () => {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    // console.log('subject', subjectId)
  }, [])
  return (
    <CoursesComponent>
      <Container>
        <PageController>
          <PageButton onClick={() => navigate(-1)}>
            <img src={Arrow} alt='arrow' />
            Erkin kurslar
          </PageButton>
          <CurrentPage>Husnixat</CurrentPage>
        </PageController>
        <CoursesHeader>Husnixat</CoursesHeader>
        <LessonsContainer>
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </LessonsContainer>
        <LoadButton>Yana ko‘rsatish</LoadButton>
      </Container>
    </CoursesComponent>
  )
}
