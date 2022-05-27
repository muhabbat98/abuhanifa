import React from 'react'
import { useParams } from 'react-router-dom'
import SubjectCard from '../../../components/SubjectCard'
import { Container } from '../../../theme'
import { CoursesComponent, CoursesHeader } from '../style'
import { LessonsContainer, LoadButton } from './style'

export const Subjects = () => {
  const { subjectId } = useParams()
  console.log(subjectId)
  return (
    <CoursesComponent>
      <Container>
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
