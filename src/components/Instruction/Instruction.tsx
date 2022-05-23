import React from 'react'
import { Container } from '../../theme'
import { MiniContainer } from '../AbuHanifaSection/style'
import {
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
          <LineBreak source={Line} />
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
          <LineBreak source={Line} style={{ transform: 'rotateX(180deg)' }} />
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

          <LineBreak source={Line} style={{ transform: 'scaleX(-50%) skew(20deg)' }} />
        </InstructionList>
      </Container>
    </InstructionComponent>
  )
}
