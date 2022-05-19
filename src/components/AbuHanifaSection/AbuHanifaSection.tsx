import React from 'react'
import { Sertification } from './Sertification'
import {
  AbuHanifaDescription,
  AbuHanifaText,
  ButtonSection,
  MainButton,
  MiniContainer,
  Section,
} from './style'

export const AbuHanifaSection = () => {
  return (
    <>
      <Section>
        <MiniContainer>
          <AbuHanifaText>
            Imom Abu Hanifa
            <span>xalqaro islom akademiyasi</span>
          </AbuHanifaText>
          <AbuHanifaDescription>
            Akademiyada islomiy bilimlar Imom Abu Hanifa mazhabiga muvofiq, moʻtadillik tamoyiliga
            asosan oʻrgatiladi.
          </AbuHanifaDescription>
          <ButtonSection>
            <MainButton>Akademiyada o‘qish</MainButton>
            <MainButton>Kurslarni ko‘rish</MainButton>
          </ButtonSection>
        </MiniContainer>
      </Section>
      <Sertification />
    </>
  )
}
