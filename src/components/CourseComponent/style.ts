import styled from 'styled-components'
import { themeStyle } from '../../theme'

export const CourseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & div:nth-child(2n-1) {
    margin-right: 20px;
  }
`
export const Course = styled.div`
  width: 50%;
  background-color: #ffffff;
  padding: 24px;
  border: 1px solid rgba(126, 132, 140, 0.12);
  border-radius: ${themeStyle.borderRradius};
  position: relative;
`
export const CourseLogoContainer = styled.div`
  width: 50%;
  background-color: #ffffff;
`
export const CourseLogo = styled.img``
export const CourseButton = styled.button`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 26px;
  right: 26px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const CourseName = styled.h3`
  color: ${themeStyle.black};
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 12px;
`

export const CourseDegreeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CourseDegree = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${themeStyle.gray};
`
interface CourseProgresProps {
  progress: number
}
export const CourseProgres = styled.span<CourseProgresProps>`
  width: 110px;
  height: 4px;
  background-color: rgba(43, 195, 104, 0.15);
  mix-blend-mode: normal;
  display: block;
  margin-left: 24px;
  position: relative;
  border-radius: 1.5px;

  &::before {
    content: '';
    width: ${({ progress }) => progress + '%'};
    height: 100%;
    background-color: #2bc468;
    display: block;
    border-radius: 1.5px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &::after {
    content: '${({ progress }) => progress + '%'}';
    display: block;
    position: absolute;
    right: -50px;
    top: -6px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: ${themeStyle.gray};
  }
`

export const AdditionalInfoContainer = styled.div`
  margin-top: 28px;
`

export const AdditionalInfo = styled.div`
  display: flex;
  & div:not(:first-child) {
    margin-left: 36px;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  & > img {
    position: relative;
    right: -100%;
  }
`
export const InfoLogo = styled.span`
  width: 24px;
  height: 24px;
  background-color: ${themeStyle.grayBackground};
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 12px;
  }
`

export const InfoText = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${themeStyle.gray};
  margin-left: 8px;
`
