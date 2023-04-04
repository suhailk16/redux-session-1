import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setEmail } from '../store'

function ContactPage() {
  const user = useSelector(function (state) {
    return {
      name: state.user.name,
      email: state.user.email,
      password: state.user.password,
    }
  })

  const dispatch = useDispatch()

  function handleSubmit() {
    console.log('user', user)
  }

  return (
    <div>
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

          <FloatingLabel
            controlId="floatingTextarea"
            label="Comments"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>

          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default ContactPage
