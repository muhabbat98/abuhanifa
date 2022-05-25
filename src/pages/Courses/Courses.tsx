import React from 'react'
import CourseComponent from '../../components/CourseComponent'
import Question from '../../components/QuestionsComponent'
import { Container } from '../../theme'
import { CoursesHeader, CoursesComponent } from './style'

export const Courses = () => {
  return (
    <>
      <CoursesComponent>
        <Container>
          <CoursesHeader>Akademiya darslari</CoursesHeader>
          <CourseComponent />
        </Container>
      </CoursesComponent>
      <Question />
    </>
  )
}
