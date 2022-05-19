import React from 'react'
import {
  AbuHanifaDescription,
  MainButton,
  MiniContainer,
  SertificationSection,
  SertificationText,
} from './style'

export const Sertification = () => {
  return (
    <SertificationSection>
      <MiniContainer>
        <SertificationText>Akademiya qonuniy sertifikatga ega</SertificationText>
        <AbuHanifaDescription>
          Imom Abu Hanifa akademiyasi diniy ta’lim berish bo’yicha qonuniy va ishonchli sertifikatga
          ega.
        </AbuHanifaDescription>
        <MainButton>Sertifikatni ko‘rish</MainButton>
      </MiniContainer>
    </SertificationSection>
  )
}
