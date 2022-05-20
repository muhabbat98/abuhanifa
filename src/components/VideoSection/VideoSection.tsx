import React from 'react'
import { Container } from '../../theme'
import { CountComponent } from './CountComponent'
import {
  VideoContainer,
  VideoContainSection,
  VideoHeader,
  VideoText,
  VideoTextContainer,
} from './style'

export const VideoSection = () => {
  return (
    <>
      <VideoContainSection>
        <Container>
          <VideoContainer>
            <div>
              <iframe
                width='557'
                height='463'
                src='https://www.youtube.com/embed/D1UbKZA742g'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                style={{ borderRadius: '30px', overflow: 'hidden' }}
                allowFullScreen
              ></iframe>
            </div>
            <VideoTextContainer>
              <VideoHeader>Akademiyamiz haqida qisqacha video</VideoHeader>
              <VideoText>
                Imom Abu Hanifa akademiyasi 2019 yilda tashkil topgan bo‘lib, 6 ta fandan dars berib
                keladi. Batafsil ma’lumot uchun videoni ko‘ring
              </VideoText>
            </VideoTextContainer>
          </VideoContainer>
        </Container>
      </VideoContainSection>
      <CountComponent />
    </>
  )
}
