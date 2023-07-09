import { useEffect, useState } from 'react'

type TimerValues = {
  seconds: number
  minutes: number
  hours: number
}

const start = Date.now()

export function useTimer() {
  const [time, setTime] = useState<TimerValues>({seconds: 0, minutes: 0, hours: 0})
  const [isCounting, setIsCounting] = useState(true)

  function addTime(curr: number) {
    time.hours = Math.floor((curr % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    time.minutes = Math.floor((curr % (1000 * 60 * 60)) / (1000 * 60))
    time.seconds = Math.floor((curr % (1000 * 60)) / 1000)
    setTime({
      ...time,
      hours: time.hours, 
      minutes: time.minutes, 
      seconds: time.seconds
    })
  }

  const isVisible = () => {
    if(document.visibilityState === 'hidden') {
      setIsCounting(false)
    } else if(document.visibilityState === 'visible') {
      setIsCounting(true)
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if(isCounting) {
        const currentTime = Date.now() - start
        addTime(currentTime)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [isCounting])

  useEffect(() => {
    window.addEventListener('visibilitychange', isVisible)

    return () => {
      window.removeEventListener('visibilitychange', isVisible)
    }
  }, [])

  return time
}