import React from 'react'
import { Book } from '../../assets/img/Book'
import { Briefcase } from '../../assets/img/Briefcase'
import { Notes } from '../../assets/img/Notes'
import { Teacher } from '../../assets/img/Teacher'
import { Count, CountElement, CountHeader, CountList, CountLogo, CountSection } from './style'

export const CountComponent = () => {
  return (
    <CountSection>
      <CountList>
        <CountElement>
          <CountHeader>
            <CountLogo style={{ backgroundColor: '#3F8CFF' }}>
              <Briefcase fill='#FCFCFC' stroke='#3F8CFF' />
            </CountLogo>
            <i>Ustozlar</i>
          </CountHeader>
          <Count>73+</Count>
        </CountElement>
        <CountElement>
          <CountHeader>
            <CountLogo style={{ backgroundColor: '#6C5DD3' }}>
              <Teacher fill='#FCFCFC' stroke='#6C5DD3' />
            </CountLogo>
            <i>Ustozlar</i>
          </CountHeader>
          <Count>295+</Count>
        </CountElement>
        <CountElement>
          <CountHeader>
            <CountLogo style={{ backgroundColor: ' #68EDAD' }}>
              <Book fill='#FCFCFC' stroke=' #68EDAD' />
            </CountLogo>
            <i>Ustozlar</i>
          </CountHeader>
          <Count>912+</Count>
        </CountElement>
        <CountElement>
          <CountHeader>
            <CountLogo style={{ backgroundColor: '#FF9A7B' }}>
              <Notes fill='#FCFCFC' stroke='#FF9A7B' />
            </CountLogo>
            <i>Ustozlar</i>
          </CountHeader>
          <Count>5200+</Count>
        </CountElement>
      </CountList>
    </CountSection>
  )
}
