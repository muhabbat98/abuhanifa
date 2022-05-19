import styled from 'styled-components'
import { themeStyle } from '../../theme'

export const Section = styled.section`
  background-color: ${themeStyle.grayBlueBackground};
`

export const MiniContainer = styled.div`
  width: 1005px;
  margin: 0 auto;
  padding: 40px 0px;
`
export const AbuHanifaText = styled.h1`
  font-size: 64px;
  text-align: center;
  font-weight: 700;
  color: ${themeStyle.primaryBlueColor};
  line-height: 66px;
  margin-top: 40px;
  margin-bottom: 20px;
  & span {
    font-size: 64px;
    font-weight: 700;
    color: ${themeStyle.black};
    display: block;
  }
`
export const AbuHanifaDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${themeStyle.black};
  opacity: 0.48;
  width: 601px;
  margin: 0 auto;
  text-align: center;
`
export const ButtonSection = styled.div`
  text-align: center;
  margin: 30px 0px;
`
export const MainButton = styled.button`
  outline: none;
  border: none;
  border-radius: ${themeStyle.borderRradius};
  background-color: ${themeStyle.light};
  color: ${themeStyle.black};
  padding: ${themeStyle.buttonPadding};
  margin-left: 18px;
  &:hover {
    background-color: ${themeStyle.primaryBlueColor};
    color: ${themeStyle.light};
    transition: all 0.6s ease;
  }
`
//  #################################################         SERTIFICATION       ##############################################

export const SertificationSection = styled.section`
  background-color: ${themeStyle.secondaryBlueColor};
  text-align: center;
  & p {
    color: ${themeStyle.light};
    max-width: 500px;
    margin-bottom: 18px;
  }
`
export const SertificationText = styled.h3`
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  color: ${themeStyle.light};
  margin: 12px 0px;
`
