import React from 'react'
import './styles/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Activity from './pages/Activity'
import Map from './pages/Map'
import Timer from './pages/Timer'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Activity/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/timer' element={<Timer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
