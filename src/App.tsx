import React, { useEffect, useState } from 'react'
import './styles/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Activity from './pages/Activity'
import YandexMap from './pages/YandexMap'
import Timer from './pages/Timer'
import { YMaps } from '@pbe/react-yandex-maps'

export default function App() {
  const [time, setTime] = useState(() => {
      if(sessionStorage.getItem('timer') === null) {
        sessionStorage.setItem('timer', JSON.stringify({s: 0, m: 0, h: 0}))
      } 

      return JSON.parse(sessionStorage.getItem('timer')!)
    } 
  )

  const [isCounting, setIsCounting] = useState(true)

  let updatedS = Number(time.s), 
      updatedM = Number(time.m), 
      updatedH = Number(time.h);

  const run = () => {
    if(updatedM === 59){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 59){
      updatedM++;
      updatedS = 0;
    } else {
      updatedS++;
    }
    
    return setTime({s:updatedS, m:updatedM, h:updatedH});
  }
 
  const stop = () => {
    setIsCounting(false)
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if(isCounting) run()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [isCounting])


  useEffect(() => {
    sessionStorage.setItem('timer', JSON.stringify(time))
  }, [time])

  const isVisible = () => {
    if(document.visibilityState === 'hidden') {
      stop()
    } else if(document.visibilityState === 'visible') {
      setIsCounting(true)
    }
  }

  useEffect(() => {
    window.addEventListener('visibilitychange', isVisible)

    return () => {
      window.removeEventListener('visibilitychange', isVisible)
    }
  }, [])

  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Navbar/>
      <div className='container'>
       <YMaps>
          <Routes>
            <Route path='/' element={<Activity/>}/>
            <Route path='/map' element={<YandexMap/>}/>
            <Route path='/timer' element={<Timer seconds={time.s} minutes={time.m} hours={time.h}/>}/>
            <Route path='*' element={<Activity/>}/>
          </Routes>
       </YMaps>
      </div>
    </BrowserRouter>
  )
}
