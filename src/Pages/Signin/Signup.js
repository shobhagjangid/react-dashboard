import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    checkbox: false,
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setError(''); // Clear error when user changes input
  };

  // Validate Form
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://zenpex.in/react-dashboard/wp-json/custom/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        alert('Form submitted successfully!');
        
        // Clear Form Data
        setFormData({
          name: '',
          email: '',
          password: '',
          checkbox: false,
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to submit form.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <div className='container-fluid cover-box-signup'>
        <img src={coverbg} className='img-fluid' alt='coverbg' />
        <div className='breadcum-text'>
          <h2>Welcome!</h2>
          <p>Use these awesome forms to login or create a new account in your project for free.</p>
        </div>
      </div>

      <Container>
        <Row className='justify-content-center'>
          <Col lg={4}>
            <div className='signin-box'>
              <h3>Register with</h3>
              <ul className='register-with'>
                <li><a href='#'><FaFacebook /></a></li>
                <li><a href='#'><FaApple /></a></li>
                <li><a href='#'><FaGoogle /></a></li>
              </ul>
              <p>Or</p>

              {error && <p className="text-danger">{error}</p>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>User name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="User name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  className='btn-form-submit mt-3 mb-3'
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </Form>

              <p className='mb-0'>
               
                Already have an account? 
                <Link to='/login' style={buttonStyle}><span> Sign in</span></Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
