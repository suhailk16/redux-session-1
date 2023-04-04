import { useSelector } from 'react-redux'

function ProfilePage() {
  const user = useSelector(function (state) {
    return {
      name: state.user.name,
      email: state.user.email,
      password: state.user.password,
    }
  })

  return (
    <div>
      <h1>Profile Page</h1>

      <p>Good Evening, {user.name}</p>

      <p>Your name is {user.name}</p>
      <p>Your email is {user.email}</p>
      <p>Your password is {user.password}</p>
    </div>
  )
}

export default ProfilePage
