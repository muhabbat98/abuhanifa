import React from 'react'
import AbuHanifaSection from '../../components/AbuHanifaSection'
import Footer from '../../components/Footer'
import Instruction from '../../components/Instruction'
import Navbar from '../../components/Navbar'
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
