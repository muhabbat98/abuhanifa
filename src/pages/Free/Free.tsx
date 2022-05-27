import React from 'react'
import FreeComponent from '../../components/FreeComponent'
import Pagination from '../../components/PaginationComponent'
import { Container } from '../../theme'
import { CoursesComponent, CoursesHeader } from '../Courses/style'

export const Free = () => {
  return (
    <CoursesComponent>
      <Container>
        <CoursesHeader>Erkin kurslar</CoursesHeader>
        <FreeComponent />
        <Pagination />
      </Container>
    </CoursesComponent>
  )
}
