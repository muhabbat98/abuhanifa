import React from 'react'
import { AbuHanifaLogo, LogoContainer, MainNavbarComponent, NavbarContainer } from './style'
import { Container } from '../../theme'
const Navbar: React.FC = () => {
  return (
    <MainNavbarComponent>
      <Container>
        <NavbarContainer>
          <LogoContainer>
            <AbuHanifaLogo />
          </LogoContainer>
        </NavbarContainer>
      </Container>
    </MainNavbarComponent>
  )
}

export default Navbar
