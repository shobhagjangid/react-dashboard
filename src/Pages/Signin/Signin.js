import React from 'react';
import splashbg from '../../Assets/splash-bg.jpg';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';


export default function Signin() {
    return (
        <div>
            <Header />

            <div className='section-big-2'>
                <div className='box-50'>
                    <Container className='h-100' >
                        <Row className='justify-content-center align-items-center h-100'>
                            <Col lg={6}>
                                <div className='login-box'>
                                    <h2>
                                        Welcome Back
                                    </h2>
                                    <p>Enter your email and password to sign in</p>


                                    <Form className='mt-4'>
                                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                            <Form.Label>Email </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            
                                        </Form.Group>

                                        <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>
                                        <Button className='btn-form-submit mt-3 mb-3' type="submit">
                                            Submit
                                        </Button>
                                        
                                    </Form>
                                    <p className='text-center'>Don't have an account? <a href="#">Sign up</a></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>


                </div>

                <div className='box-50'>
                    <img src={splashbg} className='img-fluid' alt='splash-bg' />
                </div>

            </div>

            <Footer />
        </div>
    )
}
