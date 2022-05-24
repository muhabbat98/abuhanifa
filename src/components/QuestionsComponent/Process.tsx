import React from 'react'
import { ProcessButton, ProcessComponent, ProcessText } from './style'

export const Process = () => {
  return (
    <ProcessComponent>
      <ProcessText>
        Akademiyamizda <span>200,000+</span> talabalar ta’lim olishmoqda
      </ProcessText>
      <ProcessButton>Ta’limni boshlash</ProcessButton>
    </ProcessComponent>
  )
}
