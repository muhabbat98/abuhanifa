import styled from 'styled-components'
import { themeStyle } from '../../theme'

export const LoginComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  min-width: 408px;
  min-height: 428px;
  background-color: white;
  z-index: 10;
  box-shadow: 0px 54px 50px rgba(67, 67, 68, 0.0705882);
  border-radius: 15px;
  padding: 36px 54px;
`
export const LoginHeader = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: ${themeStyle.black};
  text-align: center;
`
export const LoginForm = styled.form`
  & > div {
    margin: 24px 0px;
  }
`
export const LebalForm = styled.label`
  display: block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${themeStyle.gray};
`
export const SubmitInput = styled.input`
  border: none;
  border-radius: ${themeStyle.borderRradius};
  background-color: ${themeStyle.grayBackground};
  padding: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: gray;
  outline: none;
  width: 100%;
`

export const SubmitButton = styled.button`
  width: 100%;
  outline: none;
  background-color: ${themeStyle.grayBackground};
  border: none;
  padding: 16px;
  border-radius: ${themeStyle.borderRradius};
  &:hover {
    background-color: ${themeStyle.primaryBlueColor};
    color: #fff;
    transition: background-color 0.5s ease;
  }
`
