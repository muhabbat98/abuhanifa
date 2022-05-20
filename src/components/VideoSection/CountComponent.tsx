import React from 'react'
import { Book } from '../../assets/img/Book'
import { Container } from '../../theme'
import { Count, CountElement, CountList, CountLogo, CountSection } from './style'

export const CountComponent = () => {
  return (
    <Container>
      <CountSection>
        <CountList>
          <CountElement>
            <CountLogo style={{ backgroundColor: '#3F8CFF' }}>
              <Book fill='#FCFCFC' stroke='#3F8CFF' />
            </CountLogo>
            <i>Ustozlar</i>
            <Count>73+</Count>
          </CountElement>
          <CountElement>
            <CountLogo>
              {/* <Book /> */}
              <i>Ustozlar</i>
            </CountLogo>
            <Count>73+</Count>
          </CountElement>
          <CountElement>
            <CountLogo>
              {/* <Book /> */}
              <i>Ustozlar</i>
            </CountLogo>
            <Count>73+</Count>
          </CountElement>
          <CountElement>
            <CountLogo>
              {/* <Book /> */}
              <i>Ustozlar</i>
            </CountLogo>
            <Count>73+</Count>
          </CountElement>
        </CountList>
      </CountSection>
    </Container>
  )
}
