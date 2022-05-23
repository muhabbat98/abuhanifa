import React from 'react'
import AbuHanifaSection from '../../components/AbuHanifaSection'
import Instruction from '../../components/Instruction'
import Navbar from '../../components/Navbar'
import VideoSection from '../../components/VideoSection'

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <AbuHanifaSection />
      <VideoSection />
      <Instruction />
    </>
  )
}
