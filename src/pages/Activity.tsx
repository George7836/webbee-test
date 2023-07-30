import Posts from '../components/Posts'
import Profile from '../components/Profile'
import Navigation from '../components/Navigation'
import NewPublication from '../components/NewPublication'

export default function Activity() {
  return (
    <div className='activity'>
      <Posts/>
      <aside className='activity__aside'>
        <Profile/>
        <Navigation/>
        <NewPublication/>
      </aside>
    </div>
  )
}