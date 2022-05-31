import React, { useState } from 'react'
import {
  Flag,
  FlagButton,
  FlagElement,
  FlagList,
  LangText,
  LanguageButton,
  LanguageContainer,
  LoginButton,
  LoginContainer,
  NavigationIcon,
} from './style'
import UZ from '../../assets/img/uz.png'
import RU from '../../assets/img/ru.png'
import ENG from '../../assets/img/us.png'

import LoginImg from '../../assets/img/login.svg'
const Login: React.FC = () => {
  const [lang, setLang] = useState([
    { text: 'Uz', isMain: false, src: UZ },
    { text: 'Ru', isMain: false, src: RU },
    { text: 'USA', isMain: true, src: ENG },
  ])
  const [open, setOpen] = useState(false)
  return (
    <LoginContainer>
      <div>
        <LoginButton>
          <NavigationIcon src={LoginImg} />
          Kirish
        </LoginButton>
      </div>
      <LanguageContainer>
        <LanguageButton onClick={() => setOpen((prev) => !prev)}>
          <Flag src={lang.find((l) => l.isMain)?.src} />
          {/* setOpen(false) */}
        </LanguageButton>
        <FlagList isActive={open} tabIndex={-1} onBlur={() => setOpen(false)}>
          {lang.map((l) => (
            <FlagElement key={l.text}>
              <FlagButton
                onClick={() =>
                  setLang((e) =>
                    e.map((lang) =>
                      lang.text === l.text ? { ...lang, isMain: true } : { ...lang, isMain: false },
                    ),
                  )
                }
              >
                <Flag src={l.src} />
                <LangText isMain={l.isMain}>{l.text}</LangText>
              </FlagButton>
            </FlagElement>
          ))}
        </FlagList>
      </LanguageContainer>
    </LoginContainer>
  )
}

export default Login
