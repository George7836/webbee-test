import React, { useState } from 'react'
import Post from './Post'

type PostsList = {
  title: string,
  content: string,
}

const posts: PostsList[] = [
  {
      title: 'Title',
      content: process.env.PUBLIC_URL + '/assets/images/abstract.jpg'
  },
  {
      title: 'Sunset',
      content: 'https://i.pinimg.com/originals/00/fc/2f/00fc2f9f34fe181dc9a3af718b02c596.jpg'
  },
  {
      title: 'Morning of Siberia',
      content: 'https://photocentra.ru/images/main55/555385_main.jpg'
  },
]



export default function Posts() {

  return (
    <div className='posts'>
      {posts.map((post) => (
        <Post 
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  )
}
