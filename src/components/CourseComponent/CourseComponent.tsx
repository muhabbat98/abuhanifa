import React from 'react'
import {
  AdditionalInfo,
  AdditionalInfoContainer,
  Course,
  CourseButton,
  CourseContainer,
  CourseDegree,
  CourseDegreeContainer,
  CourseLogo,
  CourseLogoContainer,
  CourseName,
  CourseProgres,
  Info,
  InfoLogo,
  InfoText,
} from './style'
import PenIcon from '../../assets/img/pen.svg'
import InfoIcon from '../../assets/img/Button.svg'
import ArrowIcon from '../../assets/img/arrow-right.svg'
import AnnounceIcon from '../../assets/img/announce.svg'
import { Link } from 'react-router-dom'
import { Book } from '../../assets/img/Book'
import { Clock } from '../../assets/img/Clock'
import { Teacher } from '../../assets/img/Teacher'

export const CourseComponent = () => {
  return (
    <CourseContainer>
      {/* Course beginning */}
      <Course>
        <Link to='/'>
          <CourseLogoContainer>
            <CourseLogo src={PenIcon} />
            <CourseButton>
              <img src={InfoIcon} alt='about course' />
            </CourseButton>
          </CourseLogoContainer>
          <CourseName>Adoid</CourseName>
          <CourseDegreeContainer>
            <CourseDegree>2-bosqich</CourseDegree>
            <CourseProgres progress={80}></CourseProgres>
          </CourseDegreeContainer>
          <AdditionalInfoContainer>
            <AdditionalInfo>
              <Info>
                <InfoLogo>
                  <Book fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>9 ta dars</InfoText>
              </Info>
              <Info>
                <InfoLogo>
                  <Clock fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>2soat 5daqiqa</InfoText>
              </Info>
              <Info>
                <InfoLogo>
                  <Teacher fill='#1A1D1F' />
                </InfoLogo>
                <InfoText>5234 talaba</InfoText>
              </Info>
              <Info>
                {/* <Link to='/'> */}
                <img src={ArrowIcon} alt='arrow' />
                {/* </Link> */}
              </Info>
            </AdditionalInfo>
          </AdditionalInfoContainer>
        </Link>
      </Course>
      {/* Course ending */}
      <Course>
        <Link to='/'>
          <CourseLogoContainer>
            <CourseLogo src={AnnounceIcon} />
            <CourseButton>
              <img src={InfoIcon} alt='about course' />
            </CourseButton>
          </CourseLogoContainer>
          <CourseName>Adoid</CourseName>
          <CourseDegreeContainer>
            <CourseDegree>2-bosqich</CourseDegree>
            <CourseProgres progress={80}></CourseProgres>
          </CourseDegreeContainer>
          <AdditionalInfoContainer>
            <AdditionalInfo>
              <Info>
                <InfoLogo>
                  <Book fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>9 ta dars</InfoText>
              </Info>
              <Info>
                <InfoLogo>
                  <Clock fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>2soat 5daqiqa</InfoText>
              </Info>
              <Info>
                <InfoLogo>
                  <Teacher fill='#1A1D1F' />
                </InfoLogo>
                <InfoText>5234 talaba</InfoText>
              </Info>
              <Info>
                {/* <Link to='/'> */}
                <img src={ArrowIcon} alt='arrow' />
                {/* </Link> */}
              </Info>
            </AdditionalInfo>
          </AdditionalInfoContainer>
        </Link>
      </Course>
    </CourseContainer>
  )
}
