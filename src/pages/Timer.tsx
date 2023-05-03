import React, { useEffect, useState } from 'react'
import PageContainer from '../components/PageContainer'

type TimerProps = {
  seconds: number;
  minutes: number;
  hours: number;
}

export default function Timer({seconds, minutes, hours}: TimerProps) {

  return (
    <PageContainer title='Timer'>
      <div>
        <span>
          {hours >= 10 
            ? hours
            : '0' + hours
          }
        </span>:
        <span>
          {minutes >= 10 
            ? minutes
            : '0' + minutes
          }
        </span>:
        <span>
          {seconds >= 10 
            ? seconds
            : '0' + seconds
          }
        </span>
      </div>
    </PageContainer>
  )
}
