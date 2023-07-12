import Post from './Post'
import Abstract from '../assets/images/abstract.jpg'

type PostsList = {
  title: string,
  content: string,
}

const posts: PostsList[] = [
  {
      title: 'Title',
      content: Abstract
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
          key={post.title} 
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  )
}