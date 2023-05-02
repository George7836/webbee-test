import React, { useState } from 'react'
import { ActivityIcon, ArrowIcon, BackButtonIcon, FriendsIcon, InvoicesIcon, MapIcon, NotesIcon, PhotosIcon, ScheduleIcon, SettingsIcon, StatIcon, TimeIcon } from './../icons'
import { Link, NavLink } from 'react-router-dom'

interface IListItem {
  icon: React.SVGProps<SVGSVGElement>;
  title: string;
  page: string;
}

enum listPages {
  activity = '/',
  map = '/map',
  time = '/timer'
}

export default function Navbar() {

  const listItem: IListItem[] = [
    {
      icon: <ActivityIcon/>,
      title: 'Activity',
      page: listPages.activity,
    },
    {
      icon: <MapIcon/>,
      title: 'Map',
      page: listPages.map,
    },
    {
      icon: <TimeIcon/>,
      title: 'Time',
      page: listPages.time
    }
  ]

  return (
    <header className='navbar'>
      <div className='navbar__top'>
        <div className='navbar__container'>
            <div className='navbar__back'>
              <button className='navbar__btn btn-reset'>
                <BackButtonIcon/>
              </button>
              <h2 className='navbar__titel'><span>User pages</span> - Profile</h2>
            </div>
    
            <ul className='navbar__list list-reset'>
              <li className='navbar__item'>
                <a href='#' className='navbar__link'>
                  <StatIcon/>  
                  Statistics
                </a>
              </li>
              <li className='navbar__item'>
                <a href='#' className='navbar__link'>
                  <InvoicesIcon/>
                  Invoices
                </a>
              </li>
              <li className='navbar__item'>
                <a href='#' className='navbar__link'>
                  <ScheduleIcon/>
                  Schedule
                </a>
              </li>
            </ul>
        </div>
      </div>
      <nav className='nav'>
        <div className='nav__pages'>
            <div className='nav__list'>
              {listItem.map((item) => (
                <NavLink to={item.page} key={item.title} className="nav__item">
                  <>
                    {item.icon}
                  </>
                  {item.title}
                </NavLink>
              ))}
            </div>
            <div className='nav__list'>
              <div className="nav__item">
                <NotesIcon/>
                Notes
              </div>
              <div className="nav__item">
                <FriendsIcon/>
                Friends
              </div>
              <div className="nav__item">
                <PhotosIcon/>
                Photos
              </div>
              
              <div className="nav__item">
                <SettingsIcon/>
                <ArrowIcon/>
              </div>
            </div>
        </div>
      </nav>
    </header>
  )
}
