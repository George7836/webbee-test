import React from 'react'
import { HeadHunterIcon, TelegramIcon, TwitterIcon } from '../icons'

export default function Profile() {
  return (
    <div className='profile'>
      <img src="./assets/images/avatar.png" alt="" className='profile__img'/>
      <h3 className='profile__name'>Hanna Dorman</h3>
      <span className='profile__prof'>UX/UI designer</span>
      <div className='profile__socials'>
        <a href='#' className='profile__link'>
          <TelegramIcon/>
        </a>
        <a href='#' className='profile__link'>
          <HeadHunterIcon/>
        </a>
        <a href='#' className='profile__link'>
          <TwitterIcon/>
        </a>
      </div>
    </div>
  )
}
