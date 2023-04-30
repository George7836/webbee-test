import React from 'react'
import Posts from '../components/Posts'
import Profile from '../components/Profile'

export default function Activity() {
  return (
    <div className='activity'>
      <Posts/>
      <aside className='activity__aside'>
        <Profile/>
      </aside>
    </div>
  )
}
