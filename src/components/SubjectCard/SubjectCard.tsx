import React from 'react'
import { CartImg, LessonCartComponent, LessonName } from './style'
import Lesson1 from '../../assets/img/lesson1.png'
import { AdditionalInfo, Info, InfoLogo, InfoText } from '../CourseComponent/style'
import { Book } from '../../assets/img/Book'
import { Clock } from '../../assets/img/Clock'
import { Link } from 'react-router-dom'

export const SubjectCard = () => {
  return (
    <LessonCartComponent>
      <Link to='/'>
        <CartImg>
          <img src={Lesson1} alt='lesson' />
        </CartImg>
        <LessonName cost='420,000 so‘m'>Arab husnixati: Fors-arab kalligrafiyasi kursi</LessonName>
        <AdditionalInfo>
          <Info>
            <InfoLogo>
              <Book fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
            </InfoLogo>
            <InfoText>13 ta dars</InfoText>
          </Info>
          <Info>
            <Clock fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
            <InfoText>3soat 20daqiqa</InfoText>
          </Info>
        </AdditionalInfo>
      </Link>
    </LessonCartComponent>
  )
}
