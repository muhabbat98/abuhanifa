import React from 'react'
import { Container } from '../../theme'
import { MiniContainer } from '../AbuHanifaSection/style'
import {
  EndPart,
  EndPartLogo,
  InstructionComponent,
  InstructionDescription,
  InstructionHeader,
  InstructionImage,
  InstructionImageContainer,
  InstructionList,
  InstructionStep,
  InstructionStepHeader,
  InstructionText,
  LineBreak,
} from './style'
import InstructionFirst from '../../assets/img/Instruction-1.png'
import InstructionSecond from '../../assets/img/Instruction-2.png'
import InstructionThird from '../../assets/img/Instruction-3.png'

import Line from '../../assets/img/Line.svg'
import { Briefcase } from '../../assets/img/Briefcase'

export const Instruction = () => {
  return (
    <InstructionComponent>
      <Container>
        <InstructionHeader>Akademiya darslarini boshlash bo‘yicha qo‘llanma</InstructionHeader>
        <InstructionText>
          Juda ham oson. Atigi 3 ta qadam bilan akademiya darslarini boshlashingiz mumkin. Hech
          qanday shaxsiy ma’lumotlar so‘ralmaydi
        </InstructionText>
        <InstructionList>
          <InstructionImageContainer>
            <InstructionImage src={InstructionFirst} />
          </InstructionImageContainer>
          <InstructionDescription>
            <InstructionStepHeader>
              <InstructionStep>1-QADAM</InstructionStep>
              Platformadan ro‘yxatdan o‘ting
            </InstructionStepHeader>
            <InstructionText style={{ textAlign: 'justify', maxWidth: '457px', margin: '0' }}>
              Select from one of our form types and use our handcrafted form builder to easily build
              forms using our 15+ form fields, logic and much more.
            </InstructionText>
          </InstructionDescription>
          <LineBreak source={Line} style={{ transform: 'rotateX(180deg)' }} />
        </InstructionList>

        <InstructionList>
          <InstructionDescription>
            <InstructionStepHeader>
              <InstructionStep>2-QADAM</InstructionStep>
              Biror fanni tanlang
            </InstructionStepHeader>
            <InstructionText style={{ textAlign: 'justify', maxWidth: '457px', margin: '0' }}>
              Akademiya darslari bo‘limiga o‘tib, 6ta fandan istalganini tanlang. Hozirda
              akademiyada fiqh, siyrat, odob, tafsir, aqoid fanlari mavjud
            </InstructionText>
          </InstructionDescription>
          <InstructionImageContainer>
            <InstructionImage src={InstructionSecond} />
          </InstructionImageContainer>
          <LineBreak source={Line} />
        </InstructionList>

        <InstructionList>
          <InstructionImageContainer>
            <InstructionImage src={InstructionThird} />
          </InstructionImageContainer>
          <InstructionDescription>
            <InstructionStepHeader>
              <InstructionStep>3-QADAM</InstructionStep>
              Ta’lim olishni boshlang
            </InstructionStepHeader>
            <InstructionText style={{ textAlign: 'justify', maxWidth: '457px', margin: '0' }}>
              Biror fanni tanlaganingizdan keyin, ta’limni boshlasangiz ham bo‘laveradi. Har bir fan
              4 ta bosqichdan iborat bo‘lib, har bosqich yakunida test topshiriqlari bo‘ladi
            </InstructionText>
          </InstructionDescription>

          <LineBreak
            source={Line}
            style={{ transform: 'scaleX(-0.5) skewY(10deg) translateX(-225px)', bottom: '-50%' }}
          />
        </InstructionList>
        <EndPart>
          <EndPartLogo>
            <svg
              width='36'
              height='36'
              viewBox='0 0 36 36'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.875 27.3749H13.5C11.85 27.3749 10.5 28.7249 10.5 30.3749V30.7499H9C8.385 30.7499 7.875 31.2599 7.875 31.8749C7.875 32.4899 8.385 32.9999 9 32.9999H27C27.615 32.9999 28.125 32.4899 28.125 31.8749C28.125 31.2599 27.615 30.7499 27 30.7499H25.5V30.3749C25.5 28.7249 24.15 27.3749 22.5 27.3749H19.125V23.9399C18.75 23.9849 18.375 23.9999 18 23.9999C17.625 23.9999 17.25 23.9849 16.875 23.9399V27.3749Z'
                fill='#FED14C'
              />
              <path
                d='M27.72 17.46C28.71 17.085 29.58 16.47 30.27 15.78C31.665 14.235 32.58 12.39 32.58 10.23C32.58 8.07 30.885 6.375 28.725 6.375H27.885C26.91 4.38 24.87 3 22.5 3H13.5C11.13 3 9.09004 4.38 8.11504 6.375H7.27504C5.11504 6.375 3.42004 8.07 3.42004 10.23C3.42004 12.39 4.33504 14.235 5.73004 15.78C6.42004 16.47 7.29004 17.085 8.28004 17.46C9.84004 21.3 13.59 24 18 24C22.41 24 26.16 21.3 27.72 17.46ZM22.26 12.675L21.33 13.815C21.18 13.98 21.075 14.31 21.09 14.535L21.18 16.005C21.24 16.905 20.595 17.37 19.755 17.04L18.39 16.5C18.18 16.425 17.82 16.425 17.61 16.5L16.245 17.04C15.405 17.37 14.76 16.905 14.82 16.005L14.91 14.535C14.925 14.31 14.82 13.98 14.67 13.815L13.74 12.675C13.155 11.985 13.41 11.22 14.28 10.995L15.705 10.635C15.93 10.575 16.2 10.365 16.32 10.17L17.115 8.94C17.61 8.175 18.39 8.175 18.885 8.94L19.68 10.17C19.8 10.365 20.07 10.575 20.295 10.635L21.72 10.995C22.59 11.22 22.845 11.985 22.26 12.675Z'
                fill='#FED14C'
              />
            </svg>
          </EndPartLogo>
          <InstructionHeader style={{ textAlign: 'center' }}>
            Diplom olish uchun esa...
          </InstructionHeader>
          <InstructionText>
            Akademiya fanlarining barchasini ya’ni 6ta fanni 4 bosqichda muvaffaqiyatli
            tugatganingizdan so‘ng sizga Imom Abu Hanifa akademiyasi diplomi beriladi!
          </InstructionText>
        </EndPart>
      </Container>
    </InstructionComponent>
  )
}
