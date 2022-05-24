import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../theme'
import {
  FooterComponent,
  FooterGroup,
  FooterList,
  FooterListElem,
  FooterListHeader,
  SocialLink,
} from './style'
import { FacebookIcon } from '../../assets/img/FacebookIcon'
import { TwitterIcon } from '../../assets/img/TwitterIcon'
import { InstagramIcon } from '../../assets/img/InstagramIcon'

export const Footer = () => {
  return (
    <FooterComponent>
      <Container>
        <FooterGroup>
          <FooterList>
            <FooterListElem>
              <FooterListHeader>SAHIFALAR</FooterListHeader>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Biz haqimizda</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Akademiya darslari</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Erkin kurslar</Link>
            </FooterListElem>
          </FooterList>
          <FooterList>
            <FooterListElem>
              <FooterListHeader>AKADEMIYA DARSLARI</FooterListHeader>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Aqoid darslari</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Odob darslari</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Siyrat darslari</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Hadis darslari</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Tafsir darslari</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Fiqh darslari</Link>
            </FooterListElem>
          </FooterList>
          <FooterList>
            <FooterListElem>
              <FooterListHeader>ERKIN KURSLAR</FooterListHeader>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Qiroat</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Tajvid</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Husnixat</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>Islom moliyasi</Link>
            </FooterListElem>
            <FooterListElem>
              <Link to='/'>va boshqalar</Link>
            </FooterListElem>
          </FooterList>
          <FooterList>
            <FooterListElem>
              <FooterListHeader>KONTAKTLAR</FooterListHeader>
            </FooterListElem>
            <FooterListElem>
              <a href='tel:+998 (71) 200-02-02'>+998 (71) 200-02-02</a>
            </FooterListElem>
            <FooterListElem>
              <address>Turkiya, Istanbul, Fethiya 4-uy</address>
            </FooterListElem>
            <FooterListElem>
              <a href='mailto:akademiya@info.uz'>akademiya@info.uz</a>
            </FooterListElem>
            <FooterListElem>
              <SocialLink>
                <a href='https://www.facebook.com/'>
                  <FacebookIcon fill='white' />
                </a>
                <a href='https://www.instagram.com/'>
                  <TwitterIcon fill='white' />
                </a>
                <a href='https://www.instagram.com/'>
                  <InstagramIcon fill='white' />
                </a>
              </SocialLink>
            </FooterListElem>
          </FooterList>
        </FooterGroup>
      </Container>
    </FooterComponent>
  )
}
