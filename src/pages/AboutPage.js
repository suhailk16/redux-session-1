import { useSelector } from 'react-redux'

function AboutPage() {
  const user = useSelector(function (state) {
    return {
      name: state.user.name,
      email: state.user.email,
      password: state.user.password,
    }
  })

  return <div>About {user.name}</div>
}

export default AboutPage
