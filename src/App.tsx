import React from 'react'
import './styles/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Activity from './pages/Activity'
import YandexMap from './pages/YandexMap'
import Timer from './pages/Timer'
import { YMaps } from '@pbe/react-yandex-maps'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='container'>
       <YMaps>
          <Routes>
            <Route path='/' element={<Activity/>}/>
            <Route path='/map' element={<YandexMap/>}/>
            <Route path='/timer' element={<Timer/>}/>
          </Routes>
       </YMaps>
      </div>
    </BrowserRouter>
  )
}
