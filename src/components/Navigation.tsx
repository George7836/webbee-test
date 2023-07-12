import React from 'react'
import Accordeon from './Accordeon'
import { BalanceIcon, ConnectionsIcon, EventsIcon, FriendsLargeIcon, MyProfileIcon, SettingsLargeIcon } from '../icons';

type NavigationList = {
  logo: React.ReactElement;
  title: string;
  stat?: string;
  notification?: string;
}

const navList: NavigationList[] = [
  {
    logo: <MyProfileIcon/>,
    title: 'My profile',
  },
  {
    logo: <BalanceIcon/>,
    title: 'Balance',
    stat: '$ 1,430'
  },
  {
    logo: <ConnectionsIcon/>,
    title: 'Connections',
    notification: '29'
  },
  {
    logo: <FriendsLargeIcon/>,
    title: 'Friends',
  }
]

export default function Navigation() {
  return (
    <Accordeon title='Navigation'>
        {navList.map((item) => (
          <div className='accordeon__item'>
            <div className='accordeon__item-left'> 
                {item.logo}
                <span className='accordeon__item-title'>{item.title}</span>
            </div>
            {item.stat 
              ? <span className='accordeon__item-stat'>{item.stat}</span> 
              : null
            }
            {item.notification
              ? <div className='accordeon__item-notification'>{item.notification}</div>
              : null
            }
          </div>
        ))}
        <div className='accordeon__item accordeon__item--border'>
          <div className='accordeon__item-left'>
              <EventsIcon/>
              <span className='accordeon__item-title'>Events</span>
          </div>
          <div className='accordeon__item-notification item-notification--green'>45</div>
        </div>
        <div className='accordeon__item'>
          <div className='accordeon__item-left'>
              <SettingsLargeIcon/>
              <span className='accordeon__item-title'>Account settings</span>
          </div>
        </div>
    </Accordeon>
  )
}