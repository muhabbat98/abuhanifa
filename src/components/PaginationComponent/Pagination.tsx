import React from 'react'
import SubjectCard from '../SubjectCard'
import {
  CartContainer,
  CourseBtn,
  CourseController,
  CourseHeader,
  CourseName,
  PaginationComponent,
} from './style'
import Arrow from '../../assets/img/arrow-right.svg'
export const Pagination = () => {
  return (
    <PaginationComponent>
      <CourseHeader>
        <CourseName>Tavsiya etiladi</CourseName>
        <CourseController>
          <CourseBtn>
            <img src={Arrow} alt='arrow right' />
          </CourseBtn>
          <CourseBtn>
            <img src={Arrow} alt='arrow right' />
          </CourseBtn>
        </CourseController>
      </CourseHeader>
      <CartContainer>
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
      </CartContainer>
    </PaginationComponent>
  )
}
