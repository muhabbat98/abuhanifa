import React from 'react'
import {
  AdditionalInfo,
  AdditionalInfoContainer,
  Course,
  CourseLogo,
  CourseLogoContainer,
  CourseName,
  Info,
  InfoLogo,
  InfoText,
} from '../CourseComponent/style'
import PenIcon from '../../assets/img/pen.svg'
import ArrowIcon from '../../assets/img/arrow-right.svg'
import AnnounceIcon from '../../assets/img/announce.svg'
import Pensil from '../../assets/img/pencil.svg'

import { Link } from 'react-router-dom'
import { Book } from '../../assets/img/Book'
import { FreeContainer } from './style'

export const FreeComponent = () => {
  return (
    <FreeContainer>
      <Course style={{ width: 'auto' }}>
        <Link to='/'>
          <CourseLogoContainer>
            <CourseLogo src={PenIcon} />
          </CourseLogoContainer>
          <CourseName>Husnixat</CourseName>
          <AdditionalInfoContainer>
            <AdditionalInfo style={{ justifyContent: 'space-between' }}>
              <Info>
                <InfoLogo>
                  <Book fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>9 ta dars</InfoText>
              </Info>
              <Info>
                {/* <Link to='/'> */}
                <img style={{ right: '0' }} src={ArrowIcon} alt='arrow' />
                {/* </Link> */}
              </Info>
            </AdditionalInfo>
          </AdditionalInfoContainer>
        </Link>
      </Course>
      {/* Course ending */}
      <Course style={{ width: 'auto' }}>
        <Link to='/'>
          <CourseLogoContainer>
            <CourseLogo src={AnnounceIcon} />
          </CourseLogoContainer>
          <CourseName>Qiroat qilish</CourseName>

          <AdditionalInfoContainer>
            <AdditionalInfo style={{ justifyContent: 'space-between' }}>
              <Info>
                <InfoLogo>
                  <Book fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>9 ta dars</InfoText>
              </Info>
              <Info>
                {/* <Link to='/'> */}
                <img style={{ right: '0' }} src={ArrowIcon} alt='arrow' />
                {/* </Link> */}
              </Info>
            </AdditionalInfo>
          </AdditionalInfoContainer>
        </Link>
      </Course>
      {/* Course ending */}
      <Course style={{ width: 'auto' }}>
        <Link to='/'>
          <CourseLogoContainer>
            <CourseLogo src={Pensil} />
          </CourseLogoContainer>
          <CourseName>Islom moliyasi</CourseName>
          <AdditionalInfoContainer>
            <AdditionalInfo style={{ justifyContent: 'space-between' }}>
              <Info>
                <InfoLogo>
                  <Book fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>9 ta dars</InfoText>
              </Info>

              <Info>
                {/* <Link to='/'> */}
                <img style={{ right: '0' }} src={ArrowIcon} alt='arrow' />
                {/* </Link> */}
              </Info>
            </AdditionalInfo>
          </AdditionalInfoContainer>
        </Link>
      </Course>
      {/* Course ending */}
      <Course style={{ width: 'auto' }}>
        <Link to='/'>
          <CourseLogoContainer>
            <CourseLogo src={AnnounceIcon} />
          </CourseLogoContainer>
          <CourseName>Balog‘at darslari</CourseName>
          <AdditionalInfoContainer>
            <AdditionalInfo style={{ justifyContent: 'space-between' }}>
              <Info>
                <InfoLogo>
                  <Book fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>9 ta dars</InfoText>
              </Info>

              <Info>
                {/* <Link to='/'> */}
                <img style={{ right: '0' }} src={ArrowIcon} alt='arrow' />
                {/* </Link> */}
              </Info>
            </AdditionalInfo>
          </AdditionalInfoContainer>
        </Link>
      </Course>
      {/* Course ending */}
      <Course style={{ width: 'auto' }}>
        <Link to='/'>
          <CourseLogoContainer>
            <CourseLogo src={AnnounceIcon} />
          </CourseLogoContainer>
          <CourseName>Tajvid ilmi</CourseName>
          <AdditionalInfoContainer>
            <AdditionalInfo style={{ justifyContent: 'space-between' }}>
              <Info>
                <InfoLogo>
                  <Book fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>9 ta dars</InfoText>
              </Info>

              <Info>
                {/* <Link to='/'> */}
                <img style={{ right: '0' }} src={ArrowIcon} alt='arrow' />
                {/* </Link> */}
              </Info>
            </AdditionalInfo>
          </AdditionalInfoContainer>
        </Link>
      </Course>
      {/* Course ending */}
      <Course style={{ width: 'auto' }}>
        <Link to='/'>
          <CourseLogoContainer>
            <CourseLogo src={AnnounceIcon} />
          </CourseLogoContainer>
          <CourseName>Arab tili</CourseName>
          <AdditionalInfoContainer>
            <AdditionalInfo style={{ justifyContent: 'space-between' }}>
              <Info>
                <InfoLogo>
                  <Book fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>9 ta dars</InfoText>
              </Info>

              <Info>
                {/* <Link to='/'> */}
                <img style={{ right: '0' }} src={ArrowIcon} alt='arrow' />
                {/* </Link> */}
              </Info>
            </AdditionalInfo>
          </AdditionalInfoContainer>
        </Link>
      </Course>
      {/* Course ending */}
      <Course style={{ width: 'auto' }}>
        <Link to='/'>
          <CourseLogoContainer>
            <CourseLogo src={AnnounceIcon} />
          </CourseLogoContainer>
          <CourseName>Adoid</CourseName>
          <AdditionalInfoContainer>
            <AdditionalInfo style={{ justifyContent: 'space-between' }}>
              <Info>
                <InfoLogo>
                  <Book fill='rgba(126, 132, 140, 0.12)' stroke='#1A1D1F' />
                </InfoLogo>
                <InfoText>9 ta dars</InfoText>
              </Info>

              <Info>
                {/* <Link to='/'> */}
                <img style={{ right: '0' }} src={ArrowIcon} alt='arrow' />
                {/* </Link> */}
              </Info>
            </AdditionalInfo>
          </AdditionalInfoContainer>
        </Link>
      </Course>
    </FreeContainer>
  )
}
