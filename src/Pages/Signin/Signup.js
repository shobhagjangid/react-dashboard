import React from 'react';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import coverbg from '../../Assets/singup-cover.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";

export default function Signup() {
  const buttonStyle = {
    color: "#4FD1C5",
    textDecoration: "none"
  };

  return (
    <>
      <Header />

      <div className='container-fluid cover-box-signup'>
        <img src={coverbg} className='img-fluid' alt='coovebg' />

        <div className='breadcum-text'>
          <h2>Welcome !</h2>
          <p>Use these awesome forms to login or create new account in your project for free.

          </p>
        </div>

      </div>


      <Container>
        <Row className='justify-content-center'>
          <Col lg={4}>
            <div className='signin-box'>
              <h3>Register with</h3>

              <ul className='register-with'>

                <li>
                  <a href=''>
                    <FaFacebook />
                  </a>
                </li>

                <li>
                  <a href=''>
                    <FaApple />
                  </a>
                </li>

                <li>
                  <a href=''>
                    <FaGoogle />
                  </a>
                </li>
              </ul>

              <p>Or</p>



              <Form>

                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="name" placeholder="First name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formGroupPassword">
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

              <p className='mb-0'>Already have an account? <a href='/login' style={buttonStyle} > <span >Sign in</span></a></p>

            </div>

          </Col>
        </Row>
      </Container>


<Footer/>

    </>
  )
}
