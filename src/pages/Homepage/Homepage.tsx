import React from 'react'
import AbuHanifaSection from '../../components/AbuHanifaSection'
import Instruction from '../../components/Instruction'
import Question from '../../components/QuestionsComponent'
import VideoSection from '../../components/VideoSection'

export const Homepage = () => {
  return (
    <>
      <AbuHanifaSection />
      <VideoSection />
      <Instruction />
      <Question />
    </>
  )
}
