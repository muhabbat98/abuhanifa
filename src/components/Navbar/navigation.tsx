import { NavLink } from 'react-router-dom'
import { NavigationContainer, NavigationElem, NavigationIcon, NavigationList } from './style'
import AboutLogo from '../../assets/img/about.svg'
import BookLogo from '../../assets/img/book.svg'
import StudyLogo from '../../assets/img/teacher.svg'
import { useState } from 'react'
import { themeStyle } from '../../theme'

export default function Navigation() {
  const [active, setActive] = useState('home')

  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationElem>
          <NavLink
            to='/'
            style={({ isActive }) =>
              isActive
                ? { color: `${themeStyle.black}`, backgroundColor: `${themeStyle.light}` }
                : { color: `${themeStyle.gray}`, backgroundColor: 'transparent' }
            }
          >
            <NavigationIcon src={AboutLogo} />
            Biz haqimizda
          </NavLink>
        </NavigationElem>
        <NavigationElem>
          <NavLink
            to='/courses'
            style={({ isActive }) =>
              isActive
                ? { color: `${themeStyle.black}`, backgroundColor: `${themeStyle.light}` }
                : { color: `${themeStyle.gray}`, backgroundColor: 'transparent' }
            }
          >
            <NavigationIcon src={BookLogo} />
            Akademiya darslari
          </NavLink>
        </NavigationElem>
        <NavigationElem>
          <NavLink
            to='/free'
            style={({ isActive }) =>
              isActive
                ? { color: `${themeStyle.black}`, backgroundColor: `${themeStyle.light}` }
                : { color: `${themeStyle.gray}`, backgroundColor: 'transparent' }
            }
          >
            <NavigationIcon src={StudyLogo} />
            Erkin kurslar
          </NavLink>
        </NavigationElem>
      </NavigationList>
    </NavigationContainer>
  )
}
