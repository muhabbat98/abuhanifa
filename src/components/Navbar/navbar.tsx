import React from 'react'
import {
  AbuHanifaLogo,
  AddAbuHanifa,
  LogoContainer,
  MainNavbarComponent,
  NameAbuHanifa,
  NameContainer,
  NavbarContainer,
} from './style'
import { Container } from '../../theme'
import Navigation from './Navigation'
import Login from './Login'
import Logo from '../../assets/img/main-logo.png'
import { Link } from 'react-router-dom'
const Navbar: React.FC = () => {
  return (
    <MainNavbarComponent>
      <Container>
        <NavbarContainer>
          <Link to='/'>
            <LogoContainer>
              <AbuHanifaLogo src={Logo} />
              <NameContainer>
                <NameAbuHanifa> Abu Hanifa </NameAbuHanifa>
                <AddAbuHanifa> Islom akademiyasi</AddAbuHanifa>
              </NameContainer>
            </LogoContainer>
          </Link>
          <Navigation />
          <Login />
        </NavbarContainer>
      </Container>
    </MainNavbarComponent>
  )
}

export default Navbar
