import styled from 'styled-components'
import { themeStyle } from '../../theme'

export const InstructionComponent = styled.div`
  background-color: ${themeStyle.light};
  padding: 75px 0px;
`
export const InstructionHeader = styled.h2`
  max-width: 550px;
  text-align: center;
  margin: 0 auto;
  color: ${themeStyle.secondaryBlueColor};
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
`

export const InstructionText = styled.p`
  max-width: 700px;
  text-align: center;
  margin: 18px auto;
  color: ${themeStyle.gray};
  font-weight: 400;
  font-size: ${themeStyle.instructionFontSize};
  line-height: 32px;
`
export const InstructionList = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 230px;
  position: relative;
`

export const InstructionImageContainer = styled.div`
  width: 50%;
`

export const InstructionImage = styled.img`
  max-width: 448px;
`

export const InstructionDescription = styled.div`
  padding: 50px 0px;
  width: 50%;
`

export const InstructionStepHeader = styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: ${themeStyle.secondaryBlueColor};
  letter-spacing: 0.2px;
`

export const InstructionStep = styled.span`
  color: #ffffff;
  background-color: ${themeStyle.yellow};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 6px 10px;
  border-radius: 8px;
  margin-right: 16px;
`
interface LineBreakProps {
  source: string
}
export const LineBreak = styled.div<LineBreakProps>`
  width: 444px;
  height: 160px;
  position: absolute;
  left: calc(50% - 222px);
  bottom: calc(100px - 100%);
  background: no-repeat url(${({ source }) => source});
  z-index: 5;
`
export const EndPart = styled.div`
  max-width: 460px;
  margin: 0 auto;
`
export const EndPartLogo = styled.div`
  /* max-width: 460px; */
  text-align: center;
  & svg {
    width: 64px;
    height: 64px;
    background-color: rgba(250, 173, 19, 0.1);
    border-radius: 50%;
    padding: 16px;
  }
`
