import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Courses from './pages/Courses'
import Free from './pages/Free'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='courses' element={<Courses />} />
        <Route path='free' element={<Free />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
