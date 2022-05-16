import { Link } from 'react-router-dom'
import { NavigationContainer, NavigationElem, NavigationIcon, NavigationList } from './style'
import AboutLogo from '../../assets/img/about.png'
import BookLogo from '../../assets/img/book.png'
import StudyLogo from '../../assets/img/teacher.png'

export default function Navigation() {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationElem>
          <Link to='/'>
            <NavigationIcon src={AboutLogo} />
            Biz haqimizda
          </Link>
        </NavigationElem>
        <NavigationElem>
          <Link to='/'>
            <NavigationIcon src={BookLogo} />
            Akademiya darslari
          </Link>
        </NavigationElem>
        <NavigationElem>
          <Link to='/'>
            <NavigationIcon src={StudyLogo} />
            Erkin kurslar
          </Link>
        </NavigationElem>
      </NavigationList>
    </NavigationContainer>
  )
}
