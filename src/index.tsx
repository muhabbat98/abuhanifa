import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Courses from './pages/Courses'
import Subjects from './pages/Courses/Subjects'
import Free from './pages/Free'
import Homepage from './pages/Homepage'
import Lessons from './pages/Courses/Lessons'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Homepage />} />
          <Route path='/courses'>
            <Route index element={<Courses />} />
            <Route path=':subjectId'>
              <Route index element={<Subjects />} />
              <Route path=':courseId' element={<Lessons />} />
            </Route>
          </Route>
          <Route path='free' element={<Free />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
