import { ReactNode, useState } from 'react'
import { ActivityIcon, ArrowIcon, BackButtonIcon, FriendsIcon, InvoicesIcon, MapIcon, NotesIcon, PhotosIcon, ScheduleIcon, SettingsIcon, StatIcon, TimeIcon } from './../icons'
import { NavLink } from 'react-router-dom'
import { listPages } from '../routes'

interface IListItem {
  icon: ReactNode;
  title: string;
  page: string;
}

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

export default function Navbar() {
  const [active, setActive] = useState(false)

  return (
    <header className='navbar'>
      <div className='navbar__top'>
        <div className='navbar__container'>
            <div className='navbar__back'>
              <button className='navbar__btn btn-reset'>
                <BackButtonIcon/>
              </button>
              <h2 className='navbar__titel'><span>User pages -</span> Profile</h2>
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
            <div 
              className={active ? 'nav__burger active' : 'nav__burger'}
              onClick={() => setActive(!active)}  
            >
                <span></span>
            </div>
          <div className={active ? 'nav__lists active' : 'nav__lists'}>
              <div className='nav__list'>
                {listItem.map((item) => (
                  <NavLink 
                    to={item.page} 
                    key={item.title} 
                    className="nav__item" 
                    onClick={() => setActive(false)}
                  >
                    {item.icon}
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
                  {active ? 'Settings' : <ArrowIcon/>}
                </div>
              </div>
          </div>
        </div>
      </nav>
    </header>
  )
}