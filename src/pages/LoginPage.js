import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setName, setEmail, setPassword } from '../store'

function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(function (state) {
    return {
      name: state.user.name,
      email: state.user.email,
      password: state.user.password,
    }
  })

  function handleSubmit() {
    console.log('user', user)
    navigate('/')
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={user.name}
            type="text"
            placeholder="Your Full Name"
            onChange={(event) => dispatch(setName(event.target.value))}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={user.email}
            type="email"
            placeholder="Enter email"
            onChange={(event) => dispatch(setEmail(event.target.value))}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={user.password}
            type="password"
            placeholder="Password"
            onChange={(event) => dispatch(setPassword(event.target.value))}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default LoginPage
