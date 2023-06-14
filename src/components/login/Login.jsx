import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Perform form submission logic here
  };

  return (
    <Container className="my-5">
      <Row className='g-0 align-item-center py-5'>
        <Col sm={6} className="mx-auto">
          <Card className="p-4">
            <h3>Create an account for free</h3>
            <p className="text-secondary"><small>Free forever. No payment needed.</small></p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Your Email <span className='text-danger'> *</span></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={handleEmail}
                  required
                />
              </Form.Group>

              <Form.Group controlId="userName">
                <Form.Label>Create Username <span className='text-danger'> *</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={handleUserName}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password <span className='text-danger'> *</span></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="**********"
                  value={password}
                  onChange={handlePassword}
                  required
                />
              </Form.Group>

              <Form.Group controlId="terms">
                <p className='text-secondary'><small><Form.Check label="By creating account you are aggreing to our Terms and Conditions and Privacy Policy" required /></small></p>
              </Form.Group>
              <div className="d-grid py-2" >
                <Button onClick={handleSubmit} variant='primary' size='lg' type='submit'> SIGN UP</Button>
              </div>
              <a href="#" className='text-secondary'>Already have an account?</a>
            </Form>
          </Card>
        </Col>
        <Col col='6' className='bg-danger'>
          <Image className='h-100' src='https://img.freepik.com/free-photo/security-sign-log-up-password-secret-concept_53876-133565.jpg?size=626&ext=jpg' fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
