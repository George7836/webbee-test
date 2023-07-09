import './styles/main.scss'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Activity from './pages/Activity'
import Timer from './pages/Timer'
import MapContainer from './pages/MapContainer'
import { useTimer } from './hooks/useTimer'

export default function App() {
  const time = useTimer()

  return (
    <HashRouter basename='/'>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Activity/>}/>
          <Route path='/map' element={<MapContainer/>}/>
          <Route path='/timer' element={<Timer seconds={time.seconds} minutes={time.minutes} hours={time.hours}/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}