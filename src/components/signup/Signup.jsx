import React, { useState } from 'react'

import { Button, Card, Col, Container, Form, FormGroup, Image, Row } from 'react-bootstrap'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [error,setError] = useState();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

   const login =(e)=>{
    e.preventDefault();
    if(email ===""){
        setError("Please Enter the email")
    }
    else if(userName===""){
        setError("Please Enter the user name")
    }
    else if(password===""){
        setError("Please enter your password")
    }
    else{
        handleSubmit();
    }
   }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Container className='my-5 '>
                <Row className='g-0 align-item-center py-5'>
                    <Col sm={9} className=' align-item-center p-lg-5' style={{ backgroundColor: "#F0F7F7 " }} >
                        <Card className="p-4">
                            <h3>Create an account for free</h3>
                            <p>{error}</p>
                            <p className="text-secondary"><small>Free forever. No payment needed.</small></p>
                            <Form onSubmit={login} >
                                <Form.Group controlId="email">
                                    <Form.Label>Your Email <span className='text-danger'> *</span></Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={handleEmail}
                                    />
                                </Form.Group>

                                <Form.Group controlId="userName">
                                    <Form.Label>Create Username <span className='text-danger'> *</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        value={userName}
                                        onChange={handleUserName}
                                        
                                    />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Password <span className='text-danger'> *</span></Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="**********"
                                        value={password}
                                        onChange={handlePassword}
                                    />
                                </Form.Group>

                                <Form.Group controlId="terms">
                                    <p className='text-secondary'><small><Form.Check label="By creating account you are aggreing to our Terms and Conditions and Privacy Policy"  /></small></p>
                                </Form.Group>
                                <div className="d-grid py-2" >
                                    <Button variant='primary' size='lg' type='submit'> SIGN UP</Button>
                                </div>
                                <a href="#" className='text-secondary'>Already have an account?</a>
                            </Form>
                        </Card>
                    </Col>
                    <Col className='bg-danger'>
                        <Image className='h-100' src='https://img.freepik.com/free-photo/security-sign-log-up-password-secret-concept_53876-133565.jpg?size=626&ext=jpg' fluid />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Signup