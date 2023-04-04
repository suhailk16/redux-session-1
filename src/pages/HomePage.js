import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function HomePage() {
  const user = useSelector(function (state) {
    return {
      name: state.user.name,
      email: state.user.email,
    }
  })

  return (
    <div>
      Good Evening, {user.name}, {user.email}
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/contact">Contact US</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default HomePage
