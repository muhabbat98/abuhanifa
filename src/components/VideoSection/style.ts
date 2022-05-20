import styled from 'styled-components'
import { themeStyle } from '../../theme'

export const VideoContainSection = styled.section`
  background-color: ${themeStyle.light};
  padding: 130px 0px;
  box-sizing: border-box;
`

export const VideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  /* align-items: center; */
`
export const VideoTextContainer = styled.div`
  box-sizing: border-box;
  /* padding: 100px 70px; */
  padding-left: 100px;
`

export const VideoHeader = styled.h2`
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  color: ${themeStyle.black};
  /* text-align: justify; */
`
export const VideoText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  color: ${themeStyle.gray};
`
// ##################################################       CountSection         ########################################################

export const CountSection = styled.div`
  background-color: ${themeStyle.secondaryBlueColor};
  padding: 50px;
  border-radius: ${themeStyle.biggerRradius};
`
export const CountList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  /* display: flex;
    justify-content: space-between; */
`
export const CountElement = styled.li`
  display: inline-block;
  padding: 0px 70px;
  border-right: 1px solid ${themeStyle.gray};
  &:last-child {
    border-right: none;
  }
`
export const CountLogo = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Count = styled.p``
