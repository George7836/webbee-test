import React from 'react'
import Accordeon from './Accordeon'

export default function NewPublication() {
  return (
    <Accordeon title='Share your thoughts'>
       <div className='publication'>
            <textarea name="" placeholder='Enter your message...' className='publication__textarea'></textarea>
            <button className='publication__btn btn-reset'>Save</button>
       </div>
    </Accordeon>
  )
}
