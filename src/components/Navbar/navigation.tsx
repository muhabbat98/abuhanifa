import { Link } from 'react-router-dom'
import { NavigationContainer, NavigationElem, NavigationIcon, NavigationList } from './style'
import AboutLogo from '../../assets/img/about.svg'
import BookLogo from '../../assets/img/book.svg'
import StudyLogo from '../../assets/img/teacher.svg'
import { useState } from 'react'

export default function Navigation() {
  const [active, setActive] = useState('home')
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationElem isActive={active === 'home'}>
          <Link to='/'>
            <NavigationIcon src={AboutLogo} />
            Biz haqimizda
          </Link>
        </NavigationElem>
        <NavigationElem isActive={active === 'about'}>
          <Link to='/'>
            <NavigationIcon src={BookLogo} />
            Akademiya darslari
          </Link>
        </NavigationElem>
        <NavigationElem isActive={active === 'course'}>
          <Link to='/'>
            <NavigationIcon src={StudyLogo} />
            Erkin kurslar
          </Link>
        </NavigationElem>
      </NavigationList>
    </NavigationContainer>
  )
}
