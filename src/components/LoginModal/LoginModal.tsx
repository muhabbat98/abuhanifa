import React from 'react'
import {
  LebalForm,
  LoginComponent,
  LoginContainer,
  LoginForm,
  LoginHeader,
  SubmitButton,
  SubmitInput,
} from './style'

interface LoginModalProps {
  setModal: (value: boolean) => void
}
export const LoginModal: React.FC<LoginModalProps> = ({ setModal }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitHandler = (e: any) => {
    e.preventDefault()
    setModal(false)
  }
  return (
    <LoginComponent
      tabIndex={-1}
      onClick={(e) => {
        if ((e.target as HTMLAnchorElement).tabIndex === -1) setModal(false)
      }}
    >
      <LoginContainer tabIndex={0}>
        <LoginHeader tabIndex={0}>Platformaga kirish</LoginHeader>
        <LoginForm tabIndex={0} onSubmit={submitHandler}>
          <div>
            <LebalForm tabIndex={0} htmlFor='username'>
              username
            </LebalForm>
            <SubmitInput tabIndex={0} type='text' id='username' />
          </div>
          <div>
            <LebalForm tabIndex={0} htmlFor='password'>
              password
            </LebalForm>
            <SubmitInput tabIndex={0} id='password' type={'password'} />
          </div>
          <SubmitButton type='submit'>Davom etish</SubmitButton>
        </LoginForm>
      </LoginContainer>
    </LoginComponent>
  )
}
